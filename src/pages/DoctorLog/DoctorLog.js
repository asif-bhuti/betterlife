import axios from "axios";
import { React, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Text, InputField, Button } from "../../components";
import { StyledCard } from "./DoctorLog.elements";
import { LoginContext } from "../../Context/LoginContext";
export const DoctorLog = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
  });

  const { setdoctor, setshowdocpane } = useContext(LoginContext);

  const handleSubmit = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitData = async (e) => {
    e.preventDefault();

    axios
      .get("http://localhost/betterlife/getDoc.php", {
        params: {
          name: data.name,
        },
      })
      .then(function (response) {
        setdoctor(response.data);
        console.log(response.data);

        navigate("/doctor");

        response.data.map((el) =>
          el.name === ""
            ? console.log("the array name was empty")
            : setshowdocpane(true)
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
        </form>
      </StyledCard>
    </Container>
  );
};
