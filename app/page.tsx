import React, { Suspense } from "react"
import Heading from "../components/home/heading"
import FeaturedWork from "../components/home/featured-work"

type Props = {}

export default async function IndexPage({}: Props) {
  return (
    <>
      <Heading />
      <Suspense fallback={<div>Loading featured work...</div>}>
        <FeaturedWork />
      </Suspense>
    </>
  )
}
