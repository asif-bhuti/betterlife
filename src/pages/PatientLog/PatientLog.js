import axios from "axios";
import { React, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Text, InputField, Button } from "../../components";
import { LinkText, StyledCard } from "./PatientLog.elements";
import { LoginContext } from "../../Context/LoginContext";
export const PatientLog = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    password: "",
  });

  const { setuser } = useContext(LoginContext);

  const navigateToSignUp = () => {
    navigate("/sign-up");
  };

  const handleSubmit = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitData = async (e) => {
    e.preventDefault();

    axios
      .get("http://localhost/betterlife/patReg.php", {
        params: {
          name: data.name,
        },
      })
      .then(function (response) {
        setuser(response.data);
        console.log(response.data);
        navigate("/patient");
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
