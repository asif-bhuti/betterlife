import React from "react";
import { Container, ContainerNeu, Text, Button } from "../../components";

export const Admin = () => {
  return (
    <Container>
      <ContainerNeu>
        <Text className="title">Admin</Text>
        <Text>Necessary Info.</Text>
      </ContainerNeu>

      <ContainerNeu>
        <Text className="title">Dashboard :</Text>
        <Button className="primary">Check Patients Accounts</Button>
        <Button className="primary">Check Doctor Accounts</Button>
      </ContainerNeu>
    </Container>
  );
};
