import axios from "axios";
import { React, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Text, InputField, Button } from "../../components";
import { StyledCard } from "./AdminLog.elements";
import { LoginContext } from "../../Context/LoginContext";
export const AdminLog = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
  });

  const { setadmin, setshowAdminPane } = useContext(LoginContext);

  const handleSubmit = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitData = async (e) => {
    e.preventDefault();

    axios
      .get("http://localhost/betterlife/getAdmin.php", {
        params: {
          name: data.name,
        },
      })
      .then(function (response) {
        setadmin(response.data);
        console.log(response.data);
        navigate("/admin");

        response.data.map((el) =>
          el.name === ""
            ? console.log("the array name was empty")
            : setshowAdminPane(true)
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
