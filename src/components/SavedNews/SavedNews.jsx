import NewsCard from "../NewsCard/NewsCard";
import "./SavedNews.css";

function SavedNews() {
  return (
    <section className="saved-news">
      <h2 className="saved-news__title">Saved Articles</h2>
      <h3 className="saved-news__subtitle">
        Georgia, you have 5 saved articles
      </h3>
      <p className="saved-news__keywords">
        By keywords:{" "}
        <span className="saved-news__keywords-bold">
          Nature, Yellowstone, and 2 others
        </span>
      </p>
      <p className="saved-news__empty">No saved articles yet. </p>
      <section className="saved-news__articles">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </section>
      {/* {savedArticles.length > 0 ? (
        <ul className="saved-news__list">
          {savedArticles.map((article) => (
            <li key={article.id} className="saved-news__item">
              <h3 className="saved-news__item-title">{article.title}</h3>
              <p className="saved-news__item-description">{article.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="saved-news__empty">No saved articles yet.</p>
      )} */}
    </section>
  );
}

export default SavedNews;
