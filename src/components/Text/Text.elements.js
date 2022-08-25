import styled from "styled-components";
import * as Var from "../variables";

export const StyledText = styled.p`
  font-family: Poppins;
  font-size: 1rem;
  font-weight: 400;
  color: ${Var.textColorNormal};
  margin: 10px 0 0 0;

  &.title {
    font-family: Nunito;
    font-size: 1.2rem;
    font-weight: 600;
    color: ${Var.textColorTitle};
  }
`;
