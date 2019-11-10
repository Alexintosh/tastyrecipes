import React from "react";
import styled from "styled-components";
import Recipe from "../components/Recipe";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  background-color: var(--white);
  padding: 30px;
  flex-wrap: no-wrap;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  -webkit-font-smoothing: antialiased;

  @media (max-width: 680px) {
    padding: 20px;
  }
`;

const Title = styled.div`
  color: var(--black);
  font-weight: 700;
  font-size: var(--p-titles);
`;

function Recipes() {
  return (
    <Container>
      <Recipe />
      <Recipe />
      <Recipe />
      <Recipe />
      <Recipe />
      <Recipe />
      <Recipe />
      <Recipe />
    </Container>
  );
}

export default Recipes;
