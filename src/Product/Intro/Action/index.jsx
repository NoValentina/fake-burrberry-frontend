import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  font-family: Raleway;
  border-radius: 0.125rem;
  font-size: 0.75rem;
  text-align: center;
  padding-bottom: 0.95rem;
  padding-top: 1.09rem;
  border: solid 1px #171717;
  margin-bottom: 1rem;
  background: ${props => (props.primary ? '#171717' : 'transparent')};
  color: ${props => (props.primary ? '#ffffff' : '#171717')};
  font-weight: normal;
  margin-right: 1rem;
`;

const Action = props => (
  <Button primary={props.primary} type="button">
    {props.children}
  </Button>
  );
export default Action;
