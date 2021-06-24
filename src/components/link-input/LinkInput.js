import React, { useState } from "react";
import { shortenThisUrl } from "../../api";
import CustomButton from "../button/CustomButton";
import { Container, Form, Input } from "./styles";

const LinkInput = ({ shortUrls, setShortUrls }) => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    setUrl(e.target.value);

    setError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (url === "") {
      setError(true);
      return;
    }
    const { data } = await shortenThisUrl(url);
    setShortUrls([...shortUrls, data.result]);
    setUrl("");
  };
  return (
    <>
      <Container column>
        <Form action="" onSubmit={handleSubmit}>
          <Input type="text" value={url} onChange={handleChange} />
          <CustomButton primary text="shorten it!" radius="12px" />
        </Form>
        {error && <span>Url can't be empty</span>}
      </Container>
    </>
  );
};

export default LinkInput;
