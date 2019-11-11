import React from "react";
import "./App.css";
import styled from "styled-components";
import Navbar from "./containers/Navbar";
import Logo from "./components/Logo";
import Hero from "./components/Hero";
import How from "./components/How";
import Newsletter from "./components/Newsletter";
import RecipesContainer from "./containers/RecipesContainer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 150px;

  @media (max-width: 768px) {
  }
`;

function App() {
  return (
    <Container>
      <Logo />
      <Navbar />
      <Hero />
      <How />
      <RecipesContainer />
      <Newsletter />
    </Container>
  );
}

export default App;
