"use client"

import { useState, ChangeEvent } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { X, Camera } from "@geist-ui/icons";
import { useUploadThing } from "@/utils/uploadthing";
import { updateUser } from "@/app/actions/user";


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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-md rounded-md shadow-2xl overflow-hidden flex flex-col">

        <header className="flex items-center justify-between p-4 bg-neutral-100">
          <h3 className="font-bold text-neutral-900">Editar Perfil</h3>
          <button 
            onClick={onClose} 
            className="p-1 rounded-full text-neutral-400 hover:text-neutral-600 hover:bg-neutral-200 cursor-pointer transition-colors"
          >
            <X size="20" />
          </button>
        </header>

        <section className="p-8 flex flex-col gap-8">
          <article className="flex flex-col items-center gap-2">
            <div className="relative group">
              <figure className="w-28 h-28 shadow-inner border border-neutral-200 rounded-full overflow-hidden bg-neutral-100 relative">
                <Image 
                    src={preview} 
                    alt="Preview" 
                    fill 
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
            <span className="text-[10px] text-neutral-400 uppercase font-bold tracking-widest">
                Clique para alterar
            </span>
          </article>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                Nome de exibição
            </label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-neutral-300 rounded-sm p-2.5 text-sm outline-none focus:border-black transition-all font-medium"
              placeholder="Seu nome"
            />
          </div>
        </section>

        <footer className="p-4 bg-neutral-100 flex justify-end gap-3">
          <button 
            onClick={onClose} 
            className="px-4 py-2 text-sm text-neutral-800 font-medium rounded-sm hover:bg-neutral-200 cursor-pointer transition-colors"
          >
            Cancelar
          </button>
          <button 
            onClick={handleSave} 
            disabled={isUploading}
            className="px-6 py-2 bg-black text-white text-sm font-semibold rounded-sm disabled:bg-neutral-400 hover:bg-zinc-800 cursor-pointer transition-all flex items-center gap-2 shadow-md active:scale-95"
          >
            {isUploading ? "Salvando..." : "Salvar Alterações"}
          </button>
        </footer>
      </div>
    </div>
  );
}