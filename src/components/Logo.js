import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 80px;
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 9997;
`;

function Logo() {
  return (
    <Container>
      <img src="../img/logo.png" height="100%"></img>
    </Container>
  );
}

export default Logo;
