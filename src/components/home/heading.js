import React, { Component } from 'react'

//NPM
import Typed from 'react-typed'
import styled from 'styled-components'
import TextLoop from 'react-text-loop'
import MainButton from '../main-button'
import { navigate } from 'gatsby'
import { motion } from 'framer-motion'

const HeadingContainer = styled(motion.div)`
	min-height: 50vh;
	margin-bottom: 40px;

	@media (min-width: 550px) {
	}
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
const Caption = styled.div`
	font-family: 'Inter';
	margin-bottom: 50px;
	/* height: 95px; */

	@media (min-width: 550px) {
		width: 100%;
	}
`
const TitleIntervalText = styled.div`
	display: block;
	width: 100%;
	::after {
		content: '';
		width: 105%;
		height: 14px;
		margin: 0 auto;
		margin-top: -13px;
		display: block;
		background: rgb(14, 153, 238);
		background: linear-gradient(
			63deg,
			rgba(14, 153, 238, 1) 0%,
			rgba(2, 105, 226, 1) 100%
		);
	}
`
const IntervalTextCaption = styled.div`
	width: 100%;
	color: white;
	opacity: 0.7;
	font-size: 16px;
	line-height: 1.2;
	font-family: 'Inter', sans-serif;
	font-weight: 500;
	display: block;

	@media (min-width: 550px) {
		font-size: 22px;
	}
`
const Break = styled.hr`
	background: white;
	opacity: 0.15;
	width: 100%;
`

class Heading extends Component {
	render() {
		return (
			<HeadingContainer
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, stiffness: 10 }}
			>
				<Title>
					I'm a freelance web developer & I can build your next
					<br />
					<TextLoop
						interval={1500}
						adjustingSpeed={0}
						// springConfig={{ stiffness: 140, damping: 10 }}
						mask
					>
						<TitleIntervalText>website</TitleIntervalText>
						<TitleIntervalText>online store</TitleIntervalText>
						<TitleIntervalText>mobile app</TitleIntervalText>
						<TitleIntervalText>web app</TitleIntervalText>
					</TextLoop>
				</Title>

				<Caption>
					<TextLoop
						interval={1500}
						adjustingSpeed={0}
						// springConfig={{ stiffness: 140, damping: 14 }}
						// noWrap={false}
					>
						<IntervalTextCaption>
							To help you reach more customers
						</IntervalTextCaption>
						<IntervalTextCaption>
							To help you make more sales
						</IntervalTextCaption>
						<IntervalTextCaption>
							To help you increase customer loyalty
						</IntervalTextCaption>
						<IntervalTextCaption>
							To help you streamline your operations
						</IntervalTextCaption>
					</TextLoop>
				</Caption>
				<MainButton
					clickHandler={() => navigate('/lets-talk')}
					title="Let's Talk"
				/>
				<Break />
			</HeadingContainer>
		)
	}
}

export default Heading
