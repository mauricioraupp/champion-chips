import { MotionHeader } from "@/components/MotionWrapper";
import Link from "next/link";
import { ArrowLeft, CheckInCircle } from "@geist-ui/icons";

export default function TermsOfService() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-[#030303] text-neutral-900 dark:text-neutral-100 overflow-x-hidden selection:bg-yellow-600/30 transition-colors duration-500">
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
            Termos de <span className="text-yellow-600">Serviço</span>
          </h1>
          <p className="text-neutral-500 font-medium text-lg mb-12">
            Última atualização: 30 de Março de 2026.
          </p>
        </MotionHeader>

        <div className="space-y-16">
          <TermsSection 
            title="1. Aceitação dos Termos"
            content="Ao acessar e utilizar o ChampionChips, você concorda em cumprir e estar vinculado a estes Termos de Serviço. Se você não concordar com qualquer parte destes termos, não deverá utilizar nossa plataforma de gestão de torneios."
          />
          <TermsSection 
            title="2. Descrição do Serviço"
            content="O ChampionChips fornece uma infraestrutura técnica para organização de ligas esportivas, incluindo tabelas automáticas, gestão de elencos e logs em tempo real. Reservamo-nos o direito de modificar ou descontinuar o serviço a qualquer momento."
          />
          <TermsSection 
            title="3. Contas de Usuário"
            content="Para acessar certas funcionalidades, você deve criar uma conta protegida por autenticação robusta (NextAuth). Você é responsável por manter a confidencialidade de suas credenciais e por todas as atividades que ocorram em sua conta admin."
          />
          <TermsSection 
            title="4. Conduta do Administrador"
            content="Como administrador de uma liga, você se compromete a não inserir dados falsos, ofensivos ou que violem direitos de terceiros. O uso indevido da plataforma para manipulação fraudulenta de resultados resultará em suspensão imediata."
          />

          <div className="p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 backdrop-blur-sm shadow-xl transition-colors">
             <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-yellow-600/10 text-yellow-600 border border-yellow-600/20">
                    <CheckInCircle size={24} />
                </div>
                <h3 className="text-xl font-black text-neutral-900 dark:text-white">Privacidade e Dados</h3>
             </div>
             <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">
                Seus dados são processados seguindo os mais altos padrões de segurança. Para entender como lidamos com informações de torneios e usuários, consulte nossa <Link href="/privacy" className="text-yellow-600 font-bold hover:underline">Política de Privacidade.</Link>
             </p>
          </div>

          <TermsSection 
            title="5. Limitação de Responsabilidade"
            content="Não garantimos que o serviço será ininterrupto ou livre de erros. Em nenhuma circunstância seremos responsáveis por perdas de dados decorrentes do uso inadequado da ferramenta."
          />
        </div>

        <footer className="mt-24 pt-12 border-t border-neutral-300 dark:border-neutral-900 text-center">
          <p className="text-neutral-500 dark:text-neutral-400 text-md font-semibold">
            Dúvidas sobre os termos? <Link href="mailto:mauricio.p.raupp@gmail.com" className="text-yellow-600 hover:underline transition-all">Entre em contato</Link>.
          </p>
        </footer>
      </main>
    </div>
  );
}

function TermsSection({ title, content }: { title: string, content: string }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-black tracking-tight text-neutral-900 dark:text-white">{title}</h2>
      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium transition-colors">
        {content}
      </p>
    </section>
  );
}