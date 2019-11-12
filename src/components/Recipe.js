import React from "react";
import styled from "styled-components";

const Container = styled.a`
  width: 22%;
  min-width: 260px;
  height: 260px;
  border-radius: 10px;
  box-sizing: border-box;
  background-size: cover;
  margin: 10px 10px;
  padding: 20px 20px 20px 20px;
  background-image: url(${props => props.bg || ""});
  background-position: center;
  text-decoration: none;

  @media (max-width: 768px) {
    min-width: 100%;
    min-height: 260px;
    margin: 10px 0;
  }
`;

const RecipeLink = styled.span`

  @media (max-width: 768px) {
  }
`;

const Higlight = styled.span`
  font-weight: 700;
  font-size: var(--p-titles);
  color: var(--black);
  background: #fe0;

  :hover {
    transition-property: background color;
    transition-duration: 0.2s;
    color: var(--accent-color);
    background-color: var(--black);
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='50' height='60' viewport='0 0 100 100' style='fill:black;font-size:30px;'><text y='50%'>😋</text></svg>")
        16 0,
      auto; /*emojicursor.app*/
  }

  @media (max-width: 768px) {
  }
`;

function Recipe(props) {
  return (
    <Container bg={props.bg} href={props.link}>
      <RecipeLink>
        <Higlight>{props.title}</Higlight>
      </RecipeLink>
    </Container>
  );
}

export default Recipe;
