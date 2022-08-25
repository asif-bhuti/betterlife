import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
box-sizing: border-box;
margin: 0;
padding: 0;
font-family: 'Nunito', sans-serif;
}
body{
  background: #eee;
}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-right: auto;
  padding-left: 50px;
  padding-right: 50px;

  @media screen and (max-width: 991px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const NeumorphicDesign = css`
  background: #eee;
  border-radius: 10px;
  box-shadow: 6px 6px 11px #bebebe, -6px -6px 11px #ffffff;
`;

export const NeumorphicDesignInset = css`
  background-color: #eee;
  border-radius: 5px;
  box-shadow: inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff;
`;

export const TextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  color: #555;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

export default GlobalStyle;
