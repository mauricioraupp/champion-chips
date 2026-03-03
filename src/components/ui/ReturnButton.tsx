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
      className="font-medium cursor-pointer">Cancelar
    </button>
  );
}