import { useLocation } from "react-router-dom";
import { useState } from "react";
import "./NewsCard.css";
import georgia from "../../assets/georgia-lloyd-headshot.jpg";

function NewsCard({ handleSignInClick, isLoggedIn }) {
  const [isClicked, setIsClicked] = useState(false);

  const savedButtonClick = () => {
    setIsClicked(!isClicked);
  };
  console.log(isLoggedIn);
  const location = useLocation();

  let elementsToRender;
  if (location.pathname === "/" && !isLoggedIn) {
    elementsToRender = (
      <>
        <button onClick={savedButtonClick} className="news-card__save-button" />
        <button
          onClick={handleSignInClick}
          className={`news-card__sign-in-button ${
            isClicked ? "news-card__sign-in-button_visible" : ""
          }`}
        >
          Sign in to save articles
        </button>
      </>
    );
  } else if (location.pathname === "/" && isLoggedIn) {
    elementsToRender = (
      <button onClick={savedButtonClick} className="news-card__save-button" />
    );
  }

  return (
    <section className="news-card">
      {/* <button className="news-card__save-button" />
      <button onClick={handleSignInClick} className="news-card__sign-in-button">
        Sign in to save articles
      </button> */}
      {elementsToRender}
      <img src={georgia} alt="" className="news-card__image" />
      <div className="news-card__container">
        <p className="news-card__container__date">Date</p>
        <h3 className="news-card__container__title">
          Grand Teton Renews Historic Crest Trail Long Long Title
        </h3>
        <p className="news-card__container__text">
          “The linking together of the Cascade and Death Canyon trails, at their
          heads, took place on October 1, 1933, and marked the first step in the
          realization of a plan whereby the hiker will be able to traverse the
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah
        </p>
        <h4 className="news-card__container__source">National Geographic</h4>
      </div>
    </section>
  );
}

export default NewsCard;
