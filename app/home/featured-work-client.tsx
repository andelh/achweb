"use client"
import React from "react"
import { MotionDiv } from "../use-clients"
import WorkItemAlt from "../../components/work-item-alt"

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

interface FeaturedWorkClientProps {
  projects: any[]
}

export default function FeaturedWorkClient({ projects }: FeaturedWorkClientProps) {
  return (
    <MotionDiv
      className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
      layout
      initial="hidden"
      whileInView="visible"
      variants={list}
    >
      {projects.map((item, index) => (
        <WorkItemAlt key={index} project={item} variants={workItem} />
      ))}
    </MotionDiv>
  )
}
