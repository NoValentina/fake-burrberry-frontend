import React from 'react';
import styled from 'styled-components';

import Button from '../Button';

const Buttons = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export default props =>
  (<Buttons>
    {props.sizes.map(size =>
      (<Button key={size.id} selected={props.selectedSize === size.value}>
        {size.value}
      </Button>),
    )}
  </Buttons>);
