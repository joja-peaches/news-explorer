import { useEffect, useState } from "react";
import { useFormAndValidation } from "../../Hooks/useFormAndValidation";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function SignInModal({
  isOpen,
  onClose,
  title,
  name,
  submitText,
  buttonText,
  onSubmit,
  handleSignInSubmit,
  handleSignUpSubmit,
  handleSignUpClick,
}) {
  const { values, handleChange, errors } =
    useFormAndValidation({
      email: "",
      password: "",
    });

  const [_isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const hasInput = values.email && values.password;
    const hasErrors = !!errors.email;
    setIsFormValid(hasInput && !hasErrors);
  }, [values, errors]);

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
      handleSignUpSubmit={handleSignUpSubmit}
    >
      <label className="modal__label">
        Email
        <input
          type="email"
          name="email"
          className="modal__input"
          placeholder="Enter email"
          id="login-email"
          onChange={handleChange}
          value={values.email}
          required
        />
        {errors.email && <span className="modal__error">{errors.email}</span>}
      </label>
      <label className="modal__label modal__label-password">
        Password
        <input
          type="password"
          name="password"
          className="modal__input"
          placeholder="Enter password"
          id="login-password"
          onChange={handleChange}
          value={values.password}
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default SignInModal;
