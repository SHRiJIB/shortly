import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  height: auto;
  position: ${(props) => (props.position ? props.position : "static")};
  top: ${(props) => (props.top ? props.top : "0")};

  span {
    color: red;
    font-size: small;
    position: relative;
    top: -50px;
    left: -23%;
  }
`;

export const Form = styled.form`
  min-width: 70vw;
  min-height: 20vh;
  display: flex;
  align-items: center;
  border-radius: 15px;
  justify-content: center;
  background: url("../../images/bg-shorten-desktop.svg");
  background-color: #3b3054;
  background-size: cover;

  @media (max-width: 915px) {
    flex-direction: column;
    align-items: stretch;
    background: url("../../images/bg-shorten-mobile.svg");
    background-color: #3b3054;
    background-size: cover;

    button {
      margin: 10px;
    }
  }
`;

export const Input = styled.input`
  min-width: 60%;
  /* height: 25%; */
  padding: 16px;
  border: 1px solid #fff;
  border-radius: 12px;
  margin: 2%;
  color: #9e9aa7;
  font-size: 1rem;
  font-weight: 700;

  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    margin: 10px;
  }
`;

export const ShortUrlCont = styled.div`
  padding: 96px;
  background-color: grey;
  color: cyan;
`;
