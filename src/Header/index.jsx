import React from 'react';
import styled from 'styled-components';

import logo from './Logo.svg';
import { MD } from '../common';

const hamburger = `${process.env.PUBLIC_URL}/images/hamburger.png`;
const arrow = `${process.env.PUBLIC_URL}/images/arrow.svg`;

const HeaderLogo = styled.img`
  display: block;
  height: 12px;
  padding: 1rem 0 1rem 0;
  margin: 0 auto;
  position: relative;

  @media (min-width: 768px) {
    height: 1rem;
    padding: 1.5rem 0 1.4rem 0;
  }

  @media (min-width: 1200px) {
    padding: 2rem 0;
  }
`;

const Link = styled.a`
  text-decoration: none;
  text-align: center;


  &::before {
    left:0.5rem;
    top: 18px;
    display: block;
    content: '';
    position: absolute;
    width: 1rem;
    height: 0.625rem;
    background-image: url('${hamburger}');

    @media(min-width:768px){
      display: none;
      }}`;

const Button = styled.button`
  background-color: transparent;
  font-family: Raleway;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.33;
  color: #999999;
  border: none;
  font-weight: normal;
  position: relative;
  padding:0 1.5rem 0 0;


  &::after {
    content: '';
    position: absolute;
    top: 4px;
    right: 0;
    display: block;
    width: 12px;
    height: 6px;
    background-image: url('${arrow}');
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const Country = styled.div`
  display: block;
  margin-top: 1.38rem;
  position: absolute;
  top: 0;

  @media (min-width: 992px) {
    margin-top: 2rem;
  }
`;

function Header() {
  return (
    <div className="container">
      <MD>
        <Country>
          <Button type="button">Shopping in: United Kingdom (£)</Button>
        </Country>
      </MD>
      <Link href="#">
        <HeaderLogo alt="логотип" src={logo} />
      </Link>
    </div>
  );
}

export default Header;
