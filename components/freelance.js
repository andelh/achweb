import React, { Component } from "react"
import styled, { keyframes } from "styled-components"
import { Highlight } from "./highlight"

const FreelanceContainer = styled.div`
  color: white;
  margin-bottom: 60px;
`

const HeadingTitle = styled.h1`
  font-size: 18px;
`

const Copy = styled.p`
  font-weight: 500;
  font-size: 18px;
`

class Freelance extends Component {
  state = {}
  render() {
    return (
      <FreelanceContainer>
        <HeadingTitle>
          What does <Highlight>freelance</Highlight> even mean?
        </HeadingTitle>
        <Copy>
          For you, this means competitive pricing and more involvement in the
          overall design and development process.
          <br />
          <br />
          For me, freelance means getting the chance to work with amazing
          clients to help bring their product to life
        </Copy>
      </FreelanceContainer>
    )
  }
}

export default Freelance
