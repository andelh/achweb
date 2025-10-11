import React from "react"
import Heading from "./home/heading"
import FeaturedWorkClient from "./home/featured-work-client"
import client from "../lib/sanity"
import { homeQuery } from "../lib/queries"

type Props = {}

export const revalidate = 60

export default async function IndexPage({}: Props) {
  const projects = await client?.fetch(homeQuery)
  return (
    <div className="font-sans">
      <Heading />
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-text mb-2">
          See My Featured Work
        </h2>
        <p className="text-text-muted mb-8 text-lg">
          A selection of my latest work, and the projects I'm most proud of.
        </p>
        <div></div>
        <FeaturedWorkClient projects={projects} />
      </div>
    </div>
  )
}
