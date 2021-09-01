import React from "react";
import styled from "styled-components";

function PrimaryButton({ title }) {
  return <PrimaryButtonStyled>{title}</PrimaryButtonStyled>;
}

const PrimaryButtonStyled = styled.a`
  background: linear-gradient(to right, #4d74e6, #2a57dc);
  padding: 0.8rem 2.5rem;
  margin-left: 1.5rem;
  color: white;
  cursor: pointer;
  border-radius: 24px;
  display: inline-block;
  font-size: inherit;
  text-transform: uppercase;
  position: relative;
  transition: all 0.4s ease-in-out;
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0.2rem;
    transition: all 0.4s ease-in-out;
    left: 0;
    bottom: 0;
    opacity: 0.7;
  }
  &:hover::after {
    width: 100%;
    background-color: var(--white-color);
  }
`;
export default PrimaryButton;
