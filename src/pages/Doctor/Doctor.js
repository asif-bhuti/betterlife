import React from "react";
import { Container, ContainerNeu, Text, Button } from "../../components";
import {} from "./Doctor.elements";

export const Doctor = () => {
  return (
    <Container>
      <ContainerNeu>
        <Text className="title">Doctor Name</Text>
        <Text>title</Text>
        <Text>Other Necessary Informations.</Text>
      </ContainerNeu>
      <ContainerNeu>
        <Text className="title">Schedule of the day :</Text>
        <table>
          <tr>
            <th>Name</th>
            <th>Sex</th>
            <th>Age</th>
            <th>Symptoms</th>
            <th>Report</th>
            <th>Consultation Time</th>
          </tr>
          <tr>
            <td>Peter</td>
            <td>Trans</td>
            <td>420</td>
            <td>Hage onek</td>
            <td>HIV very positive</td>
            <td>raat pohale</td>
          </tr>
        </table>
      </ContainerNeu>
    </Container>
  );
};
