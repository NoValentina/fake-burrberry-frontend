import React, { Component } from 'react';

//components
import Slider from './Slider';

import './Product-Intro.css';

class ProductIntro extends Component {
  render() {
    return (
      <section className="container">
        <div className="product-intro">
          <h1 className="product-name">Long Cotton Gabardine Car Coat</h1>
          <div className="row">
            <div className="col-xs-12 col-md-7">
              <Slider />
            </div>
            <div className="col-xs-12 col-md-5">
              <div className="product-description ">
                <div className="product-description-properties">
                  <h2 className="product-price">110 000 руб</h2>
                  <p className="product-item">Item 39428531</p>
                </div>
                <p className="product-colour">Colour: Honey</p>
                <div className="product-description-btns">
                  <button className="btn-change-colour" type="button">Change colour to black</button>
                  <button className="btn-change-colour btn-light btn-active" type="button">Change colour to honey</button>
                </div>
              </div>
              <div className="product-btn-actions">
                <button className="btn-action-select" type="button" title="SELECT A SIZE">SELECT A SIZE</button>
                <button className="btn-action-find" type="button" title="FIND IN STORE">FIND IN STORE</button>
                <button className="btn-action-help" type="button" title="NEED SIZE HELP?">NEED SIZE HELP?</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ProductIntro;
