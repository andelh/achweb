"use client"
import { useEffect } from "react"
import { getCalApi } from "@calcom/embed-react"
import Cal from "@calcom/embed-react"

const sessionTypes = [
  {
    value: "30min",
    label: "30 min",
    price: "$350 TTD",
    description: "Best for a specific question, gut-check, or a decision you're stuck on.",
    calLink: "andelh/book-a-consult?duration=30",
  },
  {
    value: "60min",
    label: "60 min",
    price: "$600 TTD",
    description: "Best for audits, architecture reviews, product strategy, or getting unstuck on something bigger.",
    calLink: "andelh/book-a-consult?duration=60",
  },
]

export default function ConsultingForm() {
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
    })()
  }, [])

  return (
    <div className="max-w-2xl">
      <Cal
        calLink="andelh/book-a-consult?duration=30"
        style={{ display: "none" }}
      />
      <p className="text-text-muted mb-6">
        Choose the session length that fits your needs. Payment is collected at
        checkout.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        {sessionTypes.map((session) => (
          <button
            key={session.value}
            data-cal-link={session.calLink}
            data-cal-config='{"layout":"month_view"}'
            className="p-6 rounded-[0.625rem] border border-input bg-background shadow-xs hover:border-primary hover:cursor-pointer transition-all text-left"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-medium text-copy text-lg">{session.label}</span>
              <span className="text-sm font-medium text-primary">{session.price}</span>
            </div>
            <p className="text-sm text-text-muted">{session.description}</p>
          </button>
        ))}
      </div>
    </div>
  )
}
