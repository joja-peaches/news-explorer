import About from "../About/About";
import NewsCards from "../NewsCards/NewsCards";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";
import "./Main.css";

function Main({
  handleSignInClick,
  handleSignInSubmit,
  isLoggedIn,
  handleSave,
  visibleArticlesCount,
  setVisibleArticlesCount,
  newsArticles,
  isLoading,
  hasSearched,
  savedArticles,
  noResults,
}) {
  let elementsToRender;
  if (isLoading && hasSearched) {
    elementsToRender = <Preloader />;
  } else if (hasSearched && !isLoading && noResults) {
    elementsToRender = <NotFound />;
  } else if (hasSearched && !isLoading) {
    elementsToRender = (
      <NewsCards
        isLoggedIn={isLoggedIn}
        handleSignInClick={handleSignInClick}
        handleSignInSubmit={handleSignInSubmit}
        newsArticles={newsArticles}
        handleSave={handleSave}
        savedArticles={savedArticles}
        visibleArticlesCount={visibleArticlesCount}
        setVisibleArticlesCount={setVisibleArticlesCount}
      />
    );
  }
  return (
    <main className="main">
      {elementsToRender}
      <About />
    </main>
  );
}

export default Main;
