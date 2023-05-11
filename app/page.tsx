"use client"
import React from "react"
import Heading from "../components/home/heading"
// import Freelance from "../components/freelance"
import FeaturedWork from "../components/home/featured-work"
import { getWebsiteRootUrl } from "../lib/utils"

type Props = {}

// const getProjects = async () => {
//   const pageData = await client.fetch(homeQuery)
//   const rawPageData = { pageData }
//   const data = rawPageData.pageData
//   return data
// }

const getProjects = async () => {
  const pageData = await fetch("http://localhost:3000/api/home")
  const data = { pageData }
  console.log({ pageData })
  return data.pageData
}

export default async function IndexPage({}: Props) {
  // const projects = await (
  //   await fetch(
  //     `${
  //       process.env.VERCEL_URL
  //         ? `https://${process.env.VERCEL_URL}`
  //         : "http://localhost:3000"
  //     }/api/home`
  //   )
  // ).json()
  return (
    <>
      <Heading />
      {/* <FeaturedWork projects={projects.data} /> */}
      {/* <Freelance /> */}
    </>
  )
}

// export async function getStaticProps() {
//   const pageData = await client.fetch(homeQuery)
//   const data = { pageData }

//   return {
//     props: {
//       data,
//     },
//     revalidate: 1,
//   }
// }

// export default function IndexPage({ data }) {
//   const projects = data.pageData
//   return (
//     <Layout>
//       <SEO
//         title="Home"
//         description="A web and software developer based in Trinidad and Tobago. My aim is to raise the bar in the quality of products that come out of our home soil. Contact me for work!"
//       />
//       <Heading />
//       <FeaturedWork projects={projects} />
//       <Freelance />
//     </Layout>
//   )
// }
