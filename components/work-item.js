import React from "react"
import styled from "styled-components"

const Container = styled.a`
  flex: 1;
  width: 100%;
  flex-basis: 46%;
  height: 100px;
  background: ${props => props.bg};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  box-shadow: 0 9px 20px rgba(0, 0, 0, 0.39);
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (min-width: 550px) {
    height: 180px;
    flex-basis: 30%;
  }

  @media (min-width: 1000px) {
    height: 200px;
    flex-basis: 23%;
  }
`
const Logo = styled.img`
  width: 50%;
  margin: 0;
  height: 100%;
  max-width: 120px;
  object-fit: contain;
`

const WorkItem = ({ project }) => (
  <Container target="_blank" href={project.name} bg={project.hex}>
    {/* <Logo src={project.logo.source_url} /> */}
  </Container>
)

export default WorkItem
