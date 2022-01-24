import React, { Component } from 'react';
import styled from 'styled-components'
import Layout from '../components/layout';
import OfferBlock from '../components/offer-block';
import BrandingBlock from '../components/branding-block';
import WhatsIncluded from '../components/whats-included';
import HowItWorks from '../components/how-it-works';
import EntertainmentCarousel from '../components/entertainment-carousel';
import SEO from '../components/seo';
import Footer from "../components/footer";

const Container = styled.div`
    padding: 0 10%;
`

class EntertainerPage extends Component {
    state = {  }
    render() { 
        return (
            <Layout>
                <SEO title="Entertainer Package" description="A website package aimed at DJ's, MC's, Producers and Entertainers alike! All for the low price of TTT$5999.00." keywords={[`entertainer`,`entertainment`,`DJ`,`andel`,`husbands`,`developer`,`web`,`software`,`trinidad`,`tobago`,`wheredpump`,`yuplife`,`designer`,`react`,`javascript`,`swift`,`xcode`,`portfolio`,`projects`,`hire`]}/>
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
                <Footer />
            </Layout>
        );
    }
}

export default EntertainerPage;