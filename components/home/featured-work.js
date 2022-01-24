import React from "react"
import styled from "styled-components"
import FeaturedWorkList from "../featured-work-list"

const Container = styled.div`
  margin-bottom: 40px;
`
const Title = styled.h2``
const Categories = styled.div``

const FeaturedWork = ({ projects }) => {
  return (
    <Container>
      <Title>See My Work</Title>
      <Categories></Categories>
      <FeaturedWorkList projects={projects} />
    </Container>
  )
}

export default FeaturedWork
