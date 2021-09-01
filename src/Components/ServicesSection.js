import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layout";
import Title from "../Components/Title";
import ServiceCard from "../Components/ServiceCard";
import responsive from "../img/responsive.svg";
import react from "../img/react.svg";
import test from "../img/test.svg";
import js from "../img/js.svg";
import app from "../img/app.svg";

function ServicesSection() {
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title={"My Services"} span={"My Services"} />
        <div className="services">
          <ServiceCard
            image={responsive}
            title={"Creative Design"}
            paragraph={
              "HTML & CSS Responsive Web Design to match the organization's branding guidelines."
            }
          />
          <div className="mid-card">
            <ServiceCard
              image={react}
              title={"ReactJS Development"}
              paragraph={
                "ReactJS is renowned for its extensibility, adjustability, and convenience. "
              }
            />
          </div>
          <ServiceCard
            image={test}
            title={"TDD"}
            paragraph={
              "Test Driven Development. Test React applications with Jest and Enzyme."
            }
          />
          <ServiceCard
            image={js}
            title={"Javascript Development"}
            paragraph={
              "JavaScript frameworks sit at the heart of any modern website."
            }
          />
          <div className="mid-card">
            <ServiceCard
              image={app}
              title={"Web App Development"}
              paragraph={
                "Strong UX & UI. Reduce time to market. Enhance your SEO and Web Marketing."
              }
            />
          </div>
          <ServiceCard
            image={react}
            title={"Redux Development"}
            paragraph={
              "Elevate User Experience and deliver a truly outstanding service with the hottest React framework on the market."
            }
          />
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
}

const ServicesSectionStyled = styled.section`
  .services {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
    @media screen and (max-width: 950px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default ServicesSection;
