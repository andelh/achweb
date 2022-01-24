import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Heading from "../components/home/heading"
import PortfolioItem from "../components/portfolio-item"

//NPM

import Freelance from "../components/freelance"
import FeaturedWork from "../components/home/featured-work"
import { fetchAPI } from "../lib/api"

export default function IndexPage({ projects }) {
  // const projectsData = projects.data.map(project => project.attributes)
  // console.log({ projectsData })
  return (
    <Layout>
      <SEO
        title="Home"
        description="A web and software developer based in Trinidad and Tobago. My aim is to raise the bar in the quality of products that come out of our home soil. Contact me for work!"
      />
      <Heading />
      {/* <FeaturedWork projects={projectsData} /> */}
      <Freelance />
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  // const [projects] = await Promise.all([fetchAPI("/api/projects")])
  return {
    props: { projects: [] },
    revalidate: 1,
  }
}
