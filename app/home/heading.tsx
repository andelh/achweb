"use client"
import React from "react"

//NPM
import TextLoop from "react-text-loop"
import MainButton from "../../components/main-button"
import Link from "next/link"
import { MotionDiv } from "../use-clients"
import { Button } from "@/components/ui/button"
import ModeToggle from "@/components/mode-toggle"

export default function Heading() {
  return (
    <MotionDiv
      className="mb-[40px] w-full font-sans py-10"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <p className="text-xl font-normal leading-normal text-copy mb-4">
        Hey, I'm Andel 👋
      </p>
      <h1 className="mb-6 text-balance max-w-3xl text-3xl font-semibold leading-tight md:text-5xl text-copy md:leading-[1.1]">
        I'm an independent Web Developer based in Trinidad and Tobago.
      </h1>
      <p className="mb-8 text-text-muted text-balance max-w-2xl text-2xl font-normal leading-normal ">
        As a builder at heart, I'm sharing products with the world like:{" "}
        <a target="_blank" href="https://taack.app" className="text-primary">
          Taack
        </a>
        ,{" "}
        <a target="_blank" href="https://dollah.app" className="text-primary">
          Dollah
        </a>{" "}
        and{" "}
        <a
          target="_blank"
          href="https://ttgazette.com"
          className="text-primary"
        >
          gazettE
        </a>
        .
        <br />
        <br />I also work with creative studios and disruptive founders to
        create award-winning websites and apps.
      </p>
      <ModeToggle />
      <Button size="lg" asChild>
        <Link href="/lets-talk">Let's Talk</Link>
      </Button>
    </MotionDiv>
  )
}
