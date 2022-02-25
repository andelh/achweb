import React from "react"
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaWhatsappSquare,
} from "react-icons/fa"

//NPM
import styled from "styled-components"
import MainButton from "./main-button"
import { useRouter } from "next/router"

const FooterWrapper = styled.div`
  width: 100%;
  text-align: center;
  color: white;
  padding: 30px;
`
const FooterGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  font-size: 28px;
  font-style: italic;
`

const SocialsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  max-width: 300px;
  width: 100%;
  margin: 20px auto;
`

const SocialIcon = styled.div`
  font-size: 1.8rem;
  display: inline;
  transition: 0.5s ease;

  &:hover {
    color: #0e99ee;
  }
`
export default function Footer() {
  const router = useRouter()
  return (
    <FooterWrapper>
      <FooterGroup>
        {/* <Title>Ready to work?</Title>
        <MainButton
          clickHandler={() => router.push("/lets-talk")}
          title="Let's Talk"
        /> */}
        <SocialsContainer>
          <SocialIcon>
            <a
              style={{ color: "inherit" }}
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.facebook.com/andel.husbands"
            >
              <FaFacebookF />
            </a>
          </SocialIcon>
          <SocialIcon>
            <a
              style={{ color: "inherit" }}
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/andelhusbands_/"
            >
              <FaInstagram />
            </a>
          </SocialIcon>
          <SocialIcon>
            <a
              style={{ color: "inherit" }}
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/AndelHusbands"
            >
              <FaTwitter />
            </a>
          </SocialIcon>
          <SocialIcon>
            <a
              style={{ color: "inherit" }}
              rel="noopener noreferrer"
              target="_blank"
              href="https://wa.me/18687188625"
            >
              <FaWhatsappSquare />
            </a>
          </SocialIcon>
          <SocialIcon>
            <a
              style={{ color: "inherit" }}
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/andel-husbands-013198120"
            >
              <FaLinkedinIn />
            </a>
          </SocialIcon>
          <SocialIcon>
            <a
              style={{ color: "inherit" }}
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.github.com/andelh"
            >
              <FaGithub />
            </a>
          </SocialIcon>
          {/* <SocialIcon><a style={{color: 'inherit'}} rel="noopener noreferrer" target="_blank" href="mailto:andelhusbands@gmail.com"><FaRegEnvelope /></a></SocialIcon> */}
        </SocialsContainer>
        <p
          style={{
            fontSize: "14px",
            opacity: 0.7,
            color: "white",
            margin: "5px 0",
          }}
        >
          © 2022 Andel Husbands. All Rights Reserved.
        </p>
      </FooterGroup>
    </FooterWrapper>
  )
}
