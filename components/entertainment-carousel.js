import React, { Component } from "react"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import styled from "styled-components"

const SlideContainer = styled.div`
  width: 100%;
  max-height: 600px;
  min-height: 290px;
`
const SlideInfo = styled.div`
  display: flex;
  flex-direction: column;
`
const SlideIntro = styled.h1`
  font-size: 0.875rem;
  text-transform: uppercase;
  font-family: "Nunito", sans-serif;
  color: white;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  text-shadow: 0 0 25px rgba(0, 0, 0, 0.45);
  font-weight: bolder;
  width: 80%;
  padding: 20px 20px;
`
const SlideCallout = styled.h1`
  color: black;
  background-color: white;
  font-size: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  text-shadow: 0 0 25px rgba(0, 0, 0, 0.45);
  font-family: "Helvetica";
  font-weight: bolder;
  width: 80%;
  padding: 20px 10px;

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
    font-size: 40px;
  }
`

const Container = styled.div`
  padding: 0 0 0 0;
  padding-top: 50px;
`

class EntertainmentCarousel extends Component {
  state = {}
  responsive = {
    0: { items: 1 },
    600: { items: 2 },
    1024: { items: 3 },
  }
  onSlideChange(e) {}

  onSlideChanged(e) {}

  galleryItems() {
    return [
      { key: 1, img: "/penny.jpg", text: "THE ENTERTAINER PACKAGE" },
      { key: 2, img: "/charlotte.jpg", text: "THE ENTERTAINER PACKAGE" },
      { key: 3, img: "/chucky.jpg", text: "THE ENTERTAINER PACKAGE" },
      { key: 4, img: "/aswaad.jpg", text: "THE ENTERTAINER PACKAGE" },
    ].map((item, i) => (
      <SlideContainer key={`key-${item.key}`}>
        <img style={{ width: "100%" }} src={item.img} />
        <SlideInfo>
          <SlideCallout>{item.text}</SlideCallout>
        </SlideInfo>
      </SlideContainer>
    ))
  }
  render() {
    const items = this.galleryItems()

    return (
      <Container>
        <AliceCarousel
          items={items}
          duration={3000}
          autoPlay={true}
          startIndex={0}
          dotsDisabled={true}
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
      </Container>
    )
  }
}

export default EntertainmentCarousel
