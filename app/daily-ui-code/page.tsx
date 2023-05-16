import Image from "next/image"
import React from "react"
import UIList from "./ui-list"

export default async function DailyUIPage() {
  return (
    <div className="mt-8 flex flex-col items-center">
      <h1 className="font-bolder mb-2 text-center">#DailyUICode</h1>
      <p className="text-md max-w-lg text-center">
        Follow along with me as I practice and express learnings through the
        coding of various UI screens.
      </p>
      <div className="mb-10 flex flex-row items-center justify-center gap-3">
        <Image src="/youtube.svg" alt="youtube-icon" width={26} height={22} />
        <p className="text-sm">
          Find me on{" "}
          <span className="font-bold text-red-600 underline underline-offset-4">
            YouTube
          </span>
        </p>
      </div>
      <UIList />
    </div>
  )
}
