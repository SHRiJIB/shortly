import React from "react";
import CustomButton from "../button/CustomButton";
import { Container, Wrapper } from "./styles";

const Main = () => {
  return (
    <Container>
      <Wrapper>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed inshights on how links
          are performing.
        </p>
        <div>
          <CustomButton primary text="Get started" margin />
        </div>
      </Wrapper>
      <img src="../../images/illustration-working.svg" alt="working" />
    </Container>
  );
};

export default Main;
