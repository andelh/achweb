"use client"
import { MDXRemote } from "next-mdx-remote"
import MySyntaxHighlighter from "./syntax-highlighter"
import { cn } from "../../../lib/utils"
import Image from "next/image"

const components = {
  h1: ({ className, ...props }) => (
    <h1 {...props} className={cn("mb-4 mt-16 text-[48px] ", className)}>
      {props.children}
    </h1>
  ),
  h2: ({ className, ...props }) => (
    <h2 {...props} className={cn("mb-4 mt-16 text-4xl ", className)}>
      {props.children}
    </h2>
  ),
  h3: ({ className, ...props }) => (
    <h3
      {...props}
      className={cn("mb-4 mt-16 text-3xl  [&>code]:text-[24px]", className)}
    >
      {props.children}
    </h3>
  ),
  p: ({ className, ...props }) => (
    <p
      {...props}
      className={cn(
        "mb-6 text-[18px] font-normal leading-normal text-copy opacity-95 md:text-[17px] md:text-[20px] [&>code]:text-[17px] [&>em]:italic [&>em]:leading-normal [&>strong]:font-semibold",
        className
      )}
    >
      {props.children}
    </p>
  ),

  code: props => (
    <code className="mx-1 my-0 rounded-sm bg-stone-200 px-1 py-1 text-[16px]">
      {props.code}
    </code>
  ),
  ul: ({ className, ...props }) => (
    <ul {...props} className={cn("ml-10 list-disc", className)}>
      {props.children}
    </ul>
  ),
  ol: ({ className, ...props }) => (
    <ol {...props} className={cn("ml-10 list-decimal", className)}>
      {props.children}
    </ol>
  ),
  li: ({ className, ...props }) => (
    <li
      {...props}
      className={cn(
        "mb-2 text-[17px] font-normal leading-normal text-copy opacity-90 md:text-[20px]",
        className
      )}
    >
      {props.children}
    </li>
  ),
  a: ({ className, ...props }) => (
    <a {...props} className={cn("text-primary underline", className)}>
      {props.children}
    </a>
  ),
  strong: ({ className, ...props }) => (
    <strong {...props} className={cn("font-medium ", className)}>
      {props.children}
    </strong>
  ),
  h4: ({ className, ...props }) => (
    <h4 {...props} className={cn("mb-4 mt-16 text-[24px] ", className)}>
      {props.children}
    </h4>
  ),
  h5: ({ className, ...props }) => (
    <h5 {...props} className={cn("mb-4 mt-16 text-[20px] ", className)}>
      {props.children}
    </h5>
  ),
  h6: ({ className, ...props }) => (
    <h6 {...props} className={cn("mb-4 mt-16 text-[19px]  ", className)}>
      {props.children}
    </h6>
  ),
  img: props => (
    <div className="relative w-full aspect-[1200/630] mb-4 overflow-hidden">
      <Image {...props} className="object-contain rounded-lg"  alt={props.alt} placeholder="blur" blurDataURL={props.src}  fill />
    </div>
  ),
  blockquote: props => (
    <blockquote className="ml-4 border-l-2 border-dashed border-secondary pl-4 italic text-secondary opacity-90 md:ml-5 md:pl-6 [&>p]:text-[17px] [&>p]:font-normal">
      {props.children}
    </blockquote>
  ),
}

export default function MyMDXRemote(props) {
  return (
    <MDXRemote
      {...props}
      components={{
        // Button,
        SyntaxHighlighter: MySyntaxHighlighter,
        ...components,
      }}
    >
      {props.children}
    </MDXRemote>
  )
}
