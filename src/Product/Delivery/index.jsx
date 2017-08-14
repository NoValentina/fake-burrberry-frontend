import React from 'react';
import styled from 'styled-components';

const delivery = `${process.env.PUBLIC_URL}/images/delivery@3x.png`;

const ProductDelivery = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const Header = styled.h2`
  @media (min-width: 768px) {
    font-family: Raleway;
    font-size: 1rem;
    font-weight: 500;
    color: #171717;
    margin: 0 0 0.9rem 0;
  }
`;

const Information = styled.div`
  height: 100%;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 1200px) {
    margin-left: 5.125rem;
    justify-content: center;
  }
`;

const Content = styled.div`
  @media (min-width: 768px) {
    margin-bottom: 1.49rem;
    padding-top: 0.18rem;
    line-height: 1.1;
  }
`;

const Label = styled.h3`
  @media (min-width: 768px) {
    font-family: Raleway;
    font-size: 0.75rem;
    font-weight: bold;
    color: #171717;
    margin-bottom: 0.25rem;
    margin-top: 0;
  }
`;

const Description = styled.p`
  @media (min-width: 768px) {
    margin: 0;
    font-family: Raleway;
    font-size: 0.75rem;
    line-height: 1.33;
    color: #171717;
  }
`;

const Photo = styled.img`
  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const Delivery = () => (
  <div className="container">
    <ProductDelivery>
      <div className="row">
        <div className="col-md-7">
          <Photo alt="доставка" src={delivery} />
        </div>
        <div className="col-md-5">
          <Information>
            <Header>DELIVERY</Header>
            <Content>
              <Label>Free Next Day Delivery</Label>
              <Description>
                  Order before 7pm Monday to Thursday for delivery the next day
                </Description>
            </Content>
            <Content>
              <Label>Collect-in-Store</Label>
              <Description>
                  Order online today and pick up your items in store as early as tomorrow
                </Description>
            </Content>
            <Content>
              <Label>Free Returns</Label>
              <Description>Enjoy free returns on your order</Description>
            </Content>
            <Content>
              <Label>Free Gift Packaging</Label>
              <Description>
                  Discover our gift packaging, a gold lined box tied with a coloured ribbon
                </Description>
            </Content>
          </Information>
        </div>
      </div>
    </ProductDelivery>
  </div>
  );

export default Delivery;
