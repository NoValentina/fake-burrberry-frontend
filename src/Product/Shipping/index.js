import React from 'react';
import styled from 'styled-components';

import DropDown from '../../DropDown';

const Shipping = styled.div`
  border-top: solid 1px #c6c6c6;
  border-bottom: solid 1px #c6c6c6;
  padding: 2.15rem 0 2rem 0;

  @media (min-width: 768px) {
    display: none;
  }
`

function ProductShipping() {
  return (
    <div className="container">
      <Shipping>
        <DropDown>DELIVERY</DropDown>
      </Shipping>
    </div>
  )
}

export default ProductShipping;
