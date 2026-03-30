import { getServerSession } from "next-auth/next";
import { prisma } from "@/lib/prisma";
import { ArrowRight, Activity, Shield, Layout, Linkedin, Mail, Github } from "@geist-ui/icons";
import { MotionHeader, MotionSection, MotionNav } from "@/components/MotionWrapper";
import ThemeToggle from "@/components/layout/ThemeToggle";
import UserNav from "@/components/layout/UserNav";
import MobileMenu from "@/components/layout/MobileMenu";
import Link from "next/link";

export default async function LandingPage() {
  const session = await getServerSession();
  
  let userData = null;
  if (session?.user?.email) {
    userData = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: {
        email: true,
        name: true,
        image: true,
      }
    });
  }

  const isLogged = !!userData;

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#030303] text-neutral-900 dark:text-neutral-100 overflow-x-hidden transition-colors duration-500">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <MotionNav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-2 flex mx-auto w-full max-w-7xl items-center justify-between gap-6 h-16 sm:h-25 px-4 sm:px-8"
      >
        <div className="flex justify-between items-center w-full gap-1 rounded-md">
          <Link href="/championships" className="flex text-black dark:text-white font-bold text-3xl">
            champion<span className="text-yellow-600">chips</span>
          </Link>
        
          <div className="flex items-center gap-2">
            {isLogged ? (
              <div className="flex items-center gap-1 sm:gap-4">
                <ThemeToggle />
                <UserNav user={userData} />
                <MobileMenu user={userData} currentLeague={null} leagues={[]}/>
              </div>
            ) : (
              <div className="hidden sm:flex items-center gap-2">
                <Link href="/auth/login" className="inline-flex items-center justify-center h-10 px-6 font-bold hover:text-white dark:hover:text-neutral-900 hover:bg-black dark:hover:bg-white rounded-md transition-colors">
                  Login
                </Link>
                <Link href="/auth/register" className="inline-flex items-center justify-center h-10 px-6 bg-black dark:bg-white font-bold text-white dark:text-black rounded-md transition-all hover:bg-neutral-800 dark:hover:bg-neutral-300 hover:shadow-[0_0_20px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_0_20px_rgba(365,365,365,0.5)]">
                  Criar conta
                </Link>
              </div>
            )}
          </div>
        </div>
      </MotionNav>

      <MotionHeader 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-1 pt-30 pb-15 px-6 text-center max-w-5xl mx-auto"
      >
        
        <h1 className="text-5xl md:text-7xl font-black mb-8">
          Gerencie torneios
          <br />
          <span className="bg-gradient-to-b from-yellow-500 to-yellow-700 bg-clip-text text-transparent">rápido e prático</span>
        </h1>
        
        <p className="mx-auto max-w-2xl text-lg font-medium text-neutral-600 dark:text-neutral-400 md:text-xl">
          A infraestrutura completa para seus campeonatos. Criação de elencos, tabelas automáticas e logs em tempo real.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/auth/login" className="flex h-14 items-center justify-center gap-3 rounded-full bg-neutral-900 dark:bg-white px-10 text-lg font-black text-white dark:text-black transition-all hover:scale-105 active:scale-95">
            Começar Agora <ArrowRight size={20} />
          </Link>
          {/* <div className="flex -space-x-3">
             {[1,2,3,4].map(i => (
               <div key={i} className="h-10 w-10 rounded-full border-2 border-white dark:border-[#030303] bg-neutral-800 flex items-center justify-center overflow-hidden">
                 <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="avatar" />
               </div>
             ))}
             <div className="flex h-10 items-center pl-4 text-sm font-bold text-neutral-500 uppercase tracking-tighter">
               +1k administradores
             </div>
          </div> */}
        </div>
      </MotionHeader>

      <main className="relative z-1 mx-auto max-w-7xl px-6 py-20">
        <MotionHeader 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }} 
        className="grid grid-cols-1 gap-6 md:grid-cols-3"
      >
          <FeatureCard 
            icon={<Activity />}
            title="Mudanças em tempo real"
            desc="Logs de atividades processados instantaneamente, atualizações em tabelas e partidas em tempo real."
          />
          <FeatureCard 
            icon={<Shield />}
            title="Protegido por NextAuth"
            desc="Autenticação robusta para proteger os dados da sua liga e garantir que apenas admins autorizados façam alterações."
          />
          <FeatureCard 
            icon={<Layout />}
            title="Responsividade"
            desc="Gerencie seu campeonato do celular, tablet ou desktop com a mesma fluidez."
          />
        </MotionHeader>

        <MotionSection 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-50 relative"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Em apenas 3 passos</h2>
            <p className="max-w-2xl text-lg font-medium text-neutral-600 dark:text-neutral-400 md:text-xl text-center mx-auto">Sua liga configurada em questão de minutos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-1/7 left-0 w-full h-[1px] bg-neutral-200 dark:bg-neutral-800 -z-10" />

            <StepCard 
              number="01"
              title="Crie seu Torneio"
              desc="Defina o nome, sistema de disputa, e personalize as regras."
            />
            <StepCard 
              number="02"
              title="Adicione os Clubes"
              desc="Importe os escudos e defina os elencos. O sistema organiza tudo automaticamente."
            />
            <StepCard 
              number="03"
              title="Insira os Resultados"
              desc="Registre os placares e veja a tabela atualizar em tempo real."
            />
          </div>
        </MotionSection>

        <h1 className="text-3xl md:text-5xl font-black mt-50 mb-3 text-center">
         Interatividade
        </h1>
        <h2 className="max-w-2xl text-lg font-medium text-neutral-600 dark:text-neutral-400 md:text-xl text-center mx-auto">
          Gerencie todos os dados de forma prática e interativa.
        </h2>

        <MotionSection 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-12 flex flex-col sm:flex-row gap-6"
        >
          
          <div className="w-fit h-fit rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-950 shadow-2xl overflow-hidden">
            <BrowserHeader title="championship/info.tsx" />
            <div className="overflow-hidden w-full">
              <img 
                src="/printtwo.png" 
                alt="Dashboard Preview" 
              />
            </div>
          </div>

          <div className="w-fit h-fit rounded-3xl border border-neutral-800 bg-neutral-950 shadow-2xl overflow-hidden">
            <BrowserHeader title="logs.tsx" />
            <div className="overflow-hidden">
              <img 
                src="/printthree.png"
                alt="Info Preview" 
                className="w-full object-cover"
              />
            </div>
          </div>
        </MotionSection>
      </main>

      <footer className="relative z-1 mt-40 border-t border-neutral-300 dark:border-neutral-900 py-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-0 items-center justify-between">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <p className="text-neutral-500 max-w-sm text-center font-medium lg:pr-8">© 2026 Championchips. All rights reserved</p>
            <Link href="/terms" className="hover:text-sky-600">Termos de serviço</Link>
            <Link href="/privacy" className="hover:text-sky-600">Política de privacidade</Link>
            <Link href="mailto:mauricio.p.raupp@gmail.com" className="hover:text-sky-600">Suporte</Link>
          </div>
          <div className="flex items-center gap-8">
            <Link href="https://github.com/mauricioraupp">
              <Github size={20}/>
            </Link>
            <Link href="mailto:mauricio.p.raupp@gmail.com">
              <Mail size={20}/>
            </Link>
            <Link href="https://www.linkedin.com/in/mauricioraupp1/">
              <Linkedin size={20}/>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="group relative rounded-2xl border border-neutral-300 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 p-8 transition-all hover:border-neutral-500 dark:hover:border-neutral-600">
      <div className="mb-4 inline-block rounded-lg bg-neutral-100 dark:bg-neutral-800 p-3">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-black tracking-tight">{title}</h3>
      <p className="text-sm font-medium text-neutral-500 leading-relaxed">{desc}</p>
    </div>
  );
}

function BrowserHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between border-b border-neutral-800 px-6 py-4 bg-[#0c0c0c]">
      <div className="flex gap-2">
        <div className="h-3 w-3 rounded-full bg-red-500/80" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <div className="h-3 w-3 rounded-full bg-green-500/80" />
      </div>
      <div className="hidden sm:block text-sm font-bold text-neutral-400">
        {title}
      </div>
      <div className="hidden sm:block w-10"></div>
    </div>
  );
}

function StepCard({ number, title, desc }: { number: string, title: string, desc: string }) {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="w-14 h-14 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center mb-6 shadow-xl group-hover:border-yellow-600 transition-colors duration-500">
        <span className="text-xl font-black text-yellow-600">{number}</span>
      </div>
      <h3 className="text-xl font-black mb-3">{title}</h3>
      <p className="text-sm font-medium text-neutral-500 leading-relaxed max-w-[250px]">
        {desc}
      </p>
    </div>
  );
}