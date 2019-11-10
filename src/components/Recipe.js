import React from "react";
import styled from "styled-components";

const Container = styled.div`
min-width: 300px;
height: 300px;
border-radius: 10px;
box-sizing: border-box;
background-size: cover;
margin: 0 10px;
background-image: url('https://www.maxim.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_480/MTQ0MjU4NjU3OTY4NzI3OTU5/giphygif.webp');
`;

function Recipe() {
  return (
    <Container>
      ciao
    </Container>
  );
}

export default Recipe;
