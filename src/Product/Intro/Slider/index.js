import React, { Component } from 'react';
import styled from 'styled-components';

const SliderList = styled.div `
  display: flex;
  overflow-x: auto;
`

const SliderImg = styled.img `
  display: block;
  width: 432px;
  height: 576px;
  padding-left: 0;
`
//images
const slide1 = process.env.PUBLIC_URL + '/images/bitmap@3x.jpg';
const slide2 = process.env.PUBLIC_URL + '/images/slide2.png';
const slide3 = process.env.PUBLIC_URL + '/images/slide3.jpg';
const slide4 = process.env.PUBLIC_URL + '/images/slide4.jpg';

class Slider extends Component {
  render() {
    return (
      <SliderList>
        <SliderImg alt="одежда" src={slide1} alt="Slide 1"/>
        <SliderImg alt="одежда" src={slide2} alt="Slide 2"/>
        <SliderImg alt="одежда" src={slide3} alt="Slide 3"/>
        <SliderImg alt="одежда" src={slide4} alt="Slide 4"/>
      </SliderList>
    )
  }
}

export default Slider;
