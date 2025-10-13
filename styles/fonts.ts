import { Inter, Outfit } from "next/font/google"

// If loading a variable font, you don't need to specify the font weight
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})
