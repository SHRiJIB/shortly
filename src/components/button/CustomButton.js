import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => (props.primary ? "#2acfcf" : "#fff")};
  color: ${(props) => (props.primary ? "#fff" : "#bfbfbf")};
  font-size: 1em;
  margin: ${(props) => (props.margin ? "0.35em" : "0")};
  padding: 0.5em 1em;
  border: none;
  border-radius: 35px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: ${(props) => (props.primary ? "#88E7E7" : "#fff")};
    color: ${(props) => (props.primary ? "#fff" : "#000")};
  }
`;
const CustomButton = ({ primary, text, margin }) => {
  return (
    <Button primary={primary} margin={margin}>
      {text}
    </Button>
  );
};

export default CustomButton;
