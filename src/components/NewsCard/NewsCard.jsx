import { useLocation } from "react-router-dom";
import { useState } from "react";
import "./NewsCard.css";
import georgia from "../../assets/georgia-lloyd-headshot.jpg";

function NewsCard({ handleSignInClick, isLoggedIn, handleSave, handleRemoveSaved, isSaved }) {
  const [isSaveClicked, setisSaveClicked] = useState(false);
  const [isTrashClicked, setIsTrashClicked] = useState(false);

  const savedButtonClick = () => {
    setisSaveClicked(!isSaveClicked);
  };

  const trashButtonClick = () => {
    setIsTrashClicked(!isTrashClicked);
  };

  const location = useLocation();
  console.log(isLoggedIn);
  let elementsToRender;
  if (location.pathname === "/" && !isLoggedIn) {
    elementsToRender = (
      <>
        <button onClick={savedButtonClick} className="news-card__save-button" />
        <button
          onClick={handleSignInClick}
          className={`news-card__sign-in-button ${
            isSaveClicked ? "news-card__sign-in-button_visible" : ""
          }`}
        >
          Sign in to save articles
        </button>
      </>
    );
  } else if (location.pathname === "/" && isLoggedIn) {
    elementsToRender = (
      <button onClick={handleSave} className={`news-card__save-button ${isSaved ? 'news-card__save-button__saved' : ''}`} />
    );
  } else if (location.pathname === "/saved-news" && isLoggedIn) {
    elementsToRender = (
      <>
        <button className="news-card__category">
          Nature
        </button>
        <button
          onClick={trashButtonClick}
          className="news-card__trash-button"
        />
        <button
          onClick={handleRemoveSaved}
          className={`news-card__remove-button ${
            isTrashClicked ? "news-card__remove-button_visible" : ""
          }`}
        >
          Remove from saved
        </button>
      </>
    );
  }

  return (
    <section className="news-card">
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
