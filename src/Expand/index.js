import React from "react";
import styled from "styled-components";

const triangle = process.env.PUBLIC_URL + "/images/Triangle.svg";

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
  margin: 0 0 0 1rem;
  text-align: left;

  @media (min-width: 1200px) {
    margin-top: 4rem;
    margin-left: 0.5rem;
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

const Expand = props => {
  return (
    <Heading open={props.open}>
      <Button>
        {props.children}
      </Button>
    </Heading>
  );
};

export default Expand;
