import React from "react";
import { Global, css } from "@emotion/react";
import { device } from "./theme";

const globalCSS = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    --main-font: "Source Sans Pro", sans-serif;
    --secondary-font: "Herr Von Muellerhoff", cursive;
    --body-font: "Cabin", sans-serif;
    --main-font-color-dark: #252525;
    --secondary-font-color: #c59d5f;
    --body-font-color: #515151;
  }
`;

function GlobalStyle() {
  return <Global styles={globalCSS} />;
}

export default GlobalStyle;
