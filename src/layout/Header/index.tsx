import React from "react";
import { css } from "@emotion/css";
import { Link } from "react-router-dom";

const headerCSS = (function () {
  class CSSMaker {
    readonly masterHeader = css``;
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
