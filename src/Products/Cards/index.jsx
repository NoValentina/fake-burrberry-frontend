import React from 'react';
import styled from 'styled-components';
import { MD } from '../../common';

import Card from './Card';
import View from './View';

const Header = styled.h2`
  font-family: Lora;
  font-size: 1rem;
  color: #171717;
  font-weight: normal;
  margin-bottom: 1rem;
  margin-top: 0;

  @media (min-width: 768px) {
    margin-bottom: 2rem;
    font-size: 1.25rem;
  }
`;

const goods = {
  oneTypes: [
    {
      photo:
        '//assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_3X4$&hei=1053&wid=790',
      fit: 'Relaxed fit',
      name: 'The Westminster – Long Heritage Trench Coat',
      color: 'Available in 3 colours',
      price: 1.395,
      id: 1,
    },

    {
      photo:
        'https://assets.burberry.com/is/image/Burberryltd/90dd344122ccf1884fce63c4fc775bd6baa7a11f.jpg?$BBY_V2_ML_3X4$&wid=556&hei=742',
      fit: 'Classic fit',
      name: 'The Kensington – Mid-Length Heritage Trench Coat',
      color: 'Available in 4 colours',
      price: 1.295,
      id: 2,
    },
    {
      photo:
        'https://assets.burberry.com/is/image/Burberryltd/fb6adea94455f2a73e97b5cf2d7811d9135dcbe2.jpg?$BBY_V2_ML_3X4$&wid=556&hei=742',
      fit: 'Toilered fit',
      name: 'The Sandringham – Mid-length Heritage Trench Coat',
      color: 'Available in 3 colours',
      price: 1.295,
      id: 3,
    },
    {
      photo:
        'https://assets.burberry.com/is/image/Burberryltd/a2fa084eae958434c326685fc8ff19dfce9fe430.jpg?$BBY_V2_ML_3X4$&wid=556&hei=742',
      fit: 'Slim fit',
      name: 'The Chelsea – Short Heritage Trench Coat',
      color: 'Available in 3 colours',
      price: 1.195,
      id: 4,
    },
  ],

  secondTypes: [
    {
      photo:
        'https://assets.burberry.com/is/image/Burberryltd/70d0ea20f4faa00e90a0e70fed88af9cd4874824.jpg?$BBY_V2_ML_3X4$&wid=556&hei=742',
      fit: 'Online Exclusive',
      name: 'The Chelsea – Short Heritage Trench Coat',
      color: 'Available in 3 colours',
      price: 1.195,
      id: 5,
    },
    {
      photo:
        'https://assets.burberry.com/is/image/Burberryltd/32792b6c9cf40c27ce446864bc6bae457d490199.jpg?$BBY_V2_ML_3X4$&wid=556&hei=742',
      fit: 'New in',
      name: 'The Brighton – Longline Car Coat',
      color: 'Available in 7 colours',
      price: 1.195,
      id: 6,
    },
    {
      photo:
        'https://assets.burberry.com/is/image/Burberryltd/0c526ecde3443d15c60f660214d320ca4c338c88.jpg?$BBY_V2_ML_3X4$&wid=556&hei=742',
      fit: 'Slim fit',
      name: 'The Chelsea – Short Heritage Trench Coat',
      color: 'Available in 3 colours',
      price: 1.195,
      id: 7,
    },
    {
      photo:
        'https://assets.burberry.com/is/image/Burberryltd/eb872d02449c4050916c9eaf44e266bfdbd32304.jpg?$BBY_V2_ML_3X4$&hei=260&wid=195',
      fit: 'Slim fit',
      name: 'The Chelsea – Short Heritage Trench Coat',
      color: 'Available in 3 colours',
      price: 1.195,
      id: 8,
    },
  ],

  thirdTypes: [
    {
      photo:
        'https://assets.burberry.com/is/image/Burberryltd/f1cdf8b71c19df8d42ed3ea90712c391e6823635.jpg?$BBY_V2_ML_3X4$&wid=556&hei=742',
      fit: 'Online Exclusive',
      name: 'The Westminster – Long Heritage Trench Coat',
      color: 'Available in 3 colours',
      price: 1.195,
      id: 9,
    },
    {
      photo:
        'https://assets.burberry.com/is/image/Burberryltd/23b186def7725e3d4ce4745374ebf11267ed68ed.jpg?$BBY_V2_ML_3X4$&wid=556&hei=742',
      fit: 'Online Exclusive',
      name: 'The Kensington – Long Heritage Trench Coat',
      color: 'Available in 4 colours',
      price: 1.195,
      id: 10,
    },
    {
      photo:
        'https://assets.burberry.com/is/image/Burberryltd/c89a32c4e94178be2d833b9a3d434fa6087d1f25.jpg?$BBY_V2_ML_3X4$&wid=556&hei=742',
      fit: 'Online Exclusive',
      name: 'The Sandringham Short Heritage Trench Coat',
      color: 'Available in 3 colours',
      price: 1.195,
      id: 11,
    },
    {
      photo:
        'https://assets.burberry.com/is/image/Burberryltd/f3e96bbcf8fa0aca509c9f5933110b8596d4f06e.jpg?$BBY_V2_ML_3X4$&wid=556&hei=742',
      fit: 'Online Exclusive',
      name: 'The Chelsea – Long Heritage Trench Coat',
      color: 'Available in 3 colours',
      price: 1.195,
      id: 12,
    },
  ],

  fourthTypes: [
    {
      photo:
        'https://assets.burberry.com/is/image/Burberryltd/3bbc6df8655e77f5a75880f03c3ab3f7c92d2ee9.jpg?$BBY_V2_ML_3X4$&wid=556&hei=742',
      fit: 'New in',
      name: 'The Camden – Mid-length Car Coat',
      color: 'Available in 7 colours',
      price: 1.195,
      id: 13,
    },
    {
      photo:
        'https://assets.burberry.com/is/image/Burberryltd/b340592f566593645f37fd61fdafe720e2c224b7.jpg?$BBY_V2_ML_3X4$&wid=556&hei=742',
      fit: 'New in',
      name: 'The Camden – Mid-length Car Coat',
      color: 'Available in 7 colours',
      price: 1.195,
      id: 14,
    },
    {
      photo:
        'https://assets.burberry.com/is/image/Burberryltd/499e46c07518da4b2d208164cb6202b415346661.jpg?$BBY_V2_ML_3X4$&wid=556&hei=742',
      fit: 'New in',
      name: 'The Camden – Mid-length Car Coat',
      color: 'Available in 7 colours',
      price: 1.195,
      id: 15,
    },
    {
      photo:
        'https://assets.burberry.com/is/image/Burberryltd/1297c5d67c810e003eed53e02959843669f1ce9c.jpg?$BBY_V2_ML_3X4$&wid=556&hei=742',
      fit: 'New in',
      name: 'The Camden – Mid-length Car Coat',
      color: 'Available in 7 colours',
      price: 1.195,
      id: 16,
    },
  ],
};

const Border = styled.hr`
  border: none;
  background-color: #c6c6c6;
  height: 1px;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    margin-top: 2rem;
  }
`;

const Cards = () =>
  (<section className="container">
    <Header>Heritage Trench Coats</Header>
    <div className="row">
      {goods.oneTypes.map(oneType =>
        (<div className="col-xs-6 col-md-3" key={oneType.id}>
          <Card
            photo={oneType.photo}
            fit={oneType.fit}
            name={oneType.name}
            color={oneType.color}
            price={oneType.price}
          />
        </div>),
      )}
    </div>
    <MD>
      <div className="row">
        {goods.thirdTypes.map(thirdType =>
          (<div className="col-md-3" key={thirdType.id}>
            <Card
              photo={thirdType.photo}
              fit={thirdType.fit}
              name={thirdType.name}
              color={thirdType.color}
              price={thirdType.price}
            />
          </div>),
        )}
      </div>
    </MD>

    <Border />
    <Header>Single Breasted Trench Coats</Header>
    <div className="row">
      {goods.secondTypes.map(secondType =>
        (<div className="col-xs-6 col-md-3" key={secondType.id}>
          <Card
            photo={secondType.photo}
            fit={secondType.fit}
            name={secondType.name}
            color={secondType.color}
            price={secondType.price}
          />
        </div>),
      )}
    </div>
    <MD>
      <div className="row">
        {goods.fourthTypes.map(fourthType =>
          (<div className="col-md-3" key={fourthType.id}>
            <Card
              photo={fourthType.photo}
              fit={fourthType.fit}
              name={fourthType.name}
              color={fourthType.color}
              price={fourthType.price}
            />
          </div>),
        )}
      </div>
    </MD>

    <View />
  </section>);

export default Cards;
