import styled from "styled-components";
import { Container } from "../../globalStyles";
import { Link } from "react-router-dom";
import { FaMagento } from "react-icons/fa";
import { greyColor } from "../variables";
import * as Var from "../variables";

export const Nav = styled.nav`
  background: ${Var.bgColor};
  height: 50px;
  display: flex;
  justify-content: flex;
  position: sticky;
  align-items: center;
  font-size: 1.2rem;
  top: 0;
  z-index: 999;
  border-bottom: 2px solid ${Var.greyColor};
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 50px;
  ${Container}
`;
export const NavLogo = styled(Link)`
  color: ${Var.textColorTitle};
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;
export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    cursor: pointer;
    font-size: 1.5re;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  list-style: none;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;

    position: absolute;
    top: 50px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #eee;
  }
`;

export const NavLink = styled(Link)`
  color: ${Var.textColorTitle};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  &:hover {
    color: ${Var.primaryColor};
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 1rem;
    width: 100%;
    display: table;
    color: #2d3436;

    &:hover {
      border: 2px solid ${greyColor};
      border-radius: 5px;
      color: ${Var.primaryColor};
      transition: all 0.3s ease;
    }
  }
`;

export const NavItem = styled.li`
  height: 50px;
  margin: 0;

  &:hover {
    padding: 0 2px 0 2px;
  }

  @media screen and (max-width: 960px) {
    border: none;
  }
`;
