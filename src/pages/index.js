import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Heading from "../components/heading";
import PortfolioItem from "../components/portfolio-item";

//NPM
import styled from 'styled-components'

import projects from '../projects.json'
import Footer from "../components/footer";

const Portfolios = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: row wrap;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Andel Husbands | Online Portfolio" description="A web and software developer based in Trinidad and Tobago. My aim is to raise the bar in the quality of products that come out of our home soil. Contact me for work!" keywords={[`andel`,`husbands`,`developer`,`web`,`software`,`trinidad`,`tobago`,`wheredpump`,`yuplife`,`designer`,`react`,`javascript`,`swift`,`xcode`,`portfolio`,`projects`,`hire`]}/>
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
    <Footer />
  </Layout> 
)

export default IndexPage