import React from "react"
import styled from "styled-components"

import Navbar from "./navbar"
import Footer from "./footer"
if (typeof window !== "undefined") {
  require("pace-progressbar")
  require("pace-progressbar/themes/blue/pace-theme-minimal.css")
}

const Main = styled.main`
  padding: 100px 10% 5% 10%;
  max-width: 1100px;
  margin: 0 auto;
`
export default function Layout({ children, noFooter }) {
  return (
    <>
      <Navbar />
      <Main>{children}</Main>
      {!noFooter && <Footer />}
    </>
  )
}
