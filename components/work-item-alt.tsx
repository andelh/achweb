import Image from "next/image"
import React from "react"
import { MotionA } from "../app/use-clients"
import BlockContent from "@sanity/block-content-to-react"
import { FaLink } from "react-icons/fa"

export default function WorkItemAlt({ project, variants }) {
  return (
    <div className="rounded-lg border border-neutral-800 p-4">
      <Image
        width={50}
        height={50}
        alt="project-image"
        src={project.poster}
        className="size-12 mb-3 rounded-lg "
        style={{
          objectFit: "contain",
          // backgroundColor: project.backgroundHex ?? "#000",
        }}
      />
      <p className="text-md mb-1 font-semibold">{project.title}</p>
      <div className="prose prose-sm">
        <BlockContent
          blocks={project.overview}
          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
          dataset="production"
          serializers={{
            types: {
              block: props => {
                const style = props.node.style || "normal"

                if (style === "h1") {
                  return (
                    <h1 className="mb-2 text-2xl font-bold">
                      {props.children}
                    </h1>
                  )
                }
                if (style === "h2") {
                  return (
                    <h2 className="mb-2 text-xl font-bold">{props.children}</h2>
                  )
                }
                if (style === "h3") {
                  return (
                    <h3 className="mb-2 text-lg font-semibold">
                      {props.children}
                    </h3>
                  )
                }

                return (
                  <p className="mb-2 text-sm font-normal text-white opacity-80">
                    {props.children}
                  </p>
                )
              },
            },
          }}
        />
      </div>
      <a
        className="text-sm font-medium text-neutral-400"
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLink className="mr-1 inline-block" /> {project.url}
      </a>
    </div>
  )
}

// const WorkItemAlt = ({ project, variants }) => (
//   <MotionA
//     className={`relative m-1 flex h-[100px] w-full flex-1 basis-[46%] items-center justify-center rounded-md border border-white border-opacity-10 shadow-sm md:h-[180px] md:basis-[30%] lg:h-[200px] lg:basis-[23%]`}
//     style={{ backgroundColor: project.backgroundHex ?? "#000" }}
//     target="_blank"
//     href={project.url}
//     variants={variants}
//     whileHover={{ scale: 1.02 }}
//     transition={{ ease: [0.33, 1, 0.68, 1] }}
//     whileTap={{ scale: 0.95 }}
//   >
//     <div className="absolute m-0 h-full w-1/2 max-w-[120px]">
//       <Image
//         style={{ objectFit: "contain" }}
//         fill
//         alt="project-image"
//         src={project.poster}
//       />
//     </div>
//   </MotionA>
// )
