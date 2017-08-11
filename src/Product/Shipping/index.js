import React, { Component } from 'react';


import './ProductShipping.css';
import DropDown from '../../DropDown';

class ProductShipping extends Component {
  render() {
    return (
      <div className="container">
        <div className="product-dropdown-shipping">
          <DropDown>SHIPPING & RETURNS</DropDown>
        </div>
      </div>
    )
  }
}

export default ProductShipping;
