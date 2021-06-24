import React from "react";
import { Button } from "./styles";

const CustomButton = ({
  primary,
  text,
  margin,
  radius,
  handleClick,
  copied,
}) => {
  return (
    <Button
      primary={primary}
      margin={margin}
      radius={radius}
      onClick={handleClick}
      copied={copied && "#3b3054"}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
