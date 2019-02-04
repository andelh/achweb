import React, { Component } from 'react';

//NPM
import styled from 'styled-components'

const PortfolioContainer = styled.div`
    width: 100%;
    padding: 20%;
    position: relative;
    background-color: ${props => (props.color === 'wdp' && 'white') || (props.color === 'yup' && 'black') || (props.color === 'mei' && '#170021') || (props.color === 'foodie' && '#1F0308') || (props.color === 'cmj' && '#330219')};
`

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
`

const PortfolioContent = styled.div`
    width: 100%;
    text-align: center;
    padding: 3%;
    height: 100%;
    z-index: 20;
    color: white;
    top: 0;
    opacity: 0;
    transition: 1s ease;
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
    
`

const ContentTitle = styled.h1`
    font-size: 19px;

`
const ContentCopy = styled.p`
    font-family: Avenir;
    font-size: 14px;
`

class PortfolioItem extends Component {
    
    render() { 
        return (
            <PortfolioContainer color={this.props.color}>
                <PortfolioImg src={this.props.url} />
                <PortfolioContent>
                    <ContentTitle>{this.props.title}</ContentTitle>
                    <ContentCopy>{this.props.copy}</ContentCopy>
                </PortfolioContent>
            </PortfolioContainer>
        );
    }
}
 
export default PortfolioItem;