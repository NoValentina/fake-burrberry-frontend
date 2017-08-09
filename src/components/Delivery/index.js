import React, { Component } from 'react';

import './Delivery.css';

//images
import delivery from '../../images/delivery@3x.png';

class Delivery extends Component {
  render() {
    return (
      <div className="container">
        <div className="delivery">
          <div className="row">
            <img alt="доставка" src={delivery} className="delivery-photo col-md-7" />
            <div className="delivery-information col-md-5">
              <h2 className="delivery-information-header">DELIVERY</h2>
              <div className="delivery-information-content">
                <h3 className="delivery-information-content-name">Free Next Day Delivery</h3>
                <p className="delivery-information-content-rubric">Order before 7pm Monday to Thursday for delivery the next day</p>
              </div>
              <div className="delivery-information-content">
                <h3 className="delivery-information-content-name">Collect-in-Store</h3>
                <p className="delivery-information-content-rubric">Order online today and pick up your items in store as early as tomorrow</p>
              </div>
              <div className="delivery-information-content">
                <h3 className="delivery-information-content-name">Free Returns</h3>
                <p className="delivery-information-content-rubric">Enjoy free returns on your order</p>
              </div>
              <div className="delivery-information-content">
                <h3 className="delivery-information-content-name">Free Gift Packaging</h3>
                <p className="delivery-information-content-rubric">Discover our gift packaging, a gold lined box tied with a coloured ribbon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Delivery;
