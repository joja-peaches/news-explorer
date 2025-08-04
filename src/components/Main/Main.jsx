import "./Main.css";
import About from "../About/About";
import NewsCards from "../NewsCards/NewsCards";

function Main({
  handleSignInClick,
  handleSignInSubmit,
  isLoggedIn,
  handleSave,
  visibleArticlesCount,
  setVisibleArticlesCount,
  isSaved,
  newsArticles,
}) {
  return (
    <div className="main">
      <NewsCards
        isSaved={isSaved}
        isLoggedIn={isLoggedIn}
        handleSignInClick={handleSignInClick}
        handleSignInSubmit={handleSignInSubmit}
        handleSave={handleSave}
        newsArticles={newsArticles}
        visibleArticlesCount={visibleArticlesCount}
        setVisibleArticlesCount={setVisibleArticlesCount}
      />
      <About />
    </div>
  );
}

export default Main;
