"use client"

import { useState } from "react";
import { deleteUserAccount } from "@/app/actions/user";
import { signOut } from "next-auth/react";
import { toast } from "sonner";
import { Trash } from "@geist-ui/icons";
import { AnimatePresence, motion } from "framer-motion";

export default function DeleteAccountButton() {
  const [loading, setLoading] = useState(false);
  const [activeModal, setActiveModal] = useState<"delete" | null>(null);

  const handleDelete = async () => {
    const confirm = window.confirm("Tem certeza? Isso apagará todos os seus dados permanentemente");
    
    if (confirm) {
      setLoading(true);
      const res = await deleteUserAccount();
      
      if (res.success) {
        toast.success("Conta deletada com sucesso.");
        signOut({ callbackUrl: "/" });
      } else {
        toast.error(res.error);
        setLoading(false);
      }
    }
  };

  return (
    <>
      <button 
        onClick={() => setActiveModal("delete")}
        className="flex items-center justify-center gap-2 w-30 text-sm font-semibold text-red-600 font-medium border border-red-600 py-2 shrink-0 rounded-md 
          hover:bg-red-600 hover:text-white cursor-pointer transition-colors"
      >
        {loading ? "Processando..." : "Deletar Conta"}
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
              <div className="bg-red-100 dark:bg-neutral-800 text-red-600 p-3 rounded-full w-fit mx-auto mb-4"><Trash size="30" /></div>
              <h3 className="font-bold text-xl mb-2">Excluir Conta?</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6">Esta ação apagará todos os seus dados permanentemente.</p>
              <div className="flex gap-3">
                <button onClick={() => setActiveModal(null)} className="flex-1 py-2 text-sm font-semibold hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-sm cursor-pointer">Cancelar</button>
                <button onClick={handleDelete} className="flex-1 py-2 text-sm bg-red-600 dark:bg-red-700 text-white hover:bg-red-800 rounded-sm font-medium cursor-pointer">Excluir</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}