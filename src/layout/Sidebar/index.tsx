import React from "react";
import { css } from "@emotion/css";

const sidebarCSS = (function () {
  class CSSMaker {
    masterSidebar = css`
      grid-column: 1/2;
      grid-row: span 4;

      & > span {
        transform: rotate(-90deg);
        background: #48484848;
        animation: 0.5s fade-in ease-in;

        &:nth-of-type(2) {
          width: 2px;
          height: 10rem;
          transform: rotate(0);
          margin: 2rem 0;
        }
      }
    `;
  }

  return new CSSMaker();
})();

const { masterSidebar } = sidebarCSS;

function index() {
  return <aside></aside>;
}

export default index;
