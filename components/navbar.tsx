"use client"
import React, { useEffect } from "react"

import Link from "next/link"
import { getCalApi } from "@calcom/embed-react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { MotionDiv } from "../app/use-clients"
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
    <nav className="fixed left-0 right-0 z-30  w-full  font-sans px-[5%] py-4 text-copy backdrop-blur-lg xl:px-4">
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
              src="/ah-logo.png"
              alt="logo"
              width={40}
              height={45}
              style={{ filter: theme === "dark" ? "invert(0)" : "invert(1)" }}
            />
          </MotionDiv>
        </Link>
        <div className="flex cursor-pointer flex-row items-center justify-center gap-6 text-center text-text">
          <Link
            className="text-sm data-[active=true]:text-primary font-medium text-text xl:text-[17px] transition-all duration-150 hover:text-primary"
            href="/blog"
            data-active={pathname.includes("/posts") || pathname === "/blog"}
          >
            <motion.span>Blog</motion.span>
          </Link>
          <ModeToggle />
          <Button asChild>
            <Link href="/lets-talk">Let's Talk</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
