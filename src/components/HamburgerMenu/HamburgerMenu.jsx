import { Link } from "react-router-dom";
import "./HamburgerMenu.css";
import useModalClose from "../../hooks/useModalClose";

function HamburgerMenu({
  isOpen,
  onClose,
  handleSignInClick,
  handleSignOut,
  submitText,
  isLoggedIn,
}) {
  useModalClose(isOpen, onClose);

  let elementsToRender;

  if (!isLoggedIn) {
    elementsToRender = (
      <button
        onClick={handleSignInClick}
        className="hamburger-menu__sign-in-out"
      >
        {submitText}
      </button>
    );
  } else {
    elementsToRender = (
      <>
        <Link to="/saved-news">
          <h3 className="hamburger-menu__title" onClick={onClose}>
            Saved articles
          </h3>
        </Link>
        <button
          onClick={handleSignOut}
          className="hamburger-menu__sign-in-out"
        >Sign Out</button>
      </>
    );
  }

  return (
    <dialog
      className={`hamburger-menu ${isOpen ? "hamburger-menu_opened" : ""}`}
    >
      <div className="hamburger-menu__container">
        <div className="hamburger-menu__heading">
          <p className="hamburger-menu__logo">NewsExplorer</p>
          <button className="hamburger-menu__close-button" onClick={onClose} />
        </div>
        <Link to="/">
          <h3 className="hamburger-menu__title" onClick={onClose}>
            Home
          </h3>
        </Link>
        {elementsToRender}
      </div>
    </dialog>
  );
}

export default HamburgerMenu;
