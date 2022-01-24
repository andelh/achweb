import React, { Component } from 'react';
import styled from 'styled-components'

const ServicesContainer = styled.div`
background-color: black;
    padding: 50px 15% 5% 10%;
    font-size: 2.7rem;
    font-weight: 900;
    line-height: 130%;
`

const HeadingTitle = styled.h1`
    text-transform: uppercase;
    font-size: 18px;
    text-decoration: underline;
    /* color: black; */
`

const HeadingCopy = styled.p`
    margin: 20px 0;
    @import url('https://fonts.googleapis.com/css?family=Open+Sans');
    font-size: 1rem;
    font-weight: 300;
    font-family: 'Open Sans', sans-serif;
    line-height: 200%;
    /* color: black; */
`

class Services extends Component {
    render() { 
        return (
            <ServicesContainer>
                <HeadingTitle>So, what can i help you with?</HeadingTitle>
                
            </ServicesContainer>
        );
    }
}
 
export default Services;