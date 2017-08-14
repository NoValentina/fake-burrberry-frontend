import React from 'react';
import styled from 'styled-components';

const FooterMenu = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const ListName = styled.h3`
  font-family: Raleway;
  font-size: 0.75rem;
  font-weight: bold;
  color: #171717;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const List = styled.nav`
  display: flex;
  flex-direction: column;
`;

const Link = styled.a`
  text-decoration: none;
  font-family: Raleway;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.4;
  color: #999999;
  margin-bottom: 0.75rem;
`;

const Linkabbr = styled.abbr`text-decoration: none !important;`;

const Navigation = () => (
  <FooterMenu>
    <div className="row">
      <div className="col-sm-3">
        <List>
          <ListName>CUSTOMER SERVICE</ListName>
          <Link href="#">Contact Us</Link>
          <Link href="#">Payment</Link>
          <Link href="#">Shipping</Link>
          <Link href="#">Returns</Link>
          <Link href="#">Faqs</Link>
          <Link href="#">Live Chat</Link>
          <Link href="#">The Burberry App</Link>
          <Link href="#">Store Locator</Link>
        </List>
      </div>
      <div className="col-sm-3">
        <List>
          <ListName>OUR COMPANY</ListName>
          <Link href="#">Our History</Link>
          <Link href="#">Burberry Group Plc</Link>
          <Link href="#">Careers</Link>
          <Link href="#">Corporate Responsibility</Link>
          <Link href="#">Site Map</Link>
        </List>
      </div>
      <div className="col-sm-3">
        <List>
          <ListName>LEGAL & COOKIES</ListName>
          <Link href="#">Terms & Conditions</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Cookie Policy</Link>
          <Link href="#">Accessibility Statement</Link>
          <Link href="#">
              Japan Only -
            <Linkabbr title="Single-Cycle Timed Loop">SCTL</Linkabbr> indications
          </Link>
        </List>
      </div>
    </div>
  </FooterMenu>
);

export default Navigation;
