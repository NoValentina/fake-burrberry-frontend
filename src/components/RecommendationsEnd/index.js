import React, { Component } from 'react';

import './RecommendationsEnd.css';

class RecommendationsEnd extends Component {
  render() {
    return (
      <div className="recommendations-product-end">
        <div className="container">
          <h2 className="recommendations-header-additionally">
            <a className="recommendations-link" href="#">MORE FOR YOU</a>
          </h2>
          <div className="recommendations-product-list">
            <a href="#" className="recommendations-product-list-item">Men’s Black Trench Coats</a>
            <a href="#" className="recommendations-product-list-item">Men’s Short Trench Coats</a>
            <a href="#" className="recommendations-product-list-item">Men’s Long Trench Coats</a>
          </div>
        </div>
      </div>
    )
  }
}

export default RecommendationsEnd;
