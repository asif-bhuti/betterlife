import React from "react";
import {
  Container,
  ContainerNeu,
  Text,
  InputField,
  Button,
} from "../../components";
import { StyledFieldSet as FieldSet, Select } from "./Form.elements";

export const Form = () => {
  return (
    <Container>
      <ContainerNeu>
        <form>
          <Text className="tittle">Sign In</Text>
          <label htmlFor="">
            <Text>Name :</Text>
          </label>
          <InputField type="text" />
          <label htmlFor="">
            <Text>Password :</Text>
          </label>
          <InputField type="password" />
          <label htmlFor="">
            <Text>Birthday :</Text>
          </label>
          <InputField type="date" />
          <FieldSet>
            <legend>
              <Text>Gender :</Text>
            </legend>
            <label htmlFor="">
              <input type="radio" name="gender" />
              <Text>Male</Text>
            </label>
            <label htmlFor="">
              <input type="radio" name="gender" />
              <Text>Female</Text>
            </label>
            <label htmlFor="">
              <input type="radio" name="gender" />
              <Text>Others</Text>
            </label>
          </FieldSet>
          <label htmlFor="">
            <Text>Select Blood Group :</Text>
          </label>
          <Select>
            <option value="1" disabled>
              Select Blood Group
            </option>
            <option value="2">A+</option>
            <option value="3">B+</option>
            <option value="4">O+</option>
            <option value="5">AB+</option>
            <option value="6">A-</option>
            <option value="7">B-</option>
            <option value="8">O-</option>
            <option value="9">AB-</option>
          </Select>

          <label htmlFor="">
            <Text>E-mail :</Text>
          </label>
          <InputField type="text" />
          <label htmlFor="">
            <Text>Phone :</Text>
          </label>
          <InputField type="tel" />
          <label htmlFor="">
            <Text>Present Address :</Text>
          </label>
          <InputField type="text" />
          <label htmlFor="">
            <Text>Permanent Address :</Text>
          </label>
          <InputField type="text" />

          <Button className="primary">Sign Up</Button>
        </form>
      </ContainerNeu>
    </Container>
  );
};
