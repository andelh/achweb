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
import { useSplitter } from "splitter-gg/client"

const Navbar = ({ isVariant = false }) => {
  const pathname = usePathname()
  const { trackClick } = useSplitter()

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
    <nav className="fixed left-0 right-0 z-40 mx-auto w-full max-w-[1100px] bg-[#03040590] px-[5%] py-[30px] text-white shadow-md backdrop-blur-md xl:px-0">
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
              width={40}
              height={45}
            />
          </MotionDiv>
        </Link>
        <div className="grid cursor-pointer grid-cols-3 items-center justify-center gap-[1px] text-center text-white">
          <Link href="/daily-ui-code">
            <motion.span
              className="text-sm font-medium text-white xl:text-[17px]"
              style={{
                color: pathname === "/daily-ui-code" ? colors.primary : "white",
              }}
              whileHover={{
                color: colors.primary,
              }}
            >
              #DailyUICode
            </motion.span>
          </Link>
          <Link href="/blog">
            <motion.span
              className="text-sm font-medium text-white xl:text-[17px]"
              style={{
                color:
                  pathname.includes("/posts") || pathname === "/blog"
                    ? colors.primary
                    : "white",
              }}
              whileHover={{
                color: colors.primary,
              }}
            >
              Blog
            </motion.span>
          </Link>
          {isVariant ? (
            <motion.button
              className="whitespace-nowrap rounded-full bg-primary px-3 py-2 text-sm font-medium text-white xl:text-[17px]"
              data-cal-link="andelh/new-project-chat"
              data-cal-config='{"layout":"month_view"}'
              onClick={() => trackClick("booking-experiment")}
              whileHover={{
                color: "black",
              }}
            >
              Book a chat
            </motion.button>
          ) : (
            <motion.button
              className="whitespace-nowrap rounded-full border border-primary px-3 py-2 text-sm font-medium text-white xl:text-[17px]"
              data-cal-link="andelh/new-project-chat"
              data-cal-config='{"layout":"month_view"}'
              onClick={() => trackClick("booking-experiment")}
              whileHover={{
                color: colors.primary,
              }}
            >
              Book a call
            </motion.button>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
