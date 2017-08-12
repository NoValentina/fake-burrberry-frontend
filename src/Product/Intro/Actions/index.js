import React from "react";
import styled from "styled-components";

const Button = styled.button`
  font-family: Raleway;
  border-radius: 0.125rem;
  font-size: 0.75rem;
  text-align: center;
  padding-bottom: 0.95rem;
  padding-top: 1.09rem;
  border: solid 1px #171717;
  margin-bottom: 1rem;
  background: ${props => (props.dark ? "#171717" : "transparent")};
  color: ${props => (props.dark ? "#ffffff" : "#171717")};
  font-weight: normal;

  ${props =>
    props.desktop &&
    `
    padding: 1rem 5.125rem;
    margin-right: 1rem;
    margin-bottom:0;
  `};
`;

const Actions = props => {
  return (
    <Button dark={props.dark} desktop={props.desktop} type="button">
      {props.children}
    </Button>
  );
};
export default Actions;
