import React, { Component } from 'react';

import './ProductShipping.css';

class ProductShipping extends Component {
  render() {
    return (
      <div className="container">
        <div className="product-dropdown-shipping">
          <h2 className="product-dropdown-disclosure">
            <button className="product-dropdown-button">
              SHIPPING & RETURNS
            </button>
          </h2>
        </div>
      </div>
    )
  }
}

export default ProductShipping;
