import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  background-color: #f1f1f1;
  position: relative;
`;

export const InputWrapper = styled.div`
  position: absolute;
  top: -55px;
`;
export const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  padding: 128px 0px 64px;
`;

export const Header = styled.div`
  text-align: center;
  color: #3b3054;
  h2 {
    font-size: 36px;
    font-weight: 900;
    margin-bottom: 24px;
  }

  p {
    color: #9e9aa7;
    font-weight: 700;
    margin-bottom: 120px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 35px;
  margin-bottom: 30px;
`;

export const Card = styled.div`
  height: 300px;
  border-radius: 0.25rem;
  background-color: #fff;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: #3b3054;
  position: relative;
  top: -35px;
  left: 15px;
`;
export const Img = styled.img`
  width: 2rem;
  height: 2rem;
`;
