import React, { Component } from 'react';
import styled from 'styled-components';

import Color from '../Color';

const Description = styled.div `
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  margin-top: 1rem;
@media (min-width: 768px) {
    margin: 0;
    padding: 0;
}
`

const ListProperties = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-top: 1px;
`

const Price = styled.h2 `
  font-size: 1rem;
  font-weight: normal;
  margin: 0;
  @media (min-width: 768px) {
    line-height: 1.19;
  }
`

const Item = styled.p`
  margin: 0;
  padding-top: 4.49px;
  padding-right: 0.29px;
  font-size: 0.75rem;
`

const TitleColour = styled.p `
  margin: 0;
  padding-top: 2px;
  font-size: 0.75rem;
  color: #171717;
`

const ChangeColor = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 1.05rem;
`

class Properties extends Component {
  render() {
    return (
      <div>
        <Description>
        <ListProperties>
          <Price>110 000 руб</Price>
          <Item>Item 39428531</Item>
        </ListProperties>
        <TitleColour>Colour: Honey</TitleColour>
        <ChangeColor>
          <Color dark>Change colour to black</Color>
          <Color active>Change colour to honey</Color>
        </ChangeColor>
        </Description>
      </div>
    )
  }
}

export default Properties;
