import { Info } from "@geist-ui/icons"

export default function TechnicalSummary({ data }: { data: any }) {
  return (
    <section className="bg-white dark:bg-zinc-950 border border-neutral-300 dark:border-neutral-900 rounded-md overflow-hidden shadow-sm">
      <header className="px-6 py-4 border-b border-neutral-100 dark:border-neutral-900 flex items-center gap-2">
        <Info size={16} className="text-neutral-500 dark:text-neutral-400" />
        <h3 className="text-xs font-bold text-neutral-900 dark:text-neutral-200 uppercase tracking-wider">
          Resumo Técnico
        </h3>
      </header>
      
      <div className="p-6">
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
          <div className="flex justify-between border-b border-neutral-100 dark:border-neutral-900 pb-2">
            <dt className="text-sm text-neutral-500 dark:text-neutral-400">Sistema de disputa</dt>
            <dd className="text-sm font-semibold text-neutral-900 dark:text-neutral-200">Pontos Corridos</dd>
          </div>
          
          <div className="flex justify-between border-b border-neutral-100 dark:border-neutral-900 pb-2">
            <dt className="text-sm text-neutral-500 dark:text-neutral-400">Segundo turno</dt>
            <dd className="text-sm font-semibold text-neutral-900 dark:text-neutral-200">
              {data?.secondLegs ? "Ativado" : "Desativado"}
            </dd>
          </div>
          
          <div className="flex justify-between border-b border-neutral-100 dark:border-neutral-900 pb-2">
            <dt className="text-sm text-neutral-500 dark:text-neutral-400">Visibilidade</dt>
            <dd className="text-sm font-semibold text-neutral-900 dark:text-neutral-200">
              {data?.public ? "Pública" : "Privada"}
            </dd>
          </div>
          
          <div className="flex justify-between border-b border-neutral-100 dark:border-neutral-900 pb-2">
            <dt className="text-sm text-neutral-500 dark:text-neutral-400">Data de Início</dt>
            <dd className="text-sm font-semibold text-neutral-900 dark:text-neutral-200">
              {new Date(data?.createdAt).toLocaleDateString('pt-BR')}
            </dd>
          </div>
        </dl>
      </div>
      
      <footer className="px-6 py-3 bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-900 text-center">
        <p className="text-xs text-neutral-400 font-medium">
          Dados atualizados em tempo real conforme resultados das partidas
        </p>
      </footer>
    </section>
  )
}