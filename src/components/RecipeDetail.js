import React from "react";
import styled from "styled-components";

const UberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;

  @media (max-width: 768px) {
    margin-top: 200px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: var(--white);
  color: var(--white);
  margin-top: 50px;
  margin-right: 2%;
  margin-left: 2%;
  width: 96%;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: flex-start;
    margin-top: 20px;
    margin-right: 0;
    margin-left: 0;
  }
`;

const PageTitle = styled.div`
margin-top: 20px;
margin-right: 2%;
  margin-left: 2%;
  width: 96%;
  @media (max-width: 768px) {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const PageTitleHighlight = styled.span`
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 3.2rem;
  color: var(--black);
  background: #fe0;
  /* -webkit-box-shadow: 1rem 0 0 #fe0, -1rem 0 0 #fe0;
  box-shadow: 1rem 0 0 #fe0, -1rem 0 0 #fe0; */

  @media (max-width: 768px) {
    font-size: var(--very-big-mobile);
    line-height: 3rem;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const Text = styled.div`
  min-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 16px;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

const Higlight = styled.span`
  font-weight: var(--bold);
  font-size: 2rem;
  line-height: 3.2rem;
  color: var(--black);

  @media (max-width: 768px) {
    line-height: 2rem;
  }
`;

const Step = styled.span`
  font-weight: var(--regular);
  font-size: 1.6rem;
  line-height: 2.5rem;
  color: var(--black);

  @media (max-width: 768px) {
  }
`;

const Image = styled.div`
  background-color: #ccc;
  background-image: url("../img/cupcake.jpg");
  background-size: cover;
  min-height: 400px;
  min-width: 40%;
  max-width: 40%;

  @media (max-width: 768px) {
    min-width: 100%;
    min-width: 100%;
    margin-top:0;
  }
`;

const Input = styled.input`
  border: solid 1px var(--black);
  border-radius: 0.4rem;
  padding: 4% 6%;
  margin-top: 20px;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  width: 88%;

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
    margin-left: 20px;
    margin-right: 20px;
    width: 88%;
    padding: 6% 6%;

    flex-grow:1;
  
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
  margin-top: 20px;

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
    width: 100%;
    flex-grow:1;
    margin-left: 20px;
    margin-right: 20px;
  }

  @media (max-width: 560px) {
    width: 100%;
    flex-grow:1;
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
          <Step>🥫 1. Do ↪️ this and ↔️ that and then</Step>
          <Step>🦐 2. Do ↗️ this and ↪️ that and then</Step>
          <Step>🥒 3. Do ↔️ this ↗️ and that and then</Step>
          <Step>🍜 4. Do this ↔️ and ↗️ that and that's it</Step>
          <Input type="number" name="amount" placeholder="Inert Amount"></Input>
          <Button>Send</Button>
        </Text>
        <Image />
      </Container>
    </UberContainer>
  );
}

export default RecipeDetail;
