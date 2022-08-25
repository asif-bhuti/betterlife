import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, Text } from "../../components";
import * as Var from "../../components/variables";

export const ContainerHome = styled(Container)`
  background-color: red;

  ${Container}
`;

export const Footer = styled.footer`
  background-color: ${Var.textColorTitle};
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  padding: 45px 50px;
`;

export const FooterRight = styled.div`
  float: right;
  margin: 6px;
  max-width: 180px;
  @media screen and (max-width: 960px) {
    text-align: center;
  }
`;

export const FooterLeft = styled.div``;

export const FooterText = styled.p`
  color: ${Var.bgColor};

  &.footertitle {
    font-weight: 600;
    cursor: pointer;
    &:hover {
      font-weight: 400;
      transition: ease-in-out 0.2s;
    }
  }
`;
export const HomeText = styled.p`
  font-size: 2.5rem;
  text-align: center;
  &.desc {
    font-size: 2rem;
    color: ${Var.textColorNormal};
  }

  @media screen and (max-width: 960px) {
    font-size: 2rem;
    &.desc {
      font-size: 1.5rem;
    }
  }
  ${Text}
`;
export const ItemBtn = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 120px;
    flex-direction: column;
  }
`;

export const BtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 60%;
  width: 60%;
  border: none;
  outline: none;
`;
