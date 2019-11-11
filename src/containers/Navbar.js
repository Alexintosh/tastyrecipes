import React from "react";
import "../App.css";
import styled from "styled-components";
import ConnectedNavbar from "./ConnectedNavbar";

const UberContainer = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 160px;

  @media (max-width: 768px) {
    width: 100%;
    height: 180px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: var(--primary-color);
  color: var(--white);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MenuItem = styled.a`
  display: block;
  margin-right: 2%;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--white);
  text-decoration: none;
  padding: 10px;

  :hover {
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='60' height='72' viewport='0 0 100 100' style='fill:black;font-size:36px;'><text y='50%'>🍳</text></svg>")
        16 0,
      auto; /*emojicursor.app*/
  }

  @media (max-width: 680px) {
    display: none;
  }
`;

const NavButton = styled.button`
  display: block;
  margin-right: 20px;
  font-size: var(--p-text);
  font-family: var(--main-font);
  font-weight: 700 !important;
  color: var(--black);
  text-decoration: none;
  padding: 12px;
  border: none;
  border-radius: 0.2rem;
  background: #fe0;

  :hover {
    transition-property: background color;
    transition-duration: 0.2s;
    background-color: var(--black);
    color: var(--white);
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='60' height='72' viewport='0 0 100 100' style='fill:black;font-size:36px;'><text y='50%'>👨🏻‍🍳</text></svg>")
        16 0,
      auto; /*emojicursor.app*/
  }
`;

function Navbar() {
  return (
    <UberContainer>
    <Container>
      <MenuItem href="#">Ddai</MenuItem>
      <MenuItem href="#">Dexwallet</MenuItem>
      <MenuItem href="#">Contact Us</MenuItem>
      <NavButton>Start Cooking</NavButton>
    </Container>
    <ConnectedNavbar balance='238.474.432,00' address='0xc96265c36F6D77747f9c259946a1eF55FcE946b7'/>
    </UberContainer>
  );
}

export default Navbar;
