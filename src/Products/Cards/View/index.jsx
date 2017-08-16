import React from 'react';
import styled from 'styled-components';

const Show = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 0 5rem 0;
  text-align: center;
`;

const Label = styled.p`
  font-family: Lora;
  font-size: 1rem;
  color: #171717;
  text-align: center;
  margin-top: 0;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 992px) {
    font-size: 1.25rem;
  }
`;

const Button = styled.button`
  border-radius: 2px;
  border: solid 1px #171717;
  padding: 1rem 2rem;
  background-color: transparent;
  font-family: Raleway;
  font-size: 0.75rem;
  line-height: 1.33;
  color: #171717;

  @media (min-width: 768px) {
    font-size: 1rem;

    @media (min-width: 992px) {
      font-size: 0.75rem;
    }
  }
`;

const View = () =>
  (<Show>
    <div className="container">
      <Label>Showing 8 of 17</Label>
      <Button>View 9 more</Button>
    </div>
  </Show>);
export default View;
