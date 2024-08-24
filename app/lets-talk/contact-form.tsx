"use client"
import Select from "react-select"
import Loader from "react-loader-spinner"
import MainButton from "../../components/main-button"
import { colors } from "../../styles/colors"
import { useRouter } from "next/navigation"
import { useState } from "react"
import emailjs from "emailjs-com"
import axios from "axios"

const services = [
  { value: "Website", label: "Website" },
  { value: "Mobile App", label: "Mobile App" },
  { value: "E-Commerce Store", label: "E-Commerce Store" },
  { value: "Custom", label: "Something custom" },
]

const budget = [
  { value: "$10,000+", label: "$10,000+" },
  { value: "$60,000+", label: "$60,000+" },
]

const customStyles = {
  control: provided => ({
    ...provided,
    background: "#1f1f1f",
    border: "none",
    borderRadius: 4,
    color: "white",
    padding: "10px",
  }),
  option: (provided, state) => ({
    ...provided,
    background: "#1f1f1f",
    fontFamily: "Vorkurs",
    fontSize: 16,
    fontWeight: 500,
    color: state.isSelected ? "#036CE3" : "white",
  }),
  menuList: (provided, state) => ({
    ...provided,
    background: "#1f1f1f",
    border: "1px solid #131313",
    borderRadius: 3,
  }),
  input: (provided, state) => ({
    ...provided,
    color: "white",
    fontFamily: "Vorkurs",
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: "white",
  }),

  singleValue: (provided, state) => ({
    ...provided,
    color: "white",
    fontFamily: "Vorkurs",
  }),
}

export default function ContactForm() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("+1")
  const [projectType, setProjectType] = useState("")
  const [projectDescription, setProjectDescription] = useState("")
  const [canAfford, setCanAfford] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const sendEmail = async () => {
    //Start loading
    setIsLoading(true)

    // Send a slack message
    try {
      await axios.post("/api/send-slack-message", {
        name,
        email,
        projectType,
        projectDescription,
        canAfford,
      })
    } catch (err) {
      console.log("could not send slack message")
      console.log(err.message)
    }

    const template_params = {
      name: name,
      email: email,
      projectType: projectType,
      projectDescription: projectDescription,
    }

    emailjs
      .send("gmail", "lets_talk", template_params, "user_K3Y9NbzoiCnQIQeAvAs96")
      .then(
        response => {
          router.push("/thank-you")
        },
        err => {
          alert(
            "There was an error submitting you request. Please try again or don't hesitate to contact me directly!"
          )
          setIsLoading(false)
          console.log("FAILED...", err)
        }
      )
  }

  const handleSubmit = () => {
    setIsLoading(true)
    sendEmail()
  }

  return (
    <>
      <div className=" max-w-2xl">
        <div className="mb-[30px]">
          <label className="text-md mb-[15px] block font-bold">
            Your Name:
          </label>
          <input
            className="text-md w-full rounded-md border border-neutral-700 bg-[#1f1f1f] p-[15px] font-medium leading-normal text-white focus:outline-none focus:ring-2 focus:ring-[#036CE3]"
            onChange={e => setName(e.target.value)}
            value={name}
            name="name"
            required
            placeholder="John Doe"
          />
        </div>
        <div className="mb-[30px]">
          <label className="text-md mb-[15px] block font-bold">
            Your Email:
          </label>
          <input
            className="text-md w-full rounded-md border border-neutral-700 bg-[#1f1f1f] p-[15px] font-medium leading-normal text-white focus:outline-none focus:ring-2 focus:ring-[#036CE3]"
            value={email}
            onChange={e => setEmail(e.target.value)}
            name="email"
            required
            placeholder="john@example.com"
          />
        </div>
        <div className="mb-[30px]">
          <label className="text-md mb-[15px] block font-bold">
            I'm looking for a:
          </label>
          <Select
            placeholder="Please select"
            styles={customStyles}
            options={services}
            onChange={val => setProjectType(val.value)}
          />
        </div>
        {/* <FormItem>
						  <Label>My budget is in the range of:</Label>
						  <Select
							  placeholder="Please select"
							  styles={customStyles}
							  options={budget}
						  />
					  </FormItem> */}
        <div className="mb-[30px]">
          <label className="text-md mb-[15px] block font-bold">
            Describe your project as simply as possible:
          </label>
          <textarea
            className="text-md w-full rounded-md border border-neutral-700 bg-[#1d1d1d] p-[15px] font-medium leading-normal text-white focus:outline-none focus:ring-2 focus:ring-[#036CE3]"
            value={projectDescription}
            name="projectDescription"
            onChange={e => setProjectDescription(e.target.value)}
            placeholder="E.g., A mobile app that helps users track daily habits and set personal goals."
            rows={8}
          />
        </div>
        <div className="mb-[30px]">
          <label className="text-md mb-[15px] block font-bold">
            Custom projects start at $2,200USD and can go as high as $20,000USD.
            Can you presently afford this level of investment?
          </label>
          <div className="flex items-center space-x-4 text-lg">
            <label className="flex items-center">
              <input
                type="radio"
                name="canAfford"
                value="yes"
                checked={canAfford === "yes"}
                onChange={e => setCanAfford(e.target.value)}
                className="text-md mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="canAfford"
                value="no"
                checked={canAfford === "no"}
                onChange={e => setCanAfford(e.target.value)}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>
        {isLoading && (
          <div className="relative mt-[20px] flex w-full items-center justify-center ">
            <Loader type="Oval" color={colors.primary} height={40} width={40} />
          </div>
        )}
        <MainButton full title="Submit" clickHandler={() => handleSubmit()} />
      </div>
    </>
  )
}
