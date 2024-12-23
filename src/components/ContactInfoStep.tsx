import React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useFormContext } from "@/hooks/useFormContext";

type ContactInfoStepProps = {
  email: {
    value: string;
    error: boolean;
  };
  phone: {
    value: string;
    error: boolean;
  };
};

const ContactInfoStep: React.FC<ContactInfoStepProps> = ({ email, phone }) => {
  const { setEmailValue, setPhoneValue } = useFormContext();

  const handleOnChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    email.error = e.target.value === "";
    setEmailValue(e.target.value);
  };

  const handleOnChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    phone.error = e.target.value === "";
    setPhoneValue(e.target.value);
  };

  return (
    <>
      <Label htmlFor="email">Email</Label>
      <Input
        autoFocus
        type="email"
        id="email"
        value={email.value}
        onChange={handleOnChangeEmail}
      />
      {email.error && (
        <p className="text-red-500 text-xs">El email es requerido</p>
      )}
      <Label htmlFor="phone">Teléfono</Label>
      <Input
        type="tel"
        id="phone"
        value={phone.value}
        onChange={handleOnChangePhone}
      />
      {phone.error && (
        <p className="text-red-500 text-xs">El teléfono es requerido</p>
      )}
    </>
  );
};

export default ContactInfoStep;
