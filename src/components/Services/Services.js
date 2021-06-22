import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #f1f1f1;
`;

const Wrapper = styled.div`
  width: 78%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  z-index: 1;
`;
const Line = styled.div`
  position: relative;
  top: 50%;
  width: 55%;
  height: 10px;
  background-color: cyan;
  color: cyan;
`;
const CardA = styled.div`
  width: 24%;
  height: 38%;
  border-radius: 0.45rem;
  background-color: #fff;
`;

const CardB = styled.div`
  position: relative;
  top: 5%;
  width: 24%;
  height: 38%;
  border-radius: 0.45rem;
  background-color: #fff;
`;

const CardC = styled.div`
  position: relative;
  top: 10%;
  width: 24%;
  height: 38%;
  border-radius: 0.45rem;
  background-color: #fff;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: #3b3054;
  position: relative;
  top: -35px;
  left: 15px;
`;
const Img = styled.img`
  width: 2rem;
  height: 2rem;
`;
const Services = () => {
  return (
    <Container>
      <Line />
      <Wrapper>
        <CardA>
          <Icon>
            <Img
              src="../../images/icon-brand-recognition.svg"
              alt="icon-brand-recognition"
            />
          </Icon>
        </CardA>
        <CardB>
          <Icon>
            <Img
              src="../../images/icon-detailed-records.svg"
              alt="icon-brand-recognition"
            />
          </Icon>
        </CardB>
        <CardC>
          <Icon>
            <Img
              src="../../images/icon-fully-customizable.svg"
              alt="icon-brand-recognition"
            />
          </Icon>
        </CardC>
      </Wrapper>
    </Container>
  );
};

export default Services;
