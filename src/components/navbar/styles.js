import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 10vh;
  width: 100%;

  @media (max-width: 768px) {
    height: auto;
  }
`;
export const Brand = styled.a`
  display: flex;
  width: 20%;
  margin-left: 1rem;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 50%;
  }
`;
export const NavMenu = styled.div`
  display: flex;
  width: 80%;

  hr {
    display: none;
  }
  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 60%;
    border-radius: 12px;
    background-color: #3b3054;
    position: absolute;
    top: 50px;
    left: 10%;
    z-index: 1000;

    hr {
      display: inline;
      width: 80%;
      background-color: #9e9aa7;
      opacity: 0.5;
    }
  }
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 50%;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-evenly;
    margin: 5px;
    height: 70%;
  }
`;
export const Navlink = styled.a`
  text-decoration: none;
  color: grey;
  font-weight: bold;
  &:hover {
    color: black;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-left: auto;
  margin-right: 8%;
  width: 30%;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-evenly;
    height: 30%;
    margin: 10px;
    width: auto;
  }
`;

export const NavBarToggle = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    width: 40%;

    margin-right: 25px;
    flex-direction: column;
  }
`;
export const Line = styled.div`
  width: 30px;
  height: 5px;
  background-color: black;
  margin: 3px;
  margin-left: auto;
`;
