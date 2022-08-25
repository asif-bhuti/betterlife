import React from "react";
import { Container, Card, Text, Button } from "../../components";

export const Admin = () => {
  return (
    <Container>
      <Card>
        <Text className="title">Admin</Text>
        <Text>Necessary Info.</Text>
      </Card>

      <Card>
        <Text className="title">Dashboard :</Text>
        <Button className="primary">Check Patients Accounts</Button>
        <Button className="primary">Check Doctor Accounts</Button>
      </Card>
    </Container>
  );
};
