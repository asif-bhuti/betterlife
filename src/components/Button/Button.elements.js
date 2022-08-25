import styled from "styled-components";
import * as Var from "../variables";

export const StyledButton = styled.button`
  background: transparent;
  white-space: nowrap;
  padding: 4px 30px;
  color: ${Var.textColorTitle};
  font-size: 18px;
  font-weight: 600;
  outline: none;
  border: 2px solid ${Var.textColorTitle};
  border-radius: 100px;
  cursor: pointer;

  &.primary {
    background-color: ${Var.textColorTitle};
    color: ${Var.bgColor};
    font-weight: 500;
    border: 2px solid ${Var.textColorTitle};
    &:hover {
      background-color: transparent;
      color: ${Var.textColorTitle};
    }
  }

  &:hover {
    transition: all 0.3s ease-out;
    background: ${Var.textColorTitle};
    color: ${Var.bgColor};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
