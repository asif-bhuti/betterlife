import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Card, Text, Button, Sidebar } from "../../components";

export const Admin = () => {
  return (
    <>
      <Sidebar />

      <Outlet />
    </>
  );
};
