"use client"

import { useState, useEffect, useRef } from "react"
import { 
  getChampionshipInfo, 
  updateChampionshipName, 
  updateChampionshipVisibility, 
  deleteChampionship, 
  updateChampionshipLogo 
} from "@/app/actions/championships"
import { useUploadThing } from "@/utils/uploadthing";
import { Upload, Trash } from "@geist-ui/icons"
import { toast } from "sonner"
import Image from "next/image"

export default function SettingsTab({ leagueId }: { leagueId: string }) {
  const [name, setName] = useState("")
  const [savedName, setSavedName] = useState("")
  const [logo, setLogo] = useState<string | null>(null)
  const [savedLogo, setSavedLogo] = useState<string | null>(null)
  const [file, setFile] = useState<File | null>(null)
  
  const [isPublic, setIsPublic] = useState(false);
  const [isPublicSaved, setIsPublicSaved] = useState(isPublic);
  const [activeModal, setActiveModal] = useState<"delete" | null>(null);
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [savingLogo, setSavingLogo] = useState(false)

  const fileInputRef = useRef<HTMLInputElement>(null)
  const { startUpload } = useUploadThing("leagueLogo")

  useEffect(() => {
    async function loadData() {
      const data = await getChampionshipInfo(leagueId)
      if (data) {
        setName(data.name)
        setSavedName(data.name)
        setLogo(data.logo)
        setSavedLogo(data.logo)
        setIsPublic(data.public || false)
        setIsPublicSaved(data.public || false)
      }
      setLoading(false)
    }
    loadData()
  }, [leagueId])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      if (selectedFile.size > 2 * 1024 * 1024) {
        return toast.error("Arquivo muito grande. Máximo 2MB.")
      }
      setFile(selectedFile)
      setLogo(URL.createObjectURL(selectedFile))
    }
  }

  const handleSaveLogo = async () => {
    setSavingLogo(true)
    try {
      let finalUrl = logo

      if (file) {
        const res = await startUpload([file])
        if (res && res[0]) {
          finalUrl = res[0].url
        } else {
          throw new Error("Erro no upload da imagem")
        }
      }

      const result = await updateChampionshipLogo(leagueId, finalUrl)
      
      if (result.success) {
        setSavedLogo(finalUrl)
        setFile(null)
        toast.success("Logo atualizada com sucesso!")
      } else {
        toast.error(result.error)
      }
    } catch (err) {
      toast.error("Falha ao salvar a imagem.")
    } finally {
      setSavingLogo(false)
    }
  }

  const handleSaveName = async () => {
    if (!name.trim()) return;
    setSaving(true);
    const result = await updateChampionshipName(leagueId, name);
    if (result.success) {
      setSavedName(name)
      toast.success("Nome atualizado com sucesso!");
    } else {
      toast.error(result.error);
    }
    setSaving(false);
  };

  const handleSaveVisibility = async () => {
    setSaving(true);
    const result = await updateChampionshipVisibility(leagueId, isPublic);
    if (result.success) {
      toast.success("Visibilidade atualizada!");
      setIsPublicSaved(isPublic)
    } else {
      toast.error(result.error)
    }
    setSaving(false);
  };

  const handleDelete = async () => {
    const result = await deleteChampionship(leagueId);
    if (result?.error) {
        toast.error(result.error);
    } else {
        toast.success("Campeonato excluído.");
    }
  };

  if (loading) return <div className="p-8 text-center text-neutral-500 italic">Carregando configurações...</div>

  return (
    <>
      <div className="flex flex-col gap-8">
        
        <section className="bg-white border border-neutral-300 rounded-md overflow-hidden shadow-sm">
          <div className="p-6">
            <h3 className="text-sm font-semibold text-neutral-800 mb-1">Nome do Campeonato</h3>
            <p className="text-sm text-neutral-500 mb-4">Este é o nome que aparecerá nas tabelas e menus de navegação</p>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full max-w-md px-3 py-2 border border-neutral-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-black transition-all"
              placeholder="Nome do torneio"
              maxLength={32}
            />
          </div>
          <div className="bg-neutral-50 border-t border-neutral-300 px-6 py-3 flex justify-between items-center">
            <p className="text-xs text-neutral-500">Máximo de 32 caracteres</p>
            <button 
              onClick={handleSaveName}
              disabled={saving || name === savedName}
              className="bg-zinc-950 text-white text-xs font-medium px-4 py-2 rounded-md hover:bg-zinc-800 
                cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-black"
            >
              {saving ? "Salvando..." : "Salvar Alterações"}
            </button>
          </div>
        </section>

        <section className="bg-white border border-neutral-300 rounded-md overflow-hidden shadow-sm">
          <div className="p-6">
            <h3 className="text-sm font-semibold text-neutral-900 mb-1">Logo do Campeonato</h3>
            <p className="text-sm text-neutral-500 mb-4">Recomendamos uma imagem de escala 1:1</p>
            
            <div className="flex items-center gap-6">
              <div className="relative w-24 h-24 rounded-md bg-neutral-100 border border-neutral-300 overflow-hidden flex items-center justify-center">
                {logo ? (
                  <Image src={logo} alt="Preview" fill className="object-cover" />
                ) : (
                  <Upload className="text-neutral-400" size={24} />
                )}
              </div>
              
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
                  className="text-sm font-medium border border-dashed border-neutral-300 px-4 py-2 rounded-md hover:bg-neutral-50 transition-colors cursor-pointer text-center"
                >
                  Alterar imagem
                </button>
                <button 
                  onClick={() => { setLogo(null); setFile(null); }}
                  className="text-sm font-medium text-red-600 hover:bg-red-50 px-4 py-2 rounded-md transition-colors text-left flex items-center gap-2 cursor-pointer"
                >
                  <Trash size={14} /> Remover logo
                </button>
              </div>
            </div>
          </div>
          <div className="bg-neutral-50 border-t border-neutral-300 px-6 py-3 flex justify-between items-center">
            <p className="text-xs text-neutral-500">Arquivos aceitos: .jpg, .png. Tamanho máx: 2MB</p>
            <button 
              onClick={handleSaveLogo}
              disabled={savingLogo || (logo === savedLogo && !file)}
              className="bg-black text-white text-xs font-medium px-4 py-2 rounded-md hover:bg-neutral-800 
                cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-black"
            >
              {savingLogo ? "Salvando..." : "Salvar Alterações"}
            </button>
          </div>
        </section>

        <section className="bg-white border border-neutral-300 rounded-md overflow-hidden shadow-sm">
          <div className="p-6">
            <h3 className="text-sm font-semibold text-neutral-900 mb-1">Visibilidade do Campeonato</h3>
            <p className="text-sm text-neutral-500 mb-6">
              Controle quem pode visualizar as tabelas e resultados do seu torneio.
            </p>
            
            <div className="flex flex-col gap-4">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input 
                  type="radio" 
                  checked={isPublic} 
                  onChange={() => setIsPublic(true)}
                  className="mt-1 accent-black"
                />
                <div>
                  <span className="text-sm font-medium text-neutral-900">Público</span>
                  <p className="text-xs text-neutral-500">Qualquer pessoa com o link pode visualizar as estatísticas.</p>
                </div>
              </label>

              <label className="flex items-start gap-3 cursor-pointer group">
                <input 
                  type="radio" 
                  checked={!isPublic} 
                  onChange={() => setIsPublic(false)}
                  className="mt-1 accent-black"
                />
                <div>
                  <span className="text-sm font-medium text-neutral-900">Privado</span>
                  <p className="text-xs text-neutral-500">Apenas você e membros convidados podem acessar os dados.</p>
                </div>
              </label>
            </div>
          </div>
          
          <div className="bg-neutral-50 border-t border-neutral-300 px-6 py-3 flex justify-between items-center">
            <p className="text-xs text-neutral-500">
              Atualmente: <strong>{isPublicSaved ? "Público" : "Privado"}</strong>
            </p>
            <button 
              onClick={handleSaveVisibility}
              disabled={saving || isPublic === isPublicSaved}
              className="bg-black text-white text-xs font-medium px-4 py-2 rounded-md hover:bg-neutral-800 
                cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-black"
            >
              {saving ? "Salvando..." : "Salvar Alterações"}
            </button>
          </div>
        </section>

        <section className="bg-white border border-red-200 rounded-md overflow-hidden shadow-sm mb-2">
          <div className="p-6">
            <h3 className="text-sm font-semibold text-red-600 mb-1">Excluir Campeonato</h3>
            <p className="text-neutral-500 text-sm">Remover permanentemente este campeonato e todos os seus dados (times, jogos, estatísticas).</p>
          </div>
          <div className="bg-red-50 border-t border-red-200 px-6 py-3 flex justify-end">
            <button onClick={() => setActiveModal("delete")} className="bg-red-600 text-white text-xs font-medium px-4 py-2 rounded-md hover:bg-red-700 cursor-pointer transition-colors">
              Deletar torneio
            </button>
          </div>
        </section>
      </div>
      
      {activeModal === "delete" && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-md w-full max-w-sm p-6 text-center shadow-2xl">
            <div className="bg-red-100 text-red-600 p-3 rounded-full w-fit mx-auto mb-4"><Trash size="30" /></div>
            <h3 className="font-bold text-xl mb-2">Excluir {name}?</h3>
            <p className="text-neutral-600 text-sm mb-6">Esta ação apagará todos os dados da liga permanentemente.</p>
            <div className="flex gap-3">
              <button onClick={() => setActiveModal(null)} className="flex-1 py-2 text-sm font-semibold hover:bg-neutral-100 rounded-sm cursor-pointer transition-colors">Cancelar</button>
              <button onClick={handleDelete} className="flex-1 py-2 text-sm bg-red-600 text-white hover:bg-red-800 rounded-sm font-medium cursor-pointer transition-colors">Excluir</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}