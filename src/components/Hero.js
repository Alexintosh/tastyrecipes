import React from 'react';
import styled from "styled-components";
 

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 96%;
  background-color: var(--white);
  color: var(--white);
  padding: 10% 2% 2% 2%;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    padding: 20% 20px 10% 20px;
  }
`;


const Text = styled.div`
margin: -30px 20px 0px 16px;
z-index: 99;

  @media (max-width: 768px) {
  }
`;

const Higlight = styled.span`
font-weight: 700;
font-size: 3.2rem;
line-height: 3.2rem;
color: var(--black);
background: #fe0;
-webkit-box-shadow: 1rem 0 0 #fe0, -1rem 0 0 #fe0;
box-shadow: 1rem 0 0 #fe0, -1rem 0 0 #fe0;

  @media (max-width: 768px) {
  }
`;

const Image = styled.div`
background-color: #ccc;
background-image: url('https://www.maxim.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_480/MTQ0MjU4NjU3OTY4NzI3OTU5/giphygif.webp');
background-size: cover;
height: 340px;
width: 100%;

  @media (max-width: 768px) {
  }
`;

function Hero2() {
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

export default Hero2;
