"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Stepper from "@/components/features/championship-creator/Stepper";
import ModalStepOne from "@/components/features/championship-creator/ModalStepOne";
import ModalStepTwo from "@/components/features/championship-creator/ModalStepTwo";
import ModalStepThree from "@/components/features/championship-creator/ModalStepThree";

export default function CreateChampionship() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(0)
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

  const nextStep = () => {
    setDirection(1);
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setDirection(-1);
    setStep((prev) => Math.max(prev - 1, 1));
  };

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

  const carouselVariants = {
    initial: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 50 : -50,
    }),
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -50 : 50,
    }),
  };

  return (
    <main className="flex bg-black items-center justify-center h-full w-full absolute">
      <div className="bg-[url(/authbg.jpg)] bg-cover h-full w-full absolute blur-sm"/>
      <section className="relative bg-white dark:bg-neutral-950 flex flex-col items-center gap-8 mx-auto py-12 px-12 rounded-md shadow-2xl 
        lg:min-w-132 min-w-72 w-2/3 sm:w-2/3 lg:w-1/3">
        
        <p className="font-semibold text-black dark:text-neutral-200 text-xl">
          {step === 1 && "Configurações"}
          {step === 2 && "Regras e formatos"}
          {step === 3 && "Adicionar times"}
        </p>

        <Stepper currentStep={step} />

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={carouselVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="w-full"
          >
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
          </motion.div>
        </AnimatePresence>
      </section>
    </main>
  );
}