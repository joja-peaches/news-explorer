import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./Navigation.css";
import signOutLight from "../../assets/light-logout.svg";
import signOutDark from "../../assets/dark-logout.png";

function Navigation({
  isLoggedIn,
  handleSignInClick,
  handleSignInSubmit,
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
        {/* <div
          className="navigation__hamburger-menu"
          onClick={handleHamburgerClick}
        >
          <hr className="navigation__hamburger-menu__line" />
          <hr className="navigation__hamburger-menu__line" />
        </div> */}
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
        <div
          className="navigation__hamburger-menu"
          onClick={handleHamburgerClick}
        >
          <hr className="navigation__hamburger-menu__line" />
          <hr className="navigation__hamburger-menu__line" />
        </div>
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
        <div
          className="navigation__hamburger-menu"
          onClick={handleHamburgerClick}
        >
          <hr className="navigation__hamburger-menu__line navigation__hamburger-menu__line-dark" />
          <hr className="navigation__hamburger-menu__line navigation__hamburger-menu__line-dark" />
        </div>
      </>
    );
  }

  return (
    <nav className="navigation">
      <div
        className={`navigation__link-container ${
          isActivePage === "savedNews"
            ? "navigation__link-container__saved-news"
            : ""
        }`}
      >
        <Link className="navigation__link" to="/">
          <p
            onClick={handleHomeClick}
            className={`navigation__logo ${
              isActivePage === "savedNews" ? "navigation__logo__saved-news" : ""
            }`}
          >
            NewsExplorer
          </p>
        </Link>
        <div
          className={`navigation__links ${
            isActivePage === "home" && isLoggedIn
              ? "navigation__links__signed-in"
              : ""
          }`}
        >
          {elementsToRender}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
