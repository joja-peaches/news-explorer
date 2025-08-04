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
      <h3 className="hamburger-modal__title">Saved articles</h3>
    );
  }

  return (
    <dialog
      className={`hamburger-modal ${isOpen ? "hamburger-modal_opened" : ""}`}
    >
      <div className="hamburger-modal__container">
        <button className="hamburger-modal__close-button" onClick={onClose} />
        <h3 className="hamburger-modal__title">Home</h3>
        {elementsToRender}
      </div>
    </dialog>
  );
}

export default HamburgerModal;
