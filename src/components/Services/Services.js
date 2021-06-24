import React, { useEffect, useState } from "react";
import {
  Card,
  Container,
  Grid,
  Header,
  Icon,
  Img,
  InputWrapper,
  Wrapper,
} from "./styles";
import LinkInput from "../link-input/LinkInput";

const Services = () => {
  const [shortUrls, setShortUrls] = useState([]);
  console.log(shortUrls);
  return (
    <Container>
      <InputWrapper>
        <LinkInput shortUrls={shortUrls} setShortUrls={setShortUrls} />
      </InputWrapper>
      <Wrapper>
        <Header>
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard
          </p>
        </Header>
        <Grid>
          <Card>
            <Icon>
              <Img
                src="../../images/icon-brand-recognition.svg"
                alt="icon-brand-recognition"
              />
            </Icon>
          </Card>
          <Card>
            <Icon>
              <Img
                src="../../images/icon-detailed-records.svg"
                alt="icon-brand-recognition"
              />
            </Icon>
          </Card>
          <Card>
            <Icon>
              <Img
                src="../../images/icon-fully-customizable.svg"
                alt="icon-brand-recognition"
              />
            </Icon>
          </Card>
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default Services;
