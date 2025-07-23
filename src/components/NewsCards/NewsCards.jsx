import "./NewsCards.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCards({ handleSignInClick, isLoggedIn, handleSave, isSaved }) {
  return (
    <section className="news-cards">
      <h1 className="news-cards__title">Search results</h1>
      <div className="news-cards__cards">
        <NewsCard
          isLoggedIn={isLoggedIn}
          handleSignInClick={handleSignInClick}
          handleSave={handleSave}
          isSaved={isSaved}
        />
        <NewsCard
          isLoggedIn={isLoggedIn}
          handleSignInClick={handleSignInClick}
          handleSave={handleSave}
          isSaved={isSaved}
        />        <NewsCard
          isLoggedIn={isLoggedIn}
          handleSignInClick={handleSignInClick}
          handleSave={handleSave}
          isSaved={isSaved}
        />
      </div>
      <button className="news-cards__button">Show more</button>
    </section>
  );
}

export default NewsCards;
