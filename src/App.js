import { React, useState } from "react";
import { Navbar } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import {
  Home,
  Form,
  Patient,
  Doctor,
  LoginPage,
  PatientLog,
  DoctorLog,
  AdminLog,
  Admin,
  DoctorInfo,
  PatientInfo,
} from "./pages";
import { SubSucc } from "./pages/SubSucc";
import { LoginContext } from "./Context/LoginContext";

function App() {
  const [user, setuser] = useState([]);
  const [showPanel, setshowPanel] = useState(false);
  //for doctor
  const [doctor, setdoctor] = useState([]);
  const [showdocpane, setshowdocpane] = useState(false);
  //for admin
  const [admin, setadmin] = useState([]);
  const [showAdminPane, setshowAdminPane] = useState(false);

  return (
    <LoginContext.Provider
      value={{
        user,
        setshowPanel,
        setuser,
        doctor,
        setdoctor,
        showdocpane,
        setshowdocpane,
        admin,
        setadmin,
        showAdminPane,
        setshowAdminPane,
      }}
    >
      <Router>
        <GlobalStyle />
        <Navbar></Navbar>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/submissionSuccessful" exact element={<SubSucc />} />
          <Route path="/doctor" exact element={<Doctor />} />
          <Route path="/admin" exact element={<Admin />}>
            <Route path="patientInfo" exact element={<PatientInfo />} />
            <Route path="doctorInfo" exact element={<DoctorInfo />} />
          </Route>
          <Route path="/patient" exact element={<Patient />} />
          <Route path="/log-in" exact element={<LoginPage />}>
            <Route path="patient" element={<PatientLog />} />
            <Route path="doctor" element={<DoctorLog />} />
            <Route path="adminLog" element={<AdminLog />} />
          </Route>
          <Route path="/sign-up" exact element={<Form />} />
          <Route path="/sign-in" exact element={showPanel ? <Patient /> : ""} />
        </Routes>
      </Router>
    </LoginContext.Provider>
  );
}

export default App;
