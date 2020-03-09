import React, { Component } from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import MainButton from '../components/main-button'

const Heading = styled.section``
const Logo = styled.img`
	padding: 20px;
`
const Break = styled.hr`
	background: white;
	opacity: 0.2;
	width: 100%;
`
const ServicesSection = styled.section`
	margin-bottom: 30px;
`
const Subtitle = styled.h5`
	text-transform: uppercase;
	font-size: 16px;
`
const ServiceItem = styled.p`
	font-weight: 300;
	font-size: 16px;
	margin-bottom: 5px;
`
const ChallengeSection = styled.section`
	margin-bottom: 30px;
	margin-top: 50px;
`
const WorkDoneSection = styled.section``
const Title = styled.h1`
	font-size: 28px;
	margin-bottom: 20px;
`
const Copy = styled.p`
	font-size: 16px;
	line-height: 1.6;
	opacity: 0.9;
	font-weight: 300;
`

class PortfolioPage extends Component {
	state = {}
	render() {
		return (
			<Layout>
				<Heading>
					<Logo src="https://www.yumavibe.com/static/logo-5053568cb4a69c45383813a60dfaa9a2.png" />
					<Break />
				</Heading>
				<ServicesSection>
					<Subtitle>Services Prodivded</Subtitle>
					<ServiceItem>Strategy</ServiceItem>
					<ServiceItem>Design & UX</ServiceItem>
					<ServiceItem>Implementtion</ServiceItem>
				</ServicesSection>
				<MainButton full title="Visit Website" />
				<ChallengeSection>
					<Title>The Challenge</Title>
					<Copy>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Curabitur quis turpis ac lacus finibus ultrices at sed
						ex. Nullam pellentesque justo id odio commodo, nec
						elementum velit cursus. Nam eu turpis metus. Aenean
						ultrices interdum purus id suscipit. Sed volutpat
						lobortis libero quis tempor. Fusce et eros nec tortor
						aliquet lacinia. Cras massa lectus, suscipit sit amet
						nibh ac, dapibus vulputate ligula. Sed ipsum lorem,
						euismod auctor diam non, ultricies porta eros.
					</Copy>
				</ChallengeSection>
				<WorkDoneSection>
					<Title>Work Done</Title>
					<Copy>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Curabitur quis turpis ac lacus finibus ultrices at sed
						ex. Nullam pellentesque justo id odio commodo, nec
						elementum velit cursus. Nam eu turpis metus. Aenean
						ultrices interdum purus id suscipit. Sed volutpat
						lobortis libero quis tempor. Fusce et eros nec tortor
						aliquet lacinia. Cras massa lectus, suscipit sit amet
						nibh ac, dapibus vulputate ligula. Sed ipsum lorem,
						euismod auctor diam non, ultricies porta eros.
					</Copy>
				</WorkDoneSection>
			</Layout>
		)
	}
}

export default PortfolioPage
