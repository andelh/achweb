import React, { Component } from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import { Link, navigate } from 'gatsby'
import SEO from '../components/seo'
import MainButton from '../components/main-button'

const MainContainer = styled.div`
	text-align: center;
	max-width: 1200px;
	margin: 0 auto;
	padding: 100px 30px;
	min-height: 100vh;
`
const Title = styled.h1`
	font-family: 'Inter', Georgia, serif;
	font-weight: 700;
	font-size: 2.8rem;
	margin: 0 auto;
	margin-bottom: 30px;
`
const ThanksCopy = styled.p`
	max-width: 450px;
	margin: 20px auto;

	p {
		font-size: 1.3rem;
		line-height: 150%;
	}
`
class ThankYouPage extends Component {
	state = {}
	render() {
		return (
			<Layout>
				<SEO title="Thank You" />
				<MainContainer>
					<Title>Thanks for getting in touch!</Title>
					<ThanksCopy>
						I will be reviewing your project and getting in touch
						with you very soon!
					</ThanksCopy>
					<MainButton
						title="Go Home"
						clickHandler={() => navigate('/')}
					/>
				</MainContainer>
			</Layout>
		)
	}
}

export default ThankYouPage
