import { MultiStepFormActions } from "@/interfaces/multiStepFormActions";
import React from "react";

const FormContext = React.createContext<MultiStepFormActions>(
  {} as MultiStepFormActions
);

export default FormContext;
