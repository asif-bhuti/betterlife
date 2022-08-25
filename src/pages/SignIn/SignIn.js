import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  ContainerNeu,
  Text,
  InputField,
  Button,
} from "../../components";
import { LinkText } from "./SiginIn.elements";

export const SignIn = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/sign-up");
  };

  return (
    <Container>
      <ContainerNeu>
        <form action="">
          <Text className="tittle">Sig In</Text>
          <Text>Username :</Text>
          <InputField type="name"></InputField>
          <Text>Password :</Text>
          <InputField type="password"></InputField>
          <Button className="primary">Sign In</Button>
          <LinkText onClick={handleNavigate}>Don't Have An Account?</LinkText>
        </form>
      </ContainerNeu>
    </Container>
  );
};
