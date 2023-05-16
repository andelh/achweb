import { createClient, groq } from "next-sanity"
import { dailyUIItemQuery, dailyUIQuery } from "./queries"

export async function getDailyUIItems() {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    token:
      "skJNMoJrGs8wNm6apxFw9ApErF5B4beEmsrohv4KjLJCie4HrtCQRoSaQxyrqMa4HScFJozQpH1ynX9AH7yhj7zdg98iOKbEo0Go9CWfhxcW67YpJEjWATI1yM7j6Obxghk4oA9hxbsJ2GZlmhfj5Xf42rWSTiZdX6apOYD8az20APCpgZZX", // or leave blank to be anonymous user
  })

  return client.fetch(groq`${dailyUIQuery}`)
}

export async function getDailyUIItem(slug: string) {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    token:
      "skJNMoJrGs8wNm6apxFw9ApErF5B4beEmsrohv4KjLJCie4HrtCQRoSaQxyrqMa4HScFJozQpH1ynX9AH7yhj7zdg98iOKbEo0Go9CWfhxcW67YpJEjWATI1yM7j6Obxghk4oA9hxbsJ2GZlmhfj5Xf42rWSTiZdX6apOYD8az20APCpgZZX", // or leave blank to be anonymous user
  })

  return client.fetch(
    groq`*[_type == "dailyUI" && challenges[slug.current == $slug]][0].challenges[0] {
        title,
        "slug": slug.current,
        url,
        videoUrl,
        "poster": poster.asset->url 
  }`,
    { slug }
  )
}
