import React from "react";
import { css } from "@emotion/css";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Logo from "images/logo-rosa.png";

import NavList from "./NavList";

const headerCSS = (function () {
  class CSSMaker {
    readonly masterHeader = css`
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.5),
        transparent
      );
    `;

    readonly nav = css`
      height: 7.2rem;
      display: flex;
      align-items: center;
      justify-content: center;

      & > .menu-toggle {
        color: white;
        position: absolute;
        right: 2.5rem;
        cursor: pointer;
        z-index: 1000;
        & > svg {
          font-size: 2.2rem;
          &:nth-of-type(2) {
            display: none;
          }
        }
      }
    `;
  }

  return new CSSMaker();
})();

const { masterHeader, nav } = headerCSS;

function index() {
  return (
    <header className={masterHeader}>
      <div className="container">
        <nav className={nav}>
          <div className="menu-toggle">
            <MenuIcon />
            <CloseIcon />
          </div>

          <Link to="/" className="logo">
            <img src={Logo} alt="" />
          </Link>

          <NavList />
        </nav>
      </div>
    </header>
  );
}

export default index;
