import { NextResponse } from "next/server"
import { randomUUID } from "crypto"

const SESSION_PRICES: Record<string, number> = {
  "30min": 350,
  "60min": 600,
}

export async function POST(request: Request) {
  try {
    const { sessionType, bookingRef } = await request.json()

    const amount = SESSION_PRICES[sessionType]
    if (!amount) {
      return NextResponse.json({ error: "Invalid session type" }, { status: 400 })
    }

    const powerTranzId = process.env.SPI_MERCHANT_ID
    const powerTranzPassword = process.env.SPI_SHARED_SECRET
    const apiRoot = process.env.SPI_ACTION_URL
    const pageSet = process.env.SPI_PAGE_SET
    const pageName = process.env.SPI_PAGE_NAME
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

    if (!powerTranzId || !powerTranzPassword || !apiRoot || !pageSet || !pageName || !baseUrl) {
      console.error("Missing payment config:", {
        powerTranzId: !!powerTranzId,
        powerTranzPassword: !!powerTranzPassword,
        apiRoot: !!apiRoot,
        pageSet: !!pageSet,
        pageName: !!pageName,
        baseUrl: !!baseUrl,
      })
      return NextResponse.json(
        { error: "Payment configuration missing" },
        { status: 500 }
      )
    }

    const transactionId = randomUUID()
    const orderId = bookingRef
      ? `ORD-${transactionId.slice(0, 8).toUpperCase()}-${bookingRef.slice(0, 8)}`
      : `ORD-${transactionId.slice(0, 8).toUpperCase()}`

    const salePayload = {
      TransactionIdentifier: transactionId,
      TotalAmount: amount,
      CurrencyCode: "780", // TTD
      ThreeDSecure: false,
      OrderIdentifier: orderId,
      AddressMatch: false,
      ExtendedData: {
        HostedPage: {
          PageSet: pageSet,
          PageName: pageName,
        },
        MerchantResponseUrl: `${baseUrl}/api/payment-callback`,
      },
    }

    console.log("Powertranz sale payload:", JSON.stringify(salePayload, null, 2))
    console.log("Powertranz URL:", `${apiRoot}/spi/sale`)

    const response = await fetch(`${apiRoot}/spi/sale`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "PowerTranz-PowerTranzId": powerTranzId,
        "PowerTranz-PowerTranzPassword": powerTranzPassword,
      },
      body: JSON.stringify(salePayload),
    })

    const responseText = await response.text()
    console.log("Powertranz response status:", response.status)
    console.log("Powertranz response body:", responseText)

    let data: Record<string, unknown>
    try {
      data = JSON.parse(responseText)
    } catch {
      console.error("Failed to parse Powertranz response as JSON")
      return NextResponse.json(
        { error: "Invalid response from payment provider" },
        { status: 502 }
      )
    }

    if (!response.ok) {
      return NextResponse.json(
        { error: (data.ResponseMessage as string) || "Payment initiation failed" },
        { status: 502 }
      )
    }

    if (data.IsoResponseCode !== "SP4") {
      console.error("Unexpected response code:", data.IsoResponseCode, data.ResponseMessage)
      return NextResponse.json(
        { error: data.ResponseMessage || "Payment initiation failed" },
        { status: 400 }
      )
    }

    return NextResponse.json({
      redirectData: data.RedirectData,
      spiToken: data.SpiToken,
      transactionId: data.TransactionIdentifier,
      orderId: data.OrderIdentifier,
    })
  } catch (error) {
    console.error("Create payment error:", error)
    return NextResponse.json(
      { error: "Failed to create payment" },
      { status: 500 }
    )
  }
}
