import "./NewsCards.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCards({
  isLoggedIn,
  handleSignInClick,
  handleSave,
  savedArticles,
  newsArticles,
  visibleArticlesCount,
  setVisibleArticlesCount,
}) {
  const handleShowMore = () => {
    setVisibleArticlesCount((prevCount) => prevCount + 3);
  };

  return (
    <section className="news-cards">
      <h2 className="news-cards__title">Search results</h2>
      <ul className="news-cards__cards">
        {newsArticles.slice(0, visibleArticlesCount).map((article) => (
          <li className="news-cards__card" key={article.url}>
            <NewsCard
              isLoggedIn={isLoggedIn}
              handleSignInClick={handleSignInClick}
              handleSave={handleSave}
              savedArticles={savedArticles}
              title={article.title}
              keyword={article.keyword}
              date={article.publishedAt}
              source={article.source.name}
              imageUrl={article.urlToImage}
              blurb={article.content}
              altText={article.description}
              url={article.url}
            />
          </li>
        ))}
      </ul>
      <button onClick={handleShowMore} className="news-cards__button">
        Show more
      </button>
    </section>
  );
}

export default NewsCards;
