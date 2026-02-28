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
            ${currentStep >= step ? 'bg-black text-white' : 'bg-gray-300 text-gray-500'}`}>
            {currentStep > step ? "✓" : step}
          </div>
          {step < 3 && (
            <div className={`w-8 sm:w-24 h-[2px] ${currentStep > step ? 'bg-zinc-800' : 'bg-gray-300'}`} />
          )}
        </div>
      ))}
    </div>
  );
}