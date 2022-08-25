import React from "react";
import { StyledButton } from "./Button.elements";

export const Button = ({ children, className }) => {
  return <StyledButton className={className}>{children}</StyledButton>;
};
