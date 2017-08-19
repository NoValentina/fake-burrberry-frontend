import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const arrow = `${process.env.PUBLIC_URL}/images/arrow.svg`;

const Button = styled.button`
  position: relative;
  font-family: Raleway;
  font-size: 0.75rem;
  line-height: 1.33;
  color: #171717;
  margin-top: 0;
  white-space: nowrap;
  padding: 0;
  border: none;
  background-color: transparent;
  padding-right: 1.3rem;

  & + & {
    margin-left: 1rem;

    @media (min-width: 768px) {
      margin-left: 2.9rem;
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 3px;
    right: 0;
    display: block;
    width: 1rem;
    height: 0.5rem;
    background-image: url('${arrow}');
    background-repeat: no-repeat;
  }

  ${props =>
    props.right &&
    `
    margin-left: 0.9rem;

    @media (min-width: 768px) {
      margin-left: auto;
    }`}
`;

const Sort = props =>
  (<Button right={props.right}>
    {props.children}
  </Button>);

Sort.propTypes = {
  right: PropTypes.boolean,
  children: PropTypes.node.isRequired,
};

Sort.defaultProps = {
  right: false,
};

export default Sort;
