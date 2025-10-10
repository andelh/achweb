"use client"
import React from "react"

//NPM
import TextLoop from "react-text-loop"
import MainButton from "../main-button"
import Link from "next/link"
import { MotionDiv } from "../../app/use-clients"

export default function Heading() {
  return (
    <MotionDiv
      className="mb-[40px] w-full text-white"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-balance max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.02em] md:text-5xl md:leading-[1.1]">
        I'm an independent Web Developer based in Trinidad and Tobago.
      </h1>
      <p className="text-balance max-w-3xl font-normal leading-normal text-white opacity-90 lg:text-xl">
        Hey, I'm Andel. I'm a builder at heart. Sharing products with the world
        like:{" "}
        <a href="https://taack.app" className="text-primary">
          Taack
        </a>
        ,{" "}
        <a href="https://dollah.app" className="text-primary">
          Dollah
        </a>{" "}
        and{" "}
        <a href="https://ttgazette.com" className="text-primary">
          gazettE
        </a>
        .
      </p>
      <p className="text-balance max-w-3xl font-normal leading-normal text-white opacity-90 lg:text-xl">
        I also work with creative studios and disruptive founders to create
        award-winning websites and apps, through my company Techxture Media.
      </p>
      <Link href="/lets-talk">
        <MainButton title="Let's Talk" />
      </Link>
      <hr className="w-full bg-white opacity-10" />
    </MotionDiv>
  )
}
