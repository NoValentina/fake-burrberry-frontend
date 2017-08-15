import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from '../Button';

const ButtonsSize = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Buttons = props =>
  (<ButtonsSize>
    {props.sizes.map(size =>
      (<Button key={size.id} selected={props.selectedSize === size.id}>
        {size.value}
      </Button>),
    )}
  </ButtonsSize>);

Buttons.propTypes = {
  selectedSize: PropTypes.boolean,
  sizes: PropTypes.string.isRequired,
};

Buttons.defaultProps = {
  selectedSize: false,
};

export default Buttons;
