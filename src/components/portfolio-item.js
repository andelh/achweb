import React, { Component } from 'react';

//NPM
import styled from 'styled-components';

const PortfolioContainer = styled.div`
	width: 100%;
	padding: 20%;
	position: relative;
	background-color: ${props =>
		(props.color === 'jtg' && '#FFFFFF') ||
		(props.color === 'yuma' && '#152B52') ||
		(props.color === 'gzE' && 'black') ||
		(props.color === 'wdp' && 'white') ||
		(props.color === 'yup' && 'black') ||
		(props.color === 'mei' && '#170021') ||
		(props.color === 'foodie' && '#1F0308') ||
		(props.color === 'cmj' && '#330219') ||
		(props.color === '51' && '#27220F')};
	flex-basis: 100%;

	@media (min-width: 700px) {
		flex-basis: 50%;
	}
`;

const PortfolioImg = styled.img`
	width: 100px;
	height: 100px;
	object-fit: contain;
	margin: 0 auto;
	display: block;

	&:hover {
		filter: blur(8px);
		-webkit-filter: blur(8px);
	}
`;

const PortfolioContent = styled.div`
	width: 100%;
	text-align: center;
	padding: 3%;
	height: 100%;
	z-index: 20;
	color: white;
	top: 0;
	opacity: 0;
	transition: 0.8s ease;
	left: 0;
	// display: none;
	display: inline-grid;
	align-content: center;
	position: absolute;
	background-color: black;

	&:hover {
		display: inline-grid;
		opacity: 0.9;
	}
`;

const ContentTitle = styled.h1`
	font-size: 19px;
`;
const ContentCopy = styled.p`
	font-family: Avenir;
	font-size: 14px;
`;

const ContentButton = styled.button`
	color: white;
	font-family: Avenir;
	font-weight: bolder;
	padding: 10px 15px;
	// background-color: #Fc444e;
	border: none;
	border-radius: 5px;
	display: block;
	width: 100%;
	cursor: pointer;
	text-transform: uppercase;
	background-color: ${props =>
		(props.color === 'jtg' && '#C81313') ||
		(props.color === 'yuma' && '#FBC901') ||
		(props.color === 'gzE' && '#D3031E') ||
		(props.color === 'wdp' && '#fc444e') ||
		(props.color === 'yup' && '#D71681') ||
		(props.color === 'mei' && '#CDA7FF') ||
		(props.color === 'foodie' && '#9C1028') ||
		(props.color === 'ea' && '#C81313') ||
		(props.color === 'cmj' && '#ED0A75') ||
		(props.color === '51' && '#B59721')};

	&:focus {
		outline: none;
	}
`;

class PortfolioItem extends Component {
	render() {
		return (
			<PortfolioContainer color={this.props.color}>
				<PortfolioImg src={this.props.url} />
				<PortfolioContent>
					<ContentTitle>{this.props.title}</ContentTitle>
					<ContentCopy>{this.props.copy}</ContentCopy>
					<a
						target="_blank"
						style={{ color: 'inherit', textDecoration: 'none' }}
						href={this.props.projectUrl}
					>
						<ContentButton color={this.props.color}>
							See Project
						</ContentButton>
					</a>
				</PortfolioContent>
			</PortfolioContainer>
		);
	}
}

export default PortfolioItem;
