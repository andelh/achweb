import React, { Component } from 'react';
import styled from 'styled-components'
import SectionTitle from './section-title';
import CountUp from 'react-countup';
import Fade from 'react-reveal/Fade'

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
    font-weight: 700;
    font-size: 1.9rem;
    line-height: 110%;
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
                    {/* <CountUp start={0} end={5999.00} delay={0}>
                        {({ countUpRef }) => (
                            <Price>TTD${countUpRef}</Price>
                        )}
                    </CountUp> */}
                    <MiniCopy>*Requires 40% downpayment</MiniCopy>
                </Fade>
            </Block>
        );
    }
}

export default OfferBlock;