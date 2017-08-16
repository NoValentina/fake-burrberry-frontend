import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

const like = `${process.env.PUBLIC_URL}/images/like.svg`;

const Thing = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  margin-bottom: 2rem;
`;

const Link = styled.a`text-decoration: none;`;

const Photo = styled.img`width: 100%;`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

const Like = styled.div`
  display: block;
  background-image: url('${like}');
  width: 0.875rem;
  height: 0.8125rem;
`;

const Label = styled.h3`
  font-family: Raleway;
  font-size: 0.75rem;
  line-height: 1.33;
  color: #171717;
  margin: 0;
  font-weight: normal;
`;

const Title = styled.p`
  font-family: Raleway;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.33;
  color: #171717;
  margin: 0;

  @media (min-width: 992px) {
    font-size: 1rem;
  }
`;

const Availability = styled.h4`
  font-family: Raleway;
  font-size: 0.75rem;
  line-height: 1.33;
  color: #171717;
  font-weight: normal;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
`;

const Cost = styled.h5`
  font-family: Raleway;
  font-size: 12px;
  line-height: 1.33;
  color: #171717;
  font-weight: normal;
  margin: 0;
`;

const Card = props =>
  (<Thing>
    <Link>
      <Photo src={props.photo} alt={props.name} />
    </Link>
    <Header>
      <Label>
        {props.fit}
      </Label>
      <Like />
    </Header>
    <Link>
      <Title>
        {props.name}
      </Title>
    </Link>
    <Availability>
      {props.color}
    </Availability>
    <Cost>
      <NumberFormat value={props.price} prefix={'£'} thousandSeparator={' '} displayType={'text'} />
    </Cost>
  </Thing>);

Card.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  fit: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Card;
