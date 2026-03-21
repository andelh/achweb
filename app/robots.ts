import type { MetadataRoute } from "next"

function getBaseUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL
  if (explicit) return explicit.replace(/\/$/, "")

  const vercel = process.env.NEXT_PUBLIC_VERCEL_URL || process.env.VERCEL_URL
  if (vercel) return `https://${vercel.replace(/\/$/, "")}`

  return "https://andelhusbands.xyz"
}

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getBaseUrl()

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/thank-you"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
