import React, { Component } from 'react';

// components
import Header from './components/Header';
import Footer from './components/Footer';

// images
import slide1 from './images/bitmap@3x.jpg';
import slide2 from './images/slide2.png';
import slide3 from './images/slide3.jpg';
import slide4 from './images/slide4.jpg';
import delivery from './images/delivery@3x.png';


import './App.css';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />

        <section className="container">
          <div className="product">
            <h1 className="product-name">Long Cotton Gabardine Car Coat</h1>
            <div className="row">
              <div className="col-xs-12 col-md-7">
                <div className="product-slider">
                  <img alt="одежда" src={slide1} alt="Slide 1"/>
                  <img alt="одежда" src={slide2} alt="Slide 2"/>
                  <img alt="одежда" src={slide3} alt="Slide 3"/>
                  <img alt="одежда" src={slide4} alt="Slide 4"/>
                </div>
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


            <div className="product-dropdown-description">
              <h2 className="product-dropdown-disclosure product-dropdown-disclosure-open">
                <button className="product-dropdown-button">
                  DESCRIPTION
                </button>
              </h2>
              <div className="dropdown-open">
                <div className="dropdown-open-text">
                  <p>A refined car coat crafted in protective cotton gabardine.</p>
                  <p>Invented by Thomas Burberry in 1879, cotton gabardine is a tightly woven and breathable fabric that protects against wind and rain.</p>
                  <p>Raglan sleeves and a concealed button closure complement the clean tailored lines.</p>
                  <p>The piece is finished with a distinctive check undercollar.</p>
                </div>
                <ul>
                  <li>Сoat length: 98cm/38.6in. This is based on a size UK 48 as proportions change slightly according to size.</li>
                  <li>Outer: 100% cotton</li>
                  <li>Check lining: 100% cotton</li>
                  <li>Sleeve lining: 100% viscose</li>
                  <li>Buttons: buffalo horn</li>
                  <li>Specialist dry clean</li>
                  <li>Made in Europe</li>
                  <li>Item 39428531</li>
                </ul>
              </div>
            </div>
          </div>
        </section>


        <div className="product-dropdown-shopping">
          <h2 className="product-dropdown-disclosure">
            <button className="product-dropdown-button">
              SHIPPING & RETURNS
            </button>
          </h2>
        </div>

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

        <Footer />

      </div>
    );
  }
}

export default App;
