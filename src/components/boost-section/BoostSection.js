import React from "react";
import CustomButton from "../button/CustomButton";
import { Container } from "./styles";

const BoostSection = () => {
  return (
    <Container>
      <h1>Boost your links today</h1>
      <CustomButton text="Get Started" primary />
    </Container>
  );
};

export default BoostSection;
