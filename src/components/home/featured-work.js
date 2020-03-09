import React from 'react'
import styled from 'styled-components'
import FeaturedWorkList from '../featured-work-list'

const Container = styled.div`
	margin-bottom: 40px;
`
const Title = styled.h2``
const Categories = styled.div``

const FeaturedWork = ({ portfolio }) => {
	return (
		<Container>
			<Title>Selected Work</Title>
			<Categories></Categories>
			<FeaturedWorkList portfolio={portfolio} />
		</Container>
	)
}

export default FeaturedWork
