import React, { Component } from 'react';

// components
import Header from './components/Header';
import Footer from './components/Footer';
import ProductIntro from './components/Product-Intro';
import ProductDescription from './components/ProductDescription';
import ProductShipping from './components/ProductShipping';
import Delivery from './components/Delivery';
import Recommendations from './components/Recommendations';
import RecommendationsEnd from './components/RecommendationsEnd';

import './App.css';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <ProductIntro />
        <ProductDescription />
        <ProductShipping />
        <Delivery />
        <Recommendations />
        <RecommendationsEnd />
        <Footer />

      </div>
    );
  }
}

export default App;
