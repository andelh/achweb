import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Heading from "../components/heading";
import PortfolioItem from "../components/portfolio-item";

const IndexPage = () => (
  <Layout>
    <Heading />
    <PortfolioItem title="Mobile App & Website" copy="WhereDPump is a technology company that facilitates users through a mobile app, allowing them to see all upcoming events and take actions such as purchasing tickets and getting listed for clubs." color="wdp" url="https://www.wheredpump.com/img/assets/logos/logo_color.png" />
    <PortfolioItem color="yup" url="https://yuplifett.com/static/media/logo.67146cf6.png" />
    <PortfolioItem color="cmj" url="https://pensive-agnesi-079a44.netlify.com/static/logo-6f0ba42129ed8246738dcd9f47ab46cd.png" />
    <PortfolioItem color="mei" url="https://andelhusbands.herokuapp.com/static/media/mei-logo.70c5d366.png" />
    <PortfolioItem color="foodie" url="https://andelhusbands.herokuapp.com/static/media/logocolor.98f2be24.png" />
  </Layout>
)

export default IndexPage