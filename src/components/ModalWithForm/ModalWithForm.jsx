import useModalClose from "../../hooks/useModalClose";
import "./ModalWithForm.css";

function ModalWithForm({
  isOpen,
  onClose,
  title,
  submitText,
  buttonText,
  children,
  name,
  handleSignInClick,
  handleSignUpClick,
  handleSignUpSubmit,
  handleSignInSubmit,
  hideSubmitButton,
}) {
  useModalClose(isOpen, onClose);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitText === "Sign up") {
      handleSignUpSubmit?.(e);
    } else {
      handleSignInSubmit?.(e);
    }
  };

  if (name === "success") {
    return (
      <dialog open={isOpen} className={`modal ${isOpen ? "modal_opened" : ""}`}>
        <div className="modal__form">
          <h3 className="modal__title">{title}</h3>
          <button className="modal__close-button" onClick={onClose} />
          {children}
        </div>
      </dialog>
    );
  }

  return (
    <dialog className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <form
        className="modal__form"
        method="get"
        onSubmit={handleSubmit}
      >
        <h3 className="modal__title">{title}</h3>
        <button className="modal__close-button" onClick={onClose} />
        {children}

        <div className="modal__submit-container">
          {!hideSubmitButton && (
            <button className="modal__submit-button" type="submit">
              {submitText}
            </button>
          )}

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
