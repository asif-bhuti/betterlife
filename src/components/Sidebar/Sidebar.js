import React from "react";
import { Text } from "../Text/Text";
import {
  AdminInfo,
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
          <Icon className="bx bx-menu btn"></Icon>
        </Logo>
        <MenuItem>
          <List>
            <li>
              <ItemLink>
                <Icon className="bx bx-grid-alt"></Icon>
                <MenuItem>Dashboard</MenuItem>
              </ItemLink>
            </li>
            <li>
              <ItemLink>
                <Icon className="bx bx-grid-alt"></Icon>
                <MenuItem>Dashboard</MenuItem>
              </ItemLink>
            </li>
            <li>
              <ItemLink>
                <Icon className="bx bx-grid-alt"></Icon>
                <MenuItem>Dashboard</MenuItem>
              </ItemLink>
            </li>
            <li>
              <ItemLink>
                <Icon className="bx bx-grid-alt"></Icon>
                <MenuItem>Dashboard</MenuItem>
              </ItemLink>
            </li>
          </List>
        </MenuItem>
      </LogoContent>
    </SideBar>
  );
};
