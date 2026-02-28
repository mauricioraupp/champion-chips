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
      className="border-2 border-red-400 py-1 sm:py-2 px-4 sm:px-8 rounded-md font-medium text-red-500 cursor-pointer">Cancelar
    </button>
  );
}