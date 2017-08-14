import React from 'react';
import styled from 'styled-components';

const Help = styled.button`
  font-family: Raleway;
  font-size: 0.75rem;
  text-align: center;
  color: #171717;
  border: none;
  background-color: inherit;
  padding: 0;
  padding-top: 2px;
`;

export default () =>
  (<Help type="button" title="NEED SIZE HELP?">
    NEED SIZE HELP?
  </Help>);
