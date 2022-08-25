import React from "react";
import { Container, Card, Text, Button } from "../../components";
import { StyledCard, Table, TableWrapper } from "./Doctor.elements";

export const Doctor = () => {
  return (
    <Container>
      <StyledCard>
        <Text className="title">Doctor Name</Text>
        <Text>title</Text>
        <Text>Other Necessary Informations.</Text>
      </StyledCard>
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
            <tbody>
              <tr>
                <td>Peter</td>
                <td>Trans</td>
                <td>420</td>
                <td>Hage onek</td>
                <td>HIV very positive</td>
                <td>raat pohale</td>
              </tr>
              <tr>
                <td>Peter</td>
                <td>Trans</td>
                <td>420</td>
                <td>Hage onek</td>
                <td>HIV very positive</td>
                <td>raat pohale</td>
              </tr>
              <tr>
                <td>Peter</td>
                <td>Trans</td>
                <td>420</td>
                <td>Hage onek</td>
                <td>HIV very positive</td>
                <td>raat pohale</td>
              </tr>
              <tr>
                <td>Peter</td>
                <td>Trans</td>
                <td>420</td>
                <td>Hage onek</td>
                <td>HIV very positive</td>
                <td>raat pohale</td>
              </tr>
              <tr>
                <td>Peter</td>
                <td>Trans</td>
                <td>420</td>
                <td>Hage onek</td>
                <td>HIV very positive</td>
                <td>raat pohale</td>
              </tr>
              <tr>
                <td>Peter</td>
                <td>Trans</td>
                <td>420</td>
                <td>Hage onek</td>
                <td>HIV very positive</td>
                <td>raat pohale</td>
              </tr>
              <tr>
                <td>Peter</td>
                <td>Trans</td>
                <td>420</td>
                <td>Hage onek</td>
                <td>HIV very positive</td>
                <td>raat pohale</td>
              </tr>
            </tbody>
          </Table>
        </TableWrapper>
      </StyledCard>
    </Container>
  );
};
