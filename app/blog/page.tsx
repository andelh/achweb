import React from "react"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import readingTime from "reading-time"
import PostItem from "./PostItem"

const getPosts = async () => {
  const files = fs.readdirSync(path.join("posts"))
  const posts = files
    .map(filename => {
      const markdownWithMeta = fs.readFileSync(
        path.join("posts", filename),
        "utf-8"
      )
      const { data: frontMatter } = matter(markdownWithMeta)
      const readTime = readingTime(markdownWithMeta)
      return {
        frontMatter,
        slug: filename.split(".")[0],
        readTime: readTime.text,
      }
    })
    .filter(post => !post.frontMatter.draft)
  return posts
}

export default async function IndexPage() {
  const posts = await getPosts()
  return (
    <>
      <div className="relative mx-auto w-full pt-[50px]">
        <h1 className="mb-12 text-3xl md:text-5xl">
          Writing on software, startups and life.
        </h1>
        {/* <div className="relative grid  grid-cols-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[300px_1fr]"> */}
        {/* <div className="sticky top-[120px] mb-10">
            <div className="flex flex-row flex-wrap gap-x-4 gap-y-1">
              <p className="text-primary m-0 font-medium">All posts</p>
            </div>
          </div> */}
        <div className="w-full max-w-3xl">
          {posts.map((post, index) => (
            <PostItem key={index} post={post} />
          ))}
        </div>
      </div>
      {/* </div> */}
    </>
  )
}
