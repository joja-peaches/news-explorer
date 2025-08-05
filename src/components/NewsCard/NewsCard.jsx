import { useLocation } from "react-router-dom";
import { useState } from "react";
import { formatDate, cleanKeyword } from "../../utils/helpers";
import "./NewsCard.css";

function NewsCard({
  handleSignInClick,
  isLoggedIn,
  handleSave,
  handleRemoveSaved,
  savedArticles,
  title,
  date,
  source,
  imageUrl,
  keyword,
  blurb,
  altText,
  url,
}) {
  const [isSaveClicked, setIsSaveClicked] = useState(false);
  const [isTrashClicked, setIsTrashClicked] = useState(false);

  const savedButtonClick = () => {
    setIsSaveClicked(!isSaveClicked);
  };

  const trashButtonClick = () => {
    setIsTrashClicked(!isTrashClicked);
  };

  const formattedDate = formatDate(date);

  const cleanBlurb = (text) => {
    return text.replace(/\[\+\d+\s+chars\]/, "").trim();
  };

  const cleanedBlurb = cleanBlurb(blurb);
  const cleanedKeyword = (keyword) => {
    if (!keyword === "") {
      cleanKeyword(keyword);
    }
  };

  const location = useLocation();
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
      <button
        onClick={() =>
          handleSave({
            title,
            date,
            source,
            imageUrl,
            blurb,
            altText,
            url,
            keyword,
          })
        }
        className={`news-card__save-button ${
          savedArticles.some((a) => a.url === url)
            ? "news-card__save-button__saved"
            : ""
        }`}
      />
    );
  } else if (location.pathname === "/saved-news" && isLoggedIn) {
    elementsToRender = (
      <>
        <button className="news-card__category">{cleanedKeyword}</button>
        <button
          onClick={trashButtonClick}
          className="news-card__trash-button"
        />
        <button
          onClick={() =>
            handleRemoveSaved({
              title,
              date,
              source,
              imageUrl,
              blurb,
              altText,
              url,
              keyword,
            })
          }
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
    <article
      className="news-card"
      onClick={(e) => {
        if (e.target.closest("button")) return;
        window.open(url, "_blank");
      }}
    >
      {elementsToRender}
      <img src={imageUrl} alt={altText} className="news-card__image" />
      <div className="news-card__container">
        <p className="news-card__container__date">{formattedDate}</p>
        <h3 className="news-card__container__title">{title}</h3>
        <p className="news-card__container__text">{cleanedBlurb}</p>
        <h4 className="news-card__container__source">{source}</h4>
      </div>
    </article>
  );
}

export default NewsCard;
