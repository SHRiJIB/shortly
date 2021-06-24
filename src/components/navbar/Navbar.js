import React from "react";
import styled from "styled-components";
import CustomButton from "../button/CustomButton";
import { ReactComponent as Logo } from "../../images/logo.svg";

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 10vh;
  width: 100%;
  @media (max-width: 768px) {
    height: auto;
  }
`;
const Brand = styled.a`
  display: flex;
  width: 20%;
  margin-left: 1rem;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 50%;
  }
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 70%;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;
const Navlink = styled.a`
  text-decoration: none;
  color: grey;
  font-weight: bold;
  &:hover {
    color: black;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 8%;
  width: 30%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavMenu = styled.div`
  display: flex;
  width: 80%;
  @media (max-width: 768px) {
    display: ${(props) => (props.active ? "flex" : "none")};
  }
`;
const Navbar = () => {
  return (
    <NavbarContainer>
      <Brand href="/">
        <Logo />
      </Brand>
      <NavMenu>
        <Nav>
          <Navlink href="/">Features</Navlink>
          <Navlink href="/">Pricing</Navlink>
          <Navlink href="/">Resources</Navlink>
        </Nav>
        <ButtonGroup>
          <CustomButton text="Login" />
          <CustomButton text="Sign Up" primary />
        </ButtonGroup>
      </NavMenu>
    </NavbarContainer>
  );
};

export default Navbar;
