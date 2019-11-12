import React from "react";
import "../App.css";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100px;
  background-color: var(--light-grey);
  color: var(--black);
  z-index: 9998;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-around;
  }
`;

const Balance = styled.span`
  display: block;
  margin-right: 20px;
  font-size: var(--small-text);
  font-weight: var(--regular);
  color: var(--black);
  text-decoration: none;

  @media (max-width: 680px) {
    margin-right: 0;
    height: 1px;
  }
`;

const Label = styled.span`
  @media (max-width: 680px) {
    display: none;
  }
`;

const Address = styled.span`
  display: block;
  margin-right: 20px;
  font-size: var(--small-text);
  font-family: var(--main-font);
  font-weight: var(--regular);
  color: var(--white);
  text-decoration: none;
  padding: 1% 3%;
  border: none;
  border-radius: 0.2rem;
  background: var(--black);

  @media (max-width: 680px) {
    margin-right: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 80%;
    padding: 2% 5%;

    
  }
`;

function ConnectedNavbar(props) {
  return (
    <Container>
      <Balance href="#">Balance: {props.balance}</Balance>
      <Address>
        <Label>Address</Label> {props.address}
      </Address>
    </Container>
  );
}

export default ConnectedNavbar;
