import { MultiStepFormProps } from "./multistep-form";

export interface MultiStepFormActions {
  formState: MultiStepFormProps;
  setFirstNameValue: (value: string) => void;
  setLastNameValue: (value: string) => void;
  setEmailValue: (value: string) => void;
  setPhoneValue: (value: string) => void;
  setFirstNameError: (error: boolean) => void;
  setLastNameError: (error: boolean) => void;
  setEmailError: (error: boolean) => void;
  setPhoneError: (error: boolean) => void;
}
