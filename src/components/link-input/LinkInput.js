import React, { useState } from "react";
import { shortenThisUrl } from "../../api";
import CustomButton from "../button/CustomButton";
import { Container, Form, Input } from "./styles";

const LinkInput = ({ shortUrls, setShortUrls }) => {
  const [url, setUrl] = useState("");
  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await shortenThisUrl(url);
    console.log(data);
    setShortUrls([...shortUrls, data.result]);
  };
  return (
    <>
      <Container column>
        <Form action="" onSubmit={handleSubmit}>
          <Input type="text" value={url} onChange={handleChange} />
          <CustomButton primary text="shorten it!" />
        </Form>
      </Container>
    </>
  );
};

export default LinkInput;
