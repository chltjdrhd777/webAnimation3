import React from "react";
import { css } from "@emotion/css";
import StarIcon from "@material-ui/icons/Star";
import { Link } from "react-router-dom";

const heroCSS = (function () {
  class CSSMaker {
    readonly masterHero = css``;
  }

  return new CSSMaker();
})();

const { masterHero } = heroCSS;

function index() {
  return (
    <section className={masterHero}>
      <div className="container">
        <h2 className="sub-headline">welcome</h2>

        <h1 className="headline">The Rosa</h1>

        <div className="headline-description">
          <div className="separator">
            <div className="line line-left"></div>
            <div className="asterisk">
              <StarIcon />
            </div>
            <div className="line line-right"></div>
          </div>

          <div className="single-animation">
            <h5>Ready to be opened</h5>
            <Link to="/" className="btn cta-btn"></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
