import React from "react";
import { createGlobalStyle } from "styled-components";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Navbar from "./components/navbar/Navbar";

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    padding:0;
    font-size:1rem;
    
    font-family: 'Poppins', sans-serif ;
  }
`;
const App = () => (
  <>
    <GlobalStyle />

    <Navbar />
    <Main />
    <Footer />
  </>
);
export default App;
