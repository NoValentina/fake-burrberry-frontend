import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

// components
import { XS, MD } from '../../common';
import Sort from './Sort';

const Header = styled.h2`
  font-family: Lora;
  font-size: 1.625rem;
  color: #171717;
  font-weight: normal;
  margin-top: 0;
  text-align: left;
  margin-bottom: 1.2rem;
`;

const IntroProducts = styled.div`
  padding-top: 2.2rem;
  background-color: #f3f3f3;
  margin-bottom: 2rem;
  overflow-x: scroll;

  @media (min-width: 768px) {
    margin-bottom: 4.17rem;
    padding-top: 4.1rem;
  }
`;

const Description = styled.p`
  margin-top: 0;
  opacity: 0.87;
  font-family: Raleway;
  font-size: 0.75rem;
  line-height: 1.67;
  color: #171717;
  margin-bottom: 0;
`;

const Link = styled.a`
  opacity: 0.87;
  font-family: Raleway;
  font-size: 12px;
  line-height: 1.67;
  color: #171717;
  text-decoration: none;
  border-bottom: 1px solid #171717;
`;

const Button = styled.button`
  background-color: transparent;
  font-family: Raleway;
  font-size: 12px;
  font-weight: 500;
  color: #171717;
  border: none;
  text-decoration: underline;
  padding-left: 0.6rem;
`;

const List = styled.div`
  margin-top: 2.6rem;
  margin-bottom: 1.5rem;
  display: flex;
`;

const Intro = () =>
  (<div>
    <Helmet>
      <title>Long Cotton Gabardine Car Coat</title>
    </Helmet>
    <IntroProducts>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-9 col-lg-6">
            <Header>Men’s Clothing</Header>
            <Description>
              <XS>
                Explore our menswear collection for the season. Sculptural knitwear, sweatshirts,
                artist overalls and oversized cabans feature alongside our signature trench coat in
                both heritage.
              </XS>
              <MD>
                Explore our menswear collection for the season. Sculptural knitwear,
                <Link href="#"> sweatshirts </Link>
                ,artist overalls and oversized cabans feature alongside our signature trench coat in
                both heritage and seasonal…
                <Button>More</Button>
              </MD>
            </Description>
          </div>
          <div className="col-xs-12">
            <List>
              <Sort>Category</Sort>
              <Sort>Colour</Sort>
              <Sort>Size</Sort>
              <Sort right>Sort by price</Sort>
            </List>
          </div>
        </div>
      </div>
    </IntroProducts>
  </div>);

export default Intro;
