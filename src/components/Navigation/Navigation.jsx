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

  if (activeModal === "hamburger") {
    hamburgerToRender = (
      <div
        className="navigation__hamburger-menu--hidden"
        onClick={handleHamburgerClick}
      ></div>
    );
  } else if (activeModal === "" && location.pathname === "/") {
    hamburgerToRender = (
      <div
        className="navigation__hamburger-menu"
        onClick={handleHamburgerClick}
      >
        <hr className="navigation__hamburger-line" />
        <hr className="navigation__hamburger-line" />
      </div>
    );
  } else if (activeModal === "" && location.pathname === "/saved-news") {
    hamburgerToRender = (
      <div
        className="navigation__hamburger-menu"
        onClick={handleHamburgerClick}
      >
        <hr className="navigation__hamburger-line navigation__hamburger-line--dark" />
        <hr className="navigation__hamburger-line navigation__hamburger-line--dark" />
      </div>
    );
  }

  if (!isLoggedIn && location.pathname === "/") {
    elementsToRender = (
      <>
        <button className="navigation__home navigation__links--active">
          Home
        </button>
        <button className="navigation__sign-in" onClick={handleSignInClick}>
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
                ? "navigation__home navigation__links--active"
                : "navigation__home"
            }
          >
            Home
          </button>
        </Link>
        <Link to="/saved-news">
          <button
            className={
              isActivePage === "savedArticles"
                ? "navigation__saved-articles navigation__links--active"
                : "navigation__saved-articles"
            }
            onClick={handleSavedArticlesClick}
          >
            Saved articles
          </button>
        </Link>
        <button className="navigation__profile">
          Georgia
          <img
            src={signOutLight}
            alt="Sign out icon"
            className="navigation__signout"
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
            className="navigation__home navigation__home--dark navigation__links--dark"
            onClick={handleHomeClick}
          >
            Home
          </button>
        </Link>
        <Link to="/saved-news">
          <button className="navigation__saved-articles navigation__links--dark navigation__saved-articles--active-dark">
            Saved articles
          </button>
        </Link>
        <button className="navigation__profile navigation__links--dark navigation__profile--dark">
          Georgia
          <img
            src={signOutDark}
            alt="Sign out icon"
            className="navigation__signout"
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
            ? "navigation__link-container--saved-news"
            : ""
        } ${
          activeModal === "hamburger"
            ? "navigation__link-container--hamburger"
            : ""
        }`}
      >
        <Link className="navigation__link" to="/">
          <p
            onClick={handleHomeClick}
            className={`navigation__logo ${
              location.pathname === "/saved-news"
                ? "navigation__logo--saved-news"
                : ""
            }`}
          >
            NewsExplorer
          </p>
        </Link>
        <div
          className={`navigation__links ${
            location.pathname === "/" && isLoggedIn
              ? "navigation__links--signed-in"
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
