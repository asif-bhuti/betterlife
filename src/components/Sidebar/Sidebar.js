import React from "react";
import { Text } from "../Text/Text";
import {
  AdminInfo,
  DropDown,
  Icon,
  ItemLink,
  List,
  Logo,
  LogoContent,
  MenuItem,
  SideBar,
} from "./Sidebar.elements";

export const Sidebar = () => {
  return (
    <SideBar>
      <LogoContent>
        <Logo>
          <Icon className="bx bx-user"></Icon>
          <AdminInfo>
            <Text className="title">Admin Panel</Text>
            <Text>Admin Name</Text>
            <Text className="small">Admin ID</Text>
          </AdminInfo>
        </Logo>
      </LogoContent>
      <List>
        <li>
          <ItemLink>
            <Icon className="bx bx-grid-alt"></Icon>
            <MenuItem to="/dashboard">Dashboard</MenuItem>
          </ItemLink>
        </li>

        <li>
          <ItemLink to="/patient">
            <Icon className="bx bx-user-pin"></Icon>
            <MenuItem>Patient</MenuItem>
          </ItemLink>
        </li>
        <li>
          <ItemLink to="/doctor">
            <Icon className="bx bx-user-pin"></Icon>
            <MenuItem>Doctor</MenuItem>
          </ItemLink>
        </li>
      </List>
    </SideBar>
  );
};
