import NewsCard from "../NewsCard/NewsCard";
import { cleanKeyword } from "../../utils/helpers";
import "./SavedNews.css";

function SavedNews({
  isLoggedIn,
  handleSave,
  savedArticles,
  handleSignInClick,
  handleRemoveSaved,
  currentUser,
}) {

  const name = currentUser?.name || "User";
  const numberSaved = savedArticles.length;

  const uniqueKeywords = [
    ...new Set(
      savedArticles.map((article) => article.keyword || "Uncategorized")
    ),
  ];
  const formattedKeywords = uniqueKeywords.map(cleanKeyword);
  let keywordsDisplay;
  if (formattedKeywords.length === 0) {
    keywordsDisplay = "None";
  } else if (formattedKeywords.length === 1) {
    keywordsDisplay = formattedKeywords[0];
  } else if (formattedKeywords.length === 2) {
    keywordsDisplay = `${formattedKeywords[0]} and ${formattedKeywords[1]}`;
  } else {
    keywordsDisplay = `${formattedKeywords[0]}, ${formattedKeywords[1]}, and ${
      formattedKeywords.length - 2
    } other${formattedKeywords.length - 2 > 1 ? "s" : ""}`;
  }

  return (
    <section className="saved-news">
      <h2 className="saved-news__title">Saved Articles</h2>
      <h3 className="saved-news__subtitle">
        {name}, you have {numberSaved} saved articles
      </h3>
      <p className="saved-news__keywords">
        By keywords:{" "}
        <span className="saved-news__keywords-bold">{keywordsDisplay}</span>
      </p>
      <article className="saved-news__articles">
        {savedArticles.length > 0 ? (
          <ul className="saved-news__list">
            {savedArticles.map((article) => (
              <NewsCard
                isLoggedIn={isLoggedIn}
                handleSignInClick={handleSignInClick}
                handleSave={handleSave}
                handleRemoveSaved={handleRemoveSaved}
                savedArticles={savedArticles}
                title={article.title}
                date={article.date}
                source={article.source}
                imageUrl={article.imageUrl}
                blurb={article.blurb}
                altText={article.description}
                url={article.url}
                key={article.url}
              />
            ))}
          </ul>
        ) : (
          <p
            className={`saved-news__empty ${
              savedArticles.length === 0 ? "" : "saved-news__empty-visible"
            }`}
          >
            No saved articles yet.
          </p>
        )}
      </article>
    </section>
  );
}

export default SavedNews;
