import React from "react";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import Particle from "../Components/Particle";

function HomePage() {
  return (
    <HomeStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h2>Hello, My name is</h2>
        <h1>
          <span>Fernando Galdos</span>
        </h1>
        <p>| Front-End Engineer | JavaScript | ReactJS | Redux |</p>
        <div className="icons">
          <a href="https://github.com/Bluefox182" className="icon i-github">
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/fernandogaldos/"
            className="icon i-linkedin"
          >
            <LinkedInIcon />
          </a>
          <a href="https://twitter.com/bluefox182" className="icon i-twitter">
            <TwitterIcon />
          </a>
        </div>
      </div>
    </HomeStyled>
  );
}

const HomeStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--secondary-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }
    }
  }
`;

export default HomePage;
