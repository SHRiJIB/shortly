import React from "react";
import { createGlobalStyle } from "styled-components";
import BoostSection from "./components/boost-section/BoostSection";
import Footer from "./components/Footer/Footer";
import LinkInput from "./components/link-input/LinkInput";
import Main from "./components/Main/Main";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/Services/Services";

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
    <LinkInput />
    <Services />
    <BoostSection />
    <Footer />
  </>
);
export default App;
