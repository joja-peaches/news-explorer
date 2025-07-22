import ModalWithForm from "../ModalWithForm/ModalWithForm";

function SignInModal({
  isOpen,
  onClose,
  title,
  name,
  submitText,
  buttonText,
  onSubmit,
  handleSignInClick,
  handleSignInSubmit,
  handleSignUpClick,
//   isFormValid,
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
      handleSignInSubmit={handleSignInSubmit}
    //   isFormValid={isFormValid}
    >
      <label className="modal__label">
        Email
        <input
          type="email"
          name="email"
          className="modal__input"
          required
        />
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
