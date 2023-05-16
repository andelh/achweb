import "../styles/globals.css"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { inter } from "../styles/fonts"
import { Analytics } from "@vercel/analytics/react"

// if (typeof window !== "undefined") {
//   require("pace-progressbar")
//   require("pace-progressbar/themes/blue/pace-theme-minimal.css")
// }

export const metadata = {
  title: "Andel Husbands | Freelance Web and App Developer",
  description:
    "A web and software developer based in Trinidad and Tobago. My aim is to raise the bar in the quality of products that come out of our home soil. Contact me for work!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        <Navbar />
        <main className="mx-auto max-w-[1100px] px-[5%] pb-[5%] pt-[100px] text-white lg:px-0">
          {children}
        </main>
        <Analytics />
        <Footer />
      </body>
      {/* {!noFooter && <Footer />} */}
    </html>
  )
}
