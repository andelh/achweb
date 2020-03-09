import React, { Component } from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

import Select from 'react-select'
import { motion } from 'framer-motion'
import MainButton from '../components/main-button'

const services = [
	{ value: 'Website', label: 'Website' },
	{ value: 'Mobile App', label: 'Mobile App' },
	{ value: 'UI/UX Design', label: 'UI/UX Design' }
]

const budget = [
	{ value: '$10,000+', label: '$10,000+' },
	{ value: '$60,000+', label: '$60,000+' }
]

const customStyles = {
	control: provided => ({
		...provided,
		background: '#131313',
		border: 'none',
		borderRadius: 4,
		color: 'white'
	}),
	option: (provided, state) => ({
		...provided,
		background: '#131313',
		color: state.isSelected ? '#036CE3' : 'white'
	}),
	menuList: (provided, state) => ({
		...provided,
		background: '#131313'
	}),
	input: (provided, state) => ({
		...provided,
		color: 'white',
		fontFamily: 'Inter'
	}),
	placeholder: (provided, state) => ({
		...provided,
		color: 'white'
	}),

	singleValue: (provided, state) => ({
		...provided,
		color: 'white',
		fontFamily: 'Inter'
	})
}

const Container = styled.div`
	background: black;
	padding: 50px 10% 5% 10%;
	position: fixed;
	z-index: 99;
	right: 0;
	top: 0;
	bottom: 0;
	overflow: scroll;
`
const Header = styled.div`
	margin-bottom: 40px;
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
const Caption = styled.p`
	font-size: 16px;
	opacity: 0.7;
`
const FormContainer = styled.div``
const FormItem = styled.div`
	margin-bottom: 30px;
`
const Label = styled.p`
	font-family: 'Inter';
	font-weight: 900;
	font-size: 16px;
	margin-bottom: 10px;
`
const Textarea = styled.textarea`
	background: #1f1f1f;
	border-radius: 4px;
	color: white;
	font-family: 'Inter';
	font-weight: 500;
	border: none;
	padding: 15px;
	font-size: 16px;
	line-height: 1.5;
	width: 100%;

	:focus {
		outline: 2px solid #036ce3;
	}
`
const Input = styled.input`
	background: #1f1f1f;
	border-radius: 4px;
	color: white;
	font-family: 'Inter';
	font-weight: 500;
	border: none;
	padding: 15px;
	font-size: 16px;
	line-height: 1.5;
	width: 100%;

	:focus {
		outline: 2px solid #036ce3;
	}
`

class ContactPage extends Component {
	state = {}
	render() {
		return (
			<Layout>
				<Header>
					<Title>Let's Talk</Title>
					<Caption>
						Tell me a bit about your project so we can get the ball
						rolling
					</Caption>
				</Header>
				<FormContainer>
					<FormItem>
						<Label>I'm looking for a:</Label>
						<Select
							placeholder="Please select"
							styles={customStyles}
							options={services}
						/>
					</FormItem>

					<FormItem>
						<Label>My budget is in the range of:</Label>
						<Select
							placeholder="Please select"
							styles={customStyles}
							options={budget}
						/>
					</FormItem>

					<FormItem>
						<Label>
							Describe your project as simply as possible:
						</Label>
						<Textarea placeholder="Start typing here..." rows={8} />
					</FormItem>

					<FormItem>
						<Label>Your Email:</Label>
						<Input required placeholder="john@example.com" />
					</FormItem>
					<MainButton full title="Submit" />
				</FormContainer>
			</Layout>
		)
	}
}

export default ContactPage
