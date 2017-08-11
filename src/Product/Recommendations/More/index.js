import React from 'react';
import styled from 'styled-components';

const Header = styled.h2`
  padding-top: 2px;
  display: inline-block;
  font-size: 1rem;
  font-weight: 500;
  color: #171717;
  border-bottom: solid 1px #171717;
  padding-bottom: 0.5rem;
  margin: 0;
`

const List = styled.div`
  margin-top: 1.53rem;
  display: flex;
  flex-direction: column;
`

const Item = styled.a`
  font-family: Lora;
  font-size: 0.875rem;
  font-style: italic;
  color: #171717;
  margin-bottom: 1rem;
  line-height: 1.23;
  text-decoration: none;
`

const Link = styled.a`
  text-decoration: none;
  font-family: Raleway;
	font-size: 16px;
	font-weight: 500;
	line-height: 1.19;
	color: #171717;
`

function More() {
  return (
    <div className="container">
      <Header>
        <Link href="#">MORE FOR YOU</Link>
      </Header>
      <List >
        <Item href="#">Men’s Black Trench Coats</Item>
        <Item href="#">Men’s Short Trench Coats</Item>
        <Item href="#">Men’s Long Trench Coats</Item>
      </List>
    </div>
  )
}

export default More;
