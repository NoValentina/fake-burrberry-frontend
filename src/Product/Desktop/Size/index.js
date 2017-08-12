import React from "react";
import styled from "styled-components";

import Buttons from "../Buttons";
import LinkHelp from "../LinkHelp";

const sizes = ["S", "M", "L", "XL"];

const Size = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4.6875rem;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

const Label = styled.p`
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #171717;
`;

export default () =>
  <Size>
    <Header>
      <Label>
        Size: <b>XL</b>
      </Label>
      <LinkHelp />
    </Header>

    <Buttons sizes={sizes} selectedSize="XL" />
  </Size>;
