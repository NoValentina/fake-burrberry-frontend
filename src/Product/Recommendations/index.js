import React, { Component } from 'react';

import './Recommendations.css';

class Recommendations extends Component {
  render() {
    return (
      <div>
        <div className="recommendations">
          <div className="recommendations-product">
            <div className="container">
              <h2 className="recommendations-header">
                WE RECOMMEND
              </h2>
              <div className="row">
                <div className="col-xs-6 col-md-3">
                  <a className="recommendations-product-description" href="index.html">
                    <img alt="товар" className="recommendations-product-photo" src="https://assets.burberry.com/is/image/Burberryltd/f51a470fc157e3014a115c64276c2e124d9fc477.jpg?$BBY_V2_ML_3X4$&hei=260&wid=195"/>
                    <h3 className="recommendations-product-name">Emroided Hooded</h3>
                    <h5 className="recommendations-product-price">27 000 руб</h5>
                  </a>
                </div>
                <div className="col-xs-6 col-md-3">
                  <a className="recommendations-product-description" href="index.html">
                    <img alt="товар" className="recommendations-product-photo" src="https://assets.burberry.com/is/image/Burberryltd/eb872d02449c4050916c9eaf44e266bfdbd32304.jpg?$BBY_V2_ML_3X4$&hei=260&wid=195"/>
                    <h3 className="recommendations-product-name">Relaxed Fit Stretch Jeans</h3>
                    <h5 className="recommendations-product-price">22 500 руб</h5>
                  </a>
                </div>
                <div className="col-xs-6 col-md-3">
                  <a className="recommendations-product-description" href="index.html">
                    <img alt="товар" className="recommendations-product-photo" src="https://assets.burberry.com/is/image/Burberryltd/cfaeb1b3c79aeee09dfda4e26a9fb3f4525df542.jpg?$BBY_V2_SL_3X4$&hei=260&wid=195"/>
                    <h3 className="recommendations-product-name">Leather and House Check</h3>
                    <h5 className="recommendations-product-price">120 000 руб</h5>
                  </a>
                </div>
                <div className="col-xs-6 col-md-3">
                  <a className="recommendations-product-description" href="index.html">
                    <img alt="товар" className="recommendations-product-photo" src="https://assets.burberry.com/is/image/Burberryltd/b33127f06e6c404cc3168645e099a9eb71aeca9c.jpg?$BBY_V2_SL_3X4$&hei=260&wid=195"/>
                    <h3 className="recommendations-product-name">Leather Wingtip Check</h3>
                    <h5 className="recommendations-product-price">46 000 руб</h5>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      </div>
    )
  }
}

export default Recommendations;
