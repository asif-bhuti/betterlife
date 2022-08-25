import styled from "styled-components";
import { Text } from "../../components";

export const LinkText = styled.p`
  color: blue;
  cursor: pointer;
  margin-top: 5px;
  &:hover {
    color: red;
  }
  ${Text}
`;
