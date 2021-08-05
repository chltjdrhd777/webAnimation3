import React from "react";
import { css } from "@emotion/css";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Logo from "images/logo-rosa.png";

import NavList from "./NavList";
import { useState } from "react";
import { useEffect } from "react";

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
        }
      }

      & > .nav-list {
        position: fixed;
        top: 0;
        left: 0;
        width: 80%;
        height: 100vh;
        background-color: var(--main-font-color-dark);
        padding: 4.4rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        z-index: 900;

        transform: translateX(-100%);
        /* &.opened {
          transform: translateX(0);
        } */
        transition: transform 0.5s;
      }

      &::after {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.8);
        z-index: 800;
        opacity: 0;
        transform: scale(0);
        transition: opacity 0.5s;
      }

      &.opened {
        & > .nav-list {
          transform: translateX(0);
        }

        &::after {
          opacity: 1;
          transform: scale(1);
        }
      }
    `;
  }

  return new CSSMaker();
})();

const { masterHeader, nav } = headerCSS;

function Header() {
  const [isClose, setIsClose] = useState(false);

  return (
    <header className={masterHeader}>
      <div className="container">
        <nav className={`${nav} ${!isClose ? "opened" : ""}`}>
          <div
            className="menu-toggle"
            onClick={() => setIsClose((prev) => !prev)}
          >
            {isClose ? <MenuIcon /> : <CloseIcon />}
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

export default Header;
