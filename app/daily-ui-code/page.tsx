import Image from "next/image"
import React, { Suspense } from "react"
import UIList from "./ui-list"
import { getDailyUIItems } from "../../lib/sanity-utils"

export default async function DailyUIPage() {
  const data = await getDailyUIItems()
  return (
    <div className="mt-8 flex flex-col items-center">
      <h1 className="font-bolder mb-2 text-center">{data.title}</h1>
      <p className="text-md max-w-lg text-center">{data.body}</p>
      <div className="mb-10 flex flex-row items-center justify-center gap-3">
        <Image src="/youtube.svg" alt="youtube-icon" width={26} height={22} />
        <p className="text-sm">
          Find me on{" "}
          <span className="font-bold text-red-600 underline underline-offset-4">
            YouTube
          </span>
        </p>
      </div>
      <Suspense fallback={<Loading />}>
        <UIList />
      </Suspense>
    </div>
  )
}

const Loading = () => {
  return (
    <div className="grid w-full grid-cols-2 gap-3 ">
      <div className="aspect-video w-full rounded-lg bg-slate-700"></div>
      <div className="aspect-video w-full rounded-lg bg-slate-700"></div>
      <div className="aspect-video w-full rounded-lg bg-slate-700"></div>
      <div className="aspect-video w-full rounded-lg bg-slate-700"></div>
    </div>
  )
}
