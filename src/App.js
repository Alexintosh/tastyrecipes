import React from "react";
import "./App.css";
import Navbar from "./containers/Navbar";
import Logo from "./components/Logo";
import Hero from "./components/Hero";
import Recipe from "./components/Recipe";
import How from "./components/How";
import Newsletter from "./components/Newsletter";
import RecipesContainer from "./containers/RecipesContainer";

function App() {
  return (
    <div>
      <Logo />
      <Navbar />
      <Hero />
      <How />
      <RecipesContainer />
      <Newsletter />
      {/* <Recipe /> */}
    </div>
  );
}

export default App;
