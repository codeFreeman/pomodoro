import React from "react";
import { ButtonStyle } from "./styled_utils";

const Button = ({ variant, color, text, handleClick, style }) => {
  return (
    <ButtonStyle
      variant={variant}
      color={color}
      fullWidth
      onClick={handleClick}
      style={style}
    >
      {text}
    </ButtonStyle>
  );
};

export default Button;
