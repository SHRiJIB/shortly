import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: auto;
  position: ${(props) => (props.position ? props.position : "static")};
  top: ${(props) => (props.top ? props.top : "0")};
`;

export const Form = styled.form`
  width: 70vw;
  height: 15vh;
  display: flex;
  align-items: center;
  border-radius: 15px;
  justify-content: center;
  background: url("../../images/bg-boost-desktop.svg");
  background-color: #3b3054;
`;

export const Input = styled.input`
  width: 50%;
  height: 25%;
  border: 1px solid #fff;
  border-radius: 5px;
  margin-right: 2%;
`;

export const ShortUrlCont = styled.div`
  padding: 96px;
  background-color: grey;
  color: cyan;
`;
