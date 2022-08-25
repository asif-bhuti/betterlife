import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Text, InputField, Button } from "../../components";
import { LinkText, StyledCard } from "./SiginIn.elements";

export const SignIn = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/sign-up");
  };

  return (
    <Container>
      <StyledCard>
        <form action="">
          <Text className="title">Sign In</Text>
          <Text>Username :</Text>
          <InputField type="name"></InputField>
          <Text>Password :</Text>
          <InputField type="password"></InputField>
          <Button className="primary">Sign In</Button>
          <LinkText onClick={handleNavigate}>Don't Have An Account?</LinkText>
        </form>
      </StyledCard>
    </Container>
  );
};
