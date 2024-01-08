import sanityClient from "@sanity/client"

// See the image above on how to get your projectId and add a new API token
// I added one called "landing page"
console.log("projectID:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)
const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  token:
    "skJNMoJrGs8wNm6apxFw9ApErF5B4beEmsrohv4KjLJCie4HrtCQRoSaQxyrqMa4HScFJozQpH1ynX9AH7yhj7zdg98iOKbEo0Go9CWfhxcW67YpJEjWATI1yM7j6Obxghk4oA9hxbsJ2GZlmhfj5Xf42rWSTiZdX6apOYD8az20APCpgZZX", // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
  ignoreBrowserTokenWarning: true,
})

export default client
