import { useEffect, useState } from "react";
import { useFormAndValidation } from "../../Hooks/useFormAndValidation";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function SignUpModal({
  isOpen,
  onClose,
  title,
  name,
  submitText,
  buttonText,
  handleSignUpSubmit,
  handleSignInClick
}) {
  const { values, handleChange, setValues, errors, setErrors } =
    useFormAndValidation({
      email: "",
      password: "",
      username: "",
    });

  const [_isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const hasValues = values.email && values.password && values.username;
    const hasErrors = !!errors.email;
    setIsFormValid(hasValues && !hasErrors);
  }, [values, errors]);

  const onSignUp = (e) => {
    e.preventDefault();
    handleSignUpSubmit(values);
  };

  useEffect(() => {
    if (isOpen) {
      setValues({ email: "", password: "", username: "" });
      setErrors({});
    }
  }, [isOpen]);
  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      name={name}
      submitText={submitText}
      buttonText={buttonText}
      onSubmit={onSignUp}
      handleSignUpSubmit={handleSignUpSubmit}
      handleSignInClick={handleSignInClick }
    >
      <label className="modal__label">
        Email
        <input
          type="email"
          name="email"
          id="email-signupr"
          className="modal__input"
          onChange={handleChange}
          value={values.email}
          required
        />
        {errors.email && <span className="modal__error">{errors.email}</span>}
      </label>
      <label className="modal__label">
        Password
        <input
          type="password"
          name="password"
          id="password-signup"
          className="modal__input"
          onChange={handleChange}
          value={values.password}
          required
        />
        {errors.password && (
          <span className="modal__error">{errors.password}</span>
        )}
      </label>
      <label className="modal__label">
        Username
        <input
          type="text"
          name="username"
          id="username"
          className="modal__input"
          onChange={handleChange}
          value={values.username}
          required
        />
        {errors.username && (
          <span className="modal__error">{errors.username}</span>
        )}
      </label>
    </ModalWithForm>
  );
}

export default SignUpModal;
