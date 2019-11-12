import React from "react";
import styled from "styled-components";

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

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    margin-top: 50px;
    margin-right: 0;
    margin-left: 0;
  }
`;

const Text = styled.div`
margin-top: 20px;
  @media (max-width: 768px) {
  }
`;

const Higlight = styled.span`
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 3.2rem;
  color: var(--black);
  background: #fe0;
  /* -webkit-box-shadow: 1rem 0 0 #fe0, -1rem 0 0 #fe0;
  box-shadow: 1rem 0 0 #fe0, -1rem 0 0 #fe0; */

  @media (max-width: 768px) {
    font-size: var(--very-big-mobile);
    line-height: var(--very-big-mobile);
  }
`;

const Image = styled.div`
  background-color: #ccc;
  background-image: url("https://www.maxim.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_480/MTQ0MjU4NjU3OTY4NzI3OTU5/giphygif.webp");
  background-size: cover;
  min-height: 400px;
  min-width: 40%;
  max-width: 40%;

  @media (max-width: 768px) {
    min-width: 100%;
    min-width: 100%;
  }
`;

function Hero() {
  return (
    <Container>
      <Text>
        <Higlight>
          Put some salty sprinkles on your Crypto. We'll do the rest.
        </Higlight>
      </Text>
      <Image />
    </Container>
  );
}

export default Hero;
