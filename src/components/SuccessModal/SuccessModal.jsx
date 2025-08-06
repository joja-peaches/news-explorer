import "./SuccessModal.css";
import useModalClose from "../../hooks/useModalClose";

function SuccessModal({ isOpen, onClose, handleSignInClick }) {
  useModalClose(isOpen, onClose);

  return (
    <dialog className={`success-modal ${isOpen ? "success-modal_opened" : ""}`}>
      <div className="success-modal__container">
        <button className="success-modal__close-button" onClick={onClose} />
        <h3 className="success-modal__title">
          Registration successfully completed!
        </h3>
        <button
          onClick={handleSignInClick}
          className="success-modal__sign-in-button"
        >
          Sign in
        </button>
      </div>
    </dialog>
  );
}

export default SuccessModal;
