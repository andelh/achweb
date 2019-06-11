import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import styled from 'styled-components'


import penny from '../images/penny.jpg'
import charlotte from '../images/charlotte.jpg'
import chucky from '../images/chucky.jpg'
import aswaad from '../images/aswaad.jpg'


const SlideContainer = styled.div`
    width: 100%; 
    max-height: 650px;
    min-height: 290px;
`
const SlideInfo = styled.div`

`
const SlideCallout = styled.h1`
    color: black;
    background-color: white;
    font-size: 23px;
    
    /* justify-self: flex-end; */
    /* align-self: flex-end; */
    /* position: relative; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    text-shadow: 0 0 25px rgba(0,0,0,0.45);
    font-family: "Helvetica";
    font-weight: bolder;
    width: 80%;
    padding: 20px 20px;

    @media (min-width: 375px) {
        font-size: 25px;
    }

    @media (min-width: 500px) {
        font-size: 35px;
    }

    @media (min-width: 625px) {
        font-size: 45px;
    }

    @media (min-width: 900px) {
        font-size: 50px;
    }
`  

const Container = styled.div`
    padding: 0 0 0 0;
`

class EntertainmentCarousel extends Component {
    state = {  }
    responsive = {
        0: { items: 1 },
        600: { items: 2 },
        1024: { items: 3 },
    };
    onSlideChange(e) {
        
    };

    onSlideChanged(e) {
        
    };

    galleryItems() {
        return (
            [{key: 1, img: penny, text: "THE ENTERTAINER PACKAGE"},{key: 2, img: charlotte, text: "THE ENTERTAINER PACKAGE"}, {key: 3, img: chucky, text: "THE ENTERTAINER PACKAGE"} ].map((item, i) => (
                <SlideContainer key={`key-${item.key}`}>
                    <img style={{width: '100%'}} src={item.img} />
                    <SlideInfo>
                        <SlideCallout>{item.text}</SlideCallout>
                    </SlideInfo>
                </SlideContainer>
            ))
        )
    };
    render() { 
        const items = this.galleryItems();

        return (
        <Container>
            <AliceCarousel
                    items={items}
                    duration={3000}
                    autoPlay={true}
                    startIndex={0}
                    dotsDisabled={false}
                    stopAutoPlayOnHover={false}
                    buttonsDisabled={true}
                    fadeOutAnimation={true}
                    mouseDragEnabled={false}
                    playButtonEnabled={false}
                    autoPlayInterval={3000}
                    autoPlayDirection="ltr"
                    disableAutoPlayOnAction={false}
                    swipeDisabled={false}
                    onSlideChange={this.onSlideChange}
                    onSlideChanged={this.onSlideChanged}
                />
        </Container>);
    }
}
 
export default EntertainmentCarousel;