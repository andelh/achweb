import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"
import WorkItem from "./work-item"

const Container = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const list = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  hidden: { opacity: 0 },
}

const workItem = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  hidden: { opacity: 0, y: 30, transition: { duration: 0.7 } },
}

const FeaturedWorkList = ({ projects }) => (
  <Container
    layout
    initial="hidden"
    viewport={{
      amount: 0.3,
    }}
    whileInView="visible"
    variants={list}
  >
    {projects.map((item, index) => (
      <WorkItem key={index} project={item} variants={workItem} />
    ))}
  </Container>
)

export default FeaturedWorkList
