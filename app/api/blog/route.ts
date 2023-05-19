import { NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get("slug")
  console.log({ slug })

  //Find the absolute path of the json directory
  const postsDirectory = path.join(process.cwd(), "posts")

  //Read the json data file data.json
  8
  const markdownWithMeta = await fs.readFile(
    postsDirectory + `/${slug}.mdx`,
    "utf8"
  )

  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)

  return NextResponse.json({ frontMatter, slug, mdxSource })
}
