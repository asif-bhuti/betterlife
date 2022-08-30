import { React, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Card, Text, Button, InputField } from "../../components";
import { Select, StyledFlex, StyledTextArea } from "./Patient.elements";
import { LoginContext } from "../../Context/LoginContext";

export const Patient = () => {
  const navigate = useNavigate();
  const { user } = useContext(LoginContext);
  const [data, setData] = useState({
    date: "",
  });

  const handleSubmit = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const [doc, setdoc] = useState([]);

  const submitForm = async (e) => {
    e.preventDefault();
    const consultData = {
      pat_ID: user.map((element) => element.PatID),
      doc_ID: doc.map((element) => element.DocID),
      consult_time: data.date,
    };

    console.log(consultData.doc_ID);

    axios
      .post("http://localhost/betterlife/consultInfo.php", consultData)
      .then((result) => {
        if (result.data.Status === "invalid") {
          alert("invalid user.");
        } else {
          console.log("submission successful");
          navigate("/submissionSuccessful");
        }
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost/betterlife/getDocInfo.php")
      .then(function (response) {
        setdoc(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <Container>
      {user.map((element) => (
        <Card>
          <Text className="title">{element.PatName}</Text>
          <Text className="small">Birthday : {element.DOB}</Text>
          <Text className="small">Phone No : {element.Phone} </Text>
          <Text className="small">E-mail : {element.Email} </Text>
          <Text className="small">Sex : {element.Sex}</Text>
          <Text className="small">Blood Group : {element.BloodGroup}</Text>
          <Text className="small">Address : {element.Address}</Text>
          <Text className="small">
            Permanent Address : {element.permanentAdd}
          </Text>

          <Text className="title">Medical Report : </Text>
          <Text>
            {element.rep !== "" ? "No medical reports available." : element.rep}
          </Text>
        </Card>
      ))}
      <Card>
        <form onSubmit={submitForm}>
          <Text className="title">Make An Appointment </Text>
          <Text>Select Consultant :</Text>
          <Text>Speciality</Text>
          {doc.map((element) => (
            <Select>
              <option value="1" disabled>
                Select Doctor :
              </option>
              <option value="2">
                {element.DocName}, {element.Specialty}
              </option>
            </Select>
          ))}

          <StyledFlex></StyledFlex>
          <Text>Select Time :</Text>
          <InputField
            type="date"
            name="date"
            onChange={handleSubmit}
            value={data.date}
          />
          <StyledTextArea placeholder="Give a brief description of your symptoms.."></StyledTextArea>
          <Button className="primary">Submit</Button>
        </form>
      </Card>
    </Container>
  );
};
