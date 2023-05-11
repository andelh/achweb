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
    <nav className="fixed z-40 w-full bg-[#03040590] px-[20px] py-[30px] shadow-md backdrop-blur-md md:px-[10%] lg:px-0">
      <div className="mx-auto  flex max-w-[1100px] flex-row items-center justify-between">
        <Link href="/">
          <span className="m-0 cursor-pointer text-xs font-semibold uppercase tracking-[8px] text-white no-underline">
            Andel Husbands
          </span>
        </Link>
        <div className="grid cursor-pointer grid-cols-2 gap-[10px] text-white">
          <Link href="/blog">
            <motion.span
              className=" font-medium text-white"
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
              className=" font-medium text-white"
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
