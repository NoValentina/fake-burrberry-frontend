import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

// components
import { XS, MD } from '../../common';
import Slider from './Slider';

const Header = styled.h2`
  font-family: Lora;
  font-size: 1.625rem;
  color: #171717;
  font-weight: normal;
  margin-top: 0;
  text-align: left;
  margin-bottom: 1rem;
`;

const IntroProducts = styled.div`
  padding-top: 2rem;
  background-color: #f3f3f3;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin-bottom: 4rem;
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

const Label = styled.p`
  font-family: Raleway;
  font-size: 0.75rem;
  line-height: 1.33;
  color: #171717;
  white-space: nowrap;
  margin-top: 0;
  padding: 0;
`;

const CriterionXS = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
`;

const CriterionMD = styled.div`
  margin-top: 2.5rem;
  padding-bottom: 1.5rem;
`;

const Link = styled.a`
  opacity: 0.87;
  font-family: Raleway;
  font-size: 12px;
  line-height: 1.67;
  color: #171717;
`;

const Button = styled.button`
  background-color: transparent;
  font-family: Raleway;
  font-size: 12px;
  font-weight: 500;
  color: #171717;
  border: none;
  text-decoration: underline;
`;

const Intro = () =>
  (<div>
    <Helmet>
      <title>Long Cotton Gabardine Car Coat</title>
    </Helmet>
    <IntroProducts>
      <div className="container">
        <div className="col-xs-12 col-md-10 col-lg-6">
          <Header>Men’s clothing</Header>
          <Description>
            <XS>
              Explore our menswear collection for the season. Sculptural knitwear,sweatshirts ,
              artist overalls and oversized cabans feature alongside our signature trench coat in
              both heritage.
            </XS>
            <MD>
              Explore our menswear collection for the season. Sculptural knitwear,
              <Link href="#"> sweatshirts </Link>
              ,artist overalls and oversized cabans feature alongside our signature trench coat in
              both heritage.
              <Button>More</Button>
            </MD>
          </Description>
        </div>
        <XS>
          <CriterionXS>
            <div className="col-xs-4">
              <Label>Refine by</Label>
            </div>
            <div className="col-xs-8">
              <Slider />
            </div>
          </CriterionXS>
        </XS>
        <MD>
          <CriterionMD>
            <div className="col-md-12">
              <Slider />
            </div>
          </CriterionMD>
        </MD>
      </div>
    </IntroProducts>
  </div>);

export default Intro;
