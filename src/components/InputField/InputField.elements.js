import styled from "styled-components";
import { NeumorphicDesignInset } from "../../globalStyles";
import * as Var from "../variables";

export const StyledInputField = styled.input`
  display: block;
  width: 100%;
  background-color: ${Var.bgColor};
  height: 40px;
  border-radius: 5px;
  border: 1px solid ${Var.greyColor};
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    ${NeumorphicDesignInset}
    transition: ease-in 0.3s;
  }
`;
