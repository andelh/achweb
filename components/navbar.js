"use client"
import React from "react" //NPM

//NPM
import Link from "next/link"
import { colors } from "../styles/colors"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="fixed z-40 w-full bg-[#03040590] px-3 py-[30px] shadow-md backdrop-blur-md sm:px-[20px] md:px-[10%] lg:px-0">
      <div className="mx-auto flex max-w-[1100px] flex-row items-center justify-between">
        <Link href="/">
          <span className="m-0 cursor-pointer text-[10px] font-semibold uppercase tracking-normal text-white no-underline sm:text-xs sm:tracking-[8px]">
            Andel Husbands
          </span>
        </Link>
        <div className="grid cursor-pointer grid-cols-3 items-center justify-center gap-[1px] text-center text-white">
          <Link href="/daily-ui-code">
            <motion.span
              className="text-xs font-medium text-white sm:text-sm"
              style={{
                color:
                  pathname === "/daily-ui-code" ? colors.primary : "inherit",
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
              className="text-xs font-medium text-white sm:text-sm"
              style={{
                color: pathname === "/blog" ? colors.primary : "inherit",
              }}
              whileHover={{
                color: colors.primary,
              }}
            >
              Blog
            </motion.span>
          </Link>
          <Link href="/lets-talk">
            <motion.span
              className="text-xs font-medium text-white sm:text-sm"
              style={{
                color: pathname === "/lets-talk" ? colors.primary : "inherit",
              }}
              whileHover={{
                color: colors.primary,
              }}
            >
              Work with me
            </motion.span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
