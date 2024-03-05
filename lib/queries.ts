export const homeQuery = `*\[_type == "project"\] | order(releaseDate desc) {
    title,
    url,
    slug,
    backgroundHex,
    overview,
    releaseDate,
    caseStudy,
    "poster": poster.asset->url
  }`

export const portfolioPostQuery = `*\[_type == "project" && slug.current == $slug\][0] {
    title,
    url,
    slug,
    caseStudy,
    overview,
    backgroundHex,
    overview,
    releaseDate,
    "poster": poster.asset->url
  }`

export const dailyUIQuery = `*\[_type == "dailyUI"\][0] {
    title,
    body,
    challenges[] {
      title,
      "slug": slug.current,
      url,
      videoUrl,
      "poster": poster.asset->url
    }
  }`

export const dailyUIItemQuery = `*\[_type == "dailyUI" && slug == $slug\][0] {
    title,
    body,
    challenges[] {
      title,
      "slug": slug.current,
      url,
      videoUrl,
      "poster": poster.asset->url
    }
  }`
