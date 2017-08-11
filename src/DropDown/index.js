import React from 'react';
import styled from 'styled-components';

import triangle from './../Triangle.svg'

const DropDown = (props) => {
  const Button = styled.button`
    border: 0;
    background: none;
    padding: 0;
    font-weight: 500;
    font-family: Raleway;
    @media (min-width: 768px) {
      padding: 0;
    }
  `
  const Heading = styled.h2`
    font-family: Raleway;
    font-size: 1rem;
    font-weight: 500;
    color: #171717;
    position: relative;
    margin: 0 0 0 1rem;
    text-align: left;

    &::after {
      content: '';
      position: absolute;
      right: 16px;
      top: 4px;
      display: block;
      width: 0.625rem;
      height: 0.625rem;
      background-image: url('${triangle}');

      ${props.open && `
        transform: rotate(180deg);
      `}

      @media (min-width: 768px) {
        display: none;
      }
    }
  `

  return (
    <Heading>
      <Button>
        {props.children}
      </Button>
    </Heading>
  )
}

export default DropDown;
