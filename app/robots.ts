import type { MetadataRoute } from "next"
import { getBaseUrl } from "../lib/url"

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
