import React from "react";
import { StyledInputField } from "./InputField.elements";

export const InputField = ({ type, name, onChange, value }) => {
  return (
    <StyledInputField
      type={type}
      name={name}
      onChange={onChange}
      value={value}
    />
  );
};
