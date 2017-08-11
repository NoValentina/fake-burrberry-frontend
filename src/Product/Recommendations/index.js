import React from 'react';
import styled from 'styled-components';

import Cards from '../Cards';
import More from './More';

const Recommends = styled.div`
  margin: 3.05rem 0.5rem 0 0.5rem;

  @media (min-width: 768px) {
    display: block;
    margin: 1.5rem 0 0 0;
  }
`

const Header = styled.h2`
  display: inline-block;
  font-family: Raleway;
  font-size: 1rem;
  font-weight: 500;
  color: #171717;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    border-bottom: solid 1px #171717;
    margin-top: 0;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
  }
`
const RecommendMore = styled.div`
  margin-top: 0.89rem;
  margin-left: 1rem;
  @media (min-width: 768px) {
    display: none;
  }
`

function Recommendations() {
  return (
    <div>
      <Recommends>
        <div className="container">
          <Header >
            WE RECOMMEND
          </Header>
          <Cards />
        </div>
      </Recommends>

      <RecommendMore>
        <More />
      </RecommendMore>
    </div>
  )
}


export default Recommendations;
