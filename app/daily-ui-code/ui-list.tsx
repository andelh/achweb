import Image from "next/image"
import Link from "next/link"
import { MotionDiv } from "../use-clients"
import client from "../../lib/sanity"
import { dailyUIQuery } from "../../lib/queries"

const list = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  hidden: { opacity: 0 },
}

const uiItem = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  hidden: { opacity: 0, y: 30, transition: { duration: 0.7 } },
}

type DailyUIItem = {
  title: string
  url: string
  slug: string
  poster: string
  videoUrl: string
}

export default async function UIList() {
  const data = await client?.fetch(dailyUIQuery)
  const items: DailyUIItem[] = data.challenges

  return (
    <MotionDiv
      className="grid w-full grid-cols-2 gap-3"
      layout
      initial="hidden"
      viewport={{
        amount: 0.3,
      }}
      whileInView="visible"
      variants={list}
    >
      {items.map((item, index) => (
        <UIItem key={index} item={item} order={index + 1} variants={uiItem} />
      ))}
    </MotionDiv>
  )
}

const UIItem = ({ item, variants, order }) => {
  return (
    <MotionDiv
      className={`relative flex w-full flex-1 basis-[46%] flex-col items-start justify-center  md:basis-[30%]  lg:basis-[23%]`}
      variants={variants}
      whileHover={{ scale: 1.02 }}
      transition={{ ease: [0.33, 1, 0.68, 1] }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative m-0 mb-3 aspect-video w-full overflow-hidden  rounded-lg border border-white border-opacity-20 shadow-sm">
        <Link href={`/daily-ui-code/${item.slug}`}>
          <Image
            style={{ objectFit: "cover" }}
            fill
            alt="project-image"
            src={item.poster}
          />
        </Link>
      </div>
      <Link href={`/daily-ui-code/${item.slug}`}>
        <p className="md:text-md mb-1 text-[16px] hover:text-primary hover:underline">
          #{order} {item.title}
        </p>
      </Link>
      {item.videoUrl && (
        <div className="mb-16 flex flex-row items-center justify-center gap-1">
          <Image
            src="/youtube.svg"
            alt="youtube-icon"
            width={24}
            height={20}
            style={{ margin: 0 }}
          />
          <a href={item.videoUrl} className="m-0 text-xs hover:text-red-600">
            Watch on{" "}
            <span className="font-bold text-red-600 underline underline-offset-4">
              YouTube
            </span>
          </a>
        </div>
      )}
    </MotionDiv>
  )
}
