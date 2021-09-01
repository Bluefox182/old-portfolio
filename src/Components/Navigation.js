import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import avatar from "../img/avatar.jpg";

function Navigation() {
  return (
    <NavigationStyled>
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/" activeClassName="active-class" exact>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" activeClassName="active-class" exact>
            About Me
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" activeClassName="active-class" exact>
            My Resume
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/projects" activeClassName="active-class" exact>
            Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activeClassName="active-class" exact>
            Contact Me
          </NavLink>
        </li>
      </ul>
      <footer className="footer">
        <p>© 2021 bluefox182</p>
      </footer>
    </NavigationStyled>
  );
}

const NavigationStyled = styled.nav`
  display: flex;
  font-family: "Roboto", sans-serif;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);
  .avatar {
    width: 80%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1rem 0;
    img {
      width: 100%;
      border-radius: 50%;
      background: #4d74e6;
      background-size: cover;
      background-position: center;
      border: 8px solid transparent;
    }
  }

  .nav-items {
    width: 100%;
    text-align: center;
    .active-class {
      background: linear-gradient(to right, #4d74e6, #2a57dc);
      color: white;
    }
    li {
      display: block;
      a {
        display: block;
        padding: 0.45rem 0;
        position: relative;
        z-index: 10;
        transition: all 0.4s ease-in-out;
        font-weight: 600;
        font-size: 0.8rem;
        letter-spacing: 3px;
        &:hover {
          cursor: pointer;
          color: var(--white-color);
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var(--primary-color);
          transition: All 0.4s cubic-bezier(1, -0.2, 0.25, 0.95);
          z-index: -1;
          opacity: 0.3;
        }
      }
      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }

  footer {
    border-top: 1px solid var(--border-color);
    width: 80%;
    p {
      padding: 1.5rem 0;
      font-size: 0.8rem;
      display: block;
      text-align: center;
    }
  }
`;

export default Navigation;
