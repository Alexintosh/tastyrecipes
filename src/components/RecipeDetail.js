import React from "react";
import styled from "styled-components";

const UberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 96%;
  margin-top: 150px;

  @media (max-width: 768px) {
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 96%;
  background-color: var(--white);
  color: var(--white);
  padding: 2%;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    padding: 20% 0 10% 20px;
  }
`;

const PageTitle = styled.h1`
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 3.2rem;
  color: var(--black);
  margin: -20px 0px 0px 50px;

  @media (max-width: 768px) {
  }
`;

const PageTitleHighlight = styled.span`
  background: #fe0;
  -webkit-box-shadow: 1rem 0 0 #fe0, -1rem 0 0 #fe0;
  box-shadow: 1rem 0 0 #fe0, -1rem 0 0 #fe0;

  @media (max-width: 768px) {
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 0 16px;

  @media (max-width: 768px) {
  }
`;

const Higlight = styled.span`
  font-weight: var(--bold);
  font-size: 2rem;
  line-height: 3.2rem;
  color: var(--black);

  @media (max-width: 768px) {
  }
`;

const Step = styled.span`
  font-weight: var(--regular);
  font-size: 1.6rem;
  line-height: 2.2rem;
  color: var(--black);

  @media (max-width: 768px) {
  }
`;

const Image = styled.div`
  background-color: #ccc;
  background-image: url("../img/recipe5.jpg");
  background-size: cover;
  min-height: 400px;
  min-width: 50%;
  max-width: 600px;

  @media (max-width: 768px) {
  }
`;

const Input = styled.input`
  width: 100%;
  border: solid 1px var(--black);
  border-radius: 0.4rem;
  padding: 20px;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::placeholder {
    color: var(--medium-grey);
    font-size: var(--p-text);
  }
  :focus {
    outline: none !important;
    border: 1px solid var(--primary-color);
    box-shadow: 0 0 10px var(--primary-color);
    -webkit-appearance: none;
  }
  :focus::placeholder {
    color: transparent;
  }
  @media (max-width: 680px) {
    margin-top: 20px;
    flex-grow: 1;
  }
`;

const Button = styled.button`
  width: 100%;
  display: block;
  font-size: var(--p-text);
  font-family: var(--main-font);
  font-weight: 700 !important;
  color: var(--black);
  text-decoration: none;
  padding: 16px 30px;
  border: none;
  border-radius: 0.2rem;
  background: var(--primary-color);

  :hover {
    transition-property: background color;
    transition-duration: 0.2s;
    background-color: var(--black);
    color: var(--white);
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='60' height='72' viewport='0 0 100 100' style='fill:black;font-size:36px;'><text y='50%'>👨🏻‍🍳</text></svg>")
        16 0,
      auto; /*emojicursor.app*/
  }

  @media (max-width: 720px) {
    flex-grow: 1;
  }

  @media (max-width: 560px) {
    flex-grow: 1;
    margin-top: 20px;
  }
`;

function RecipeDetail() {
  return (
    <UberContainer>
      <PageTitle>
        <PageTitleHighlight>
          Put some salty sprinkles on your Crypto. We'll do the rest.
        </PageTitleHighlight>
      </PageTitle>
      <Container>
        <Text>
          <Higlight>This is how it works:</Higlight>
          <Step>🥫 1. Do ↪️ this and ↔️ that</Step>
          <Step>🦐 2. Do ↗️ this and ↪️ that</Step>
          <Step>🥒 3. Do ↔️ this ↗️ and that</Step>
          <Step>🍜 4. Do this ↔️ and ↗️ that</Step>
          <Input type="number" name="amount" placeholder="Inert Amount"></Input>
          <Button>Send</Button>
        </Text>
        <Image />
      </Container>
    </UberContainer>
  );
}

export default RecipeDetail;