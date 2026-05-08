"use client"

import { useState } from "react";
import { deleteUserAccount } from "@/app/actions/user";
import { signOut } from "next-auth/react";
import { toast } from "sonner";
import { Trash } from "@geist-ui/icons";
import { AnimatePresence, motion } from "framer-motion";

export default function DeleteAccountButton() {
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeModal, setActiveModal] = useState<"delete" | null>(null);

  const handleDelete = async () => {
    setIsDeleting(true);

    try {
      const res = await deleteUserAccount();

      if (res.success) {
        toast.success("Conta deletada com sucesso.");
        setActiveModal(null);
        await signOut({ callbackUrl: "/" });
      } else {
        toast.error(res.error || "Erro ao deletar conta.");
        setIsDeleting(false);
      }
    } catch (error) {
      toast.error("Ocorreu um erro inesperado.");
      setIsDeleting(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setActiveModal("delete")}
        className="flex items-center justify-center gap-2 w-30 text-sm font-semibold text-red-600 border border-red-600 py-2 shrink-0 rounded-md 
          hover:bg-red-600 hover:text-white cursor-pointer transition-colors"
      >
        Deletar Conta
      </button> 

      <AnimatePresence>
        {activeModal === "delete" && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }} 
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              transition={{ type: "spring", duration: 0.4, bounce: 0.3 }} 
              className="bg-white dark:bg-neutral-900 rounded-md w-full max-w-sm p-6 text-center shadow-2xl"
            >
              <div className="bg-red-100 dark:bg-neutral-800 text-red-600 p-3 rounded-full w-fit mx-auto mb-4">
                <Trash size="30" />
              </div>
              
              <h3 className="font-bold text-xl mb-2 text-neutral-900 dark:text-neutral-100">Excluir Conta?</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6">
                Esta ação é irreversível. Todos os seus dados, ligas e estatísticas serão apagados permanentemente.
              </p>

              <div className="flex gap-3">
                <button 
                  onClick={() => setActiveModal(null)} 
                  disabled={isDeleting}
                  className="flex-1 py-2 text-sm font-semibold hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Cancelar
                </button>
                <button 
                  onClick={handleDelete} 
                  disabled={isDeleting}
                  className="flex-1 py-2 text-sm bg-red-600 dark:bg-red-700 text-white hover:bg-red-800 rounded-sm font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isDeleting ? "Excluindo..." : "Excluir permanentemente"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}