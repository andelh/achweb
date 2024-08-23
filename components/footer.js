"use client"
import React from "react"
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaWhatsappSquare,
} from "react-icons/fa"

//NPM
import MainButton from "./main-button"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Footer() {
  const pathname = usePathname()
  if (pathname === "/lets-talk") return null
  return (
    <footer className="w-full p-[30px] text-center text-white">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-lg italic">Let's work together</h1>
        <Link href="/lets-talk">
          <MainButton title="Contact me" />
        </Link>
        <div className="mx-auto my-[20px] grid max-w-[300px] grid-cols-5 gap-4">
          <div className="inline text-[1.8rem] transition-all hover:text-[#0e99ee]">
            <a
              style={{ color: "inherit" }}
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.facebook.com/andel.husbands"
            >
              <FaFacebookF />
            </a>
          </div>
          <div className="inline text-[1.8rem] transition-all hover:text-[#0e99ee]">
            <a
              style={{ color: "inherit" }}
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/andelhusbands_/"
            >
              <FaInstagram />
            </a>
          </div>
          <div className="inline text-[1.8rem] transition-all hover:text-[#0e99ee]">
            <a
              style={{ color: "inherit" }}
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/AndelHusbands"
            >
              <FaTwitter />
            </a>
          </div>
          {/* <div className="inline text-[1.8rem] transition-all hover:text-[#0e99ee]">
            <a
              style={{ color: "inherit" }}
              rel="noopener noreferrer"
              target="_blank"
              href="https://wa.me/18687188625"
            >
              <FaWhatsappSquare />
            </a>
          </div> */}
          <div className="inline text-[1.8rem] transition-all hover:text-[#0e99ee]">
            <a
              style={{ color: "inherit" }}
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/andel-husbands-013198120"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <div className="inline text-[1.8rem] transition-all hover:text-[#0e99ee]">
            <a
              style={{ color: "inherit" }}
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.github.com/andelh"
            >
              <FaGithub />
            </a>
          </div>
          {/* <div><a style={{color: 'inherit'}} rel="noopener noreferrer" target="_blank" href="mailto:andelhusbands@gmail.com"><FaRegEnvelope /></a></div> */}
        </div>
        <p
          style={{
            fontSize: "14px",
            opacity: 0.7,
            color: "white",
            margin: "5px 0",
          }}
        >
          © {new Date().getFullYear()} Andel Husbands. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
