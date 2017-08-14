import React from 'react';

import Card from './Card';

const products = [
  {
    photo:
      'https://assets.burberry.com/is/image/Burberryltd/f51a470fc157e3014a115c64276c2e124d9fc477.jpg?$BBY_V2_ML_3X4$&hei=260&wid=195',
    name: 'Emroided Hooded',
    price: 27000,
  },
  {
    photo:
      'https://assets.burberry.com/is/image/Burberryltd/eb872d02449c4050916c9eaf44e266bfdbd32304.jpg?$BBY_V2_ML_3X4$&hei=260&wid=195',
    name: 'Relaxed Fit Stretch Jeans',
    price: 22500,
  },
  {
    photo:
      'https://assets.burberry.com/is/image/Burberryltd/cfaeb1b3c79aeee09dfda4e26a9fb3f4525df542.jpg?$BBY_V2_SL_3X4$&hei=260&wid=195',
    name: 'Leather and House Check',
    price: 120000,
  },
  {
    photo:
      'https://assets.burberry.com/is/image/Burberryltd/b33127f06e6c404cc3168645e099a9eb71aeca9c.jpg?$BBY_V2_SL_3X4$&hei=260&wid=195',
    name: 'Leather Wingtip Check',
    price: 46000,
  },
];

const Cards = () =>
  (<div className="row">
    {products.map((product, num) =>
      (<div className="col-xs-6 col-md-3" key={num}>
        <Card photo={product.photo} name={product.name} price={product.price} />
      </div>),
    )}
  </div>);

export default Cards;
