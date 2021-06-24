import React from "react";
import { Button } from "./styles";

const CustomButton = ({ primary, text, margin }) => {
  return (
    <Button primary={primary} margin={margin}>
      {text}
    </Button>
  );
};

export default CustomButton;
