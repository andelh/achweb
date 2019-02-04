import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Heading from "../components/heading";
import PortfolioItem from "../components/portfolio-item";

import projects from '../projects.json'

const IndexPage = () => (
  <Layout>
    <Heading />
    {
      projects.projects.map(project=>(
        <PortfolioItem 
          title={project.title}
          copy={project.copy}
          color={project.company}
          projectUrl={project.projectUrl}
          url={project.logoUrl}
        />
      ))
    }
  </Layout>
)

export default IndexPage