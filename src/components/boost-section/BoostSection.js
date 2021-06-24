import React from "react";
import styled from "styled-components";
import CustomButton from "../button/CustomButton";

const Container = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
  background: url("../../images/bg-boost-desktop.svg");
  background-size: cover;
  background-color: #3b3054;

  h1 {
    color: white;
    font-size: 40px;
    font-weight: 900;
  }
`;

const BoostSection = () => {
  return (
    <Container>
      <h1>Boost your links today</h1>
      <CustomButton text="Get Started" primary />
    </Container>
  );
};

export default BoostSection;
