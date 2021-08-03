import React from "react";
import { css } from "@emotion/css";

const headerCSS = (function () {
  class CSSMaker {
    readonly masterFooter = css``;
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
