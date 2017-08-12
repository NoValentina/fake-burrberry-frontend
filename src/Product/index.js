import React from 'react';

// components
import Intro from './Intro';
import Description from './Description';
import Shipping from './Shipping';
import Delivery from './Delivery';
import Recommendations from './Recommendations';
import IntroDesktop from './IntroDesktop';

const Product = () => (
  <div>
    <Intro />
    <IntroDesktop />
    <Description />
    <Shipping />
    <Delivery />
    <Recommendations />
  </div>
)

export default Product;
