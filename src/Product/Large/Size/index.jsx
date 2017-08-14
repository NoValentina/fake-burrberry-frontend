import React from 'react';
import styled from 'styled-components';

import Buttons from '../Buttons';
import Help from '../Help';

const sizes = [
  { value: 'S', id: 1 },
  { value: 'M', id: 1 },
  { value: 'L', id: 1 },
  { value: 'XL', id: 1 },
];

const Size = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4.6875rem;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

const Label = styled.p`
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #171717;
`;

export default () =>
  (<Size>
    <Header>
      <Label>
        Size: <b>XL</b>
      </Label>
      <Help />
    </Header>
    <Buttons sizes={sizes} selectedSize={3} />
  </Size>);
