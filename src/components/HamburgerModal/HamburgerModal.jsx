import "./HamburgerModal.css";
import useModalClose from "../../hooks/useModalClose";

function HamburgerModal({ isOpen, onClose, handleSignInClick }) {
  useModalClose(isOpen, onClose);

  return (
    <dialog className={`hamburger-modal ${isOpen ? "hamburger-modal_opened" : ""}`}>
      <div className="hamburger-modal__container">
        <button className="hamburger-modal__close-button" onClick={onClose} />
        <h3 className="hamburger-modal__title">
          Registration hamburgerfully completed!
        </h3>
        <button
          onClick={handleSignInClick}
          className="hamburger-modal__sign-in-button"
        >
          Sign in
        </button>
      </div>
    </dialog>
  );
}

export default HamburgerModal;
