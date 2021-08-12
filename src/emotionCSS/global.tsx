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

  svg {
    font-size: 1.4rem;
    color: var(--secondary-font-color);
    margin: 0 1.6rem;
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

  .sub-headline {
    font-size: 8.5rem;
    font-family: var(--secondary-font);
    color: var(--secondary-font-color);
    font-weight: 100;
    line-height: 0.4;
    letter-spacing: 2px;
    margin-right: -2px;
    margin-bottom: 1rem;
    &::first-letter {
      text-transform: uppercase;
    }
  }

  .headline {
    color: white;
    font-size: 3.7rem;
    font-family: var(--main-font);
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: 0.5rem;
    margin-right: -0.5rem;
  }

  .headline-dark {
    color: var(--main-font-color-dark);
    letter-spacing: 0.7rem;
    margin-right: -0.7rem;
  }

  .body-btn {
    font-size: 1.5rem;
    color: var(--secondary-font-color);
    position: relative;
    transition: color 0.5s;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -3px;
      width: 100%;
      height: 2px;
      background-color: var(--secondary-font-color);
      transition: background-color 0.5s;
    }

    &:hover,
    &:focus {
      color: var(--main-font-color-dark);
      &::after {
        background-color: var(--main-font-color-dark);
      }
    }
  }
`;

function GlobalStyle() {
  return <Global styles={globalCSS} />;
}

export default GlobalStyle;
