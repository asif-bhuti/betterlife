import React from "react";
import { StyledText } from "./Text.elements";

export const Text = ({ children, className }) => {
  return <StyledText className={className}>{children}</StyledText>;
};
