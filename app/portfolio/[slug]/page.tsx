import Link from "next/link"
import { MotionDiv, MotionH1, MotionNav } from "../../use-clients"
import client from "../../../lib/sanity"
import { portfolioPostQuery } from "../../../lib/queries"
import { PortableText } from "@portabletext/react"
import urlBuilder from "@sanity/image-url"
import { getImageDimensions } from "@sanity/asset-utils"
import { Lumiflex, Tranquiluxe, Zenitho, Novatrix, Velustro } from "uvcanvas"
import { ExternalLink } from "lucide-react"
import { Metadata } from "next"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = params.slug

  // fetch data
  const project = await client?.fetch(portfolioPostQuery, {
    slug: slug,
  })

  return {
    title: project.title + ` | Andel Husbands`,
  }
}

const BreadCrumbs = ({ title }) => {
  return (
    <MotionNav
      initial={{ scale: 0.98, y: 20, opacity: 0 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        delay: 0.2,
        duration: 0.6,
        ease: [0.6, 0.01, -0.05, 0.9],
      }}
      className="mb-16 flex w-fit items-center rounded-lg border border-slate-800 bg-stone-950 px-5 py-3 text-gray-700"
      aria-label="Breadcrumb"
    >
      <ol className="m-0 inline-flex items-center space-x-1 md:space-x-3">
        <li className="m-0 inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="mr-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            <span className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
              Home
            </span>
          </Link>
        </li>
        <li className="m-0">
          <div className="flex items-center">
            <svg
              aria-hidden="true"
              className="h-6 w-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="ml-1 max-w-[26ch] truncate text-ellipsis text-sm font-medium text-primary text-opacity-80 md:ml-2 md:max-w-none">
              {title}
            </span>
          </div>
        </li>
      </ol>
    </MotionNav>
  )
}

// Barebones lazy-loaded image component
const SampleImageComponent = ({ value, isInline }) => {
  console.log(urlBuilder().image(value))
  const { width, height } = getImageDimensions(value)
  return (
    <img
      src={urlBuilder()
        .image(value)
        .width(isInline ? 100 : 800)
        .fit("max")
        .auto("format")
        .url()}
      alt={value.alt || " "}
      loading="lazy"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? "inline-block" : "block",

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  )
}

const components = {
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }) => <h1 className="text-2xl">{children}</h1>,
    h3: ({ children }) => (
      <h3 className="text-3xl font-bold text-secondary">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="text-[1.1rem] font-normal  leading-normal">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="text-[1rem]">{children}</ul>,
  },
  marks: {
    strong: ({ children }) => (
      <b className="font-semibold text-gray-300">{children}</b>
    ),
    link: ({ value, children }) => {
      return (
        <a
          href={value?.href}
          className="text-primary underline hover:text-primary/70"
          target="_blank"
        >
          {children}
        </a>
      )
    },
  },
  types: {
    // image: SampleImageComponent,
    image: ({ value }) => <img src={value.imageUrl} />,
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
}
const shaderComponents = [
  <Lumiflex />,
  <Tranquiluxe />,
  <Zenitho />,
  <Novatrix />,
  <Velustro />,
]

export default async function PortfolioPage({ params }) {
  const randomNumber = Math.floor(Math.random() * shaderComponents.length)
  const slug = params.slug
  const project = await client?.fetch(portfolioPostQuery, {
    slug: slug,
  })

  return (
    <>
      <BreadCrumbs title={project.title} />
      <div className="relative mb-8 flex h-56 w-full items-center justify-center overflow-hidden rounded-xl md:h-80">
        <MotionH1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute mb-0 max-w-[80%] rounded-md bg-white/60 p-3 py-5 text-center text-xl font-bold leading-tight text-black md:text-3xl"
        >
          {project.title}
        </MotionH1>
        {shaderComponents[randomNumber]}
      </div>
      <a target="_blank" href={project.url}>
        <button className="mb-4 flex w-fit flex-row items-center rounded-full border border-gray-300 px-4 py-2">
          <span>Visit website</span>
          <ExternalLink size={20} className="ml-2" />
        </button>
      </a>
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-16 max-w-[690px]"
      >
        <PortableText
          value={project.caseStudy}
          components={components as any}
        />
      </MotionDiv>
      <BreadCrumbs title={project.title} />
    </>
  )
}
