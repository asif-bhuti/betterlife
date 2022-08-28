import styled from "styled-components";
import * as v from "../variables";

export const SideBar = styled.div`
  position: fixed;
  left: 0;
  height: 100%;
  width: 200px;
  box-shadow: 6px 6px 11px #bebebe, -6px -6px 11px #ffffff;

  @media screen and (max-width: 960px) {
    width: 100vw;
  }
`;
export const LogoContent = styled.div``;
export const Logo = styled.div`
  display: flex;
  height: 100px;
  width: 90%;
  margin: 5px;
  padding: 10px;
  border: 1px solid ${v.greyColor};
  border-radius: 5px;
`;
export const Icon = styled.i`
  &.btn {
    position: absolute;
    left: 80%;
    top: 6px;
    height: 50px;
    width: 50px;
    text-align: center;
    line-height: 50px;
    transform: translateX(-30%);
  }
  &.bx {
    font-size: 30px;
    margin-right: 5px;
  }
`;
export const MenuItem = styled.span``;

export const List = styled.ul`
  margin-top: 10px;
  list-style-type: none;
  cursor: pointer;
  padding-left: 20px;
  li {
    position: relative;
    height: 30px;
    width: 80%;
  }
`;
export const ItemLink = styled.div`
  margin-top: 80px;
  padding: 5px;
  display: flex;
  align-items: center;
  transition: all 0.4s ease;
  &:hover {
    border: 1px solid ${v.greyColor};
    border-radius: 5px;
  }
`;
export const AdminInfo = styled.div`
  font-size: 25px;
`;
export const DropDown = styled.input`
  display: none;
  .btnControl:checked + label > p {
    width: 70px;
    height: 74px;
  }
`;
