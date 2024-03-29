import Image from "next/image"
import React, { Suspense } from "react"
import UIList from "./ui-list"
import client from "../../lib/sanity"
import { dailyUIQuery } from "../../lib/queries"

export default async function DailyUIPage() {
  const data = await client?.fetch(dailyUIQuery)

  return (
    <div className="mt-8 flex flex-col items-center">
      <h1 className="font-bolder mb-2 text-center">{data.title}</h1>
      <p className="text-md max-w-lg text-center">{data.body}</p>
      <div className="mb-10 flex flex-row items-center justify-center gap-3">
        <Image
          src="/youtube.svg"
          alt="youtube-icon"
          width={26}
          height={22}
          className=" m-0"
        />
        <a className="inline-block text-sm" href="">
          Find me on{" "}
          <span className="font-bold text-red-600 underline underline-offset-4">
            YouTube
          </span>
        </a>
      </div>
      <Suspense fallback={<Loading />}>
        {/* @ts-expect-error Server Component */}
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
