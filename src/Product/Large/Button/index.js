import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: .5rem 1rem;
  margin-right: 0.5rem;
  border-radius: 0.125rem;
  background-color: transparent;
  border: solid 1px #171717;
  font-size: 0.75rem;
  text-align: center;
  color: #171717;
  font-family: Raleway;
  text-align: center;

  ${props =>
    props.selected &&
    `
      font-weight: bold;
    `};
`;

export default props =>
  <Button selected={props.selected}>
    {props.children}
  </Button>;
