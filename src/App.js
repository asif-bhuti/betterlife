import React from "react";
import { Navbar } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import { Home, Form, SignIn, Patient, Doctor, Services, Admin } from "./pages";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar></Navbar>
      <Routes>
        <Route path="/" exact element={<Admin />} />
        <Route path="/services" exact element={<Doctor />} />
        <Route path="/sign-up" exact element={<Form />} />
        <Route path="/sign-in" exact element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
