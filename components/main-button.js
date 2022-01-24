import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
	border-radius: 2px;
	padding: 15px 30px;
	color: white;
	font-family: 'Inter';
	font-weight: 800;
	min-width: 160px;
	width: ${props => props.full && '100%'};
	cursor: pointer;

	background: rgb(1, 95, 208);
	background: linear-gradient(
		69deg,
		rgba(1, 95, 208, 1) 0%,
		rgba(30, 210, 252, 1) 100%
	);
	border: none;
	font-size: 18px;
	margin-bottom: 30px;

	@media (min-width: 550px) {
		min-width: 250px;
	}
`

const MainButton = props => (
	<Button full={props.full} onClick={() => props.clickHandler()}>
		{props.title}
	</Button>
)

export default MainButton
