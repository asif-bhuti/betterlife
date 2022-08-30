import axios from "axios";
import { React, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Text, InputField, Button } from "../../components";
import { LinkText, StyledCard } from "./SiginIn.elements";
import { LoginContext } from "../../Context/LoginContext";
export const SignIn = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    password: "",
  });

  const { setuser, setshowPanel } = useContext(LoginContext);

  const navigateToSignUp = () => {
    navigate("/sign-up");
  };
  const handleNavigate = () => {
    navigate("/patient");
  };

  const handleSubmit = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitData = async (e) => {
    e.preventDefault();

    axios
      .get("http://localhost/betterlife/", {
        params: {
          name: data.name,
        },
      })
      .then(function (response) {
        setuser(response.data);
        console.log(response.data);

        response.data.map((el) =>
          el.name === ""
            ? console.log("the array name was empty")
            : setshowPanel(true)
        );
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
      <StyledCard>
        <form onSubmit={submitData}>
          <Text className="title">Sign In</Text>
          <Text>Username :</Text>
          <InputField
            type="name"
            name="name"
            onChange={handleSubmit}
            value={data.name}
          ></InputField>
          <Text>Password :</Text>
          <InputField type="password"></InputField>
          <Button className="primary">Sign In</Button>
          <LinkText onClick={navigateToSignUp}>Don't Have An Account?</LinkText>
        </form>
      </StyledCard>
    </Container>
  );
};
