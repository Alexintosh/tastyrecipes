import React from "react";
import styled from "styled-components";
import Recipe from "../components/Recipe";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: var(--white);
  padding: 30px;
  flex-wrap: wrap;


  @media (max-width: 680px) {
    padding: 20px;
  }
`;


function RecipesContainer() {
  return (
    <Container>
      <Recipe title='This is the recipe, have a look. They are actually amazing' bg='../img/cupcake.jpg' link='/YourRecipe' />
      <Recipe title='This is the recipe, have a look. They are actually amazing' bg='../img/recipe1.jpg' link='/YourRecipe' />
      <Recipe title='This is the recipe, have a look. They are actually amazing' bg='../img/recipe2.jpg' link='/YourRecipe' />
      <Recipe title='This is the recipe, have a look. They are actually amazing' bg='../img/recipe3.jpg' link='/YourRecipe' />
      <Recipe title='This is the recipe, have a look. They are actually amazing' bg='../img/recipe4.jpg' link='/YourRecipe' />
      <Recipe title='This is the recipe, have a look. They are actually amazing' bg='../img/recipe5.jpg' link='/YourRecipe' />
      <Recipe title='This is the recipe, have a look. They are actually amazing' bg='../img/recipe6.jpg' link='/YourRecipe' />
    </Container>
  );
}

export default RecipesContainer;
