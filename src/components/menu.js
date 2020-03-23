import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'

const Container = styled(motion.div)`
	background: #000;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	height: 100vh;
	z-index: -1;
	padding: 30px;
	width: 70vw;
`
const Overlay = styled(motion.div)`
	background: rgba(0, 0, 0, 0.5);
	/* opacity: 0.7; */
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	height: 100vh;
	z-index: -1;
	width: 100vw;
`
const MenuList = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	list-style: none;
	padding-top: 50px;
`
const MenuItem = styled(motion.li)`
	color: white;

	font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
		Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: 800;
	font-size: 18px;
	text-decoration: none;
	padding: 15px;
`
const spring = {
	type: 'spring',
	damping: 100,
	stiffness: 100
}

const menu = {
	open: {
		opacity: 1,
		x: 0,
		transition: { staggerChildren: 0.07, delayChildren: 0.2, spring }
	},
	closed: {
		opacity: 0,
		x: '100%',
		transition: {
			staggerChildren: 0.05,
			staggerDirection: -1,
			spring,
			when: 'afterChildren'
		}
	}
}
const overlay = {
	open: { opacity: 1, x: 0 },
	closed: { opacity: 0 }
}
const listItem = {
	open: {
		opacity: 1,
		x: 0,
		transition: {
			x: { stiffness: 10 }
		}
	},
	closed: {
		opacity: 0,
		x: 50,
		transition: {
			x: { stiffness: 1000, velocity: -100 }
		}
	}
}

const Menu = ({ isOpen }) => (
	<Container
		variants={menu}
		initial="closed"
		animate={isOpen ? 'open' : 'closed'}
		transition={spring}
	>
		<Overlay variants={overlay} />
		<MenuList>
			{menuList.map((item, index) => (
				<Link key={index} to={item.link}>
					<MenuItem
						initial="closed"
						variants={listItem}
						to={item.link}
					>
						{item.title}
					</MenuItem>
				</Link>
			))}
		</MenuList>
	</Container>
)

export default Menu

const menuList = [
	{
		title: 'Home',
		link: '/'
	},
	{
		title: 'See my work',
		link: '/portfolio'
	},
	{
		title: 'Hire me',
		link: '/lets-talk'
	}
]
