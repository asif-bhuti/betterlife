import { React, useState } from "react";
import { Patient } from "../Patient/Patient";
import { SignIn } from "../SignIn/SignIn";
import { Form } from "../Form/Form";
import { LoginContext } from "../../Context/LoginContext";

export const Profile = () => {
  const [user, setuser] = useState([]);
  const [showPanel, setshowPanel] = useState(false);
  // if the user logs in by submitting the form then value will be set to true
  const [form, setform] = useState(false);

  return (
    <div>
      <LoginContext.Provider value={{ user, setshowPanel, setuser, setform }}>
        {showPanel ? form ? <Patient /> : <Form /> : <SignIn />}
      </LoginContext.Provider>
    </div>
  );
};
