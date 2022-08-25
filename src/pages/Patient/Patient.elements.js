import styled from "styled-components";
import * as Var from "../../components/variables";
import { NeumorphicDesignInset } from "../../globalStyles";

export const StyledTextArea = styled.textarea`
  display: block;
  width: 100%;
  min-height: 100px;
  resize: none;
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

export const StyledFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Select = styled.select`
  background-color: #eee;
  width: 50%;
  color: #555;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
`;
