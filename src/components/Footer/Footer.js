import React from "react";
import styled from "styled-components";
import { ReactComponent as LogoFooter } from "../../images/logo-footer.svg";

const Footerr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: auto;
  min-height: 40vh;
  background-color: #3b3054;
  color: #9e9aa7;
`;

const Brand = styled.a``;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const Col = styled.div`
  text-align: center;
  margin-top: 20px;

  h2 {
    font-weight: bold;
  }
  a {
    display: block;
    text-decoration: none;
    margin-bottom: 5px;
    color: #9e9aa7;
    font-weight: bold;
    &:hover {
      color: cyan;
    }
  }

  ul {
    list-style: none;

    display: flex;
    justify-content: center;
    padding: 0;
    li {
      margin: 10px;
      img {
        width: 30px;
        height: 30px;
      }
    }
  }
`;

const Footer = () => {
  return (
    <Footerr>
      <Container>
        <Col>
          <Brand href="/">
            <LogoFooter />
          </Brand>
        </Col>
        <Col>
          <h2>Features</h2>
          <a href="/">Link Shortening</a>
          <a href="/">Branded Links</a>
          <a href="/">Analytics</a>
        </Col>
        <Col>
          <h2>Resources</h2>
          <a href="/">Blog</a>
          <a href="/">Developers</a>
          <a href="/">Support</a>
        </Col>
        <Col>
          <h2>Company</h2>
          <a href="/">About</a>
          <a href="/">Our Team</a>
          <a href="/">Careers</a>
          <a href="/">Contact</a>
        </Col>
        <Col>
          <ul>
            <li>
              <a href="/">
                <img src="../../images/icon-facebook.svg" alt="facebook.com" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src="../../images/icon-twitter.svg" alt="twitter.com" />
              </a>
            </li>
            <li>
              <a href="/">
                <img
                  src="../../images/icon-instagram.svg"
                  alt="instagram.com"
                />
              </a>
            </li>
            <li>
              <a href="/">
                <img
                  src="../../images/icon-pinterest.svg"
                  alt="pinterest.com"
                />
              </a>
            </li>
          </ul>
        </Col>
      </Container>

      <div> &copy; Shortly 2021</div>
    </Footerr>
  );
};

export default Footer;
