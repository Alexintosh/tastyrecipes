import React from "react";
import "./App.css";
import Navbar from "./containers/Navbar";
import Logo from "./components/Logo";
import Newsletter from "./components/Newsletter";
import RecipesContainer from "./containers/RecipesContainer";
import RecipeDetail from "./components/RecipeDetail";

function YourRecipe() {
  return (
    <div>
      <Logo />
      <Navbar />
      <RecipeDetail />
      <RecipesContainer />
      <Newsletter />
    </div>
  );
}

export default YourRecipe;
