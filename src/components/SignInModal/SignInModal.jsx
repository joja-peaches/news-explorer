import ModalWithForm from "../ModalWithForm/ModalWithForm";

function SignInModal({
  isOpen,
  onClose,
  title,
  name,
  submitText,
  buttonText,
  handleSignInSubmit,
  handleSignUpSubmit,
  handleSignUpClick,
}) {
  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      name={name}
      submitText={submitText}
      buttonText={buttonText}
      handleSignUpClick={handleSignUpClick}
      handleSignInSubmit={handleSignInSubmit}
      handleSignUpSubmit={handleSignUpSubmit}
    >
      <label className="modal__label">
        Email
        <input type="email" name="email" className="modal__input" required />
      </label>
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

export default SignInModal;
