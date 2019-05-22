import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components'
import { FaArrowDown } from 'react-icons/fa'

const upDown = keyframes`
    from {
        transform: translateY(-20px)
    }

    to {
        transform: translateY(0px)
    }
`

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

const IconHolder = styled.div`
    margin-top: 25px;
    margin-bottom: 0;
    animation: ${upDown} 1.5s ease-in-out alternate-reverse infinite;

`

class Freelance extends Component {
    state = {}
    render() {
        return (
            <FreelanceContainer>
                <HeadingTitle>What does freelance mean?</HeadingTitle>
                <HeadingCopy>For you, this means <b><u>unbeatable pricing</u></b> and more <b><u>involvement</u></b> in the overall design and development process. Being freelance means that I am not tied to any agency or company and we can work together to find a deal that works for you!</HeadingCopy>
                <HeadingCopy>Here are a few projects I've worked on recently. Hover or tap on each one to learn a bit more about them.</HeadingCopy>
                <IconHolder>
                    <FaArrowDown size={35} style={{color: 'black', margin: '20px auto', display: 'block'}} />
                </IconHolder>
            </FreelanceContainer>
        );
    }
}

export default Freelance;
