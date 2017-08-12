import React, { Component } from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

//components
import Slider from "./Slider";
import Actions from "./Actions";
import Properties from "./Properties";

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

const Intro = styled.div`@media (min-width: 1200px) {display: none;}`;

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

const ProductIntro = () => {
  return (
    <Intro>
      <section className="container">
        <Helmet>
          <title>Long Cotton Gabardine Car Coat</title>
        </Helmet>
        <Name>Long Cotton Gabardine Car Coat</Name>
        <div className="row">
          <div className="col-xs-12 col-md-7">
            <Slider />
          </div>
          <div className="col-xs-12 col-md-5">
            <Properties />
            <BtnActions>
              <Actions dark>SELECT A SIZE</Actions>
              <Actions>FIND IN STORE</Actions>
              <Help type="button" title="NEED SIZE HELP?">
                NEED SIZE HELP?
              </Help>
            </BtnActions>
          </div>
        </div>
      </section>
    </Intro>
  );
};

export default ProductIntro;
