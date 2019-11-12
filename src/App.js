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
  margin-top: 150px;
  width: 100%;

  @media (max-width: 768px) {
  width: 90%;
  padding: 0 5%;
  }
`;

function App() {
  return (
    <div>
    <Logo />
    <Navbar />
    <Container>
      <Hero />
      <How />
      <RecipesContainer />
      <Newsletter />
    </Container>
    </div>
  );
}

export default App;
