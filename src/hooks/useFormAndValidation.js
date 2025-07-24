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

// import { useState, useCallback } from "react";

// export function useFormAndValidation() {
//   const [values, setValues] = useState({});
//   const [errors, setErrors] = useState({});
//   const [isValid, setIsValid] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setValues({ ...values, [name]: value });
//     setErrors({ ...errors, [name]: e.target.validationMessage });
//     setIsValid(e.target.closest("form").checkValidity());
//   };

//   const resetForm = useCallback(
//     (newValues = {}, newErrors = {}, newIsValid = false) => {
//       setValues(newValues);
//       setErrors(newErrors);
//       setIsValid(newIsValid);
//     },
//     [setValues, setErrors, setIsValid]
//   );

//   return {
//     values,
//     handleChange,
//     errors,
//     isValid,
//     resetForm,
//     setValues,
//     setIsValid,
//   };
// }