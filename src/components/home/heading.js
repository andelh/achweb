import React, { Component } from 'react'

//NPM
import Typed from 'react-typed'
import styled from 'styled-components'
import TextLoop from 'react-text-loop'
import MainButton from '../main-button'

const HeadingContainer = styled.div`
	min-height: 50vh;

	@media (min-width: 550px) {
		margin-bottom: 40px;
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
	height: 95px;

	@media (min-width: 550px) {
		width: 100%;
	}
`
const TitleIntervalText = styled.span`
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
const IntervalTextCaption = styled.span`
	color: white;
	opacity: 0.7;
	font-size: 18px;
	line-height: 1.2;
	font-family: 'Inter', sans-serif;
	font-weight: 500;
`
const Break = styled.hr`
	background: white;
	opacity: 0.15;
	width: 100%;
`

class Heading extends Component {
	render() {
		return (
			<HeadingContainer>
				<Title>
					I can build your next
					<br />
					<TextLoop
						interval={1500}
						springConfig={{ stiffness: 140, damping: 10 }}
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
						springConfig={{ stiffness: 140, damping: 14 }}
						noWrap={false}
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
				<MainButton title="Let's Talk" />
				<Break />
			</HeadingContainer>
		)
	}
}

export default Heading
