import { motion } from "framer-motion"
import Image from "next/image"
import React from "react"

const WorkItem = ({ project, variants }) => (
  <motion.a
    className={`relative m-1 flex h-[100px] w-full flex-1 basis-[46%] items-center justify-center rounded-md border border-white border-opacity-10 shadow-sm md:h-[180px] md:basis-[30%] lg:h-[200px] lg:basis-[23%]`}
    style={{ backgroundColor: project.backgroundHex ?? "#000" }}
    target="_blank"
    href={project.url}
    variants={variants}
    whileHover={{ scale: 1.02 }}
    transition={{ ease: [0.33, 1, 0.68, 1] }}
    whileTap={{ scale: 0.95 }}
    bg={project.backgroundHex ?? "#000"}
  >
    <div className="absolute m-0 h-full w-1/2 max-w-[120px]">
      <Image
        style={{ objectFit: "contain" }}
        fill
        alt="project-image"
        src={project.poster}
      />
    </div>
  </motion.a>
)

export default WorkItem
