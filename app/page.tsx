"use client"
import React from "react"
import Heading from "../components/home/heading"
// import Freelance from "../components/freelance"
import FeaturedWork from "../components/home/featured-work"

type Props = {}

export default async function IndexPage({}: Props) {
  const projects = await (
    await fetch(`https://achweb-git-dailyuicode-andelh.vercel.app/api/home`)
  ).json()
  return (
    <>
      <Heading />
      <FeaturedWork projects={projects.data} />
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
