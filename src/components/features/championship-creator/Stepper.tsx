interface StepperProps {
  currentStep: number;
}

export default function Stepper({ currentStep }: StepperProps) {
  const steps = [1, 2, 3];

  return (
    <div className="flex items-center justify-center space-x-4 mb-8">
      {steps.map((step) => (
        <div key={step} className="flex items-center">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm transition-colors
            ${currentStep >= step ? 'bg-black dark:bg-neutral-200 text-white dark:text-black' : 'bg-neutral-300 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-300'}`}>
            {currentStep > step ? "✓" : step}
          </div>
          {step < 3 && (
            <div className={`sm:w-16 md:w-24 w-8 h-[2px] ${currentStep > step ? 'bg-black dark:bg-neutral-200' : 'bg-neutral-300 dark:bg-neutral-800'}`} />
          )}
        </div>
      ))}
    </div>
  );
}