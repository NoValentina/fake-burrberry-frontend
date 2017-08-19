import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

const like = `${process.env.PUBLIC_URL}/images/like.svg`;

const Description = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.87rem;
  justify-content: space-between;
`;

const Thing = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  margin-bottom: 2rem;
`;

const Link = styled.a`text-decoration: none;`;

const Photo = styled.img`width: 100%;`;

const Like = styled.button`
  background-color: transparent;
  border: none;
  background-image: url('${like}');
  width: 0.875rem;
  height: 0.8125rem;
  flex-basis: 1rem;
  background-repeat: no-repeat;
`;

const Label = styled.h3`
  font-family: Raleway;
  font-size: 0.75rem;
  line-height: 1.33;
  color: #171717;
  margin: 0;
  font-weight: normal;
  margin-bottom: 0.5rem;
`;

const Title = styled.p`
  font-family: Raleway;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.46;
  color: #171717;
  margin: 0;

  @media (min-width: 992px) {
    font-size: 1rem;
  }
`;

const Color = styled.button`
  border: none;
  background-color: transparent;
  font-family: Raleway;
  font-size: 0.75rem;
  line-height: 1.33;
  color: #171717;
  font-weight: normal;
  padding: 0;
  margin: 0;
  margin-left: 2px;
  border-bottom: 1px solid #171717;
`;

const Cost = styled.h5`
  font-family: Raleway;
  font-size: 12px;
  line-height: 1.33;
  color: #171717;
  font-weight: normal;
  margin: 0;
`;

const Availability = styled.h4`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  font-family: Raleway;
  font-size: 0.75rem;
  line-height: 1.33;
  color: #171717;
  font-weight: normal;
  margin-top: 0.55rem;
  margin-bottom: 0.25rem;
`;

const Text = styled.div`
  font-family: Raleway;
  font-size: 0.75rem;
  line-height: 1.33;
  color: #171717;
  font-weight: normal;
  padding: 0;
`;

const Properties = styled.div`
  display: flex;
  flex-direction: column;
`;

const Card = props =>
  (<Thing>
    <Link>
      <Photo src={props.photo} alt={props.name} />
    </Link>
    <Description>
      <Properties>
        <Label>
          {props.fit}
        </Label>
        <Link>
          <Title>
            {props.name}
          </Title>
        </Link>
        <Availability>
          <Text>Available in</Text>
          <Color>
            {props.color}
          </Color>
        </Availability>
        <Cost>
          <NumberFormat
            value={props.price}
            prefix={'£'}
            thousandSeparator={' '}
            displayType={'text'}
          />
        </Cost>
      </Properties>
      <Like />
    </Description>
  </Thing>);

Card.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  fit: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Card;
