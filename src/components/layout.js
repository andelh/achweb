import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import './layout.css'
import Navbar from './navbar'
import Footer from './footer'
if (typeof window !== 'undefined') {
	require('pace-progressbar')
	require('pace-progressbar/themes/blue/pace-theme-minimal.css')
}

const Main = styled.main`
	padding: 100px 10% 5% 10%;
	max-width: 1100px;
	margin: 0 auto;
`

const Layout = ({ children, noFooter }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={data => (
			<>
				<Navbar />
				<Main>{children}</Main>
				{!noFooter && <Footer />}
			</>
		)}
	/>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired
}

export default Layout
