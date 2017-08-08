import React, { Component } from 'react';

import logo from '../../images/Logo.svg';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <a href="#">
          <img alt="логотип" className="header-logo" src={logo} />
        </a>
      </header>
    )
  }
}

export default Header;
