import Image from "next/image"
import Link from "next/link"
import { BsArrowLeftShort, BsLink } from "react-icons/bs"
import { getDailyUIItem, getDailyUIItems } from "../../../lib/sanity-utils"
import { MotionButton, MotionDiv, MotionH1, MotionP } from "../../use-clients"
import PostLoading from "./loading"

export const revalidate = 600 // revalidate every hour

export default async function PostPage({ params }) {
  const slug = params.post
  const allData = await getDailyUIItems()
  const challenges = allData?.challenges ?? []
  const data = await getDailyUIItem(slug)
  const index = challenges.findIndex(item => item.slug === slug) + 1

  return (
    <>
      <div className="mt-8 flex flex-col items-center">
        <MotionP
          initial={{ scale: 0.98, y: 20, opacity: 0 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 0,
            duration: 0.6,
            ease: [0.6, 0.01, -0.05, 0.9],
          }}
          className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-primary"
        >
          Day {index}
        </MotionP>
        <MotionH1
          initial={{ scale: 0.98, y: 20, opacity: 0 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.8,
            ease: [0.6, 0.01, -0.05, 0.9],
          }}
          className="font-bolder mb-8 text-center"
        >
          {data?.title}
        </MotionH1>
        <Link href="/daily-ui-code">
          <MotionButton
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-8 flex flex-row items-center gap-4 self-start rounded-lg border border-slate-700 px-3 py-2 font-medium hover:text-primary"
          >
            <BsArrowLeftShort />
            Back to all posts
          </MotionButton>
        </Link>
        <MotionDiv
          initial={{ scale: 0.98, y: 20, opacity: 0 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 0.7,
            duration: 0.8,
            ease: [0.6, 0.01, -0.05, 0.9],
          }}
          className="relative m-0 mb-8 aspect-video w-full overflow-hidden  rounded-lg border border-white border-opacity-20 shadow-sm"
        >
          <Image
            style={{ objectFit: "cover" }}
            fill
            alt="project-image"
            src={data.poster}
          />
        </MotionDiv>
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-row items-center justify-center gap-2 rounded-2xl border border-slate-700 py-4">
            <BsLink size={26} />
            <a
              href={data.url}
              className="text-md m-0 text-center hover:text-secondary md:text-lg"
            >
              Visit the{" "}
              <span className="font-bold text-secondary underline underline-offset-4">
                Project
              </span>
            </a>
          </div>
          <div className="flex flex-row items-center justify-center gap-2 rounded-2xl border border-slate-700 py-4">
            <Image
              src="/youtube.svg"
              alt="youtube-icon"
              width={24}
              height={20}
              style={{ margin: 0 }}
            />
            <a
              href={data.videoUrl}
              className="text-md m-0 text-center hover:text-red-600 md:text-lg"
            >
              Watch the build on{" "}
              <span className="font-bold text-red-600 underline underline-offset-4">
                YouTube
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
