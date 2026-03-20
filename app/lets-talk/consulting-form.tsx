"use client"
import { useEffect, useState } from "react"
import { getCalApi } from "@calcom/embed-react"
import Cal from "@calcom/embed-react"
import PaymentForm from "@/components/payment-form"

const sessionTypes = [
  {
    value: "30min",
    label: "30 minutes",
    price: 350,
    description: "A specific question, a gut-check, or a decision you need to talk through.",
    calLink: "andelh/book-a-consult?duration=30",
  },
  {
    value: "60min",
    label: "60 minutes",
    price: 600,
    description: "Architecture reviews, product strategy, or working through something bigger together.",
    recommended: true,
    calLink: "andelh/book-a-consult?duration=60",
  },
]

type FormState = "select" | "book" | "pay"

export default function ConsultingForm() {
  const [formState, setFormState] = useState<FormState>("select")
  const [selectedSession, setSelectedSession] = useState<(typeof sessionTypes)[0] | null>(null)
  const [bookingRef, setBookingRef] = useState<string>("")

  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi()
      cal("ui", {
        cssVarsPerTheme: {
          light: { calBrand: "#000000" },
          dark: { calBrand: "#29348F" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      })

      cal("on", {
        action: "bookingSuccessfulV2",
        callback: (e: CustomEvent) => {
          const data = e.detail?.data
          const ref = data?.uid
          if (ref) {
            setBookingRef(ref)
            setFormState("pay")
          }
        },
      })
    })()
  }, [])

  const handleSessionSelect = (session: (typeof sessionTypes)[0]) => {
    setSelectedSession(session)
    setFormState("book")
  }

  const handleBack = () => {
    if (formState === "pay") {
      setFormState("select")
      setSelectedSession(null)
      setBookingRef("")
    } else {
      setFormState("select")
      setSelectedSession(null)
    }
  }

  return (
    <div className="max-w-2xl">
      {formState === "select" && (
        <>
          <p className="text-text-muted mb-6">
            Pick the session length that fits what you need. You&apos;ll choose a time, then pay to confirm.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {sessionTypes.map((session) => (
              <button
                key={session.value}
                onClick={() => handleSessionSelect(session)}
                className={`p-6 rounded-[0.625rem] border bg-background shadow-xs hover:border-primary hover:cursor-pointer transition-all text-left ${
                  "recommended" in session && session.recommended
                    ? "border-primary/50"
                    : "border-input"
                }`}
              >
                {"recommended" in session && session.recommended && (
                  <span className="text-xs font-medium text-primary mb-2 block">
                    Most popular
                  </span>
                )}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-copy text-lg">{session.label}</span>
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-2 rounded-full py-1">
                    ${session.price} TTD
                  </span>
                </div>
                <p className="text-base text-text-muted">{session.description}</p>
              </button>
            ))}
          </div>

          {process.env.NODE_ENV === "development" && (
            <button
              onClick={() => {
                setSelectedSession(sessionTypes[0])
                setBookingRef("TEST-" + Date.now())
                setFormState("pay")
              }}
              className="mt-6 text-xs text-text-muted hover:text-primary underline hover:cursor-pointer"
            >
              [TEST] Skip to payment
            </button>
          )}
        </>
      )}

      {formState === "book" && selectedSession && (
        <>
          <button
            onClick={handleBack}
            className="text-sm text-text-muted hover:text-copy mb-6 flex items-center gap-1 hover:cursor-pointer"
          >
            ← Back to session options
          </button>
          <div className="mb-4 p-4 rounded-[0.625rem] border border-primary/30 bg-primary/5">
            <div className="flex items-center justify-between">
              <span className="font-medium text-copy">{selectedSession.label}</span>
              <span className="text-sm font-semibold text-primary bg-primary/10 px-2 rounded-full py-1">
                ${selectedSession.price} TTD
              </span>
            </div>
          </div>
          <Cal
            calLink={selectedSession.calLink}
            config={{
              layout: "month_view",
            }}
            style={{ width: "100%", height: "100%", marginTop: "16px" }}
          />
        </>
      )}

      {formState === "pay" && selectedSession && (
        <>
          <button
            onClick={handleBack}
            className="text-sm text-text-muted hover:text-copy mb-6 flex items-center gap-1 hover:cursor-pointer"
          >
            ← Back
          </button>
          <PaymentForm
            amount={selectedSession.price}
            sessionLabel={selectedSession.label}
            bookingRef={bookingRef}
          />
        </>
      )}
    </div>
  )
}
