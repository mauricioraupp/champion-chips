"use client"

import { useState } from "react";
import Stepper from "@/components/features/championship-creator/Stepper";
import ModalStepOne from "@/components/features/championship-creator/ModalStepOne";
import ModalStepTwo from "@/components/features/championship-creator/ModalStepTwo";
import ModalStepThree from "@/components/features/championship-creator/ModalStepThree";

export default function CreateChampionship() {
  const [step, setStep] = useState(1);
  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <main className="flex items-center justify-center bg-[url(/authbg.jpg)] bg-cover h-full w-full absolute">
      <section className="bg-neutral-150 flex flex-col items-center gap-8 min-w-fit w-1/3 mx-auto py-12 px-12 rounded-md shadow-xl/30">
        {step === 1 && <p className="font-semibold text-xl">Configurações</p>}
        {step === 2 && <p className="font-semibold text-xl">Regras e formatos</p>}
        {step === 3 && <p className="font-semibold text-xl">Adicionar times</p>}
        <Stepper currentStep={step} />
        {step === 1 && 
          <ModalStepOne nextStep={nextStep}/>
        }
        {step === 2 && 
          <ModalStepTwo nextStep={nextStep} prevStep={prevStep}/>
        }
        {step === 3 &&
          <ModalStepThree prevStep={prevStep}/>
        }
      </section>
    </main>
  );
}
