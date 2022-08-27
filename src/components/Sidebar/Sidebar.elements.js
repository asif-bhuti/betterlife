import styled from "styled-components";

export const SideBar = styled.div`
  position: fixed;
  left: 0;
  height: 100%;
  width: 200px;
  border-right: 1px solid red;
`;
export const LogoContent = styled.div``;
export const Logo = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
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
  list-style-type: none;
  cursor: pointer;
  .list {
  }
`;
export const ItemLink = styled.div`
  margin-top: 20px;
  li {
    position: relative;
    height: 30px;
    width: 50%;
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
