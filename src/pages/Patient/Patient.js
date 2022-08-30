import { React, useContext } from "react";
import { Container, Card, Text, Button } from "../../components";
import { Select, StyledFlex, StyledTextArea } from "./Patient.elements";
import { LoginContext } from "../../Context/LoginContext";

export const Patient = () => {
  const { user, form } = useContext(LoginContext);

  return (
    <Container>
      {!form ? (
        <h1>Came from form</h1>
      ) : (
        user.map((element) => (
          <Card>
            <Text className="title">{element.name}</Text>
            <Text>Patient ID : </Text>
            <Text className="small">Birthday : {element.birthday}</Text>
            <Text className="small">Phone No : {element.tel} </Text>
            <Text className="small">E-mail : {element.e_mail} </Text>
            <Text className="small">Sex : {element.gender}</Text>
            <Text className="small">Blood Group : {element.blood_group}</Text>
            <Text className="small">
              Present Address : {element.presenttAdd}
            </Text>
            <Text className="small">
              Permanent Address : {element.permanentAdd}
            </Text>
          </Card>
        ))
      )}
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
