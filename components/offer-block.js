import React, { Component } from 'react';
import styled from 'styled-components'
import SectionTitle from './section-title';
import CountUp from 'react-countup';
import Fade from 'react-reveal/Fade'
import ClaimButton from './claim-button';

const Block = styled.div`
    padding: 50px 0;
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`

const Copy = styled.p`
    text-align: center;
    font-family: 'Nunito', sans-serif;
    font-weight: ${props=> props.message ? 300 : 700};
    font-size: ${props=> props.message ? '1rem' : '1.9rem'};
    line-height: ${props=> props.message ? '150%' : '110%'};
`
const MiniCopy = styled.p`
    text-align: center;
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
    font-size: 0.75rem;
`
const Price = styled.p`
    color: #41DA31;
    font-weight: 600;
    font-size: 2.7rem;
    text-align: center;
    padding: 9px 0;
`

class OfferBlock extends Component {
    state = {}
    render() {
        return (
            <Block>
                <Fade bottom delay={500}>
                    <SectionTitle>Limited time offer</SectionTitle>
                </Fade>
                <Fade delay={500} cascade>
                    <Copy>Get your very own website for just</Copy>
                    <CountUp
                        start={0}
                        end={5999.00} 
                        prefix="TTD$"
                        decimals={2}
                        delay={0}>
                        {({ countUpRef }) => (
                            <div>
                                <Price ref={countUpRef} />
                            </div>
                        )}
                    </CountUp>
                    <MiniCopy>*Requires 40% downpayment</MiniCopy>
                    <Copy message>This package is intended for DJs, MCs, Radio Personalities & anyone in the creative entertainment space. Those who are serious about their personal and professional brand.</Copy>
                </Fade>
            </Block>
        );
    }
}

export default OfferBlock;