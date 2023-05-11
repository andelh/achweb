"use client"
import React from "react"

const MainButton = props => (
  <button
    className={`${
      props.full && "w-full"
    } text-md bg-[rgb(1, 95, 208)] mb-[30px] min-w-[160px] cursor-pointer rounded-sm border-none bg-gradient-to-tr from-blue-500 to-blue-400 px-[30px] py-[15px] font-bold lg:min-w-[250px]`}
    full={props.full}
    onClick={() => props.clickHandler()}
  >
    {props.title}
  </button>
)

export default MainButton
