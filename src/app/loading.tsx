import { Loader } from "@geist-ui/icons";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center backdrop-blur-md">
      <div className="relative flex items-center justify-center">
        <div className="animate-spin text-black dark:text-neutral-200">
          <Loader size={48} />
        </div>
      </div>
      <p className="mt-4 text-sm font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-300 animate-pulse">
        Carregando...
      </p>
    </div>
  );
}