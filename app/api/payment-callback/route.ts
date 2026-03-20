import { NextResponse } from "next/server"

/**
 * MerchantResponseUrl callback — receives POST from Powertranz via the iframe
 * after the customer submits their card details on the hosted payment page.
 *
 * Flow:
 * 1. Parse the response (IsoResponseCode "HP0" = card data collected)
 * 2. Call /api/spi/payment with the SpiToken to complete the transaction
 * 3. Return HTML that redirects the parent window out of the iframe to the result page
 */
export async function POST(request: Request) {
  let spiToken = ""
  let approved = false
  let responseMessage = ""
  let isoResponseCode = ""
  let transactionId = ""
  let orderId = ""

  try {
    // Powertranz may POST as JSON or form-encoded depending on config
    const contentType = request.headers.get("content-type") || ""
    let callbackData: Record<string, unknown>

    if (contentType.includes("application/json")) {
      callbackData = await request.json()
    } else {
      // Form-encoded: parse and try to extract JSON from the fields
      const formData = await request.formData()
      // The response might be in a single field or spread across fields
      const responseField = formData.get("Response") || formData.get("response")
      if (responseField && typeof responseField === "string") {
        try {
          callbackData = JSON.parse(responseField)
        } catch {
          // Treat form fields as the data directly
          callbackData = Object.fromEntries(formData.entries()) as Record<string, unknown>
        }
      } else {
        callbackData = Object.fromEntries(formData.entries()) as Record<string, unknown>
      }
    }

    console.log("Payment callback received:", JSON.stringify(callbackData, null, 2))

    spiToken = (callbackData.SpiToken as string) || ""
    isoResponseCode = (callbackData.IsoResponseCode as string) || ""
    transactionId = (callbackData.TransactionIdentifier as string) || ""
    orderId = (callbackData.OrderIdentifier as string) || ""

    // HP0 means HPP preprocessing complete — card data was collected
    if (isoResponseCode !== "HP0" || !spiToken) {
      console.error("Callback did not return HP0:", isoResponseCode, callbackData)
      return createRedirectResponse(false, "Payment was not completed", orderId)
    }

    // Step 2: Complete the payment by calling /api/spi/payment with the SpiToken
    const apiRoot = process.env.SPI_ACTION_URL
    if (!apiRoot) {
      console.error("SPI_ACTION_URL not configured")
      return createRedirectResponse(false, "Payment configuration error", orderId)
    }

    // Per docs: payment endpoint does NOT require PowerTranz auth headers
    // Body is just the SpiToken string in quotes
    const paymentResponse = await fetch(`${apiRoot}/spi/payment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(spiToken),
    })

    if (!paymentResponse.ok) {
      const errorText = await paymentResponse.text()
      console.error("Payment completion failed:", paymentResponse.status, errorText)
      return createRedirectResponse(false, "Payment processing failed", orderId)
    }

    const paymentResult = await paymentResponse.json()
    console.log("Payment result:", JSON.stringify(paymentResult, null, 2))

    approved = paymentResult.Approved === true
    responseMessage = paymentResult.ResponseMessage || ""
    isoResponseCode = paymentResult.IsoResponseCode || ""
    transactionId = paymentResult.TransactionIdentifier || transactionId

    return createRedirectResponse(
      approved,
      responseMessage,
      orderId,
      transactionId,
      isoResponseCode
    )
  } catch (error) {
    console.error("Payment callback error:", error)
    return createRedirectResponse(false, "An error occurred processing your payment", orderId)
  }
}

function createRedirectResponse(
  approved: boolean,
  message: string,
  orderId: string,
  transactionId?: string,
  isoResponseCode?: string
): NextResponse {
  const params = new URLSearchParams({
    approved: String(approved),
    message,
    orderId,
    ...(transactionId && { transactionId }),
    ...(isoResponseCode && { code: isoResponseCode }),
  })

  const resultUrl = `/payment/response?${params.toString()}`

  // Return HTML that breaks out of the iframe by redirecting the parent window
  const html = `<!DOCTYPE html>
<html>
<head><title>Processing...</title></head>
<body>
<script>
window.onload = function() {
  window.parent.location = '${resultUrl}';
};
</script>
<p>Processing payment, please wait...</p>
</body>
</html>`

  return new NextResponse(html, {
    status: 200,
    headers: { "Content-Type": "text/html" },
  })
}
