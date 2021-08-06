import React from "react";
import { css } from "@emotion/css";
import StarIcon from "@material-ui/icons/Star";
import { Link } from "react-router-dom";
import heroBack from "images/hero.jpg";

const heroCSS = (function () {
  class CSSMaker {
    readonly masterHero = css`
      width: 100%;
      height: 100vh;
      background: url(${heroBack}) center no-repeat;
      background-size: cover;
      text-align: center;

      & .sub-headline {
        font-size: 8.5rem;
        font-family: var(--secondary-font);
        color: var(--secondary-font-color);
        font-weight: 100;
        line-height: 0.4;
        letter-spacing: 2px;
        margin-right: -2px;
      }

      & .headline {
        color: white;
        font-size: 3.7rem;
        font-family: var(--main-font);
        text-transform: uppercase;
        font-weight: 900;
        letter-spacing: 0.5rem;
        margin-right: -0.5rem;
      }

      & .headline-description {
        & .separator {
          & .line {
            width: 100%;
            max-width: 8.4rem;
            height: 0.25rem;
            background-color: white;
            position: relative;

            &::before {
              content: "";
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              border: 0.6rem solid transparent;
            }

            &.line-right::before {
              border-right-color: white;
              right: 0;
            }

            &.line-left::before {
              border-left-color: white;
              left: 0;
            }
          }

          & .asterisk {
            & svg {
              font-size: 1.4rem;
              color: var(--secondary-font-color);
              margin: 0 1.6rem;
            }
          }
        }

        & .single-animation {
          flex-direction: column;
          & > h5 {
            color: white;
            font-size: 1.4rem;
            font-weight: 100;
            text-transform: uppercase;
            margin-bottom: 1.2rem;
            letter-spacing: 3px;
            margin-right: -3px;
          }

          & > a.btn {
            font-size: 1.3rem;
            background-color: white;
            padding: 0.9rem 1.8rem;
            color: var(--body-font-color);
            border-radius: 0.4rem;
            transition: background-color 0.5s;
            &:hover,
            &:focus {
              background-color: var(--secondary-font-color);
              color: white;
            }
          }
        }
      }
    `;
  }

  return new CSSMaker();
})();

const { masterHero } = heroCSS;

function index() {
  return (
    <section className={`${masterHero} centering`}>
      <div className="container">
        <h2 className="sub-headline">welcome</h2>

        <h1 className="headline">The Rosa</h1>

        <div className="headline-description">
          <div className="separator centering">
            <div className="line line-left"></div>

            <div className="asterisk">
              <StarIcon />
            </div>

            <div className="line line-right"></div>
          </div>

          <div className="single-animation centering">
            <h5>Ready to be opened</h5>
            <Link to="/" className="btn cta-btn">
              expolre
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
