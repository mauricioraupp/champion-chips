"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import Stepper from "@/components/features/championship-creator/Stepper";
import ModalStepOne from "@/components/features/championship-creator/ModalStepOne";
import ModalStepTwo from "@/components/features/championship-creator/ModalStepTwo";
import ModalStepThree from "@/components/features/championship-creator/ModalStepThree";

export default function CreateChampionship() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    sport: "soccer",
    leagueLogoUrl: "",
    format: "league",
    secondLegs: false,
    teams: [] as { name: string; sigla: string; teamLogoUrl: string }[],
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const updateFormData = (newData: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const handleFinish = async () => {
    if (isLoading) return;

    try {
      setIsLoading(true);
      const response = await fetch("/api/championships", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        router.push("/");
      } else {
        alert("Erro ao criar o campeonato. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao criar:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex items-center justify-center bg-[url(/authbg.jpg)] bg-cover h-full w-full absolute bg-blur-sm">
      <section className="bg-neutral-150 flex flex-col items-center gap-8 min-w-[450px] w-1/3 mx-auto py-12 px-12 rounded-md shadow-2xl">
        
        <p className="font-semibold text-xl">
          {step === 1 && "Configurações"}
          {step === 2 && "Regras e formatos"}
          {step === 3 && "Adicionar times"}
        </p>

        <Stepper currentStep={step} />

        <div className="w-full">
          {step === 1 && (
            <ModalStepOne 
              nextStep={nextStep} 
              data={formData} 
              updateData={updateFormData} 
            />
          )}

          {step === 2 && (
            <ModalStepTwo 
              nextStep={nextStep} 
              prevStep={prevStep} 
              data={formData} 
              updateData={updateFormData} 
            />
          )}

          {step === 3 && (
            <ModalStepThree 
              prevStep={prevStep} 
              teams={formData.teams} 
              setTeams={(teams) => updateFormData({ teams })}
              onFinish={handleFinish}
            />
          )}
        </div>
      </section>
    </main>
  );
}