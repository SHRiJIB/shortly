import React from "react";
import styled from "styled-components";
import { ReactComponent as LogoFooter } from "../../images/logo-footer.svg";

const Footerr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  height: 40vh;
  background-color: #3b3054;
  color: #fff;
`;

const Brand = styled.a`
  fill: antiquewhite;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;
const Col = styled.div`
  margin-top: 20px;
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
        <Col>Footer</Col>
        <Col>Footer</Col>
        <Col>Footer</Col>
        <Col>Footer</Col>
      </Container>
    </Footerr>
  );
};

export default Footer;
