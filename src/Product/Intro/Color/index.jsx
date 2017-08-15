import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 6.25rem;
  border: none;
  color: transparent;
  background: ${props => (props.dark ? '#232122' : '#cfa880')};
  margin-right: 1rem;

  ${props =>
    props.active &&
    `
    border: solid 1px #232122;
  `};
`;

const Color = props =>
  (<Button dark={props.dark} active={props.active} type="button">
    {props.children}
  </Button>);

Color.propTypes = {
  dark: PropTypes.boolean,
  active: PropTypes.boolean,
  children: PropTypes.node.isRequired,
};

Color.defaultProps = {
  dark: false,
  active: false,
};

export default Color;
