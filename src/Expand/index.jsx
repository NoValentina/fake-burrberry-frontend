import React from 'react';
import styled from 'styled-components';

const triangle = `${process.env.PUBLIC_URL}/images/Triangle.svg`;

const Button = styled.button`
  border: 0;
  background: none;
  padding: 0;
  font-weight: 500;
  font-family: Raleway;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

const Heading = styled.h2`
  font-family: Raleway;
  font-size: 1rem;
  font-weight: 500;
  color: #171717;
  position: relative;
  margin: 0;
  text-align: left;
  margin-left: 0.5rem;

  @media (min-width: 768px) {
    border-top: none;
    margin-bottom: 0;
  }

  @media (min-width: 992px) {
    margin-left: 0.5rem;
    padding-top: 0;
    margin-top: 4rem;
  }

  &::after {
    content: '';
    position: absolute;
    right: 16px;
    top: 4px;
    display: block;
    width: 0.625rem;
    height: 0.625rem;
    background-image: url('${triangle}');

    ${props =>
    props.open &&
      `
      transform: rotate(180deg);
    `}

    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const Expand = props =>
  (<Heading open={props.open}>
    <Button>
      {props.children}
    </Button>
  </Heading>);

export default Expand;
