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
    leagueLogoUrl: "",
    leagueLogoFile: null as File | null,
    isPublic: false,
    format: "league",
    secondLegs: false,
    teams: [] as { name: string; sigla: string; teamLogoUrl?: string; teamLogoFile: File | null }[],
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const updateFormData = (newData: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

const handleFinish = async (finalDataFromStepThree: any) => {
  if (isLoading) return;

    try {
      setIsLoading(true);
      const response = await fetch("/api/championship", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalDataFromStepThree),
      });
      
      if (response.ok) {
        router.push("/championships");
        router.refresh();
      } else {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Erro ao salvar no banco");
      }
    } catch (error) {
      console.error("Erro ao criar:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex bg-black items-center justify-center h-full w-full absolute">
      <div className="bg-[url(/authbg.jpg)] bg-cover h-full w-full absolute blur-sm"/>
      <section className="relative bg-white flex flex-col items-center gap-8 mx-auto py-12 px-12 rounded-md shadow-2xl 
        lg:min-w-132 min-w-72 w-2/3 sm:w-2/3 lg:w-1/3">
        
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
              data={formData}
              setTeams={(teams) => updateFormData({ teams })}
              onFinish={handleFinish}
            />
          )}
        </div>
      </section>
    </main>
  );
}