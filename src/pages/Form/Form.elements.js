import styled from "styled-components";
import { Card } from "../../components";

export const StyledFieldSet = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;
  display: flex;

  legend {
    padding: 0 10px;
  }

  label {
    padding-right: 20px;
    display: flex;
  }

  input {
    margin-right: 10px;
  }
`;

export const Select = styled.select`
  background-color: #eee;
  color: #555;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
`;
export const StyledCard = styled(Card)`
  max-width: 800px;
`;
