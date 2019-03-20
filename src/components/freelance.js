import React, { Component } from 'react';
import styled from 'styled-components'

const FreelanceContainer = styled.div`
    background-color: white;
    padding: 50px 15% 5% 10%;
    font-size: 2.7rem;
    font-weight: 900;
    line-height: 130%;
`

const HeadingTitle = styled.h1`
    text-transform: uppercase;
    font-size: 18px;
    text-decoration: underline;
    color: black;
`

const HeadingCopy = styled.p`
    margin: 20px 0;
    @import url('https://fonts.googleapis.com/css?family=Open+Sans');
    font-size: 1rem;
    font-weight: 300;
    font-family: 'Open Sans', sans-serif;
    line-height: 200%;
    color: black;
`

class Freelance extends Component {
    state = {}
    render() {
        return (
            <FreelanceContainer>
                <HeadingTitle>What does freelance mean?</HeadingTitle>
                <HeadingCopy>For you, this means unbeatable pricing and more involvement in the overall design and development process. Being freelance means that I am not tied to any agency or company and we can work together to find a deal that works for you!</HeadingCopy>
            </FreelanceContainer>
        );
    }
}

export default Freelance;