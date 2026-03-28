import { Info } from "@geist-ui/icons"

export default function TechnicalSummary({ data }: { data: any }) {
  return (
    <section className="bg-white border border-neutral-300 rounded-md overflow-hidden shadow-sm">
      <header className="px-6 py-4 border-b border-neutral-100 flex items-center gap-2">
        <Info size={16} className="text-neutral-500" />
        <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
          Resumo Técnico
        </h3>
      </header>
      
      <div className="p-6">
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
          <div className="flex justify-between border-b border-neutral-100 pb-2">
            <dt className="text-sm text-neutral-500">Sistema de disputa</dt>
            <dd className="text-sm font-semibold text-neutral-900">Pontos Corridos</dd>
          </div>
          
          <div className="flex justify-between border-b border-neutral-100 pb-2">
            <dt className="text-sm text-neutral-500">Segundo turno</dt>
            <dd className="text-sm font-semibold text-neutral-900">
              {data?.secondLegs ? "Ativado" : "Desativado"}
            </dd>
          </div>
          
          <div className="flex justify-between border-b border-neutral-100 pb-2">
            <dt className="text-sm text-neutral-500">Visibilidade</dt>
            <dd className="text-sm font-semibold text-neutral-900">
              {data?.public ? "Pública" : "Privada"}
            </dd>
          </div>
          
          <div className="flex justify-between border-b border-neutral-100 pb-2">
            <dt className="text-sm text-neutral-500">Data de Início</dt>
            <dd className="text-sm font-semibold text-neutral-900">
              {new Date(data?.createdAt).toLocaleDateString('pt-BR')}
            </dd>
          </div>
        </dl>
      </div>
      
      <footer className="px-6 py-3 bg-neutral-50 border-t border-neutral-100 text-center">
        <p className="text-xs text-neutral-400 font-medium">
          Dados atualizados em tempo real conforme resultados das partidas
        </p>
      </footer>
    </section>
  )
}