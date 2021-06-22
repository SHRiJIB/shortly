import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: auto;
  height: 40vh;
  background-color: #3b3054;
  color: #fff;
`;
const P = styled.p`
  margin: 0;
`;
const Footer = () => {
  return (
    <Container>
      <P>Footer</P>
      <P>Footer</P>
      <P>Footer</P>
      <P>Footer</P>
    </Container>
  );
};

export default Footer;
