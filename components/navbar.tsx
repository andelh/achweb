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

const Navbar = ({ isVariant = false }) => {
  const pathname = usePathname()

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
    <nav className="fixed left-0 right-0 z-40 mx-auto w-full max-w-[1100px] border-b border-white/10 dark:bg-[#03040590] bg-bg-light/20 px-[5%] py-4 text-white backdrop-blur-md xl:px-0">
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
              style={{ margin: 0 }}
              src="/ah-logo.png"
              alt="logo"
              className="invert dark:invert-0"
              width={40}
              height={45}
            />
          </MotionDiv>
        </Link>
        <div className="grid cursor-pointer grid-cols-3 items-center justify-center gap-2 text-center text-text">
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
        </div>
        <ModeToggle />
      </div>
    </nav>
  )
}

export default Navbar
