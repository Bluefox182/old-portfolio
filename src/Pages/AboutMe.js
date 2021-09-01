import React from "react";
import styled from "styled-components";
import ImageSection from "../Components/ImageSection";
import Title from "../Components/Title";
import { MainLayout } from "../styles/Layout";
import ServicesSection from "../Components/ServicesSection";

function AboutMe() {
  return (
    <MainLayout>
      <AboutMeStyled>
        <Title title={"About Me"} span={"About Me"} />
        <ImageSection />
        <ServicesSection />
      </AboutMeStyled>
    </MainLayout>
  );
}

const AboutMeStyled = styled.section``;

export default AboutMe;
