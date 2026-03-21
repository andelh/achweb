import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { Analytics } from "@vercel/analytics/react"
import { Outfit } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://andelhusbands.xyz"
  ),
  title: {
    default:
      "Andel Husbands | Web & App Developer in Trinidad and Tobago",
    template: "%s | Andel Husbands",
  },
  description:
    "Freelance web and mobile app developer based in Trinidad and Tobago. I help startups and creative businesses build fast, polished products — from full-stack web apps to React Native mobile apps.",
  keywords: [
    "web developer Trinidad",
    "app developer Trinidad and Tobago",
    "freelance developer Trinidad",
    "React developer Trinidad",
    "Next.js developer Trinidad",
    "mobile app developer Trinidad",
    "software developer Caribbean",
    "full-stack developer Trinidad",
    "Andel Husbands",
  ],
  openGraph: {
    type: "website",
    locale: "en_TT",
    url: "https://andelhusbands.xyz",
    siteName: "Andel Husbands",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Andel Husbands — Web & App Developer in Trinidad and Tobago",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AndelHusbands",
    creator: "@AndelHusbands",
  },
  alternates: {
    canonical: "https://andelhusbands.xyz",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Add favicon */}
        <link rel="icon" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Andel Husbands",
              url: "https://andelhusbands.xyz",
              email: "hey@andelhusbands.xyz",
              jobTitle: "Freelance Web & Mobile App Developer",
              description:
                "Freelance web and mobile app developer based in Trinidad and Tobago, building fast and polished digital products for startups and creative businesses.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "TT",
                addressRegion: "Trinidad and Tobago",
              },
              sameAs: [
                "https://twitter.com/AndelHusbands",
                "https://www.linkedin.com/in/andel-husbands-013198120",
                "https://www.github.com/andelh",
                "https://www.instagram.com/andelhusbands_/",
                "https://www.facebook.com/andel.husbands",
              ],
            }),
          }}
        />
      </head>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body className={`${outfit.variable} antialiased`}>
          <Navbar />
          <main className="mx-auto max-w-[1100px] px-[5%] pb-[5%] pt-[100px] text-white xl:px-0">
            {children}
          </main>
          <Analytics />
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  )
}
