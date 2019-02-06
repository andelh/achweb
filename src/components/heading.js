import React, { Component } from 'react';
import { fadeUp } from '../styles/keyframes'

//NPM
import Typed from 'react-typed'
import styled from 'styled-components'

const HeadingContainer = styled.div`
    padding: 100px 15% 5% 10%;
    font-size: 2.7rem;
    font-weight: 900;
    line-height: 130%;
`
const TypedContainer = styled.div`
    min-height: 250px;
`

const HeadingCopy = styled.p`
    margin: 20px 0;
    @import url('https://fonts.googleapis.com/css?family=Open+Sans');
    font-size: 1rem;
    font-weight: 300;
    font-family: 'Open Sans', sans-serif;
    line-height: 200%;
    // transform: translateY(-20px);
    animation: ${fadeUp} 2s ease;
`

const Red = styled.span`
    color: #A20303;
`

class Heading extends Component {
    render() {
        return (
            <HeadingContainer>
                <TypedContainer>
                    <Typed
                        strings={[
                            'hey there!',
                            // 'pleased to meet you :)',
                            // 'in case youre wondering..',
                            'i can build your next website.',
                            'i can build your next online store.',
                            'i can build your next web app.',
                            'i can build your next mobile app.',
                            // 'together...',
                            // 'together...we can design',
                            // 'together...we can build',
                            // 'together...we can do..',
                            // 'together...we can do..anything!'
                        ]}
                        typeSpeed={60}
                        backSpeed={60}

                    />
                </TypedContainer>
                <HeadingCopy>I am a web and software developer based in <Red>Trinidad</Red> & <Red>Tobago</Red>🇹🇹. My goal is to deliver “higher than expected” quality websites & apps. See for yourself below!</HeadingCopy>
            </HeadingContainer>
        );
    }
}

export default Heading;