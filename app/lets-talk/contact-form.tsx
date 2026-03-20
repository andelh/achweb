"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import axios from "axios"
import { Label } from "@/components/ui/label"
import {
  Field,
  FieldDescription,
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
                autoFocus
                placeholder="John Doe"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Your Email:</FieldLabel>
              <Input
                type="email"
                id="email"
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
              <Select onValueChange={value => setProjectType(value)} required>
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
                      <SelectItem key={service.value} value={service.value}>
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
                id="projectDescription"
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
                  <RadioGroupItem value="planning" id="no" />
                  <Label htmlFor="no">Not yet, but I want to plan ahead</Label>
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
}
