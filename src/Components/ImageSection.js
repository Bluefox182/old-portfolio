import React from "react";
import styled from "styled-components";
import resume from "../img/resume.jpg";
import PrimaryButton from "./PrimaryButton";

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="resume" />
      </div>
      <div className="right-content">
        <div className="sub-title">
          <h4>
            Hi! My name is <span>Fernando Galdos</span>
          </h4>
        </div>
        <p className="paragraph">
          I am a Marketing-oriented Business Administrator. I decided to make a
          big change and follow what I am passionate about: Web Development.
        </p>
        <p className="paragraph">
          I made the decision to study Front-End Engineer at Codecademy, here I
          was able to improve my programming skills and use the necessary tools
          for it. I am proficient at JavaScript and React.Js. The most valuable
          thing I have learned is to work as a team and never stop learning.
        </p>
        <p className="paragraph">
          I consider myself creative, innovative, dedicated and passionate about
          self learning. I invite you to download my resume and follow me on my
          social networks.
        </p>

        <PrimaryButton title={"Download Cv"} />
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 80%;
    padding: 10px;
    img {
      width: 100%;
      border: 5px solid var(--font-dark-color);
      object-fit: cover;
      filter: grayscale(0.55);
      box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    }
    &:hover {
      opacity: 0.8;
    }
  }
  .right-content {
    width: 100%;

    h4 {
      font-size: 1.8rem;
      padding: 0 1.5rem;
      color: var(--white-color);
      span {
        font-size: 1.8rem;
      }
    }
    .paragraph {
      padding: 1.5rem 1.5rem;
      font-size: 0.9rem;
      line-height: 1.5;
    }
  }
`;
export default ImageSection;
