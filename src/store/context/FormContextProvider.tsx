import React, { ReactNode, useReducer } from "react";
import { formStateReducer } from "./formReducer";
import { MultiStepFormProps } from "@/interfaces/multistep-form";
import FormContext from "./formContext";

const initialFormState: MultiStepFormProps = {
  firstName: {
    value: "",
    error: false,
  },
  lastName: {
    value: "",
    error: false,
  },
  email: {
    value: "",
    error: false,
  },
  phone: {
    value: "",
    error: false,
  },
};

const FormContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [formState, dispatch] = useReducer(formStateReducer, initialFormState);

  const setFirstNameValue = (value: string) => {
    dispatch({ type: "setFirstNameValue", value });
  };

  const setLastNameValue = (value: string) => {
    dispatch({ type: "setLastNameValue", value });
  };

  const setEmailValue = (value: string) => {
    dispatch({ type: "setEmailValue", value });
  };

  const setPhoneValue = (value: string) => {
    dispatch({ type: "setPhoneValue", value });
  };

  const setFirstNameError = (error: boolean) => {
    dispatch({ type: "setFirstNameError", error });
  };

  const setLastNameError = (error: boolean) => {
    dispatch({ type: "setLastNameError", error });
  };

  const setEmailError = (error: boolean) => {
    dispatch({ type: "setEmailError", error });
  };

  const setPhoneError = (error: boolean) => {
    dispatch({ type: "setPhoneError", error });
  };

  const contextValue = {
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

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};

export default FormContextProvider;
