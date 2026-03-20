"use client"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import Link from "next/link"

export default function PaymentResponsePage() {
  return (
    <div className="font-sans pt-10 max-w-xl">
      <Suspense fallback={<p className="text-text-muted">Loading...</p>}>
        <PaymentResult />
      </Suspense>
    </div>
  )
}

function PaymentResult() {
  const searchParams = useSearchParams()
  const approved = searchParams.get("approved") === "true"
  const message = searchParams.get("message") || ""
  const orderId = searchParams.get("orderId") || ""
  const code = searchParams.get("code") || ""

  if (approved) {
    return (
      <div>
        <div className="mb-10">
          <p className="text-sm font-medium tracking-wide uppercase text-text-muted mb-3">
            Payment confirmed
          </p>
          <h1 className="text-3xl md:text-5xl text-copy font-medium mb-4 leading-tight">
            You&apos;re all set.
          </h1>
          <p className="text-text-muted text-lg">
            Your session is booked and paid for. Check your email for the
            calendar invite and meeting details.
          </p>
        </div>

        {orderId && (
          <div className="border-t border-input pt-6">
            <p className="text-xs text-text-muted">
              Reference: <span className="font-mono">{orderId}</span>
            </p>
          </div>
        )}

        <div className="mt-10">
          <Link
            href="/"
            className="text-primary hover:underline text-sm"
          >
            ← Back to homepage
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-10">
        <p className="text-sm font-medium tracking-wide uppercase text-destructive mb-3">
          Payment failed
        </p>
        <h1 className="text-3xl md:text-5xl text-copy font-medium mb-4 leading-tight">
          Something went wrong.
        </h1>
        <p className="text-text-muted text-lg">
          {message || "Your payment could not be processed."} No charge was made to your card.
        </p>
      </div>

      {code && code !== "00" && (
        <div className="border-t border-input pt-6">
          <p className="text-xs text-text-muted">
            Error code: <span className="font-mono">{code}</span>
          </p>
        </div>
      )}

      <div className="mt-10 flex items-center gap-6">
        <Link
          href="/lets-talk"
          className="text-primary hover:underline text-sm font-medium"
        >
          Try again
        </Link>
        <a
          href="mailto:hey@andelhusbands.xyz"
          className="text-text-muted hover:text-copy text-sm"
        >
          Contact me if this keeps happening
        </a>
      </div>
    </div>
  )
}
