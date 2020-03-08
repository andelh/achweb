import React, { Component } from 'react'
import { fadeUp } from '../styles/keyframes'

//NPM
import Typed from 'react-typed'
import styled from 'styled-components'
import TextLoop from 'react-text-loop'
import { Link } from 'gatsby'

const HeadingContainer = styled.div`
	padding: 100px 15% 5% 10%;
	font-size: 7vw;
	font-weight: 900;
	line-height: 130%;
	/* min-height: 50vh; */
`
const Title = styled.h1`
	font-size: 48px;
	font-weight: 900;
	/* max-width: 70%; */
`
const Caption = styled.div``
const IntervalText = styled.span`
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
	opacity: 0.8;
	font-size: 18px;
	line-height: 1.2;
	font-weight: 500;
`

class Heading extends Component {
	render() {
		return (
			<HeadingContainer>
				<Title>
					i can build your next
					<br />
					<TextLoop
						interval={1500}
						springConfig={{ stiffness: 140, damping: 10 }}
					>
						<IntervalText>website</IntervalText>
						<IntervalText>online store</IntervalText>
						<IntervalText>mobile app</IntervalText>
						<IntervalText>web app</IntervalText>
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
				{/* <button>Get a free quote</button> */}
			</HeadingContainer>
		)
	}
}

export default Heading
