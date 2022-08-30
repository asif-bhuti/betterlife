import React from "react";
import { StyledButton } from "./Button.elements";

export const Button = ({ children, className, type, name, value, onClick }) => {
  return (
    <StyledButton
      className={className}
      type={type}
      name={name}
      value={value}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};
