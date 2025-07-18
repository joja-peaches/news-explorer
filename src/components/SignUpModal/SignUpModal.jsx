import "./SignUpModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function SignUpModal({
  isOpen,
  onClose,
  title,
  name,
  submitText,
  buttonText,
  onSubmit,
  children,
  handleLoginClick,
  handleSignUpClick,
  isFormValid,
}) {
  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      name={name}
      submitText={submitText}
      buttonText={buttonText}
      onSubmit={onSubmit}
      handleSignUpClick={handleSignUpClick}
      //   isFormValid={isFormValid}
    >
      <label className="modal__label">
        Email
      </label>
      <input type="email" name="email" className="modal__input" required />

      <label className="modal__label">
        Password
        <input
          type="password"
          name="password"
          className="modal__input"
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default SignUpModal;
