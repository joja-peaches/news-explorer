import { useLocation } from "react-router-dom";

import "./Header.css";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

function Header({
  isLoggedIn,
  handleSignInClick,
  handleSignInSubmit,
  currentUser,
  isActivePage,
  handleHomeClick,
  handleSavedArticlesClick,
  handleSignOut,
  handleHamburgerClick,
  handleSearch,
  activeModal,
}) {
  const location = useLocation();
  let elementsToRender;

  if (location.pathname === "/") {
    elementsToRender = (
      <>
        <section className="header__text-container">
          <h1 className="header__title">What's going on in the world?</h1>
          <h2 className="header__subtitle">
            Find the latest news on any topic and save them in your personal
            account.
          </h2>
        </section>
        <SearchForm handleSearch={handleSearch} />
      </>
    );
  }

  return (
    <header
      className={`header ${
        location.pathname === "/saved-news" ? "header__saved-news" : ""
      }`}
    >
      <Navigation
        isLoggedIn={isLoggedIn}
        handleSignInClick={handleSignInClick}
        currentUser={currentUser}
        isActivePage={isActivePage}
        handleHomeClick={handleHomeClick}
        handleSavedArticlesClick={handleSavedArticlesClick}
        handleSignOut={handleSignOut}
        handleSignInSubmit={handleSignInSubmit}
        handleHamburgerClick={handleHamburgerClick}
        activeModal={activeModal}
      />
      {elementsToRender}
    </header>
  );
}

export default Header;
