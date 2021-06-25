import styled from "styled-components";

export const Footerr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: auto;
  min-height: 40vh;
  background-color: #3b3054;
  color: #9e9aa7;
`;

export const Brand = styled.a``;

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Col = styled.div`
  text-align: center;
  margin-top: 20px;

  h2 {
    font-weight: bold;
  }
  a {
    display: block;
    text-decoration: none;
    margin-bottom: 5px;
    color: #9e9aa7;
    font-weight: bold;
    &:hover {
      color: cyan;
    }
  }

  ul {
    list-style: none;

    display: flex;
    justify-content: center;
    padding: 0;
    li {
      margin: 10px;
      img {
        width: 30px;
        height: 30px;
      }
    }
  }
`;
