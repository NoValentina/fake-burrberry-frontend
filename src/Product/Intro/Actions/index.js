import React, { Component } from 'react';
import styled from 'styled-components';

const BtnActions = styled.div `
  display: flex;
  flex-direction: column;
  border-top: solid 1px #c6c6c6;
  margin: 2rem 1rem 0 1rem;
  @media (min-width: 768px) {
      margin-left: 0;
      margin-right: 0;
  }
`

const Select = styled.button`
  border-radius: 0.125rem;
  background-color: #171717;
  border: solid 1px #171717;
  font-size: 0.75rem;
  text-align: center;
  color: #ffffff;
  font-family: Raleway;
  margin: 2rem 0 1rem 0;
  text-align: center;
  padding-top: 1.09rem;
  padding-bottom: 1rem;
`

const Find = styled.button `
  border: solid 1px #999999;
  background-color: inherit;
  border-radius: 0.125rem;
  font-family: Raleway;
  font-size: 0.75rem;
  text-align: center;
  color: #171717;
  margin-bottom: 1.5rem;
  padding-top: 1.09rem;
  padding-bottom: 0.95rem;
`

const Help = styled.button `
  align-self: flex-start;
  font-family: Raleway;
  font-size: 0.75rem;
  text-align: center;
  color: #171717;
  border: none;
  background-color: inherit;
  padding: 0;
  padding-top: 2px;
`


function Actions() {
  return (
    <BtnActions>
      <Select type="button" title="SELECT A SIZE">SELECT A SIZE</Select>
      <Find type="button" title="FIND IN STORE">FIND IN STORE</Find>
      <Help type="button" title="NEED SIZE HELP?">NEED SIZE HELP?</Help>
    </BtnActions>
  )
}

export default Actions;
