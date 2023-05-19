import React, { Component } from "react"
import { Highlight } from "./highlight"

class Freelance extends Component {
  state = {}
  render() {
    return (
      <div className="mb-16 text-white">
        <h1 className="text-lg">
          What does{" "}
          <span className="block w-fit after:mx-auto after:mt-[-13px] after:block after:h-[10px] after:w-full after:bg-blue-500 after:bg-gradient-to-tr after:from-blue-500 after:to-blue-500 after:content-['']">
            freelance
          </span>{" "}
          even mean?
        </h1>
        <p className="text-md max-w-xl text-sm font-medium">
          For you, this means competitive pricing and more involvement in the
          overall design and development process.
          <br />
          <br />
          For me, freelance means getting the chance to work with amazing
          clients to help bring their product to life
        </p>
      </div>
    )
  }
}

export default Freelance
