import MyMDXRemote from "./mdx-remote"
import Link from "next/link.js"
import { MotionDiv, MotionH1, MotionNav } from "../../use-clients"

export async function generateMetadata({ params }) {
  // read route params
  const slug = params.slug

  // fetch data
  const rawData = await fetch(
    // `http://localhost:3000/api/blog?slug=${slug}`,
    `https://achweb-git-dailyuicode-andelh.vercel.app/api/blog?slug=${slug}`,
    {
      next: {
        revalidate: 300,
      },
    }
  )
  const data = await rawData.json()
  const { frontMatter } = data
  const { title, description } = frontMatter

  return {
    title,
    description,
  }
}

export default async function PostPage({ params }) {
  const slug = params.slug

  console.log("Hello")
  console.log(process.env.NEXT_PUBLIC_VERCEL_URL)
  console.log(process.env.VERCEL_URL)
  const rawData = await fetch(
    `https://${
      process.env.NEXT_PUBLIC_VERCEL_URL ||
      process.env.VERCEL_URL ||
      "http://localhost:3000"
    }/api/blog?slug=${slug}`,
    {
      next: {
        revalidate: 300,
      },
    }
  )
  const data = await rawData.json()
  const { mdxSource, frontMatter } = data
  const { title } = frontMatter
  return (
    <>
      <BreadCrumbs title={title} />
      <MotionH1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-[21ch] text-[40px] md:text-[40px]"
      >
        {title}
      </MotionH1>
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-16 max-w-[690px]"
      >
        <MyMDXRemote {...mdxSource} />
      </MotionDiv>
      <BreadCrumbs title={title} />
    </>
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
      className="bg-zinc-800-950 mb-16 flex w-fit items-center rounded-lg border border-slate-800 px-5 py-3 text-gray-700 dark:border-gray-700 dark:bg-gray-800"
      aria-label="Breadcrumb"
    >
      <ol className="m-0 inline-flex items-center space-x-1 md:space-x-3">
        <li className="m-0 inline-flex items-center">
          <Link
            href="/blog"
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
            <span className="ml-1 max-w-[26ch] truncate text-ellipsis text-sm font-medium text-primary text-opacity-80 md:ml-2 md:max-w-none">
              {title}
            </span>
          </div>
        </li>
      </ol>
    </MotionNav>
  )
}
