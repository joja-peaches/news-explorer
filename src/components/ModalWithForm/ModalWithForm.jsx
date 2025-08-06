import useModalClose from "../../hooks/useModalClose";
import "./ModalWithForm.css";

function ModalWithForm({
  isOpen,
  onClose,
  title,
  submitText,
  buttonText,
  children,
  handleSignInClick,
  handleSignUpClick,
  handleSignUpSubmit,
  handleSignInSubmit,
}) {
  useModalClose(isOpen, onClose);

  return (
    <dialog className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <form
        className="modal__form"
        method="get"
        onSubmit={submitText === "Sign up" ? handleSignUpSubmit : handleSignInSubmit}
      >
        <h3 className="modal__title">{title}</h3>
        <button className="modal__close-button" onClick={onClose} />
        {children}
        <div className="modal__submit-container">
          <button
            className="modal__submit-button"
            type="submit"
          >
            {submitText}
          </button>
          <div className="modal__alternative-button-container">
            <p className="modal__alternative-button-text">or&nbsp;</p>
            <button
              className="modal__alternative-button"
              type="button"
              onClick={
                buttonText === "Sign in" ? handleSignInClick : handleSignUpClick
              }
            >
              {buttonText}
            </button>
          </div>
        </div>
      </form>
    </dialog>
  );
}

export default ModalWithForm;
