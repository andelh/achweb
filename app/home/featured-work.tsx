import React from "react"
import client from "../../lib/sanity"
import { homeQuery } from "../../lib/queries"
import FeaturedWorkClient from "./featured-work-client"

export const revalidate = 60

export default async function FeaturedWork() {
  const projects = await client?.fetch(homeQuery)
  return (
    <div className="mb-10">
      <h2>See My Featured Work</h2>
      <div></div>
      <FeaturedWorkClient projects={projects} />
    </div>
  )
}
