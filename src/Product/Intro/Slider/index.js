import React, { Component } from 'react';
import styled from 'styled-components';

//images
const slide1 = process.env.PUBLIC_URL + '/images/bitmap@3x.jpg';
const slide2 = process.env.PUBLIC_URL + '/images/slide2.png';
const slide3 = process.env.PUBLIC_URL + '/images/slide3.jpg';
const slide4 = process.env.PUBLIC_URL + '/images/slide4.jpg';

const List = styled.div`
  display: flex;
  overflow-x: auto;
`

const Img = styled.img`
  display: block;
  width: 432px;
  height: 576px;
  padding-left: 0;
`

const Slider = () => {
  return (
    <List>
      <Img alt="одежда" src={slide1} />
      <Img alt="одежда" src={slide2} />
      <Img alt="одежда" src={slide3} />
      <Img alt="одежда" src={slide4} />
    </List>
  )
}

export default Slider;
