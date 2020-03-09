import React from 'react'
import styled from 'styled-components'
import WorkItem from './work-item'

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`

const FeaturedWorkList = ({ portfolio }) => (
	<Container>
		{portfolio.map((item, index) => (
			<WorkItem key={index} portfolio={item.node} />
		))}
	</Container>
)

export default FeaturedWorkList

const dummy = [
	{
		color: '',
		image: ''
	},
	{
		color: '',
		image: ''
	},
	{
		color: '',
		image: ''
	},
	{
		color: '',
		image: ''
	},
	{
		color: '',
		image: ''
	},
	{
		color: '',
		image: ''
	}
]
