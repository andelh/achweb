import type { MetadataRoute } from "next"
import { promises as fs } from "fs"
import path from "path"
import matter from "gray-matter"
import client from "../lib/sanity"
import { dailyUIQuery } from "../lib/queries"
import { getBaseUrl } from "../lib/url"

async function getBlogPostUrls(baseUrl: string) {
  try {
    const postsDir = path.join(process.cwd(), "posts")
    const entries = await fs.readdir(postsDir)

    const mdxFiles = entries.filter(name => name.endsWith(".mdx"))

    const urls: MetadataRoute.Sitemap = []

    for (const filename of mdxFiles) {
      const filePath = path.join(postsDir, filename)
      const file = await fs.readFile(filePath, "utf8")
      const { data: frontMatter } = matter(file)

      if (frontMatter?.draft) continue

      const slug = filename.replace(/\.mdx$/, "")

      let lastModified: Date | undefined
      const fmDate = frontMatter?.date
      if (fmDate) {
        const parsed = new Date(fmDate)
        if (!isNaN(parsed.getTime())) lastModified = parsed
      }
      if (!lastModified) {
        const stats = await fs.stat(filePath)
        lastModified = stats.mtime
      }

      urls.push({
        url: `${baseUrl}/posts/${slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.7,
      })
    }

    return urls
  } catch (_e) {
    return []
  }
}

async function getDailyUISlugs(baseUrl: string) {
  try {
    // dailyUIQuery returns an object with a challenges array
    const data: any = await (client as any)?.fetch(dailyUIQuery)
    const challenges = data?.challenges ?? []
    const now = new Date()
    const urls: MetadataRoute.Sitemap = challenges.map((c: any) => ({
      url: `${baseUrl}/daily-ui-code/${c.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.5,
    }))
    return urls
  } catch (_e) {
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getBaseUrl()
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/daily-ui-code`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/entertainer`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/lets-talk`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]

  const [blogUrls, dailyUIUrls] = await Promise.all([
    getBlogPostUrls(baseUrl),
    getDailyUISlugs(baseUrl),
  ])

  return [...staticRoutes, ...blogUrls, ...dailyUIUrls]
}
