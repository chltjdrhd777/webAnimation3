import React from "react";
import { css } from "@emotion/css";
import { Link } from "react-router-dom";

const headerCSS = (function () {
  class CSSMaker {
    masterHeader = css`
      grid-column: 2/ -1;
      grid-row: span 1;
      display: flex;
      align-items: center;
      animation: 0.5s fade-in ease-in;
      & > .container {
        width: 100%;
        max-width: 120rem;
        margin: 0 auto;
        padding: 0 1.5rem;

        & > .main-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;

          & > .nav-list {
            display: flex;
            & li {
              margin-left: 5rem;
            }

            & a {
              font-size: 1.4rem;
              text-transform: uppercase;
              color: #6a6768;
            }
          }
        }
      }
    `;
  }

  return new CSSMaker();
})();

const { masterHeader } = headerCSS;

function index() {
  return (
    <header className={masterHeader}>
      <section className="container"></section>
    </header>
  );
}

export default index;
