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
    <>
      <Heading />
      <div className="mb-10">
        <h2>See My Featured Work</h2>
        <div></div>
        <FeaturedWorkClient projects={projects} />
      </div>
    </>
  )
}
