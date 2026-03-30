"use client"

import { useState, ChangeEvent } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { X, Camera } from "@geist-ui/icons";
import { useUploadThing } from "@/utils/uploadthing";
import { updateUser } from "@/app/actions/user";
import { AnimatePresence, motion } from "framer-motion";


interface EditProfileProps {
  user: {
    name: string | null;
    image: string | null;
  };
  onClose: () => void;
}

export default function EditProfileModal({ user, onClose }: EditProfileProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState(user.image || "/default-user-pic.png");
  const [name, setName] = useState(user.name || "");

  const { startUpload } = useUploadThing("userPic");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (preview.startsWith('blob:')) URL.revokeObjectURL(preview);
      
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSave = async () => {
    setIsUploading(true);

    try{
      let url = user.image;

      if (imageFile) {
        const res = await startUpload([imageFile]);
        if (res?.[0]) {
          url = res[0].ufsUrl;
        }
      }

      const result = await updateUser({ name, image: url });

      if (result.success) {
        toast.success("Perfil atualizado!");
        onClose();
      }
    } catch (err) {
      toast.error("Erro ao salvar alterações");
    } finally {
      setIsUploading(false);
    }
  }

  return (
    <AnimatePresence>
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 10 }}
        transition={{ type: "spring", duration: 0.4, bounce: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-neutral-950 w-full max-w-md rounded-md shadow-2xl overflow-hidden flex flex-col"
      >

          <header className="flex items-center justify-between p-4 bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
            <h3 className="font-bold text-neutral-900 dark:text-neutral-300">Editar Perfil</h3>
            <button 
              onClick={onClose} 
              className="p-1 rounded-full text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 
                hover:bg-neutral-200 dark:hover:bg-neutral-800 cursor-pointer transition-colors"
            >
              <X size="20" />
            </button>
          </header>

          <section className="p-8 flex flex-col gap-8 border-b border-neutral-200 dark:border-neutral-800">
            <article className="flex flex-col items-center gap-2">
              <div className="relative group">
                <figure className="w-28 h-28 shadow-inner border border-neutral-200 dark:border-neutral-900 rounded-full overflow-hidden bg-neutral-100 relative">
                  <Image 
                      src={preview} 
                      alt="Preview" 
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                      className="object-cover"
                  />
                </figure>
                <label className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-full cursor-pointer">
                  <Camera color="white" size={28} />
                  <input 
                    type="file" 
                    className="hidden" 
                    accept="image/*" 
                    onChange={handleFileChange} 
                  />
                </label>
              </div>
              <span className="text-[10px] text-neutral-400 dark:text-neutral-300 uppercase font-bold">
                  Clique para alterar
              </span>
            </article>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-neutral-400 dark:text-neutral-300 uppercase">
                  Nome de exibição
              </label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-sm p-2 text-sm 
                  outline-none focus:border-black dark:focus:border-neutral-700"
              />
            </div>
          </section>

          <footer className="p-4 bg-neutral-100 dark:bg-neutral-900 flex justify-end gap-3">
            <button 
              onClick={onClose} 
              className="px-4 py-2 text-sm font-medium hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-sm cursor-pointer transition-colors"
            >
              Cancelar
            </button>
            <button 
              onClick={handleSave} 
              disabled={isUploading}
              className="px-6 py-2 bg-black dark:bg-neutral-800 text-white text-sm font-bold truncate rounded-sm hover:bg-neutral-800 dark:hover:bg-neutral-700 cursor-pointer transition-colors"
            >
              {isUploading ? "Salvando..." : "Salvar Alterações"}
            </button>
          </footer>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}