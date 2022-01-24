import React from "react"
import styled from "styled-components"
import WorkItem from "./work-item"

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const FeaturedWorkList = ({ projects }) => (
  <Container>
    {projects.map((item, index) => (
      <WorkItem key={index} project={item} />
    ))}
  </Container>
)

export default FeaturedWorkList
