import "../styles/globals.css"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { inter } from "../styles/fonts"
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Andel Husbands | Web and App Developer",
  description:
    "I'm a passionate web and software developer based in vibrant Trinidad and Tobago, and I'm here to turn your ideas into reality. With a strong desire to elevate the quality of products born from our home soil, I bring creativity, expertise, and a personal touch to every project. Let's connect and embark on a journey to create something truly remarkable.",
  openGraph: {
    images: "/og-image.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <link
          rel="preload"
          href="/fonts/Vorkurs/ii-vorkurs-light.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Vorkurs/ii-vorkurs-medium.woff"
          as="font"
          crossOrigin=""
        />
        {/* Add favicon */}
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        <Navbar />
        <main className="mx-auto max-w-[1100px] px-[5%] pb-[5%] pt-[100px] text-white xl:px-0">
          {children}
        </main>
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
