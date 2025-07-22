import "./NewsCards.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCards({ handleSignInClick, isLoggedIn }) {
  return (
    <section className="news-cards">
      <h1 className="news-cards__title">Search results</h1>
      <div className="news-cards__cards">
        <NewsCard
          isLoggedIn={isLoggedIn}
          handleSignInClick={handleSignInClick}
        />
        <NewsCard
          isLoggedIn={isLoggedIn}
          handleSignInClick={handleSignInClick}
        />
        <NewsCard
          isLoggedIn={isLoggedIn}
          handleSignInClick={handleSignInClick}
        />
      </div>
      <button className="news-cards__button">Show more</button>
    </section>
  );
}

export default NewsCards;
