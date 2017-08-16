import React from 'react';
import styled from 'styled-components';

import Item from '../Item';

const List = styled.ul`
  list-style: none;
  text-align: center;
`;

const Menu = () =>
  (<List>
    <Item>WOMEN</Item>
    <Item active>MEN</Item>
    <Item>CHILDREN</Item>
    <Item>BEAUTY</Item>
    <Item>EXPERIENCE</Item>
  </List>);

export default Menu;
