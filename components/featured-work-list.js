import React from "react"
import WorkItem from "./work-item"
import { MotionDiv } from "../app/use-clients"
import client from "../lib/sanity"
import { homeQuery } from "../lib/queries"

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

export const revalidate = 60 // revalidate every hour

export default async function FeaturedWorkList() {
  const projects = await client?.fetch(homeQuery)

  return (
    <MotionDiv
      className="flex w-full flex-row flex-wrap"
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
    </MotionDiv>
  )
}
