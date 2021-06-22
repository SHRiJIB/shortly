import React from "react";
import styled from "styled-components";
import CustomButton from "../button/CustomButton";

const Container = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40vh;
  background: url("../../images/bg-boost-desktop.svg");
  background-size: cover;
  background-color: #3b3054;
`;

const BoostSection = () => {
  return (
    <Container>
      <CustomButton text="Get Started" primary />
    </Container>
  );
};

export default BoostSection;
