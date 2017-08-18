import React from 'react';
import styled from 'styled-components';

import { LG } from './../../common';
import Expand from '../../Expand';
import Text from './Text';

// images
const img1 = `${process.env.PUBLIC_URL}/images/slide2.png`;
// const img2 = `${process.env.PUBLIC_URL}/images/photo3x.jpg`;
// const img3 = `${process.env.PUBLIC_URL}/images/slide3.jpg`;
// const img4 = `${process.env.PUBLIC_URL}/images/slide4.jpg`;

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
`;

const Image = styled.img`
  width: 100%;
  margin-top: 4rem;
`;

const Photo = styled.img`
  width: 100%;
  max-width: 315px;
  display: block;
`;

const Photos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 4rem 0;
  width: 100%;

  div:nth-child(1) {
    padding-top: 2rem;
  }

  div:nth-child(2) {
    padding-top: 6rem;
  }
`;

const Description = styled.div`
  margin-top: 2rem;
  border-top: solid 1px #c6c6c6;
  padding-top: 2rem;

  @media (min-width: 758px) {
    border-top: none;
    margin-top: 1.5rem;
    padding-top: 0;
  }
`;

const ProductDescription = () =>
  (<Description>
    <section className="container">
      <div className="row">
        <div className="col-lg-4">
          <Expand open>DESCRIPTION</Expand>
          <Text>
            {description}
          </Text>
        </div>
        <LG>
          <div className="col-lg-8">
            <Image alt="одежда" src={img1} />
          </div>
        </LG>
      </div>

      <LG>
        <div className="row">
          <Photos>
            <div className="col-lg-3">
              <Photo src={img1} />
            </div>
            <div className="col-lg-3">
              <Photo src={img1} />
            </div>
            <div className="col-lg-3">
              <Photo src={img1} />
            </div>
          </Photos>
        </div>
      </LG>
    </section>
  </Description>);

export default ProductDescription;
