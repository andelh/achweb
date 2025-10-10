import React from "react"
import client from "../lib/sanity"
import { homeQuery } from "../lib/queries"
import FeaturedWorkClient from "./featured-work-client"

export const revalidate = 60 // revalidate every hour

export default async function FeaturedWorkList() {
  const projects = await client?.fetch(homeQuery)

  return <FeaturedWorkClient projects={projects} />
}
