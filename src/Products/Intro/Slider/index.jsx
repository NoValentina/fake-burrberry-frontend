import React from 'react';
import styled from 'styled-components';

import { XS, MD } from '../../../common';

const arrow = `${process.env.PUBLIC_URL}/images/arrow.png`;

const List = styled.div`
  display: flex;
  overflow-x: scroll;

  @media (min-width: 768px) {
    overflow-x: none;
    flex-direction: row;
    justify-content: space-between;
  }
`;

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
  padding-right: 1.5rem;

  & + & {
    margin-left: 1rem;

    @media(min-width: 768px) {
      margin-left: 3rem;
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
`;

const Buttons = styled.div``;

const Slider = () =>
  (<div>
    <XS>
      <List>
        <Button>Category</Button>
        <Button>Colour</Button>
        <Button>Size</Button>
        <Button>Sort by price</Button>
      </List>
    </XS>
    <MD>
      <List>
        <Buttons>
          <Button>Category</Button>
          <Button>Colour</Button>
          <Button>Size</Button>
        </Buttons>
        <Button>Sort by price</Button>
      </List>
    </MD>
  </div>);

export default Slider;
