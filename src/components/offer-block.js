import React, { Component } from 'react';
import styled from 'styled-components'
import SectionTitle from './section-title';


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
    state = {  }
    render() { 
        return (
            <Block>
                <SectionTitle>Limited time offer</SectionTitle>
                <Copy>Get your very own website for just</Copy>
                <Price>TTD$5999.00</Price>
                {/* <Copy>in just 20 days</Copy> */}
                <MiniCopy>*Requires 40% downpayment</MiniCopy>
                <hr style={{opacity: 0.2, backgroundColor: 'white'}} />
            </Block>
        );
    }
}
 
export default OfferBlock;