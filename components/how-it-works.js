import React, { Component } from 'react';
import styled from 'styled-components'
import SectionTitle from './section-title';
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

//Images
import payment from '../images/payment.png'
import design from '../images/design.png'
import web from '../images/web.png'
import ClaimButton from './claim-button';

const Block = styled.div`
    display: flex;
    flex-direction: column;
`
const Image = styled.img`
    height: 100px;
    width: auto;
`
const PhaseTitle = styled.h1`
    color: #FE9C05;
    font-size: 0.75rem;
    text-transform: uppercase;
    font-weight: 300;
`
const PhaseCopy = styled.p`
    font-size: 0.9rem;
    font-weight: 600;
    text-align: center;
    padding: 0 20px;
`
const Phases = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 650px) {
        flex-direction: row;

    }
`
const PhaseContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    text-decoration: center;
    justify-content: center;
    align-items: center;
`

class HowItWorks extends Component {
    state = {  }
    render() { 
        return (
            <Block>
                <SectionTitle>How it works</SectionTitle>
                
                <Phases>
                    {
                        phases.map(phase=>(
                            <PhaseBlock key={phase.id} src={phase.src} id={phase.id} copy={phase.copy} />
                        ))
                    }
                </Phases>
                <ClaimButton message="Get started"/>
            </Block>
        );
    }
}

class PhaseBlock extends Component {
    render() {
        return (
            <PhaseContainer>
                <Zoom><Image src={this.props.src} /></Zoom>
                <Fade><PhaseTitle>Phase {this.props.id}</PhaseTitle></Fade>
                <Fade bottom delay={800}><PhaseCopy>{this.props.copy}</PhaseCopy></Fade>
            </PhaseContainer>
        );
    }
}

const phases = [
    {
        src: payment,
        id: 1,
        copy: "After the downpayment is made, I begin mocking up your custom site design"
    },
    {
        src: design,
        id: 2,
        copy: "We go through the design and tweak it to your liking"
    },
    {
        src: web,
        id: 3,
        copy: "We begin coding and get your site live within two weeks"
    },
]

export default HowItWorks;