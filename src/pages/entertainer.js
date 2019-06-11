import React, { Component } from 'react';
import styled from 'styled-components'
import Layout from '../components/layout';
import OfferBlock from '../components/offer-block';
import BrandingBlock from '../components/branding-block';
import WhatsIncluded from '../components/whats-included';
import HowItWorks from '../components/how-it-works';
import EntertainmentCarousel from '../components/entertainment-carousel';

const Container = styled.div`
    padding: 0 10%;
`

class EntertainerPage extends Component {
    state = {  }
    render() { 
        return (
            <Layout>
                <EntertainmentCarousel />
                <Container>
                    <OfferBlock />
                    <hr style={{opacity: 0.2, backgroundColor: 'white'}} />
                    <BrandingBlock />
                    <hr style={{opacity: 0.2, backgroundColor: 'white'}} />
                    <WhatsIncluded />
                    <hr style={{opacity: 0.2, backgroundColor: 'white'}} />
                    <HowItWorks />
                    <hr style={{opacity: 0.2, backgroundColor: 'white'}} />
                </Container>
            </Layout>
        );
    }
}

export default EntertainerPage;