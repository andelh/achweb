"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import readingTime from "reading-time"

export default function PostItem({ post }) {
  const readTime = readingTime(post.markdownWithMeta)
  return (
    <Link href={"/posts/" + post.slug}>
      <motion.div
        className={`card-body border-b border-white border-opacity-10 px-0 pb-8 pt-2`}
        whileHover={{ opacity: 0.8 }}
      >
        <h3 className={`card-title mb-4 text-2xl font-semibold leading-normal`}>
          {post.frontMatter.title}
        </h3>
        <p className="mb-4 text-[16px] font-medium leading-normal text-slate-500">
          {post.frontMatter.description}
        </p>
        <p className="card-text mb-6 text-lg leading-none ">
          <small className="text-muted">
            {post.frontMatter.date} • {readTime.text}
          </small>
        </p>
        <Link legacyBehavior href={"/posts/" + post.slug}>
          <a className="text-[16px] font-semibold uppercase text-primary">
            Read more
          </a>
        </Link>
      </motion.div>
    </Link>
  )
}
