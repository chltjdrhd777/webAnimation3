import React from "react";
import { Global, css } from "@emotion/react";
import { device } from "./theme";

const globalCSS = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --main-font: "Source Sans Pro", sans-serif;
    --secondary-font: "Herr Von Muellerhoff", cursive;
    --body-font: "Cabin", sans-serif;
    --main-font-color-dark: #252525;
    --secondary-font-color: #c59d5f;
    --body-font-color: #515151;
  }

  html {
    font-family: var(--body-font);
    font-size: 10px;
    color: var(--body-font-color);
    scroll-behavior: smooth;
  }

  section {
    padding: 3.9rem 0;
  }

  img {
    width: 100%;
    max-width: 100%;
  }

  a {
    text-decoration: none;
  }

  p {
    font-size: 1.6rem;
  }

  ul {
    list-style: none;
  }

  .container {
    width: 100%;
    max-width: 122.5rem;
    margin: 0 auto;
    padding: 0 2.4rem;
  }

  .centering {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

function GlobalStyle() {
  return <Global styles={globalCSS} />;
}

export default GlobalStyle;
