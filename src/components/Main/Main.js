import React from "react";
import styled from "styled-components";
import CustomButton from "../button/CustomButton";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0 80px;
  img {
    margin: 2%;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    img {
      width: 300px;
      height: 90%;
    }
    h1 {
      margin-left: 0;
      font-size: 40px;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8%;

  @media (max-width: 768px) {
    text-align: center;
    margin-left: 0;
  }
`;

const H1 = styled.h1`
  font-size: 80px;
  font-weight: 700;
  margin: 0.35rem;
`;
const P = styled.p`
  margin: 0.35rem;
  font-size: 18px;
  color: grey;
`;

const Main = () => {
  return (
    <Container>
      <Wrapper>
        <H1>More than just shorter links</H1>
        <P>
          Build your brand's recognition and get detailed inshights on how links
          are performing.
        </P>
        <div>
          <CustomButton primary text="Get started" margin />
        </div>
      </Wrapper>
      <img src="../../images/illustration-working.svg" alt="working" />
    </Container>
  );
};

export default Main;
