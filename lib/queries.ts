export const homeQuery = `*\[_type == "project"\] | order(releaseDate desc) {
    title,
    url,
    slug,
    backgroundHex,
    overview,
    releaseDate,
    "poster": poster.asset->url
  }`
