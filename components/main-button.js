"use client"
import React from "react"
import { motion } from "framer-motion"

const MainButton = props => (
  <motion.button
    whileHover={{ scaleX: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`${
      props.full && "w-full"
    } text-md bg-[rgb(1, 95, 208)] mb-[30px] min-w-[160px] cursor-pointer rounded-sm border-none bg-gradient-to-tr from-blue-500 to-blue-400 px-[30px] py-[15px] text-lg font-bold lg:min-w-[250px]`}
    full={props.full}
    onClick={() => props.clickHandler()}
  >
    {props.title}
  </motion.button>
)

export default MainButton
