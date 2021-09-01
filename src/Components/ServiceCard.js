import React from "react";
import styled from "styled-components";

function ServiceCard({ image, title, paragraph }) {
  return (
    <ServiceCardStyled>
      <div className="container">
        <img src={image} alt="" />
        <h4>{title}</h4>
        <p>{paragraph}</p>
      </div>
    </ServiceCardStyled>
  );
}

const ServiceCardStyled = styled.div`
  background-color: var(--background-dark-grey);
  border-left: 1px solid var(--border-color);
  border-top: 8px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  transition: all 0.4s ease-in-out;

  &:hover {
    border-top: 1px solid var(--primary-color);
    box-shadow: 10px 10px 0px 0px rgba(77, 116, 230, 0.75);
    -webkit-box-shadow: 10px 10px 0px 0px rgba(77, 116, 230, 0.75);
    -moz-box-shadow: 10px 10px 0px 0px rgba(77, 116, 230, 0.75);
  }
  .container {
    padding: 1.2rem;
    text-align: center;
    img {
      width: 85px;
    }
    h4 {
      color: var(--white-color);
      text-align: left;
      font-size: 1.4rem;
      padding: 1rem 0;
      font-weight: 600;
      position: relative;
      &::after {
        content: "";
        width: 4rem;
        background-color: var(--border-color);
        height: 3px;
        position: absolute;
        left: 0;
        bottom: 0;
        border-radius: 10px;
      }
    }
    p {
      text-align: left;
      font-size: 0.9rem;
      padding: 0.8rem 0;
    }
  }
`;

export default ServiceCard;
