import React from "react";
import { Container, Card, Text, Button } from "../../components";
import { Select, StyledFlex, StyledTextArea } from "./Patient.elements";

export const Patient = () => {
  return (
    <Container>
      <Card>
        <Text className="title">Username</Text>
        <Text>Address : Jana nai apatot</Text>
        <Text>Phone No : 01x-xxx-xxx-xx </Text>
        <Text>Sex : (Fe)Male</Text>
        <Text>Blood Group : H+</Text>
      </Card>
      <Card>
        <Text className="title">Medical Report : </Text>
        <Text>
          Haga hoyna 3din dhore. GF bhat khay na dekhe amio khainai 3din raag
          kore. pore dekhi oy thiki khaise kintu amare janay nai. ekhon loss ta
          kar holo? AMARI TOOO!!!!!
        </Text>
      </Card>
      <Card>
        <form action="">
          <Text className="title">Make An Appointment </Text>
          <Text>Select Consultant :</Text>
          <Text>Speciality</Text>
          <Select>
            <option value="1" disabled>
              Specialist :
            </option>
            <option value="2">Child</option>
            <option value="3">Gynochologist</option>
            <option value="4">Neurologist</option>
          </Select>
          <StyledFlex></StyledFlex>
          <Text>title</Text>
          <Select>
            <option value="1" disabled>
              Title :
            </option>
            <option value="2">Child</option>
            <option value="3">Gynochologist</option>
            <option value="4">Neurologist</option>
          </Select>
          <StyledTextArea placeholder="Give a brief description of your symptoms.."></StyledTextArea>
          <Button className="primary">Submit</Button>
        </form>
      </Card>
    </Container>
  );
};
