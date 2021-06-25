import React from "react";
import { ReactComponent as LogoFooter } from "../../images/logo-footer.svg";
import { Container, Footerr, Brand, Col } from "./styles";

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
