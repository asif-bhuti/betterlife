import React from "react";
import { Container, ContainerNeu, Text, Button } from "../../components";

export const Doctor = () => {
  return (
    <Container>
      <ContainerNeu>
        <Text className="tittle">Doctor Name</Text>
        <Text>Tittle</Text>
        <Text>Other Necessary Informations.</Text>
      </ContainerNeu>
      <ContainerNeu>
        <Text className="tittle">Schedule of the day :</Text>
      </ContainerNeu>
    </Container>
  );
};
