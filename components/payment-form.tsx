"use client"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

interface PaymentFormProps {
  amount: number
  sessionLabel: string
  bookingRef?: string
}

export default function PaymentForm({
  amount,
  sessionLabel,
}: PaymentFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [redirectData, setRedirectData] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const initiatePayment = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const res = await fetch("/api/create-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || "Failed to initiate payment")
      }

      const data = await res.json()

      if (!data.redirectData) {
        throw new Error("No redirect data received from payment provider")
      }

      setRedirectData(data.redirectData)
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      )
    } finally {
      setIsLoading(false)
    }
  }

  if (error) {
    return (
      <div className="p-6 rounded-[0.625rem] border border-destructive/50 bg-destructive/10">
        <p className="text-destructive mb-1 font-medium">Payment couldn&apos;t be loaded</p>
        <p className="text-destructive/80 text-sm mb-4">{error}</p>
        <Button
          onClick={() => {
            setError(null)
            setRedirectData(null)
          }}
          className="mt-2"
        >
          Try Again
        </Button>
      </div>
    )
  }

  // Show the hosted payment page in an iframe
  if (redirectData) {
    return (
      <div className="rounded-[0.625rem] border border-input shadow-xs overflow-hidden">
        <div className="p-4 border-b border-input bg-background">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg text-copy font-medium">Secure your session</h3>
              <p className="text-text-muted text-sm">
                {sessionLabel} consulting — ${amount} TTD
              </p>
            </div>
            <span className="text-xs text-text-muted">Secured by Powertranz</span>
          </div>
        </div>
        <iframe
          ref={iframeRef}
          srcDoc={redirectData}
          className="w-full border-0"
          style={{ minHeight: "500px" }}
          title="Payment Form"
        />
      </div>
    )
  }

  // Initial state: show payment summary and "Pay Now" button
  return (
    <div className="p-6 rounded-[0.625rem] border border-input bg-background shadow-xs">
      <div className="mb-6">
        <p className="text-sm text-text-muted mb-1">Last step</p>
        <h3 className="text-xl text-copy font-medium mb-2">Secure your session</h3>
        <p className="text-text-muted text-sm">
          Your {sessionLabel.toLowerCase()} session is booked. Pay now to confirm it.
        </p>
      </div>

      <div className="flex items-center justify-between py-3 border-t border-b border-input mb-6">
        <span className="text-copy font-medium">{sessionLabel} consulting</span>
        <span className="text-lg font-medium text-primary">${amount} TTD</span>
      </div>

      <Button
        onClick={initiatePayment}
        disabled={isLoading}
        size="lg"
        className="w-full"
      >
        {isLoading ? (
          <>
            <Spinner className="mr-2" />
            Connecting to payment...
          </>
        ) : (
          `Pay $${amount} TTD`
        )}
      </Button>

      <p className="text-xs text-text-muted text-center mt-4">
        Card details are entered on a secure page hosted by Powertranz. I never see your card number.
      </p>
    </div>
  )
}
