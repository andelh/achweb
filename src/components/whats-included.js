import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'
import SectionTitle from './section-title';
import styled from 'styled-components'
import ListItem from './list-item';
import ClaimButton from './claim-button';

const Block = styled.div`
    padding: 50px 0;
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    text-align: center;
`
const Copy = styled.p`
    font-family: 'Nunito', sans-serif;
    font-size: 1.4rem;
    line-height: 120%;
    max-width: 750px;
`

class WhatsIncluded extends Component {
    state = {  }
    render() { 
        return (
            <Block>
                <Fade bottom delay={500}>
                    <SectionTitle>What's included</SectionTitle>
                </Fade>
                <Fade delay={500}>
                    <Copy>A robust landing page with all the features you need. Nothing more, nothing less</Copy>
                </Fade>
                    <ListItem><b>Blazing fast</b> landing page that looks good on mobile and desktop</ListItem>
                    <ListItem>Post your event schedule so that <b>fans know where to find you</b></ListItem>
                    <ListItem>Feature your latest mixes and other works, <b>playable right from your website</b></ListItem>
                    <ListItem>Booking and contact information readily available to <b>and you more clients</b></ListItem>
                    <ListItem>Links to your social media to further <b>grow your online presence</b></ListItem>

                <ClaimButton message="Claim this offer now"/>
            </Block>
        );
    }
}
 
export default WhatsIncluded;