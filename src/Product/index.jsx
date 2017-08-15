import React from 'react';

// components
import Intro from './Intro';
import Description from './Description';
import Shipping from './Shipping';
import Delivery from './Delivery';
import Recommendations from './Recommendations';

const Product = () =>
  (<div>
    <Intro />
    <Description />
    <Shipping />
    <Delivery />
    <Recommendations />
  </div>);

export default Product;
