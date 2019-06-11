import React, { Component } from 'react';
import styled from 'styled-components'
import Layout from '../components/layout';
import OfferBlock from '../components/offer-block';
import BrandingBlock from '../components/branding-block';
import WhatsIncluded from '../components/whats-included';
import HowItWorks from '../components/how-it-works';
import EntertainmentCarousel from '../components/entertainment-carousel';

class EntertainerPage extends Component {
    state = {  }
    render() { 
        return (
            <Layout>
                <EntertainmentCarousel />
                <OfferBlock />
                <BrandingBlock />
                <WhatsIncluded />
                <HowItWorks />
            </Layout>
        );
    }
}

export default EntertainerPage;