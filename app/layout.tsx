import "../styles/globals.css"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { inter } from "../styles/fonts"
import { Analytics } from "@vercel/analytics/react"
import { SplitterProvider } from "splitter-gg/client"
import { Experiment, Variant } from "splitter-gg"

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
      <SplitterProvider>
        <body>
          <Experiment name="booking-experiment">
            {/* name of experiment from step 2 */}
            <Variant name="default">
              <Navbar />
              {/* name to identify variant in the dashboard */}
            </Variant>
            <Variant name="bold">
              {/* name to identify variant in the dashboard */}
              <Navbar isVariant={true} />
            </Variant>
          </Experiment>
          <main className="mx-auto max-w-[1100px] px-[5%] pb-[5%] pt-[100px] text-white xl:px-0">
            {children}
          </main>
          <Analytics />
          <Footer />
        </body>
      </SplitterProvider>
    </html>
  )
}
