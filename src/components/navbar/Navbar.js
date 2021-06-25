import React, { useState } from "react";
import CustomButton from "../button/CustomButton";
import { ReactComponent as Logo } from "../../images/logo.svg";
import {
  NavbarContainer,
  Brand,
  ButtonGroup,
  Nav,
  NavMenu,
  Navlink,
  NavBarToggle,
  Line,
} from "./styles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavbarContainer>
      <Brand href="/">
        <Logo />
      </Brand>

      <NavBarToggle onClick={() => setIsOpen((prev) => !prev)}>
        <Line />
        <Line />
        <Line />
      </NavBarToggle>
      <NavMenu isOpen={isOpen}>
        <Nav>
          <Navlink href="/">Features</Navlink>
          <Navlink href="/">Pricing</Navlink>
          <Navlink href="/">Resources</Navlink>
        </Nav>
        <hr />
        <ButtonGroup>
          <CustomButton text="Login" />
          <CustomButton text="Sign Up" primary />
        </ButtonGroup>
      </NavMenu>
    </NavbarContainer>
  );
};

export default Navbar;
