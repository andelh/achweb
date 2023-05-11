import "../../../styles/globals.css"
import Navbar from "../../../components/navbar"
import { inter } from "../../../styles/fonts"

export const metadata = {
  title: "Andel Husbands | Freelance Web and App Developer",
  description:
    "A web and software developer based in Trinidad and Tobago. My aim is to raise the bar in the quality of products that come out of our home soil. Contact me for work!",
}

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="w-full px-4 pt-14 text-white lg:px-0">{children}</div>
}
