import React, { Component } from 'react';
import styled from 'styled-components';

import logo from './Logo.svg';

const Head = styled.header `{
  border-bottom: 1px solid #c6c6c6;
}
`

const HeaderLogo = styled.img `
  display: block;
  width: 138px;
  height: 10px;
  padding: 1rem 0 1rem 0;
  margin: 0 auto;
  @media (min-width: 768px) {
    padding: 1.5rem 0 1.5rem 0;
  }
`

const Link = styled.a `
  text-decoration: none;
`

function Header() {
  return (
    <Head>
      <Link href="#">
        <HeaderLogo alt="логотип" src={logo} />
      </Link>
    </Head>
  )
}

export default Header;
