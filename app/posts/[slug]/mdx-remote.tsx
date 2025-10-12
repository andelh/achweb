"use client"
import { MDXRemote } from "next-mdx-remote"
import MySyntaxHighlighter from "./syntax-highlighter"

const components = {
  h1: props => <h1 className="mb-4 mt-16 text-[48px] ">{props.children}</h1>,
  h2: props => <h2 className="mb-4 mt-16 text-4xl ">{props.children}</h2>,
  h3: props => (
    <h3 className="mb-4 mt-16 text-3xl  [&>code]:text-[24px]">
      {props.children}
    </h3>
  ),
  p: props => (
    <p className="mb-6 text-[18px] font-normal leading-normal text-copy opacity-95 md:text-[17px] md:text-[20px] [&>code]:text-[17px] [&>em]:italic [&>em]:leading-normal [&>strong]:font-semibold">
      {props.children}
    </p>
  ),

  code: props => (
    <code className="mx-1 my-0 rounded-sm bg-stone-200 px-1 py-1 text-[16px]">
      {props.code}
    </code>
  ),
  ul: props => <ul className="ml-10 list-disc">{props.children}</ul>,
  ol: props => <ol className="ml-10 list-decimal">{props.children}</ol>,
  li: props => (
    <li className="mb-2 text-[17px] font-normal leading-normal text-copy opacity-90 md:text-[20px]">
      {props.children}
    </li>
  ),
  a: props => (
    <a className="text-primary underline" href={props.href}>
      {props.children}
    </a>
  ),
  strong: props => <strong className="font-medium ">{props.children}</strong>,
  h4: props => <h4 className="mb-4 mt-16 text-[24px] ">{props.children}</h4>,
  h5: props => <h5 className="mb-4 mt-16 text-[20px] ">{props.children}</h5>,
  h6: props => <h6 className="mb-4 mt-16 text-[19px]  ">{props.children}</h6>,
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
