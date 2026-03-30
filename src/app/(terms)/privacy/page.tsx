import { MotionHeader } from "@/components/MotionWrapper";
import Link from "next/link";
import { ArrowLeft, Shield, Lock, Eye } from "@geist-ui/icons";

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-[#030303] text-neutral-900 dark:text-neutral-100 overflow-x-hidden selection:bg-yellow-600/30 transition-colors duration-500">
      {/* Grid de fundo dinâmico */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]" />

      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-20 pb-12">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-md font-bold text-neutral-400 hover:text-black dark:hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Voltar para a Home
        </Link>

        <MotionHeader
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
            Política de <span className="text-yellow-600">Privacidade</span>
          </h1>
          <p className="text-neutral-500 font-medium text-lg mb-12">
            Última atualização: 30 de Março de 2026.
          </p>
        </MotionHeader>

        <div className="space-y-16">
          <PrivacySection 
            title="1. Informações que Coletamos"
            content="Coletamos informações básicas de conta através do NextAuth, como seu nome e e-mail, para identificar sua administração em ligas esportivas. Dados técnicos do campeonato, como nomes de clubes e resultados de partidas, são armazenados para o funcionamento core da plataforma."
          />

          {/* Card de Destaque: Segurança */}
          <div className="p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 backdrop-blur-sm shadow-xl transition-colors">
             <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-yellow-600/10 text-yellow-600 border border-yellow-600/20">
                    <Shield size={24} />
                </div>
                <h3 className="text-xl font-black text-neutral-900 dark:text-white">Segurança de Dados</h3>
             </div>
             <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">
                Utilizamos criptografia e protocolos de autenticação modernos para garantir que apenas administradores autorizados tenham acesso às configurações sensíveis de cada torneio.
             </p>
          </div>

          <PrivacySection 
            title="2. Uso das Informações"
            content="As informações coletadas são utilizadas exclusivamente para: processar logs de atividades em tempo real, gerar tabelas de classificação automáticas e garantir a integridade competitiva dos seus torneios."
          />

          <PrivacySection 
            title="3. Compartilhamento de Dados"
            content="O ChampionChips não vende ou aluga seus dados pessoais para terceiros. Informações públicas do campeonato (como a tabela de classificação) são visíveis para todos os usuários que possuírem o link do torneio, conforme a configuração de visibilidade escolhida por você."
          />

          <PrivacySection 
            title="4. Seus Direitos"
            content="Você tem total controle sobre seus dados. A qualquer momento, você pode editar informações de sua liga ou excluir permanentemente torneios e sua conta administrativa através do painel de configurações."
          />

          {/* Seção de Cookies Sutil */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-900">
              <Lock size={20} className="mb-4 text-yellow-600" />
              <h4 className="font-bold mb-2">Autenticação</h4>
              <p className="text-sm text-neutral-500">Usamos cookies estritamente necessários para manter você logado com segurança.</p>
            </div>
            <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-900">
              <Eye size={20} className="mb-4 text-yellow-600" />
              <h4 className="font-bold mb-2">Transparência</h4>
              <p className="text-sm text-neutral-500">Não rastreamos seu comportamento fora do domínio da plataforma.</p>
            </div>
          </div>
        </div>

        <footer className="mt-24 pt-12 border-t border-neutral-300 dark:border-neutral-900 text-center">
          <p className="text-neutral-500 dark:text-neutral-400 text-md font-semibold">
            Deseja exportar ou excluir seus dados? <Link href="mailto:mauricio.p.raupp@gmail.com" className="text-yellow-600 hover:underline transition-all">Contate nosso suporte</Link>.
          </p>
        </footer>
      </main>
    </div>
  );
}

function PrivacySection({ title, content }: { title: string, content: string }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-black tracking-tight text-neutral-900 dark:text-white">{title}</h2>
      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium transition-colors">
        {content}
      </p>
    </section>
  );
}