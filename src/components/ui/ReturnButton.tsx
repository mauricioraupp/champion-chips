'use client';

import { useRouter } from 'next/navigation';

export default function ReturnButton() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <button 
      onClick={handleGoBack}
      className="px-4 rounded-md font-medium hover:bg-neutral-300 cursor-pointer transition-colors">Cancelar
    </button>
  );
}