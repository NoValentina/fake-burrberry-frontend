import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-menu">
            <div className="row">
              <div className="col-sm-3">
                <nav className="footer-menu-list">
                  <h3 className="footer-menu-list-name">CUSTOMER SERVICE</h3>
                  <a className="footer-menu-list-link" href="#">Contact Us</a>
                  <a className="footer-menu-list-link" href="#">Payment</a>
                  <a className="footer-menu-list-link" href="#">Shipping</a>
                  <a className="footer-menu-list-link" href="#">Returns</a>
                  <a className="footer-menu-list-link" href="#">Faqs</a>
                  <a className="footer-menu-list-link" href="#">Live Chat</a>
                  <a className="footer-menu-list-link" href="#">The Burberry App</a>
                  <a className="footer-menu-list-link" href="#">Store Locator</a>
                </nav>
              </div>
              <div className="col-sm-3">
                <nav className="footer-menu-list">
                  <h3 className="footer-menu-list-name">OUR COMPANY</h3>
                  <a className="footer-menu-list-link" href="#">Our History</a>
                  <a className="footer-menu-list-link" href="#">Burberry Group Plc</a>
                  <a className="footer-menu-list-link" href="#">Careers</a>
                  <a className="footer-menu-list-link" href="#">Corporate Responsibility</a>
                  <a className="footer-menu-list-link" href="#">Site Map</a>
                </nav>
              </div>
              <div className="col-sm-3">
                <nav className="footer-menu-list">
                  <h3 className="footer-menu-list-name">LEGAL & COOKIES</h3>
                  <a className="footer-menu-list-link" href="#">Terms & Conditions</a>
                  <a className="footer-menu-list-link" href="#">Privacy Policy</a>
                  <a className="footer-menu-list-link" href="#">Cookie Policy</a>
                  <a className="footer-menu-list-link" href="#">Accessibility Statement</a>
                  <a className="footer-menu-list-link" href="#">
                    Japan Only -
                    <abbr title="Single-Cycle Timed Loop">SCTL</abbr> indications
                  </a>
                </nav>
              </div>
            </div>
          </div>
          <div className="footer-product-location">
            <button className="footer-product-location-item">Shipping country: Russian Federation</button>
            <button className="footer-product-location-item">Language: English</button>
          </div>
        </div>
        <div className="footer-information">
          <h4 className="footer-information-help">Need help?</h4>
          <a href="#" className="footer-information-contact">Find out more and contact us</a>
        </div>
      </footer>
    );
  }
}

export default Footer;
