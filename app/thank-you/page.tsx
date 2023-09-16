"use client"
import React, { useEffect } from "react"
import Link from "next/link"
import MainButton from "../../components/main-button"
import { useSplitter } from "splitter-gg/client"

export default function ThankYouPage() {
  const { trackConversion } = useSplitter()

  useEffect(() => {
    trackConversion("booking-experiment")
  }, [])
  return (
    <>
      <div className="min-h-screen max-w-[1100px] px-[30px] py-[100px] text-center">
        <h1 className="font-bolder mx-auto mb-[30px] text-5xl">
          Thanks for getting in touch!
        </h1>
        <p className="mx-auto my-10 max-w-[450px] text-xl leading-normal opacity-90">
          I will be reviewing your project details and getting in touch with you
          very soon!
        </p>
        <Link href="/">
          <MainButton title="Go Home" />
        </Link>
      </div>
    </>
  )
}
