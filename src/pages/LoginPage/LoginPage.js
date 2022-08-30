import React from "react";
import { LinkItem, Login, LoginNav } from "./LoginPage.elements";
import { Link, Outlet } from "react-router-dom";
import { Container, Card, Text, Button } from "../../components";

export const LoginPage = () => {
  return (
    <Container>
      <Login>
        <LoginNav>
          <Link to="/log-in/patient">
            <Button>Patient</Button>
          </Link>
          <Link to="/log-in/doctor">
            <Button>Doctor</Button>
          </Link>
          <Link to="/log-in/adminLog">
            <Button>Admin</Button>
          </Link>
        </LoginNav>

        <Outlet />
      </Login>
    </Container>
  );
};
