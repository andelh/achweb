import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Heading from "../components/heading";
import PortfolioItem from "../components/portfolio-item";

//NPM
import styled from 'styled-components'

import projects from '../projects.json'

const Portfolios = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: row wrap;
`

const IndexPage = () => (
  <Layout>
    <Heading />
    <Portfolios>
      {
        projects.projects.map(project => (
          <PortfolioItem
            title={project.title}
            copy={project.copy}
            color={project.company}
            projectUrl={project.projectUrl}
            url={project.logoUrl}
          />
        ))
      }
    </Portfolios>

  </Layout>
)

export default IndexPage