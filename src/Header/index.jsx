import React from 'react';
import styled from 'styled-components';

import logo from './Logo.svg';
import { MD } from '../common';
import Menu from './Menu';

const hamburger = `${process.env.PUBLIC_URL}/images/hamburger.png`;

const HeaderLogo = styled.img`
  display: block;
  height: 12px;
  padding: 1rem 0 1rem 0;
  margin: 0 auto;
  position: relative;

  @media (min-width: 768px) {
    height: 1rem;
    padding: 1.5rem 0 1.5rem 0;
  }

  @media (min-width: 1200px) {
    padding: 2rem 0;
  }
`;

const Link = styled.a`
  text-decoration: none;

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

function Header() {
  return (
    <div>
      <Link href="#">
        <HeaderLogo alt="логотип" src={logo} />
      </Link>
      <MD>
        <Menu />
      </MD>
    </div>
  );
}

export default Header;
