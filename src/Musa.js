import React, { useState } from "react";
import "./App.css";

import starIcon from "./images/icon-star.svg";
import thankYouImage from "./images/illustration-thank-you.svg";

function App() {
  const [rating, setRating] = useState(0);
  const [status, setStatus] = useState("idle");
  return (
    <>
      <main>
        <h1>Interactive Rating Component</h1>
        <div className="card">
          {status === "idle" ? (
            <div className="rating-component">
              <div className="star-icon-wrapper">
                <img src={starIcon} />
              </div>
              <h3>How did we do?</h3>
              <p>
                Please let us know how we did with your support request. All
                feedbacks is appreciated to help us improve our offering
              </p>

              <div className="buttons">
                <button onClick={(e) => setRating(e.target.outerText)}>
                  1
                </button>
                <button onClick={(e) => setRating(e.target.outerText)}>
                  2
                </button>
                <button onClick={(e) => setRating(e.target.outerText)}>
                  3
                </button>
                <button onClick={(e) => setRating(e.target.outerText)}>
                  4
                </button>
                <button onClick={(e) => setRating(e.target.outerText)}>
                  5
                </button>
              </div>
              <div className="submit-button-wrapper">
                <button onClick={() => setStatus("submitted")}>submit</button>
              </div>
            </div>
          ) : (
            <div className="rating-feedback-container">
              <div className="thankYou-wrapper">
                <img src={thankYouImage} />
              </div>
              <span className="rating-result">
                you select {rating} out of 5
              </span>

              <h3>thank you!</h3>
              <p>
                We appreciat you taking the time to give a rating. If you ever
                need support, din't hesitate to get in touch
              </p>
            </div>
          )}
        </div>
      </main>

      <footer>
        <div className="attribution">
          <p>
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="noreferrer"
            >
              Frontend Mentor
            </a>
            .
          </p>
        </div>
        <p className="copyright">
          &copy; JCC - Part 2 of the Junior Developer Program - 2022. All rights
          reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
