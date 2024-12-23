import React from "react";

type SummaryStepProps = {
  firstName: {
    value: string;
    error: boolean;
  };
  lastName: {
    value: string;
    error: boolean;
  };
  email: {
    value: string;
    error: boolean;
  };
  phone: {
    value: string;
    error: boolean;
  };
};

const SummaryStep: React.FC<SummaryStepProps> = ({
  firstName,
  lastName,
  email,
  phone,
}) => {
  return (
    <>
      <h3 className="text-lg font-semibold">Resumen</h3>
      <p>
        Nombre: {firstName.value} {lastName.value}
      </p>
      <p>Email: {email.value}</p>
      <p>Teléfono: {phone.value}</p>
    </>
  );
};

export default SummaryStep;
