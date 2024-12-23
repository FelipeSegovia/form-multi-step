import { MultiStepFormProps } from "@/interfaces/multistep-form";
import { FormStateActions } from "./formActions";

export const formStateReducer = (
  state: MultiStepFormProps,
  action: FormStateActions
): MultiStepFormProps => {
  switch (action.type) {
    case "setFirstNameValue":
      return {
        ...state,
        firstName: { ...state.firstName, value: action.value },
      };
    case "setLastNameValue":
      return { ...state, lastName: { ...state.lastName, value: action.value } };
    case "setEmailValue":
      return { ...state, email: { ...state.email, value: action.value } };
    case "setPhoneValue":
      return { ...state, phone: { ...state.phone, value: action.value } };
    case "setFirstNameError":
      return {
        ...state,
        firstName: { ...state.firstName, error: action.error },
      };
    case "setLastNameError":
      return { ...state, lastName: { ...state.lastName, error: action.error } };
    case "setEmailError":
      return { ...state, email: { ...state.email, error: action.error } };
    case "setPhoneError":
      return { ...state, phone: { ...state.phone, error: action.error } };
    default:
      return state;
  }
};
