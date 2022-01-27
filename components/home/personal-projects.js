import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import styled from "styled-components"

const Container = styled.div``
const Title = styled.h2``
const Description = styled.p``
const ProjectsContainer = styled.div``
const ScrollableProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, 60px));
  width: 100%;
  gap: 20px;
  margin-bottom: 30px;
`
const Icon = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 3px;
  margin: 0;
  object-fit: cover;
`
const Project = styled(motion.div)``
const Name = styled.h3`
  margin-bottom: 10px;
  font-size: 20px;
`
const AnchorLink = styled.a`
  margin-bottom: 10px;
  display: block;
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
`

const ProjectDescription = styled.p``
const Screenshots = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(46%, 1fr));
  width: 100%;
  gap: 20px;
  margin-bottom: 30px;
`
const Screenshot = styled.img`
  height: 100%;
`
export default function PersonalProjects({ data }) {
  console.log({ data })
  const projects = data.projects
  const [selectedIndex, setSelectedIndex] = useState(0)
  return (
    <Container id="personal-projects">
      <Title>{data.title}</Title>
      <Description>{data.description}</Description>
      <ProjectsContainer>
        <ScrollableProjects>
          {projects.map((project, index) => (
            <Link href="/#personal-projects">
              <Icon
                onClick={() => setSelectedIndex(index)}
                key={index}
                src={project.image}
                selected={index === selectedIndex}
              />
            </Link>
          ))}
        </ScrollableProjects>
        <AnimatePresence exitBeforeEnter>
          <Project
            key={selectedIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Name>{projects[selectedIndex].title}</Name>
            <AnchorLink href={projects[selectedIndex].url}>
              View project
            </AnchorLink>
            <ProjectDescription>
              {projects[selectedIndex].description}
            </ProjectDescription>
            <Screenshots>
              {projects[selectedIndex]?.screenshots?.map(
                (screenshot, index) => (
                  <Screenshot key={index} src={screenshot.url} />
                )
              )}
            </Screenshots>
          </Project>
        </AnimatePresence>
      </ProjectsContainer>
    </Container>
  )
}
