"use client"
import { useState } from "react"
import ContactForm from "./contact-form"
import ConsultingForm from "./consulting-form"

type FormType = "project" | "consulting" | null

export default function LetsTalkPage() {
  const [activeForm, setActiveForm] = useState<FormType>(null)

  return (
    <div className="font-sans pt-10">
      <div className="mb-[40px]">
        <h1 className="mb-12 text-2xl md:text-5xl text-copy font-medium">
          Let&apos;s Talk
        </h1>
        <p className="text-text-muted mb-8 text-lg">
          Tell me what you have in mind. I&apos;ll make sure we use our time
          well.
        </p>
      </div>

      {!activeForm && (
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          <button
            onClick={() => setActiveForm("project")}
            className="group text-left p-6 rounded-[0.625rem] border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground hover:cursor-pointer transition-all"
          >
            <span className="text-xs font-medium uppercase tracking-wide text-text-muted mb-2 block">
              Build something
            </span>
            <h2 className="text-xl text-copy font-medium mb-1 leading-tighter">
              Start a project
            </h2>
            <p className="text-text-muted text-base mb-4">
              You have a website, app, or product you want to build.
            </p>
            <span className="text-primary text-base font-medium group-hover:underline">
              Tell me about your project →
            </span>
          </button>

          <button
            onClick={() => setActiveForm("consulting")}
            className="group text-left p-6 rounded-[0.625rem] border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground hover:cursor-pointer transition-all"
          >
            <span className="text-xs font-medium uppercase tracking-wider text-text-muted mb-2 block">
              Get unstuck
            </span>
            <h2 className="text-xl text-copy font-medium mb-2">Book a consulting session</h2>
            <p className="text-text-muted text-base mb-4">
              Expert eyes on a problem, a tech decision, or a strategy.
              Focused, 1-on-1, and built around your situation.
            </p>
            <span className="text-primary text-base font-medium group-hover:underline">
              See session options →
            </span>
          </button>
        </div>
      )}

      {activeForm === "project" && (
        <div>
          <button
            onClick={() => setActiveForm(null)}
            className="text-sm text-text-muted hover:text-copy mb-6 flex items-center gap-1"
          >
            ← Back to options
          </button>
          <h2 className="text-xl text-copy font-medium mb-6">Project Inquiry</h2>
          <ContactForm />
        </div>
      )}

      {activeForm === "consulting" && (
        <div>
          <button
            onClick={() => setActiveForm(null)}
            className="text-sm text-text-muted hover:text-copy mb-6 flex items-center gap-1"
          >
            ← Back to options
          </button>
          <h2 className="text-xl text-copy font-medium mb-6">Book a Consulting Session</h2>
          <ConsultingForm />
        </div>
      )}
    </div>
  )
}
