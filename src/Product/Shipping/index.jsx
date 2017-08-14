import React from 'react';
import styled from 'styled-components';

import Expand from '../../Expand';

const Shipping = styled.div`
  border-top: solid 1px #c6c6c6;
  border-bottom: solid 1px #c6c6c6;
  padding: 2.15rem 0 2rem 0;

  @media (min-width: 768px) {
    display: none;
  }
`;

const ProductShipping = () => (
  <div className="container">
    <Shipping>
      <Expand>DELIVERY</Expand>
    </Shipping>
  </div>
  );

export default ProductShipping;
