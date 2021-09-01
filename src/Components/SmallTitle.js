import React from "react";
import styled from "styled-components";

function SmallTitle({ icon, title }) {
  return (
    <SmallTitleStyled>
      <p>{icon}</p>
      <h3>{title}</h3>
    </SmallTitleStyled>
  );
}

const SmallTitleStyled = styled.div`
  display: flex;
  align-items: center;
  p {
    padding-right: 1rem;
    svg {
      font-size: 3rem;
      color: #4d74e6;
    }
  }
  h3 {
    color: var(--white-color);
    font-size: 2rem;
  }
`;

export default SmallTitle;
