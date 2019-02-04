import React, { Component } from 'react';

//NPM
import Typed from 'react-typed'
import styled from 'styled-components'

const HeadingContainer = styled.div`
    padding: 10% 15% 5% 10%;
    font-size: 2.9rem;
    font-weight: 900;
    line-height: 130%;
`
const TypedContainer = styled.div`
    min-height: 150px;
`

const HeadingCopy = styled.p`
    margin: 20px 0;
    @import url('https://fonts.googleapis.com/css?family=Open+Sans');
    font-size: 1rem;
    font-weight: 300;
    font-family: 'Open Sans', sans-serif;
    line-height: 200%;
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
                            'i can design your next web app.',
                            'i can design your next mobile app.',
                            'i can build your next web app.',
                            'i can build your next mobile app.',
                            'together...',
                            'together...we can design',
                            'together...we can build',
                            'together...we can do..',
                            'together...we can do..anything!'
                        ]}
                        typeSpeed={50}
                        backSpeed={50}

                    />
                </TypedContainer>
                <HeadingCopy>I am a web and software developer based in <Red>Trinidad</Red> & <Red>Tobago</Red>. My goal is to deliver “higher than expected” quality apps & websites. Take a look at my portfolio below</HeadingCopy>
            </HeadingContainer>
        );
    }
}

export default Heading;