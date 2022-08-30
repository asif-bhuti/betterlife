import { React, useContext } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container, Card, Text, Button, Sidebar } from "../../components";
import {
  AdminInfo,
  ButtonNav,
  Buttons,
  DropDown,
  Icon,
  ItemLink,
  List,
  Logo,
  LogoContent,
  MenuItem,
  SideBar,
} from "./Admin.elements";
import { LoginContext } from "../../Context/LoginContext";

export const Admin = () => {
  const { admin } = useContext(LoginContext);
  return (
    <>
      <SideBar>
        <LogoContent>
          <Logo>
            <Icon className="bx bx-user"></Icon>
            {admin.map((element) => (
              <AdminInfo>
                <Text className="title">Admin Panel</Text>
                <Text>{element.AdminName}</Text>
                <Text className="small">{element.AdminID}</Text>
              </AdminInfo>
            ))}
          </Logo>
        </LogoContent>
        <Buttons>
          <ButtonNav>
            <Link to="/admin/patientInfo">
              <Button>Patients</Button>
            </Link>
            <Link to="/admin/doctor"></Link>
            <Link to="/admin/doctorInfo">
              <Button>Doctors</Button>
            </Link>
          </ButtonNav>
          <Outlet />
        </Buttons>
      </SideBar>
    </>
  );
};
