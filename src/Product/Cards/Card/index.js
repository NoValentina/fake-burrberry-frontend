import React, { Component } from 'react';
import styled from 'styled-components';

import NumberFormat from 'react-number-format';

const Link = styled.a`
  display: flex;
  flex-direction: column;
  flex-basis: 45%;
  text-decoration: none;
`
const Photo = styled.img`
  width: 100%;
`

const Name = styled.h3`
  margin-top: 0.5rem;
  font-family: 'Lora', serif;
  font-size: 1rem;
  color: #171717;
  margin-bottom: 0;
  font-weight: normal;
  line-height: 1.19;
`

const Price = styled.h5`
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: #999999;
  margin-bottom: 2rem;
  font-weight: normal;
  padding-top: 1.5px;
`

class Card extends Component {
  render() {
    return (
      <Link href="index.html">
        <Photo src={this.props.photo} alt={this.props.name}/>
        <Name>{this.props.name}</Name>
        <Price>
          <NumberFormat
            value={this.props.price}
            suffix={' руб. '}
            thousandSeparator={' '}
            displayType={'text'}
          />
        </Price>
      </Link>
    )
  }
}

export default Card;
