import React, { Component } from 'react'
import logo from '../images/AH.png'

//NPM
import styled from 'styled-components'
import { Link } from 'gatsby'
import HamburgerMenu from 'react-hamburger-menu'
import { colors } from '../styles/colors'
import Menu from './menu'

const NavContainer = styled.div`
	background-color: #030405;
	box-shadow: 0 2px 7px rgba(0, 0, 0, 0.65);
	width: 100%;
	padding: 30px;
	position: fixed;
	z-index: 100;

	padding: 30px 10% 30px 10%;
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
`
const MenuContainer = styled.div`
	cursor: pointer;
`

class Navbar extends Component {
	state = {
		isOpen: false,
	}
	render() {
		return (
			<NavContainer>
				<InnerContainer>
					<Link to="/">
						<NavLogo src={logo} />
					</Link>
					<MenuContainer>
						<HamburgerMenu
							isOpen={this.state.isOpen}
							menuClicked={() =>
								this.setState({ isOpen: !this.state.isOpen })
							}
							width={23}
							height={15}
							strokeWidth={2}
							rotate={0}
							color={colors.primary}
							borderRadius={0}
							animationDuration={0.5}
						/>
						<Menu isOpen={this.state.isOpen} />
					</MenuContainer>
				</InnerContainer>
			</NavContainer>
		)
	}
}

export default Navbar
