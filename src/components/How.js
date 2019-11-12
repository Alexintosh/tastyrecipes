import React from "react";
import styled from "styled-components";

const Container = styled.div`
background-color: var(--white);
font-size: var(--p-text);
line-height: 1.8rem;
margin-top: 20px;
margin-left: 20px;
margin-right: 20px;

@media (max-width: 680px) {
  margin-left: 0;
margin-right: 0;
  }
`;

const Title = styled.div`
color: var(--black);
font-weight: 700;
font-size: var(--p-titles);
`;

function How() {
  return (
    <Container>
      <span>
      <Title>DeFi Financial strategies on autotopilot</Title>
      Recipes allow for seamless integration to DeFi protocols by creating a modular way to planning a users financial strategy. Instead of interfacing with multiple dapps a user can automatically allocate its assets over a variety of DeFi protocols in a seamless manner. We are building DeFi recipe building blocks which can be combined in any way to atomically perform interactions which used to be tedious and time consuming.
      </span>
    </Container>
  );
}

export default How;
