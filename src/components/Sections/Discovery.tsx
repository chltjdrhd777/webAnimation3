import React from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/css";
import restaurant from "images/our-story-1.jpg";
import StarIcon from "@material-ui/icons/Star";
const mainCSS = (function () {
  class CSSMaker {
    readonly masterSection = css`
      & .restaurant-description {
        & .global-headline {
          text-align: center;
          margin-top: 3.9rem;

          & > .sub-headline {
            margin-bottom: 3.5rem;
            letter-spacing: -1px;
            line-height: 0.42;
          }

          & > svg {
            margin: 2rem 0;
          }
        }

        & .restaurent-info {
          text-align: center;
          margin-bottom: 2.5rem;
          & > p {
            line-height: 1.5;
            margin-bottom: 3rem;
          }

          & > a {
            font-size: 2rem;
            text-transform: uppercase;
            letter-spacing: 0.2rem;
          }
        }
      }
    `;
  }

  return new CSSMaker();
})();

const { masterSection } = mainCSS;

function Discovery() {
  return (
    <section className={masterSection}>
      <div className="container">
        <div className="restaurant-description">
          <div className="global-headline">
            <h2 className="sub-headline">Discovery</h2>
            <h1 className="headline headline-dark">Our story</h1>
            <StarIcon />
          </div>

          <div className="restaurent-info">
            <p>
              Build a Responsive Website with AnimationsBuild a Responsive
              Website with AnimationsBuild a Responsive Website with
              AnimationsBuild a Responsive Website with AnimationsBuild a
              Responsive Website with AnimationsBuild a Responsive Website with
              AnimationsBuild a Responsive Website with AnimationsBuild a
              Responsive Website with AnimationsBuild a Responsive Website with
              AnimationsBuild a Responsive Website with Animations
            </p>
            <Link to="/" className="body-btn">
              About us
            </Link>
          </div>
        </div>

        <div className="restaurnat-img">
          <img src={restaurant} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Discovery;
