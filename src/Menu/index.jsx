import React from 'react';
import styled from 'styled-components';

import { MD } from '../common';

import Item from './Item';

const List = styled.ul`
  list-style: none;
  text-align: center;
  padding: 0;
`;

const Menu = () =>
  (<MD>
    <List>
      <Item type="women">WOMEN</Item>
      <Item type="men">MEN</Item>
      <Item type="children">CHILDREN</Item>
      <Item type="beaty">BEAUTY</Item>
      <Item type="experience">EXPERIENCE</Item>
    </List>
  </MD>);

export default Menu;
