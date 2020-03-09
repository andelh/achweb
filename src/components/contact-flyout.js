import React from 'react'
import styled from 'styled-components'

const Container = styled.div``
const Header = styled.div``
const Title = styled.h1``
const Caption = styled.p``

const ContactFlyout = props => {
	return (
		<Container>
			<Header>
				<Title>Let's Talk</Title>
				<Caption>
					Tell me a bit about your project so we can get the ball
					rolling
				</Caption>
			</Header>
		</Container>
	)
}

export default ContactFlyout
