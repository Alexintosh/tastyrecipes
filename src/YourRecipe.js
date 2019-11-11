import React from "react";
import "./App.css";
import styled from "styled-components";
import Navbar from "./containers/Navbar";
import Logo from "./components/Logo";
import Newsletter from "./components/Newsletter";
import RecipesContainer from "./containers/RecipesContainer";
import RecipeDetail from "./components/RecipeDetail";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 150px;

  @media (max-width: 768px) {
  }
`;

function YourRecipe() {
  return (
    <Container>
      <Logo />
      <Navbar />
      <RecipeDetail />
      <RecipesContainer />
      <Newsletter />
      </Container>
  );
}

export default YourRecipe;
