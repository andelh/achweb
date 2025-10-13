import Image from "next/image"
import React from "react"
import BlockContent from "@sanity/block-content-to-react"
import { Link } from "lucide-react"

export default function WorkItemAlt({ project, variants }) {
  return (
    <div className="bg-bg-light border border-bg-medium rounded-md p-4 py-6 flex flex-col justify-between items-start">
      <div>
        <Image
          width={50}
          height={50}
          alt="project-image"
          src={project.poster}
          className="size-12 mb-3 rounded-lg "
          style={{
            objectFit: "contain",
          }}
        />
        <p className="text-xl text-copy mb-1 font-semibold">{project.title}</p>
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
                      <h2 className="mb-2 text-xl font-bold">
                        {props.children}
                      </h2>
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
                    <p className="mb-4 text-md font-normal text-text-muted">
                      {props.children}
                    </p>
                  )
                },
              },
            }}
          />
        </div>
      </div>
      <a
        className="text-sm font-medium text-text-muted"
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="mr-1 inline-flex items-center justify-center bg-bg-light rounded-full p-2">
          <Link size={12} className="inline-block" />
        </span>{" "}
        {project.url}
      </a>
    </div>
  )
}
