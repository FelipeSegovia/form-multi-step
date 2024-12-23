import React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useFormContext } from "@/hooks/useFormContext";

type PersonalInfoStepProps = {
  firstName: {
    value: string;
    error: boolean;
  };
  lastName: {
    value: string;
    error: boolean;
  };
};

const PersonalInfoStep: React.FC<PersonalInfoStepProps> = ({
  firstName,
  lastName,
}) => {
  const { setFirstNameValue, setLastNameValue } = useFormContext();

  const handleOnChangeFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    firstName.error = e.target.value === "";
    setFirstNameValue(e.target.value);
  };

  const handleOnChangeLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    lastName.error = e.target.value === "";
    setLastNameValue(e.target.value);
  };

  return (
    <>
      <Label htmlFor="firstName">Nombre</Label>
      <Input
        autoFocus
        type="text"
        id="firstName"
        value={firstName.value}
        onChange={handleOnChangeFirstName}
      />
      {firstName.error && (
        <p className="text-red-500 text-xs">El nombre es requerido</p>
      )}
      <Label htmlFor="lastName">Apellido</Label>
      <Input
        type="text"
        id="lastName"
        value={lastName.value}
        onChange={handleOnChangeLastName}
      />
      {lastName.error && (
        <p className="text-red-500 text-xs">El apellido es requerido</p>
      )}
    </>
  );
};

export default PersonalInfoStep;
