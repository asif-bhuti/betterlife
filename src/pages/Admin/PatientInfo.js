import { React, useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import * as Var from "../../components/variables";
import { NeumorphicDesign } from "../../globalStyles";
import { Text, Button } from "../../components";

export const scrollWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const StyledCard = styled.div`
  width: 100%;
  max-width: 1500px;
  padding: 40px;
  border-radius: 10px;
  box-sizing: border-box;
  margin: 10px;
  ${NeumorphicDesign};
`;

export const TableWrapper = styled.div`
  display: block;
  overflow: auto;
  white-space: nowrap;
  height: 200px;

  border: 1px solid ${Var.greyColor};
  border-radius: 5px;
`;

export const Table = styled.table`
  width: 100%;
  text-align: left;
  thead {
    position: sticky;
    top: 0;
  }
  th {
    padding: 5px 5px;
    border-radius: 5px;
    background-color: ${Var.greyColor};
  }
  tbody {
    background-color: white;
  }
  td {
    border-top: 1px solid ${Var.greyColor};
    padding: 5px;
  }
`;

export const PatientInfo = () => {
  const [user, setuser] = useState([]);

  useEffect(() => {
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
  }, []);
  return (
    <div>
      <StyledCard>
        <Text className="title">Schedule of the day :</Text>
        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Sex</th>
                <th>Date of Birth</th>
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
      </StyledCard>
    </div>
  );
};
