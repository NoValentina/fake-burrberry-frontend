import React, { Component } from "react";
import styled from "styled-components";

import Expand from "../../Expand";
import Text from "./Text";

//images
const img1 = process.env.PUBLIC_URL + "/images/slide2.png";
const img2 = process.env.PUBLIC_URL + "/images/photo3x.jpg";
const img3 = process.env.PUBLIC_URL + "/images/slide3.jpg";
const img4 = process.env.PUBLIC_URL + "/images/slide4.jpg";

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

/*const Description = styled.div`
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

  @media (min-width: 1200px) {
    margin-top: 4rem;
  }
`;*/

const Image = styled.img`
  width: 100%;
  margin-top: 4rem;
`;

const DesktopDes = styled.div`
  display: none;

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`;

const Photo1 = styled.img`
  width: 315px;
  display: block;
  margin-top: 2rem;
`;

const Photo2 = styled.img`
  width: 315px;
  display: block;
  margin-top: 6rem;
`;

const Photo3 = styled.img`
  width: 315px;
  display: block;
`;

const Photos = styled.div`
  display: none;

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 4rem 0;
    width: 100%;
  }
`;

const ProductDescription = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-lg-4">
          <Expand open>DESCRIPTION</Expand>
          <Text description={description} />
        </div>
        <div className="col-lg-8">
          <Image alt="одежда" src={img1} />
        </div>
      </div>

      <div className="row">
        <Photos>
          <div className="col-lg-3">
            <Photo1 src={img2} />
          </div>
          <div className="col-lg-3">
            <Photo2 src={img3} />
          </div>
          <div className="col-lg-3">
            <Photo3 src={img4} />
          </div>
        </Photos>
      </div>
    </section>
  );
};

export default ProductDescription;
