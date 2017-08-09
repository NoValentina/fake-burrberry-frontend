import React, { Component } from 'react';

import slide1 from '../../../images/bitmap@3x.jpg';
import slide2 from '../../../images/slide2.png';
import slide3 from '../../../images/slide3.jpg';
import slide4 from '../../../images/slide4.jpg';

import './Slider.css';

class Slider extends Component {
  render() {
    return (
      <div className="product-slider">
        <img alt="одежда" src={slide1} alt="Slide 1"/>
        <img alt="одежда" src={slide2} alt="Slide 2"/>
        <img alt="одежда" src={slide3} alt="Slide 3"/>
        <img alt="одежда" src={slide4} alt="Slide 4"/>
      </div>
    )
  }
}

export default Slider;
