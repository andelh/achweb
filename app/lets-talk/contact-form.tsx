"use client"
import Loader from "react-loader-spinner"
import MainButton from "../../components/main-button"
import { colors } from "../../styles/colors"
import { useRouter } from "next/navigation"
import { useState } from "react"
import emailjs from "emailjs-com"
import axios from "axios"
import { Label } from "@/components/ui/label"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

const services = [
  { value: "Website", label: "Website" },
  { value: "Mobile App", label: "Mobile App" },
  { value: "E-Commerce Store", label: "E-Commerce Store" },
  { value: "Custom", label: "Something custom" },
]

export default function ContactForm() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [projectType, setProjectType] = useState("")
  const [projectDescription, setProjectDescription] = useState("")
  const [canAfford, setCanAfford] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const sendEmail = async () => {
    //Start loading
    setIsLoading(true)

    console.log(name, email, projectType, projectDescription, canAfford)

    // Send a slack message
    try {
      await axios.post("/api/send-slack-message", {
        name,
        email,
        projectType,
        projectDescription,
        canAfford,
      })
      router.push("/thank-you")
    } catch (err) {
      console.log("could not send slack message")
      console.log(err.message)
      alert("There was an error submitting your request. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    sendEmail()
  }

  return (
    <div className="font-sans max-w-2xl">
      <form onSubmit={handleSubmit}>
        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Your Name:</FieldLabel>
              <Input
                onChange={e => setName(e.target.value)}
                value={name}
                name="name"
                required
                placeholder="John Doe"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Your Email:</FieldLabel>
              <Input
                onChange={e => setEmail(e.target.value)}
                value={email}
                name="email"
                required
                placeholder="machel@montano.com"
              />
            </Field>
          </FieldGroup>
          <FieldSeparator />
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="projectType">I'm looking for a:</FieldLabel>
              <Select onValueChange={value => setProjectType(value)}>
                <SelectTrigger
                  className="w-[180px]"
                  id="projectType"
                  name="projectType"
                >
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Services</SelectLabel>
                    {services.map(service => (
                      <SelectItem value={service.value}>
                        {service.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="projectDescription">
                Describe your project as simply as possible:
              </FieldLabel>
              <Textarea
                onChange={e => setProjectDescription(e.target.value)}
                value={projectDescription}
                name="projectDescription"
                required
                placeholder="E.g., A mobile app that helps users track daily habits and set personal goals."
              />
            </Field>
          </FieldGroup>
          <FieldSeparator />
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="canAfford">
                Custom projects start at $2,200USD and can go as high as
                $20,000USD.
              </FieldLabel>
              <RadioGroup
                name="canAfford"
                defaultValue="no"
                value={canAfford}
                required
                onValueChange={value => setCanAfford(value)}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no">No</Label>
                </div>
              </RadioGroup>
              <FieldDescription>
                Can you presently afford this level of investment?
              </FieldDescription>
            </Field>
          </FieldGroup>
          <Field orientation="horizontal">
            <Button size="lg" disabled={isLoading} type="submit">
              {isLoading && <Spinner />}
              Submit
            </Button>
          </Field>
        </FieldSet>
      </form>
    </div>
  )

  return (
    <>
      <div className="font-sans max-w-2xl">
        <div className="mb-[30px]">
          <Label className="">Your Name:</Label>
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
