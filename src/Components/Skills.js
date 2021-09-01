import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layout";
import Title from "../Components/Title";
import ProgressBar from "./ProgressBar";

function Skills() {
  return (
    <SkillsStyled>
      <Title title={"My Skills"} span={"my skills"} />
      <InnerLayout>
        <div className="skills">
          <ProgressBar title={"HTML5"} width={"90%"} text={"90%"} />
          <ProgressBar title={"CSS3"} width={"90%"} text={"90%"} />
          <ProgressBar title={"JavaScript"} width={"85%"} text={"85%"} />
          <ProgressBar title={"JQuery"} width={"85%"} text={"85%"} />
          <ProgressBar title={"React.JS"} width={"85%"} text={"85%"} />
          <ProgressBar title={"REDUX"} width={"80%"} text={"80%"} />
          <ProgressBar title={"TypeScript"} width={"80%"} text={"80%"} />
          <ProgressBar title={"TDD"} width={"80%"} text={"80%"} />
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Skills;
