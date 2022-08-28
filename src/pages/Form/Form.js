import { React, useState } from "react";
import { Container, Text, InputField, Button } from "../../components";
import {
  StyledFieldSet as FieldSet,
  Select,
  StyledCard,
} from "./Form.elements";

export const Form = () => {
  const [data, setData] = useState({
    name: "",
    password: "",
    email: "",
    tel: "",
    presentAddress: "",
    permanentAddress: "",
  });

  const handleSubmit = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const formData = {
      name: data.name,
      password: data.password,
      email: data.email,
      tel: data.tel,
      presentAddress: data.presentAddress,
      permanentAddress: data.permanentAddress,
    };

    console.log(formData);
  };

  return (
    <Container>
      <StyledCard>
        <form onSubmit={submitForm}>
          <Text className="title">Sign Up</Text>
          <label htmlFor="">
            <Text>Name :</Text>
          </label>
          <InputField
            type="text"
            name="name"
            onChange={handleSubmit}
            value={data.name}
          />
          <label htmlFor="">
            <Text>Password :</Text>
          </label>
          <InputField
            type="password"
            name="password"
            onChange={handleSubmit}
            value={data.password}
          />
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
          <InputField
            type="text"
            name="email"
            onChange={handleSubmit}
            value={data.email}
          />
          <label htmlFor="">
            <Text>Phone :</Text>
          </label>
          <InputField
            type="tel"
            name="tel"
            onChange={handleSubmit}
            value={data.tel}
          />
          <label htmlFor="">
            <Text>Present Address :</Text>
          </label>
          <InputField
            type="text"
            name="presentAddress"
            onChange={handleSubmit}
            value={data.presentAddress}
          />
          <label htmlFor="">
            <Text>Permanent Address :</Text>
          </label>
          <InputField
            type="text"
            name="permanentAddress"
            onChange={handleSubmit}
            value={data.permanentAddress}
          />

          <Button
            className="primary"
            type="submit"
            name="submit"
            value="Register"
          >
            Sign Up
          </Button>
        </form>
      </StyledCard>
    </Container>
  );
};
