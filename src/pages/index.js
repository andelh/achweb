import React, { useState } from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Heading from '../components/home/heading'
import PortfolioItem from '../components/portfolio-item'

//NPM

import Freelance from '../components/freelance'
import FeaturedWork from '../components/home/featured-work'
import ContactFlyout from '../components/contact-flyout'

class IndexPage extends React.Component {
	state = {}

	render() {
		const data = this.props.data.allWordpressPost.edges
		return (
			<Layout>
				<SEO
					title="Home"
					description="A web and software developer based in Trinidad and Tobago. My aim is to raise the bar in the quality of products that come out of our home soil. Contact me for work!"
					keywords={[
						`andel`,
						`husbands`,
						`developer`,
						`web`,
						`software`,
						`trinidad`,
						`tobago`,
						`wheredpump`,
						`yuplife`,
						`designer`,
						`react`,
						`javascript`,
						`swift`,
						`xcode`,
						`portfolio`,
						`projects`,
						`hire`
					]}
				/>
				<Heading showMenu={this.handleShowMenu} />
				<FeaturedWork portfolio={data} />
				<Freelance />
			</Layout>
		)
	}
}

export default IndexPage

export const PortfolioQuery = graphql`
	query($category: String = "Portfolio Item") {
		allWordpressPost(
			filter: { categories: { elemMatch: { name: { eq: $category } } } }
			sort: { fields: date, order: DESC }
		) {
			edges {
				node {
					id
					title
					slug
					acf {
						brand_colour
						website_url
						logo {
							source_url
						}
					}
				}
			}
		}
	}
`
