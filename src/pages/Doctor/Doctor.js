import React, { useState, useContext } from "react";
import axios from "axios";
import { Container, Text, Button } from "../../components";
import { StyledCard, Table, TableWrapper } from "./Doctor.elements";
import { LoginContext } from "../../Context/LoginContext";

export const Doctor = () => {
  const [user, setuser] = useState([]);

  const { doctor } = useContext(LoginContext);

  const collectData = async (e) => {
    e.preventDefault();

    axios
      .get("http://localhost/betterlife/getPat.php")
      .then(function (response) {
        setuser(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  return (
    <Container>
      {doctor.map((element) => (
        <StyledCard>
          <Text className="title">Title : {element.DocName}</Text>
          <Text>Speciality : {element.Specialty}</Text>
          <Text>Sex : {element.Sex}</Text>
          <Text>DOB : {element.DOB}</Text>
          <Text>Phone : {element.Phone}</Text>
          <Text>E-mail : {element.Email}</Text>
          <Text>E-mail : {element.Email}</Text>
          <Text>Address : {element.Address}</Text>
        </StyledCard>
      ))}

      <StyledCard>
        <Text className="title">Schedule of the day :</Text>
        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Sex</th>
                <th>Age</th>
                <th>Symptoms</th>
                <th>Report</th>
                <th>Consultation Time</th>
              </tr>
            </thead>
            {user.map((element) => (
              <tbody>
                <tr>
                  <td>{element.PatName}</td>
                  <td>{element.Sex}</td>
                  <td>{element.DOB}</td>
                  <td>Hage onek</td>
                  <td>HIV very positive</td>
                  <td>raat pohale</td>
                </tr>
              </tbody>
            ))}
          </Table>
        </TableWrapper>
        <Button onClick={collectData}>Load</Button>
      </StyledCard>
    </Container>
  );
};
