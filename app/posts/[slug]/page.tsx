import Link from "next/link.js"
import { MotionDiv, MotionH1, MotionNav } from "../../use-clients"
import path from "path"
import matter from "gray-matter"
import { promises as fs } from "fs"
import { MDXRemote } from "next-mdx-remote/rsc"
import MySyntaxHighlighter from "./syntax-highlighter"
import Image from "next/image"
import { cn } from "../../../lib/utils"

const getPost = async (slug: string) => {
  const postsDirectory = path.join(process.cwd(), "posts")
  const markdownWithMeta = await fs.readFile(
    postsDirectory + `/${slug}.mdx`,
    "utf8"
  )
  const { data: frontMatter, content } = matter(markdownWithMeta)
  return { frontMatter, slug, content }
}

const mdxComponents = {
  SyntaxHighlighter: MySyntaxHighlighter,
  h1: ({ className, ...props }: any) => (
    <h1 {...props} className={cn("mb-4 mt-16 text-[48px]", className)} />
  ),
  h2: ({ className, ...props }: any) => (
    <h2 {...props} className={cn("mb-4 mt-16 text-4xl", className)} />
  ),
  h3: ({ className, ...props }: any) => (
    <h3 {...props} className={cn("mb-4 mt-16 text-3xl [&>code]:text-[24px]", className)} />
  ),
  h4: ({ className, ...props }: any) => (
    <h4 {...props} className={cn("mb-4 mt-16 text-[24px]", className)} />
  ),
  h5: ({ className, ...props }: any) => (
    <h5 {...props} className={cn("mb-4 mt-16 text-[20px]", className)} />
  ),
  h6: ({ className, ...props }: any) => (
    <h6 {...props} className={cn("mb-4 mt-16 text-[19px]", className)} />
  ),
  p: ({ className, ...props }: any) => (
    <p
      {...props}
      className={cn(
        "mb-6 text-[18px] font-normal leading-normal text-copy opacity-95 md:text-[17px] md:text-[20px] [&>code]:text-[17px] [&>em]:italic [&>em]:leading-normal [&>strong]:font-semibold",
        className
      )}
    />
  ),
  code: (props: any) => (
    <code className="mx-1 my-0 rounded-sm bg-stone-200 px-1 py-1 text-[16px]">
      {props.code}
    </code>
  ),
  ul: ({ className, ...props }: any) => (
    <ul {...props} className={cn("ml-10 list-disc", className)} />
  ),
  ol: ({ className, ...props }: any) => (
    <ol {...props} className={cn("ml-10 list-decimal", className)} />
  ),
  li: ({ className, ...props }: any) => (
    <li
      {...props}
      className={cn(
        "mb-2 text-[17px] font-normal leading-normal text-copy opacity-90 md:text-[20px]",
        className
      )}
    />
  ),
  a: ({ className, ...props }: any) => (
    <a {...props} className={cn("text-link no-underline hover:underline", className)} />
  ),
  strong: ({ className, ...props }: any) => (
    <strong {...props} className={cn("font-medium", className)} />
  ),
  img: (props: any) => (
    <div className="relative w-full aspect-[1200/630] mb-4 overflow-hidden">
      <Image
        {...props}
        className="object-contain rounded-lg"
        alt={props.alt ?? ""}
        placeholder="blur"
        blurDataURL={props.src}
        fill
      />
    </div>
  ),
  blockquote: (props: any) => (
    <blockquote className="ml-4 border-l-2 border-dashed border-secondary pl-4 italic text-secondary opacity-90 md:ml-5 md:pl-6 [&>p]:text-[17px] [&>p]:font-normal">
      {props.children}
    </blockquote>
  ),
}

export async function generateMetadata({ params }) {
  const slug = params.slug
  const { frontMatter } = await getPost(slug)
  const { title, description, date, tags } = frontMatter

  const canonicalUrl = `https://andelhusbands.xyz/posts/${slug}`
  const parsedDate = date ? new Date(date) : null
  const publishedTime =
    parsedDate && !isNaN(parsedDate.getTime())
      ? parsedDate.toISOString()
      : undefined

  return {
    title,
    description,
    keywords: tags,
    openGraph: {
      type: "article",
      title,
      description,
      url: canonicalUrl,
      publishedTime,
      authors: ["Andel Husbands"],
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: "/og-image.png",
    },
    alternates: {
      canonical: canonicalUrl,
    },
  }
}

export default async function PostPage({ params }) {
  const slug = params.slug
  const { content, frontMatter } = await getPost(slug)
  const { title, description, date } = frontMatter

  const canonicalUrl = `https://andelhusbands.xyz/posts/${slug}`
  const parsedDate = date ? new Date(date) : null
  const publishedTime =
    parsedDate && !isNaN(parsedDate.getTime())
      ? parsedDate.toISOString()
      : undefined

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url: canonicalUrl,
    datePublished: publishedTime,
    dateModified: publishedTime,
    author: {
      "@type": "Person",
      name: "Andel Husbands",
      url: "https://andelhusbands.xyz",
    },
    publisher: {
      "@type": "Person",
      name: "Andel Husbands",
      url: "https://andelhusbands.xyz",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  }

  return (
    <div className="text-copy font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadCrumbs title={title} />
      <MotionH1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-copy max-w-[21ch] text-3xl md:text-[40px] font-medium mb-8"
      >
        {title}
      </MotionH1>
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-16 max-w-[690px] font-sans"
      >
        {/* @ts-expect-error Server Component */}
        <MDXRemote source={content} components={mdxComponents} />
      </MotionDiv>
      <BreadCrumbs title={title} />
    </div>
  )
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
      className="mb-16 flex w-fit items-center rounded-lg border shadow-sm bg-bg-light px-5 py-3 text-gray-700"
      aria-label="Breadcrumb"
    >
      <ol className="m-0 inline-flex items-center space-x-1 md:space-x-3">
        <li className="m-0 inline-flex items-center">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-medium text-text-muted/75 hover:text-link dark:text-text-muted/75 dark:hover:text-link"
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
            <span className="inline-flex items-center text-sm font-medium text-text-muted/75 hover:text-link dark:text-text-muted/75 dark:hover:text-link">
              Blog
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
            <span className="text-primary ml-1 max-w-[26ch] truncate text-ellipsis text-sm font-medium text-opacity-80 md:ml-2 md:max-w-none">
              {title}
            </span>
          </div>
        </li>
      </ol>
    </MotionNav>
  )
}
