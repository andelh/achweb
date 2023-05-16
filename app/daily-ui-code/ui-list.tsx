"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

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

export default function UIList() {
  return (
    <motion.div
      className="flex w-full flex-row flex-wrap gap-1 md:gap-3"
      layout
      initial="hidden"
      viewport={{
        amount: 0.3,
      }}
      whileInView="visible"
      variants={list}
    >
      {items.map((item, index) => (
        <UIItem key={index} item={item} variants={uiItem} />
      ))}
    </motion.div>
  )
}

const items = [
  {
    videoUrl: "https://www.youtube.com/watch?v=1Yqj76Q4jJ4",
    url: "1-sign-up",
    poster:
      "https://cdn.sanity.io/images/3r62ldv6/production/a93ad9e6b975c6d77d375abd9f03dde6a5489b6a-8001x4501.svg",
    order: 1,
    title: "Sign Up Page",
    slug: "sign-up-page",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=1Yqj76Q4jJ4",
    url: "1-sign-up",
    poster:
      "https://cdn.sanity.io/images/3r62ldv6/production/a93ad9e6b975c6d77d375abd9f03dde6a5489b6a-8001x4501.svg",
    order: 2,
    title: "Login In Page",
    slug: "login-in-page",
  },
]

const UIItem = ({ item, variants }) => {
  return (
    <motion.div
      className={`relative flex w-full flex-1 basis-[46%] flex-col items-start justify-center  md:basis-[30%]  lg:basis-[23%]`}
      //   href={item.url}
      variants={variants}
      whileHover={{ scale: 1.02 }}
      transition={{ ease: [0.33, 1, 0.68, 1] }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative m-0 mb-3 aspect-video w-full overflow-hidden  rounded-lg border border-white border-opacity-20 shadow-sm">
        <Link href={`/daily-ui-code/${item.url}`}>
          <Image
            style={{ objectFit: "cover" }}
            fill
            alt="project-image"
            src={
              "https://mir-s3-cdn-cf.behance.net/project_modules/fs/a21e03128429749.6155cfe88a80c.jpg"
            }
          />
        </Link>
      </div>
      <Link href="/daily-ui-code/">
        <p className="md:text-md mb-1 text-[16px] hover:text-primary hover:underline">
          #{item.order} {item.title}
        </p>
      </Link>
      <div className="mb-16 flex flex-row items-center justify-center gap-1">
        <Image
          src="/youtube.svg"
          alt="youtube-icon"
          width={24}
          height={20}
          style={{ margin: 0 }}
        />
        <a
          href="https://youtube.com"
          className="m-0 text-xs hover:text-red-600"
        >
          Watch on{" "}
          <span className="font-bold text-red-600 underline underline-offset-4">
            YouTube
          </span>
        </a>
      </div>
    </motion.div>
  )
}
