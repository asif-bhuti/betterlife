import axios from "axios";
import { useNavigate } from "react-router-dom";
import { React, useState, useContext } from "react";
import { Container, Text, InputField, Button } from "../../components";
import { LoginContext } from "../../Context/LoginContext";
import {
  StyledFieldSet as FieldSet,
  Select,
  StyledCard,
} from "./Form.elements";

export const Form = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    password: "",
    date: "",
    gender: "",
    blood: "",
    email: "",
    tel: "",
    presentAddress: "",
    permanentAddress: "",
  });
  const handleSubmit = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitForm = async (e) => {
    e.preventDefault();
    const formData = {
      name: data.name,
      password: data.password,
      date: data.date,
      gender: data.gender,
      blood: data.blood,
      email: data.email,
      tel: data.tel,
      presentAddress: data.presentAddress,
      permanentAddress: data.permanentAddress,
    };

    console.log(formData);

    axios.post("http://localhost/betterlife/", formData).then((result) => {
      if (result.data.Status === "invalid") {
        alert("invalid user.");
      } else {
        console.log("submission successful");
      }
    });
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
          <InputField
            type="date"
            name="date"
            onChange={handleSubmit}
            value={data.date}
          />
          <FieldSet>
            <legend>
              <Text>Gender :</Text>
            </legend>
            <label htmlFor="">
              <input
                type="radio"
                name="gender"
                onChange={handleSubmit}
                value={data.gender}
              />
              <Text>Male</Text>
            </label>
            <label htmlFor="">
              <input
                type="radio"
                name="gender"
                onChange={handleSubmit}
                value={data.gender}
              />
              <Text>Female</Text>
            </label>
            <label htmlFor="">
              <input
                type="radio"
                name="gender"
                onChange={handleSubmit}
                value={data.gender}
              />
              <Text>Others</Text>
            </label>
          </FieldSet>
          <label htmlFor="">
            <Text>Select Blood Group :</Text>
          </label>
          <Select name="blood" onChange={handleSubmit} value={data.blood}>
            <option value="1" disabled>
              Select Blood Group
            </option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="O+">O+</option>
            <option value="AB+">AB+</option>
            <option value="A-">A-</option>
            <option value="B-">B-</option>
            <option value="O-">O-</option>
            <option value="AB_">AB-</option>
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
