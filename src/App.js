import React, { useState } from "react";
import Image from "./Image";
import "./App.css";

import starIcon from "./images/icon-star.svg";
import thankYouImage from "./images/illustration-thank-you.svg";

function App() {
  const [status, setStatus] = useState("idle");
  const [rating, setRating] = useState(0);
  const btnObject = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

  return (
    <>
      <main>
        <h1>Interactive Rating Component</h1>
        <div className="card">
          {status === "idle" ? (
            <div>
              <Image
                className="star-icon-wrapper"
                src={starIcon}
                alt="logo icon"
              />

              <h3>How did we do?</h3>
              <p>
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </p>
              <div className="buttons">
                {btnObject.map((element, index) => (
                  <button
                    key={index}
                    onClick={() => setRating(element.id)}
                    className={rating === element.id ? "active" : ""}
                  >
                    {element.id}
                  </button>
                ))}
              </div>
              <div className="submit-button-wrapper">
                <button onClick={() => rating && setStatus("submitted")}>
                  Submit
                </button>
              </div>
            </div>
          ) : (
            <div className="rating-feedback-container">
              <Image src={thankYouImage} alt="Thank you image" />
              <div>
                <span className="rating-result">
                  You select {rating} out of 5
                </span>
              </div>
              <h3>Thank you!</h3>
              <p>
                We appreciate you taking the time to give a rating. If you ever
                need more support, don't hesitate to get in touch!
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
