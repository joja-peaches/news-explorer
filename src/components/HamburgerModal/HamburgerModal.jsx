import { Link } from "react-router-dom";
import "./HamburgerModal.css";
import useModalClose from "../../hooks/useModalClose";

function HamburgerModal({
  isOpen,
  onClose,
  handleSignInClick,
  submitText,
  isLoggedIn,
}) {
  useModalClose(isOpen, onClose);
  let elementsToRender;
  if (!isLoggedIn) {
    elementsToRender = (
      <button
        onClick={handleSignInClick}
        className="hamburger-modal__sign-in-button"
      >
        {submitText}
      </button>
    );
  } else {
    elementsToRender = (
      <Link to="/saved-news">
        <h3 className="hamburger-modal__title" onClick={onClose}>Saved articles</h3>
      </Link>
    );
  }

  return (
    <dialog
      className={`hamburger-modal ${isOpen ? "hamburger-modal_opened" : ""}`}
    >
      <div className="hamburger-modal__container">
        <button className="hamburger-modal__close-button" onClick={onClose} />
        <Link to="/">
          <h3 className="hamburger-modal__title" onClick={onClose}>
            Home
          </h3>
        </Link>
        {elementsToRender}
      </div>
    </dialog>
  );
}

export default HamburgerModal;
