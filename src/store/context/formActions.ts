export type FormStateActions =
  | { type: "setFirstNameValue"; value: string }
  | { type: "setLastNameValue"; value: string }
  | { type: "setEmailValue"; value: string }
  | { type: "setPhoneValue"; value: string }
  | { type: "setFirstNameError"; error: boolean }
  | { type: "setLastNameError"; error: boolean }
  | { type: "setEmailError"; error: boolean }
  | { type: "setPhoneError"; error: boolean };
