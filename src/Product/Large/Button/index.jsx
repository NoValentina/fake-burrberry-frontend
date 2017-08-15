import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BtnSize = styled.button`
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

const Button = props =>
  (<BtnSize selected={props.selected}>
    {props.children}
  </BtnSize>);

Button.propTypes = {
  selected: PropTypes.boolean,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  selected: false,
};

export default Button;
