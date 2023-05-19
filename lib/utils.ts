export const getWebsiteRootUrl = () =>
  typeof window !== "undefined" ? window.location.origin : ""
