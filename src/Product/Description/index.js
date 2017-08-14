import React, { Component } from 'react';
import styled from 'styled-components';

import Expand from '../../Expand';
import Text from './Text';

const description = `
  <p>A refined car coat crafted in protective cotton gabardine.</p>
  <p>Invented by Thomas Burberry in 1879, cotton gabardine is a tightly woven and breathable fabric that protects against wind and rain.</p>
  <p>Raglan sleeves and a concealed button closure complement the clean tailored lines.</p>
  <p>The piece is finished with a distinctive check undercollar.</p>
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
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 2.06rem;
  margin: 3.05rem 0 0 0;
  border-top: solid 1px #c6c6c6;

  @media (min-width: 768px) {
    padding-bottom: 0;
    margin-top: 1.6rem;
    padding-top: 0;
    border: none;
  }
`


const ProductDescription = () => {
  return (
    <section className="container">
      <div className="row">
        <Description>
          <Expand open>DESCRIPTION</Expand>
          <Text description={description} />
        </Description>
      </div>
    </section>
  )
}

export default ProductDescription;
