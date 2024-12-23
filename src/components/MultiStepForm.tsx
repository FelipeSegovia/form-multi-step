import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PersonalInfoStep from "./PersonalInfoStep";
import ContactInfoStep from "./ContactInfoStep";
import SummaryStep from "./SummaryStep";
import { useFormContext } from "@/hooks/useFormContext";
import useValidateForm from "@/hooks/useValidateForm";
import { Progress } from "./ui/progress";

export default function MultiStepForm() {
  const { formState } = useFormContext();
  const { validatePersonalInfoStep, validateContactInfoStep } =
    useValidateForm(formState);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const steps = [
    <PersonalInfoStep {...formState} />,
    <ContactInfoStep {...formState} />,
    <SummaryStep {...formState} />,
  ];

  function next() {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  }

  function back() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (currentStepIndex === steps.length - 1) {
      alert("Form Submitted");
      return;
    }

    if (currentStepIndex === 0 && validatePersonalInfoStep()) {
      next();
    }

    if (currentStepIndex === 1 && validateContactInfoStep()) {
      next();
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>
            Paso {currentStepIndex + 1} de {steps.length}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div>{steps[currentStepIndex]}</div>
          <div className="mt-4">
            <Progress value={currentStepIndex * 33} />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          {currentStepIndex !== 0 && (
            <Button type="button" variant="outline" onClick={back}>
              Atrás
            </Button>
          )}
          <Button type="submit">
            {currentStepIndex === steps.length - 1 ? "Enviar" : "Siguiente"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
