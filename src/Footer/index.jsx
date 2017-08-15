import React from 'react';
import styled from 'styled-components';

import Navigation from './Navigation';

const Bottom = styled.footer`
  margin-top: 3rem;
  background-color: #f3f3f3;
  padding: 1.85rem 1rem;

  @media (min-width: 768px) {
    margin: 2rem 0 0 0;
    padding: 2rem 0 0 0;
  }
`;

const Location = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 768px) {
    margin-top: 1.25rem;
    flex-direction: row;
  }
`;

const Item = styled.button`
  font-family: Raleway;
  font-size: 0.75rem;
  color: #999999;
  font-weight: normal;
  margin: 0 0 1rem 0;
  padding: 0;
  background-color: transparent;
  border: none;
  line-height: 1.33;

  @media (min-width: 768px) {
    margin-right: 1.5rem;
  }
`;
const Information = styled.div`@media (min-width: 768px) {display: none;}`;
const Help = styled.h4`
  font-family: Raleway;
  font-size: 1rem;
  font-weight: bold;
  color: #171717;
  text-align: center;
  margin: 0.45rem 0 1.05rem 0;
  line-height: 1.19;
`;
const Contact = styled.a`
  display: block;
  font-family: Lora;
  font-size: 0.875rem;
  font-style: italic;
  color: #171717;
  text-align: center;
  margin: 0;
  line-height: 1.21;
  text-decoration: none;
`;

const Footer = () => (
  <Bottom>
    <div className="container">
      <Navigation />
      <Location>
        <Item>Shipping country: Russian Federation</Item>
        <Item>Language: English</Item>
      </Location>
    </div>
    <Information>
      <Help>Need help?</Help>
      <Contact>Find out more and contact us</Contact>
    </Information>
  </Bottom>
);

export default Footer;
