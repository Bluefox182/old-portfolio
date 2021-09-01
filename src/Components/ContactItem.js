import React from "react";
import styled from "styled-components";

function ContactItem({ title, icon, cont1 }) {
  return (
    <ContactItemStyled>
      <div className="left-content">{icon}</div>
      <div className="right-content">
        <h6>{title}</h6>
        <p>{cont1}</p>
      </div>
    </ContactItemStyled>
  );
}

const ContactItemStyled = styled.div`
  padding: 1rem 2rem;
  width: 350px;
  background-color: var(--background-dark-grey);
  margin-top: 4rem;
  margin-bottom: 5rem;
  display: flex;
  align-items: center;
  box-shadow: 10px 10px 5px 0px rgba(8, 7, 7, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(8, 7, 7, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(8, 7, 7, 0.75);
  &:not(:last-child) {
    margin-bottom: 0;
  }
  .left-content {
    padding: 1.5rem;
    border: 1px solid var(--border-color);
    background-color: var(--primary-color);
    border-radius: 50%;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.5rem;
    svg {
      font-size: 2rem;
      color: var(--white-color);
    }
  }
  .right-content {
    h6 {
      color: var(--white-color);
      font-size: 1.1rem;
      padding-bottom: 0.5rem;
    }
  }
`;

export default ContactItem;
