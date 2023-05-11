import { NextResponse } from "next/server"
import sanityClient from "@sanity/client"
import { homeQuery } from "../../../lib/queries"

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  token:
    "skJNMoJrGs8wNm6apxFw9ApErF5B4beEmsrohv4KjLJCie4HrtCQRoSaQxyrqMa4HScFJozQpH1ynX9AH7yhj7zdg98iOKbEo0Go9CWfhxcW67YpJEjWATI1yM7j6Obxghk4oA9hxbsJ2GZlmhfj5Xf42rWSTiZdX6apOYD8az20APCpgZZX", // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
  ignoreBrowserTokenWarning: true,
})

export async function GET() {
  const pageData = await client.fetch(homeQuery)
  const rawPageData = { pageData }
  const data = rawPageData.pageData

  return NextResponse.json({ data })
}
