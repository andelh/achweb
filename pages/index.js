import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Heading from "../components/home/heading"
import PortfolioItem from "../components/portfolio-item"

//NPM

import Freelance from "../components/freelance"
import FeaturedWork from "../components/home/featured-work"
import { fetchAPI } from "../lib/api"
import client from "../lib/sanity"

const homeQuery = `*\[_type == "project"\] | order(releaseDate desc) {
  title,
  url,
  slug,
  overview,
  releaseDate,
  "poster": poster.asset->url

}`

export async function getStaticProps() {
  const pageData = await client.fetch(homeQuery)
  const data = { pageData }

  return {
    props: {
      data,
    },
    revalidate: 1,
  }
}

export default function IndexPage({ data }) {
  console.log({ data })
  const projects = data.pageData
  // const projectsData = projects.data.map(project => project.attributes)
  // console.log({ projectsData })
  return (
    <Layout>
      <SEO
        title="Home"
        description="A web and software developer based in Trinidad and Tobago. My aim is to raise the bar in the quality of products that come out of our home soil. Contact me for work!"
      />
      <Heading />
      <FeaturedWork projects={projects} />
      <Freelance />
    </Layout>
  )
}
