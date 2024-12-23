import { MultiStepFormProps } from "@/interfaces/multistep-form";
import { useFormContext } from "./useFormContext";

const useValidateForm = (formState: MultiStepFormProps) => {
  const { setFirstNameError, setLastNameError, setEmailError, setPhoneError } =
    useFormContext();

  const validatePersonalInfoStep = () => {
    const { firstName, lastName } = formState;
    setFirstNameError(!firstName.value ? true : false);
    setLastNameError(!lastName.value ? true : false);

    return firstName.value && lastName.value;
  };

  const validateContactInfoStep = () => {
    const { email, phone } = formState;
    setEmailError(!email.value ? true : false);
    setPhoneError(!phone.value ? true : false);

    return email.value && phone.value;
  };

  return { validatePersonalInfoStep, validateContactInfoStep };
};

export default useValidateForm;
