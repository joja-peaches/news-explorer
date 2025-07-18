import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./Navigation.css";

function Navigation({ isLoggedIn, handleSignInClick, currentUser }) {
  let elementsToRender;

  if (!isLoggedIn) {
    elementsToRender = (
      <>
        <button className="navigation__links__home">Home</button>
        <button className="navigation__links__sign-in" onClick={handleSignInClick}>Sign In</button>
      </>
    );
  } else {
    elementsToRender = (
      <>
        <button className="navigation__links__home">Home</button>
        <button className="navigation__links__saved-articles">
          Saved articles
        </button>
        <button className="navigation__links__profile">Georgia</button>
      </>
    );
  }

  return (
    <nav className="navigation">
      <div className="navigation__link-container">
        <p className="navigation__logo">NewsExplorer</p>
        <div className="navigation__links">{elementsToRender}</div>
      </div>
    </nav>
  );
}

export default Navigation;
