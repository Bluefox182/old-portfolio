import React from "react";
import styled from "styled-components";

function Button({ filter, button }) {
  return (
    <ButtonsStyled>
      {button.map((but, i) => {
        return (
          <ButtonStyled key={i} onClick={() => filter(but)}>
            {but}
          </ButtonStyled>
        );
      })}
    </ButtonsStyled>
  );
}

const ButtonStyled = styled.button`
  outline: none;
  border: none;
  background-color: var(--background-dark-grey);
  padding: 0.4rem 2rem;
  font-size: 0.85rem;
  border-radius: 20px;
  color: var(--white-color);
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  margin-bottom: 0.6rem;
  &:active,
  &:focus {
    background: linear-gradient(to right, #4d74e6, #2a57dc);
  }
  &:hover {
    background: linear-gradient(to right, #4d74e6, #2a57dc);
  }
  &:not(:last-child) {
    margin-right: 0.6rem;
  }
`;
const ButtonsStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 70%;
  margin: 2.4rem auto;
`;
export default Button;
