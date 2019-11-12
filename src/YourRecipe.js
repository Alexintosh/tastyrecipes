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
  /* margin-top: 150px; */
  width: 100%;

  @media (max-width: 768px) {
  width: 90%;
  padding: 0 5%;
  }
`;

function YourRecipe() {
  return (
    <div>
    <Logo />
    <Navbar />
    <Container>
      <RecipeDetail />
      <RecipesContainer />
      <Newsletter />
    </Container>
    </div>
  );
}

export default YourRecipe;
