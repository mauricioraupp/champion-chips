import { useState, useRef } from "react"
import Image from "next/image"
import { Upload, Trash } from "@geist-ui/icons"
import { toast } from "sonner"
import { useUploadThing } from "@/utils/uploadthing"
import { updateChampionshipLogo } from "@/app/actions/championships"

interface LogoSettingsProps {
  leagueId: string
  initialLogo: string | null
}

export default function LogoSettingsCard({ leagueId, initialLogo }: LogoSettingsProps) {
  const [logo, setLogo] = useState<string | null>(initialLogo)
  const [savedLogo, setSavedLogo] = useState<string | null>(initialLogo)
  const [file, setFile] = useState<File | null>(null)
  const [saving, setSaving] = useState(false)
  
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { startUpload } = useUploadThing("leagueLogo")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      if (selectedFile.size > 2 * 1024 * 1024) {
        return toast.error("Arquivo muito grande. Máximo 2MB.")
      }
      setFile(selectedFile)
      const previewUrl = URL.createObjectURL(selectedFile)
      setLogo(previewUrl)
    }
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      let urlToSave = logo

      if (file) {
        const res = await startUpload([file])
        if (res?.[0]) {
          urlToSave = res[0].ufsUrl || res[0].url
        } else {
          throw new Error("Erro no upload")
        }
      }

      const result = await updateChampionshipLogo(leagueId, urlToSave as string)
      
      if (result.success) {
        if (logo?.startsWith('blob:')) URL.revokeObjectURL(logo)
        setSavedLogo(urlToSave)
        setLogo(urlToSave)
        setFile(null)
        toast.success("Logo atualizada com sucesso!")
      } else {
        toast.error(result.error)
      }
    } catch (err) {
      toast.error("Falha ao salvar a imagem.")
    } finally {
      setSaving(false)
    }
  }

  const handleRemove = () => {
    setLogo("/default-league-logo.png")
    setFile(null)
  }

  return (
    <section className="bg-white dark:bg-zinc-950 border border-neutral-300 dark:border-neutral-900 rounded-md overflow-hidden">
      <div className="p-6">
        <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-200 mb-1">Logo do Campeonato</h3>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Recomendamos uma imagem de escala 1:1</p>
        
        <div className="flex items-center gap-6">
          <figure className="relative w-24 h-24 rounded-md bg-neutral-100 border border-neutral-300 dark:border-neutral-900 shrink-0 overflow-hidden flex items-center justify-center">
            {logo ? (
              <Image src={logo} alt="Preview" fill className="object-cover" />
            ) : (
              <Upload className="text-neutral-400" size={24} />
            )}
          </figure>
          
          <div className="flex flex-col gap-5">
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              className="hidden" 
              accept="image/*"
            />
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="bg-neutral-50 dark:bg-neutral-900 text-sm font-medium border border-dashed border-neutral-300 dark:border-neutral-700 
                px-4 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-950 transition-colors cursor-pointer"
            >
              Alterar imagem
            </button>
            <button 
              onClick={handleRemove}
              disabled={logo === "/default-league-logo.png"}
              className="text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-neutral-900 px-4 py-2 rounded-md transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <Trash size={14} /> Remover logo
            </button>
          </div>
        </div>
      </div>

      <div className="bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-300 dark:border-neutral-900 px-6 py-3 flex justify-between items-center gap-2">
        <p className="text-xs text-neutral-500 dark:text-neutral-400">Arquivos aceitos: .jpg, .png. Tamanho máx: 2MB</p>
        <button 
          onClick={handleSave}
          disabled={saving || logo === savedLogo}
          className="bg-black dark:bg-neutral-800 text-white text-sm font-medium px-4 py-2 rounded-md shrink-0 hover:bg-neutral-800 dark:hover:bg-neutral-700 
            cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-black dark:disabled:hover:bg-neutral-800"
        >
          {saving ? "Salvando..." : "Salvar Alterações"}
        </button>
      </div>
    </section>
  )
}