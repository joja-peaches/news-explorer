import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";
import signOutLight from "../../assets/light-logout.svg";
import signOutDark from "../../assets/dark-logout.svg";

function Navigation({
  isLoggedIn,
  handleSignInClick,
  isActivePage,
  handleHomeClick,
  handleSavedArticlesClick,
  handleSignOut,
  handleHamburgerClick,
  activeModal,
}) {
  const location = useLocation();
  let elementsToRender;
  let hamburgerToRender;

  if (activeModal === "signIn" || activeModal === "signUp") {
    hamburgerToRender = (
      <div
        className="navigation__hamburger-menu"
        onClick={handleHamburgerClick}
      >
        <hr className="navigation__hamburger-menu__line" />
        <hr className="navigation__hamburger-menu__line" />
      </div>
    );
  } else if (activeModal === "hamburger") {
    hamburgerToRender = (
      <div
        className="navigation__hamburger-menu__hidden"
        onClick={handleHamburgerClick}
      ></div>
    );
  } else {
    hamburgerToRender = (
      <div
        className="navigation__hamburger-menu"
        onClick={handleHamburgerClick}
      >
        <hr className="navigation__hamburger-menu__line" />
        <hr className="navigation__hamburger-menu__line" />
      </div>
    );
  }

  if (!isLoggedIn && location.pathname === "/") {
    elementsToRender = (
      <>
        <button className="navigation__links__home navigation__links__active">
          Home
        </button>
        <button
          className="navigation__links__sign-in"
          onClick={handleSignInClick}
        >
          Sign In
        </button>
        {hamburgerToRender}
      </>
    );
  } else if (isLoggedIn && location.pathname === "/") {
    elementsToRender = (
      <>
        <Link to="/">
          <button
            className={
              isActivePage === "home"
                ? "navigation__links__home navigation__links__active"
                : "navigation__links__home"
            }
          >
            Home
          </button>
        </Link>
        <Link to="/saved-news">
          <button
            className={
              isActivePage === "savedArticles"
                ? "navigation__links__saved-articles navigation__links__active"
                : "navigation__links__saved-articles"
            }
            onClick={handleSavedArticlesClick}
          >
            Saved articles
          </button>
        </Link>
        <button className="navigation__links__profile">
          Georgia
          <img
            src={signOutLight}
            alt="Sign out icon"
            className="navigation__links__profile-signout"
            onClick={handleSignOut}
          />
        </button>
        {hamburgerToRender}
      </>
    );
  } else if (isLoggedIn && location.pathname === "/saved-news") {
    elementsToRender = (
      <>
        <Link to="/">
          <button
            className="navigation__links__home navigation__links__home-dark navigation__links__dark"
            onClick={handleHomeClick}
          >
            Home
          </button>
        </Link>
        <Link to="/saved-news">
          <button className="navigation__links__saved-articles navigation__links__dark navigation__links__active-dark">
            Saved articles
          </button>
        </Link>
        <button className="navigation__links__profile navigation__links__dark navigation__links__profile-dark">
          Georgia
          <img
            src={signOutDark}
            alt="Sign out icon"
            className="navigation__links__signout"
            onClick={handleSignOut}
          />
        </button>
        {hamburgerToRender}
      </>
    );
  }
  return (
    <nav className="navigation">
      <nav
        className={`navigation__link-container ${
          location.pathname === "/saved-news"
            ? "navigation__link-container__saved-news"
            : ""
        } ${
          activeModal === "hamburger"
            ? "navigation__link-container__hamburger"
            : ""
        }`}
      >
        <Link className="navigation__link" to="/">
          <p
            onClick={handleHomeClick}
            className={`navigation__logo ${
              location.pathname === "/saved-news"
                ? "navigation__logo__saved-news"
                : ""
            }`}
          >
            NewsExplorer
          </p>
        </Link>
        <div
          className={`navigation__links ${
            location.pathname === "/" && isLoggedIn
              ? "navigation__links__signed-in"
              : ""
          }`}
        >
          {elementsToRender}
        </div>
      </nav>
    </nav>
  );
}

export default Navigation;
