import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0 80px;
  img {
    margin: 2%;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    img {
      width: 300px;
      height: 90%;
    }
    h1 {
      margin-left: 0;
      font-size: 40px;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8%;
  h1 {
    font-size: 80px;
    font-weight: 700;
    margin: 0.35rem;
  }

  p {
    margin: 0.35rem;
    font-size: 18px;
    color: grey;
  }
  @media (max-width: 768px) {
    text-align: center;
    margin-left: 0;
  }
`;
