import About from "../About/About";
import NewsCards from "../NewsCards/NewsCards";
import Preloader from "../Preloader/Preloader";
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
  savedArticles
}) {
  let elementsToRender;
  if (isLoading && hasSearched) {
    elementsToRender = <Preloader />;
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
    <div className="main">
      {/* <NewsCards
        isLoggedIn={isLoggedIn}
        handleSignInClick={handleSignInClick}
        handleSignInSubmit={handleSignInSubmit}
        newsArticles={newsArticles}
        handleSave={handleSave}
        visibleArticlesCount={visibleArticlesCount}
        setVisibleArticlesCount={setVisibleArticlesCount}
      /> */}
      {elementsToRender}
      <About />
    </div>
  );
}

export default Main;
