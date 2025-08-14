import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./SuccessModal.css";

function SuccessModal({ isOpen, onClose, name, handleSignInClick }) {

  return (
    <div className="success-modal">
      <ModalWithForm
        isOpen={isOpen}
        onClose={onClose}
        title="Registration successfully completed!"
        submitText=""
        buttonText=""
        name={name}
        handleSignInClick={handleSignInClick}
        hideSubmitButton={true}
      >
        <button
          type="button"
          className="modal__success-sign-in"
          onClick={handleSignInClick}
        >
          Sign in
        </button>
      </ModalWithForm>
    </div>
  );
}

export default SuccessModal;
