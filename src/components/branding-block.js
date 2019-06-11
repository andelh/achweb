import React, { Component } from 'react';
import styled from 'styled-components'
import SectionTitle from './section-title';

import djWorld from '../images/DJWorld.png'
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
`

const Image = styled.img`
    margin: 0 auto;
    width: 180px;
    text-align: center;
    display: block;
`

class BrandingBlock extends Component {
    state = {  }
    render() { 
        return (
            <Block>
                <SectionTitle>Powerful Branding</SectionTitle>
                <Copy>You already know the importance of a <b>STRONG</b> brand for your craft. We can help you elevate your brand and make it a global one by bringing it to the web.</Copy>
                <Image src={djWorld} />
                <ClaimButton />
                <hr style={{opacity: 0.2, backgroundColor: 'white'}} />
            </Block>
        );
    }
}
 
export default BrandingBlock;