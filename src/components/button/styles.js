import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => (props.primary ? "#2acfcf" : "#fff")};
  color: ${(props) => (props.primary ? "#fff" : "#bfbfbf")};
  font-size: 1em;
  width: 200px;
  margin: ${(props) => (props.margin ? "0.35em" : "0")};
  padding: 0.5rem 2rem 0.5rem;
  border: none;
  border-radius: ${(props) => (props.radius ? props.radius : "35px")};
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: ${(props) => (props.primary ? "#88E7E7" : "#fff")};
    color: ${(props) => (props.primary ? "#fff" : "#000")};
  }
`;
