import styled from "styled-components";

export const StyledFieldSet = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;
  display: flex;

  &.legend {
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
