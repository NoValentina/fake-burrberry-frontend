import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

// components
import { LG, MD } from './../../common';
import Slider from './Slider';
import Action from './Action';
import Properties from './Properties';
import About from '../Large/About';

const ImagePr = `${process.env.PUBLIC_URL}/images/bitmap@3x.jpg`;

const Name = styled.h1`
  margin: 1rem 1rem;
  font-size: 1.25rem;
  font-family: 'Lora', serif;
  color: #111111;
  text-align: left;
  font-weight: normal;
  line-height: 1.2;

  @media (min-width: 768px) {
    margin: 1.5rem 0;
    font-size: 1.5rem;
    line-height: 1.17;
  }
`;

const Help = styled.button`
  align-self: flex-start;
  font-family: Raleway;
  font-size: 0.75rem;
  text-align: center;
  color: #171717;
  border: none;
  background-color: inherit;
  padding: 0;
  padding-top: 2px;
  margin-top: 0.5rem;

  @media (min-width: 1200px) {
    display: none;
  }
`;

const BtnActions = styled.div`
  display: flex;
  flex-direction: column;
  border-top: solid 1px #c6c6c6;
  padding-top: 2rem;
  margin-top: 2rem;

  @media (min-width: 768px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

const ImageProduct = styled.img`
  display: block;
  height: 651px;
`;

const Background = styled.div`background-color: #d4bdad;`;

const ProductIntro = () =>
  (<div>
    <Helmet>
      <title>Long Cotton Gabardine Car Coat</title>
    </Helmet>
    <MD>
      <section className="container">
        <Name>Long Cotton Gabardine Car Coat</Name>
        <div className="row">
          <div className="col-xs-12 col-md-7">
            <Slider />
          </div>
          <div className="col-xs-12 col-md-5">
            <Properties />
            <BtnActions>
              <Action primary>SELECT A SIZE</Action>
              <Action>FIND IN STORE</Action>
              <Help type="button" title="NEED SIZE HELP?">
                NEED SIZE HELP?
              </Help>
            </BtnActions>
          </div>
        </div>
      </section>
    </MD>
    <LG>
      <Background>
        <section className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <ImageProduct alt="одежда" src={ImagePr} />
            </div>
            <div className="col-lg-6">
              <About />
            </div>
          </div>
        </section>
      </Background>
    </LG>
  </div>);

export default ProductIntro;
