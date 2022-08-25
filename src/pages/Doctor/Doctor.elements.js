import styled from "styled-components";
import * as Var from "../../components/variables";
import { NeumorphicDesign } from "../../globalStyles";

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
