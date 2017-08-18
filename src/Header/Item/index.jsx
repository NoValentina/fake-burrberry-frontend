import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Li = styled.li`display: inline-block;`;

const Link = styled.a`
  font-family: Raleway;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.33;
  letter-spacing: 1.5px;
  color: #999999;
  border: none;
  background-color: transparent;
  padding: 1rem;
  text-decoration: none;

  ${props =>
    props.active &&
    `border-bottom: 1px solid #171717;
  color:#171717;
  font-style: normal;
  font-stretch: normal;
  `};
`;

const Item = props =>
  (<Li>
    <Link active={props.active} href="#">
      {props.children}
    </Link>
  </Li>);

Item.propTypes = {
  active: PropTypes.boolean,
  children: PropTypes.node.isRequired,
};

Item.defaultProps = {
  active: false,
};

export default Item;
