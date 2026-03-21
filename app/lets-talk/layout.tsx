import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hire a Web Developer in Trinidad — Let's Talk",
  description:
    "Looking for a web or app developer in Trinidad and Tobago? Get in touch with Andel Husbands for a free consultation on your next project.",
  alternates: {
    canonical: "https://andelhusbands.xyz/lets-talk",
  },
}

export default function LetsTalkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
