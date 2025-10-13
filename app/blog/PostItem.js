"use client"
import Link from "next/link"
import { motion } from "framer-motion"

export default function PostItem({ post }) {
  return (
    <Link href={"/posts/" + post.slug}>
      <motion.div
        className={`rounded-lg p-4 px-1  md:px-6`}
        whileHover={{ opacity: 0.8 }}
      >
        <p className="mb-3 leading-none">
          <small className=" text-base font-medium text-text-muted">
            {post.frontMatter.date} • {post.readTime}
          </small>
        </p>
        <h3
          className={`card-title text-balance mb-2 text-2xl font-semibold leading-tight text-copy`}
        >
          {post.frontMatter.title}
        </h3>
        <p className="md:text-balance md:text-md mb-4 text-[17px] font-medium leading-[1.3] text-text-muted">
          {post.frontMatter.description}
        </p>
        <Link legacyBehavior href={"/posts/" + post.slug}>
          <a className="text-primary text-[16px] font-semibold uppercase">
            Read more
          </a>
        </Link>
      </motion.div>
    </Link>
  )
}
