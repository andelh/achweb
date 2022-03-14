import React, { Component, useState, useRef } from "react" //NPM

//NPM
import styled from "styled-components"
import Link from "next/link"
import HamburgerMenu from "react-hamburger-menu"
import { colors } from "../styles/colors"
import Menu from "./menu"
import { motion } from "framer-motion"
import { useRouter } from "next/router"

const NavContainer = styled.div`
  background-color: #030405;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.65);
  width: 100%;
  position: fixed;
  z-index: 100;
  padding: 30px 10% 30px 10%;

  @media (max-width: 550px) {
    padding: 20px;
  }
`
const InnerContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const NavLogo = styled.img`
  margin: 0 auto;
  display: block;
  width: 200px;

  @media (max-width: 550px) {
    width: 160px;
  }
`
const MenuContainer = styled.div`
  cursor: pointer;
  color: white;
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 10px;

  a {
    text-decoration: none;
  }

  @media (max-width: 550px) {
    gap: 10px;
  }
`
const LinkItem = styled(motion.a)`
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.active ? colors.primary : "white")};
`
const NavText = styled.a`
  margin: 0;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Vorkurs";
  font-weight: 600;
  letter-spacing: 5px;
  font-size: 15px;
  cursor: pointer;
`
const Navbar = () => {
  const router = useRouter()

  return (
    <NavContainer>
      <InnerContainer>
        <Link href="/">
          <NavText>Andel Husbands</NavText>
        </Link>
        <MenuContainer>
          <Link href="/blog">
            <LinkItem
              active={router.pathname == "/blog"}
              whileHover={{
                color: colors.primary,
              }}
            >
              Blog
            </LinkItem>
          </Link>
          <Link href="/lets-talk">
            <LinkItem
              active={router.pathname == `/lets-talk`}
              whileHover={{
                color: colors.primary,
              }}
            >
              Work with me
            </LinkItem>
          </Link>
          {/* <HamburgerMenu
           isOpen={this.state.isOpen}
           menuClicked={() => this.setState({ isOpen: !this.state.isOpen })}
           width={23}
           height={15}
           strokeWidth={2}
           rotate={0}
           color={colors.primary}
           borderRadius={0}
           animationDuration={0.5}
          />
          <Menu isOpen={this.state.isOpen} /> */}
        </MenuContainer>
      </InnerContainer>
    </NavContainer>
  )
}

export default Navbar
