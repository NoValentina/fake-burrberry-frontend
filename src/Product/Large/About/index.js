import React from "react";
import styled from "styled-components";

import Action from "../../Intro/Action";

import Properties from "../../Intro/Properties";
import Size from "../Size";

const Name = styled.h1`
  margin-top: 9.9375rem;
  font-size: 1.5rem;
  line-height: 1.17;
  color: #111111;
  text-align: left;
  font-weight: normal;
  font-family: 'Lora', serif;
`;

const Buttons = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const Delivery = styled.div`margin-top: 1.5rem;`;

const Title = styled.p`
  display: inline-block;
  font-family: Raleway;
  font-size: 0.75rem;
  font-weight: bold;
  color: #171717;
  margin-bottom: 0.25rem;
  margin-top: 0;
`;

const Content = styled.p`
  font-family: Raleway;
  font-size: 0.75rem;
  line-height: 1.33;
  color: #171717;
  margin: 0;
`;

const About = () =>
  <div>
    <Name>Long Cotton Gabardine Car Coat Coat Coat Coat Coat</Name>
    <div className="row">
      <div className="col-lg-6">
        <Properties />
      </div>
      <div className="col-lg-5">
        <Size />
      </div>
    </div>
    <Buttons>
      <Action primary>ADD TO BAG</Action>
      <Action>FIND IN STORE</Action>
    </Buttons>
    <Delivery>
      <Title>Free Next Day Delivery</Title>
      <Content>
        Order before 7pm Monday to Thursday for delivery the next day
      </Content>
    </Delivery>
  </div>;

export default About;
