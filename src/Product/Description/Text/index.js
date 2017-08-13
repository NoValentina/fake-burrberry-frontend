import React from "react";
import styled from "styled-components";

const Text = styled.div`
  display: inline-block;
  margin: 2.06rem 1rem 1.95rem 0.5rem;

  @media (min-width: 768px) {
    margin-top: 1.1rem;
    margin-left: 0.5rem;
    margin-bottom: 1.5rem;
  }

  ul,
  p {
    font-family: Lora;
    font-size: 0.875rem;
    line-height: 1.72;
    color: #171717;
    text-align: left;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  ul {
    margin-top: 1.5rem;
  }
`;

export default props =>
  <Text dangerouslySetInnerHTML={{ __html: props.description }} />;
