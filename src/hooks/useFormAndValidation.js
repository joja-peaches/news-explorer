import { useState } from "react";

export function useFormAndValidation(inputValues) {
  const [values, setValues] = useState(inputValues);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    return email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });

    if (name === "email") {
      if (!validateEmail(value)) {
        setErrors({ ...errors, email: "Invalid email address" });
      } else {
        setErrors({ ...errors, email: "" });
      }
    }
  };

  return { values, handleChange, setValues, errors, setErrors };
}