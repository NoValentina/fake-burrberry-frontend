import React, { Component } from 'react';
import styled from 'styled-components';

//components
import Slider from './Slider';
import Actions from './Actions';
import Properties from './Properties';

const Name = styled.h1 `
  margin: 1rem 1rem;
  font-size: 1.25rem;
  font-family: 'Lora', serif;
  color: #111111;
  text-align: left;
  font-weight: normal;
  line-height: 1.2;
  @media (min-width: 768px) {
    margin: 1.5rem 0;
    font-size: 1.5rem;
    line-height: 1.17;
  }
`

class ProductIntro extends Component {
  render() {
    return (
      <section className="container">
        <Name>Long Cotton Gabardine Car Coat</Name>
        <div className="row">
          <div className="col-xs-12 col-md-7">
            <Slider />
          </div>
          <div className="col-xs-12 col-md-5">
            <Properties />
            <Actions />
          </div>
        </div>
      </section>
    )
  }
}

export default ProductIntro;
