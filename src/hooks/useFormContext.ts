import FormContext from "@/store/context/formContext";
import React from "react";

export const useFormContext = () => {
  const {
    formState,
    setFirstNameValue,
    setLastNameValue,
    setEmailValue,
    setPhoneValue,
    setFirstNameError,
    setLastNameError,
    setEmailError,
    setPhoneError,
  } = React.useContext(FormContext);

  return {
    formState,
    setFirstNameValue,
    setLastNameValue,
    setEmailValue,
    setPhoneValue,
    setFirstNameError,
    setLastNameError,
    setEmailError,
    setPhoneError,
  };
};
