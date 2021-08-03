import React from "react";
import { css } from "@emotion/css";
import { Link } from "react-router-dom";

const headerCSS = (function () {
  class CSSMaker {
    readonly masterHeader = css``;
    readonly nav = css``;
  }

  return new CSSMaker();
})();

const { masterHeader, nav } = headerCSS;

function index() {
  return (
    <header className={masterHeader}>
      <div className="container">
        <nav className={nav}>
          <div className="menu-toggle"></div>
        </nav>
      </div>
    </header>
  );
}

export default index;
