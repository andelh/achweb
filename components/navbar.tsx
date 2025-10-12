"use client"
import React, { useEffect } from "react" //NPM

//NPM
import Link from "next/link"
import { getCalApi } from "@calcom/embed-react"
import { colors } from "../styles/colors"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { MotionDiv, MotionSpan } from "../app/use-clients"
import { Button } from "./ui/button"
import ModeToggle from "./mode-toggle"
import { useTheme } from "next-themes"

const Navbar = ({ isVariant = false }) => {
  const pathname = usePathname()
  const { theme } = useTheme()

  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi()
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#FF00FF" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      })
    })()
  }, [])

  return (
    <nav className="fixed left-0 right-0 z-30  w-full  font-sans  dark:bg-[#00000090] bg-bg-light/40 px-[5%] py-4 text-copy backdrop-blur-lg xl:px-4">
      <div className="mx-auto flex w-full max-w-[1100px] flex-row items-center justify-between">
        <Link href="/">
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ rotateY: 359 }}
            transition={{ ease: [0.68, -0.6, 0.32, 1.6], duration: 1 }}
            className="min-w-[50px]"
          >
            <Image
              // style={{ margin: 0 }}
              src="/ah-logo.png"
              alt="logo"
              width={40}
              height={45}
              style={{ filter: theme === "dark" ? "invert(0)" : "invert(1)" }}
            />
          </MotionDiv>
        </Link>
        <div className="flex cursor-pointer flex-row items-center justify-center gap-4 text-center text-text">
          <Link href="/blog">
            <motion.span
              className="text-sm font-medium text-text xl:text-[17px]"
              style={{
                color:
                  pathname.includes("/posts") || pathname === "/blog"
                    ? "#5972A1"
                    : "text-text",
              }}
              whileHover={{
                color: "#5972A1",
              }}
            >
              Blog
            </motion.span>
          </Link>
          <Button asChild>
            <Link href="/lets-talk">Let's Talk</Link>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
