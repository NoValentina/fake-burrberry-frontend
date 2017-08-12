import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

import About from "../Desktop/About";

//images
const image1 = process.env.PUBLIC_URL + "/images/bitmap@3x.jpg";

const Image = styled.img`
  @media (min-width: 1200px) {
    display: block;
    width: 488px;
    height: 651px;
    padding-left: 0;
  }
`;

const Desktop = styled.div`
  display: none;

  @media (min-width: 1200px) {
    display: block;
    background-color: #d4bdad;
  }
`;

const IntroDesktop = () =>
  <Desktop>
    <section className="container">
      <Helmet>
        <title>Long Cotton Gabardine Car Coat</title>
      </Helmet>
      <div className="row">
        <div className="col-lg-6">
          <Image alt="одежда" src={image1} />
        </div>
        <div className="col-lg-6">
          <About />
        </div>
      </div>
    </section>
  </Desktop>;

export default IntroDesktop;
