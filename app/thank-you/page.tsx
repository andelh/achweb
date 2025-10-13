"use client"
import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ThankYouPage() {
  return (
    <>
      <div className="font-sans  max-w-[1100px] px-[30px] py-20 text-center">
        <h1 className="font-semibold text-copy mx-auto text-4xl">
          Thanks for getting in touch!
        </h1>
        <p className="text-text-muted mx-auto my-8 max-w-[450px] text-xl leading-normal opacity-90">
          I will be reviewing your project details and getting in touch with you
          very soon!
        </p>
        <Button asChild size="lg" variant="default">
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </>
  )
}
