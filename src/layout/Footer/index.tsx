import React from "react";
import { css } from "@emotion/css";

const headerCSS = (function () {
  class CSSMaker {
    masterFooter = css`
      grid-column: 2 / -1;
      grid-row: 4 / 5;

      & span {
        display: inline-block;
        width: 1.5rem;
        height: 1.5rem;
        background: #d8d8d8;
        border-radius: 59%;
        margin-right: 0.5rem;
        cursor: pointer;

        &.selected {
          width: 3.5rem;
          border-radius: 2rem;
          background: #b61428;
        }
      }
    `;
  }

  return new CSSMaker();
})();

const { masterFooter } = headerCSS;

function index() {
  return (
    <footer className={masterFooter}>
      <section className="container"></section>
    </footer>
  );
}

export default index;
