import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 22%;
  height: 300px;
  border-radius: 10px;
  box-sizing: border-box;
  background-size: cover;
  margin: 10px 10px;
  padding: 20px 20px 20px 20px;
  background-image: url(${props => props.bg || ''});
`;

const Hover = styled.span`
  display: none;

  :hover {
    display: block;
    background-color: cadetblue;
    width: 22%;
  height: 300px;
  border-radius: 10px;
  box-sizing: border-box;
  background-size: cover;
  margin: 10px 10px;
  padding: 20px 20px 20px 20px;
  }
`;

const RecipeLink = styled.a`
  @media (max-width: 768px) {
  }
`;

const Higlight = styled.span`
  font-weight: 700;
  font-size: var(--p-titles);
  color: var(--black);
  background: #fe0;

  /* -webkit-box-shadow: 1rem 0 0 #fe0, -1rem 0 0 #fe0;
box-shadow: 1rem 0 0 #fe0, -1rem 0 0 #fe0; */

  @media (max-width: 768px) {
  }
`;

function Recipe(props) {
  return (
      
      <Container bg={props.bg}>
        <Hover>ciao</Hover>
        <RecipeLink>
          <Higlight>{props.title}</Higlight>
        </RecipeLink>
      </Container>
  );
}

export default Recipe;
