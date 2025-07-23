import ModalWithForm from "../ModalWithForm/ModalWithForm";

function SignUpModal({
  isOpen,
  onClose,
  title,
  name,
  submitText,
  buttonText,
  handleSignInSubmit,
  handleSignUpSubmit,
}) {
  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      name={name}
      submitText={submitText}
      buttonText={buttonText}
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
      <label className="modal__label">
        Username
        <input type="text" name="username" className="modal__input" required />
      </label>
    </ModalWithForm>
  );
}

export default SignUpModal;
