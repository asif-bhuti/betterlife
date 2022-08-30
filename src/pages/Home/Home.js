import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  BtnLink,
  ContainerHome,
  Footer,
  FooterLeft,
  FooterRight,
  FooterText,
  HomeText,
  ItemBtn,
} from "./Home.elements";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../components";

export const Home = () => {
  const navigate = useNavigate();
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <>
      <ContainerHome>
        <HomeText className="title">
          WHAT MAKES US BETTER, MAKES YOU BETTER.
        </HomeText>
        <HomeText className="desc">
          Now more than ever, better medicine matters.
        </HomeText>
        <ItemBtn>
          {button ? (
            <BtnLink to="/sign-up">
              <Button className="primary"> Sign UP</Button>
            </BtnLink>
          ) : (
            <BtnLink to="/sign-up">
              <Button className="primary">Sign Up</Button>
            </BtnLink>
          )}
          {button ? (
            <BtnLink to="/log-in/patient">
              <Button> Sign In</Button>
            </BtnLink>
          ) : (
            <BtnLink to="/log-in/patient">
              <Button>Sign In </Button>
            </BtnLink>
          )}
        </ItemBtn>
      </ContainerHome>
      <Footer>
        <IconContext.Provider value={{ color: "#eee", size: "25px" }}>
          <FooterRight>
            <FaFacebook style={{ margin: "5px" }} />
            <FaTwitter style={{ margin: "5px" }} />
          </FooterRight>
        </IconContext.Provider>

        <FooterLeft>
          <FooterText className="footertitle" onClick={navigateHome}>
            Home
          </FooterText>

          <FooterText className="footertitle">Services</FooterText>

          <FooterText className="footertitle">Find A Doctor</FooterText>

          <FooterText>Company Name &copy; 2015</FooterText>
        </FooterLeft>
      </Footer>
    </>
  );
};
