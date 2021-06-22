import React from "react";
import styled from "styled-components";
import CustomButton from "../button/CustomButton";

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  height: 10vh;
  width: 100%;
`;
const Brand = styled.a`
  display: flex;
  align-items: center;
  margin-left: 8%;
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 50%;
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
  width: 100%;
`;
const Navbar = () => {
  return (
    <NavbarContainer>
      <Brand href="/">
        <img src="./images/logo.svg" alt="logo" />
      </Brand>
      <Nav>
        <Navlink href="/">Features</Navlink>
        <Navlink href="/">Pricing</Navlink>
        <Navlink href="/">Resources</Navlink>
      </Nav>
      <ButtonGroup>
        <CustomButton text="Login" />
        <CustomButton text="Sign Up" primary />
      </ButtonGroup>
    </NavbarContainer>
  );
};

export default Navbar;
