"use client"
import React from "react"
import Balancer from "react-wrap-balancer"

//NPM
import TextLoop from "react-text-loop"
import MainButton from "../main-button"
import Link from "next/link"
import { MotionDiv } from "../../app/use-clients"

export default function Heading() {
  return (
    <MotionDiv
      className="mb-[40px] w-full text-white"
      // initial={{ opacity: 0, y: 40 }}
      // animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, stiffness: 10 }}
    >
      <h1 className="max-w-2xl font-inter text-[9vw] font-extrabold text-white md:text-[7vw] xl:text-[10vmin]">
        <Balancer className="w-full">
          I'm a freelance web developer & I can build your next
          <br />
          <TextLoop
            interval={1500}
            adjustingSpeed={0}
            // springConfig={{ stiffness: 140, damping: 10 }}
            mask
          >
            <div className="block w-fit after:mx-auto after:mt-[-13px] after:block after:h-[10px] after:w-full after:bg-blue-500 after:bg-gradient-to-tr after:from-blue-500 after:to-blue-500 after:content-['']">
              website
            </div>
            <div className="block w-fit after:mx-auto after:mt-[-13px] after:block after:h-[10px] after:w-full after:bg-blue-500 after:bg-gradient-to-tr after:from-blue-500 after:to-blue-500 after:content-['']">
              online store
            </div>
            <div className="block w-fit after:mx-auto after:mt-[-13px] after:block after:h-[10px] after:w-full after:bg-blue-500 after:bg-gradient-to-tr after:from-blue-500 after:to-blue-500 after:content-['']">
              mobile app
            </div>
            <div className="block w-fit after:mx-auto after:mt-[-13px] after:block after:h-[10px] after:w-full after:bg-blue-500 after:bg-gradient-to-tr after:from-blue-500 after:to-blue-500 after:content-['']">
              web app
            </div>
          </TextLoop>
        </Balancer>
      </h1>

      <div className="mb-[50px] w-full">
        <TextLoop
          interval={1500}
          adjustingSpeed={0}
          // springConfig={{ stiffness: 140, damping: 14 }}
          // noWrap={false}
        >
          <div className="text-md block w-full font-medium leading-tight text-white opacity-70 lg:text-xl">
            To help you reach more customers
          </div>
          <div className="text-md block w-full font-medium leading-tight text-white opacity-70 lg:text-xl">
            To help you make more sales
          </div>
          <div className="text-md block w-full font-medium leading-tight text-white opacity-70 lg:text-xl">
            To help you increase customer loyalty
          </div>
          <div className="text-md block w-full font-medium leading-tight text-white opacity-70 lg:text-xl">
            To help you streamline your operations
          </div>
        </TextLoop>
      </div>
      <Link href="/lets-talk">
        <MainButton title="Let's Talk" />
      </Link>
      <br className="w-full bg-white opacity-10" />
    </MotionDiv>
  )
}
