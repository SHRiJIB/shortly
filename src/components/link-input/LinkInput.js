import React from "react";
import styled from "styled-components";
import CustomButton from "../button/CustomButton";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 15vh;
`;

const Form = styled.form`
  width: 70vw;
  height: 15vh;
  display: flex;
  align-items: center;
  border-radius: 15px;
  justify-content: center;
  background: url("../../images/bg-boost-desktop.svg");
  background-color: #3b3054;
  position: relative;
  top: 50px;
`;

const Input = styled.input`
  width: 50%;
  height: 25%;
  border: 1px solid #fff;
  border-radius: 5px;
  margin-right: 2%;
`;
const LinkInput = () => {
  return (
    <Container>
      <Form action="">
        <Input type="text" />
        <CustomButton primary text="shorten it!" />
      </Form>
    </Container>
  );
};

export default LinkInput;
