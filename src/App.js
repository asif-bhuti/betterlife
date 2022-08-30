import { React, useState } from "react";
import { Navbar } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import { Home, Form, SignIn, Patient, Doctor } from "./pages";
import { LoginContext } from "./Context/LoginContext";

function App() {
  const [user, setuser] = useState([]);
  const [showPanel, setshowPanel] = useState(false);
  // if the user logs in by submitting the form then value will be set to true
  const [form, setform] = useState(false);
  const [patient, setpatient] = useState([]);

  return (
    <LoginContext.Provider value={{ user, setshowPanel, setuser, setform }}>
      <Router>
        <GlobalStyle />
        <Navbar></Navbar>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" exact element={<Doctor />} />
          <Route path="/patient" exact element={<Patient />} />
          <Route
            path="/sign-up"
            exact
            element={form ? <Patient /> : <Form />}
          />
          <Route
            path="/sign-in"
            exact
            element={showPanel ? <Patient /> : <SignIn />}
          />
        </Routes>
      </Router>
    </LoginContext.Provider>
  );
}

export default App;
