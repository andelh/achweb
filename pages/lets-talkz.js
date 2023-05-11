import React, { useRef, useState, Component } from "react"
import styled from "styled-components"
import Layout from "../components/layout"

import Select from "react-select"
import MainButton from "../components/main-button"
import SEO from "../components/seo"
import Loader from "react-loader-spinner"
import emailjs from "emailjs-com"
import { colors } from "../styles/colors"
import { useRouter } from "next/router"
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

const Container = styled.div`
  background: black;
  padding: 50px 10% 5% 10%;
  position: fixed;
  z-index: 99;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: scroll;
`
const Header = styled.div`
  margin-bottom: 40px;
`
const Title = styled.h1`
  font-size: 48px;
  font-weight: 900;

  @media (min-width: 550px) {
    font-size: 9vmax;
  }

  @media (min-width: 1000px) {
    font-size: 10.5vmin;
  }
`
const Caption = styled.p`
  font-size: 19px;
  opacity: 0.9;
  line-height: 1.3;
  max-width: 50ch;
`
const FormContainer = styled.div``
const FormItem = styled.div`
  margin-bottom: 30px;
`
const Label = styled.p`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 15px;
`
const Textarea = styled.textarea`
  background: #1f1f1f;
  border-radius: 4px;
  color: white;
  font-weight: 500;
  border: none;
  padding: 15px;
  font-size: 18px;
  line-height: 1.5;
  width: 100%;

  :focus {
    outline: 2px solid #036ce3;
  }
`
const Input = styled.input`
  background: #1f1f1f;
  border-radius: 4px;
  color: white;
  /* font-family: "Inter"; */
  font-weight: 500;
  border: none;
  padding: 15px;
  font-size: 18px;
  line-height: 1.5;
  width: 100%;

  :focus {
    outline: 2px solid #036ce3;
  }
`
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
  position: relative;
`

export default function LetsTalkPage() {
  const router = useRouter()
  const contactForm = useRef()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [projectType, setProjectType] = useState("")
  const [projectDescription, setProjectDescription] = useState("")
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
    <Layout noFooter>
      <SEO title="Let's talk - Get a free quote" />
      <Header>
        <Title>Let's Talk</Title>
        <Caption>
          Tell me a bit about your project so we can get the ball rolling and
          build something great together!
        </Caption>
      </Header>
      <FormContainer>
        <FormItem>
          <Label>Your Name:</Label>
          <Input
            onChange={e => setName(e.target.value)}
            value={name}
            name="name"
            required
            placeholder="John Doe"
          />
        </FormItem>
        <FormItem>
          <Label>Your Email:</Label>
          <Input
            value={email}
            onChange={e => setEmail(e.target.value)}
            name="email"
            required
            placeholder="john@example.com"
          />
        </FormItem>
        <FormItem>
          <Label>I'm looking for a:</Label>
          <Select
            placeholder="Please select"
            styles={customStyles}
            options={services}
            onChange={val => setProjectType(val.value)}
          />
        </FormItem>
        {/* <FormItem>
						  <Label>My budget is in the range of:</Label>
						  <Select
							  placeholder="Please select"
							  styles={customStyles}
							  options={budget}
						  />
					  </FormItem> */}
        <FormItem>
          <Label>Describe your project as simply as possible:</Label>
          <Textarea
            value={projectDescription}
            name="projectDescription"
            onChange={e => setProjectDescription(e.target.value)}
            placeholder="Start typing here..."
            rows={8}
          />
        </FormItem>
        <MainButton full title="Submit" clickHandler={() => handleSubmit()} />
      </FormContainer>
      {isLoading && (
        <ButtonContainer>
          <Loader type="Oval" color={colors.primary} height={40} width={40} />
        </ButtonContainer>
      )}
    </Layout>
  )
}
