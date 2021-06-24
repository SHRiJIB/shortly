import React, { useState } from "react";
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
import CustomButton from "../button/CustomButton";

const Services = () => {
  const [shortUrls, setShortUrls] = useState([]);
  const [btnText, setBtnText] = useState("copy");

  const copyUrl = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setBtnText("copied!");
      setTimeout(() => {
        setBtnText("copy");
      }, 6000);
    });
  };
  console.log(btnText);
  return (
    <Container>
      <InputWrapper>
        <LinkInput shortUrls={shortUrls} setShortUrls={setShortUrls} />
      </InputWrapper>

      <Wrapper padding={shortUrls.length > 0 ? 0 : 1}>
        {shortUrls && (
          <ul>
            {shortUrls.map((url) => (
              <li key={url.code}>
                <div>
                  <h4>{url.original_link}</h4>
                  <h4 className="shorturls">{url.short_link}</h4>
                </div>

                <CustomButton
                  text={btnText}
                  primary
                  radius="12px"
                  handleClick={() => copyUrl(url.short_link)}
                  copied={btnText === "copied!" && "copied"}
                />
              </li>
            ))}
          </ul>
        )}
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
            <h2>Brand Recognition</h2>
            <p>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </Card>
          <Card>
            <Icon>
              <Img
                src="../../images/icon-detailed-records.svg"
                alt="icon-brand-recognition"
              />
            </Icon>
            <h2>Brand Recognition</h2>
            <p>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </Card>
          <Card>
            <Icon>
              <Img
                src="../../images/icon-fully-customizable.svg"
                alt="icon-brand-recognition"
              />
            </Icon>
            <h2>Brand Recognition</h2>
            <p>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </Card>
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default Services;
