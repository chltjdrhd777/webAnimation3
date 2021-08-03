import React from "react";
import { css } from "@emotion/css";

const sidebarCSS = (function () {
  class CSSMaker {
    readonly masterSidebar = css``;
  }

  return new CSSMaker();
})();

const { masterSidebar } = sidebarCSS;

function index() {
  return (
    <aside className={masterSidebar}>
      <section className="container"></section>
    </aside>
  );
}

export default index;
