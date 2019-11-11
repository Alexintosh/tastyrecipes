import React from "react";
import "../App.css";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: var(--light-grey);
  color: var(--black);
  z-index: 9998;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 160px;
  }
`;

const Balance = styled.span`
  display: block;
  margin-right: 2%;
  font-size: var(--small-text);
  font-weight: var(--regular);
  color: var(--black);
  text-decoration: none;
  padding: 10px;

  @media (max-width: 680px) {
    margin: 7% 0 0 0;
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
  padding: 10px;
  border: none;
  border-radius: 0.2rem;
  background: var(--black);

  @media (max-width: 680px) {
    width: 86%;
    margin: 3% 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
