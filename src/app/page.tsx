import Link from "next/link";
import { ArrowRight, Activity, Shield, Cpu, Layout } from "@geist-ui/icons";
import { MotionHeader, MotionSection, MotionNav } from "@/components/MotionWrapper";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-[#030303] text-neutral-900 dark:text-neutral-100 overflow-x-hidden transition-colors duration-500">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <MotionNav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative z-10 flex mx-auto w-full max-w-7xl items-center justify-between gap-6 py-6 px-4 sm:px-8"
      >
        <div className="flex justify-between items-center w-full gap-1 rounded-md">
          <Link href="/" className="flex text-black dark:text-white font-bold text-3xl">champion<span className="text-yellow-600">chips</span></Link>
        
          <div className="flex items-center gap-2">
            <Link href="/auth/login" className="inline-flex items-center justify-center h-10 px-6 font-bold hover:text-white dark:hover:text-neutral-900 hover:bg-black dark:hover:bg-white 
            rounded-md transition-colors"
          >
            Login
          </Link>
          <Link href="/auth/register" className="inline-flex items-center justify-center h-10 px-6 bg-black dark:bg-white font-bold text-white dark:text-black rounded-md transition-all 
          hover:bg-neutral-800 dark:hover:bg-neutral-300 hover:shadow-[0_0_20px_rgba(0,02,0,0.5)]">
            Get Started
          </Link>
        </div>
        </div>
      </MotionNav>

      <MotionHeader 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 pt-20 pb-16 px-6 text-center max-w-5xl mx-auto"
      >
        <div className="mx-auto mb-6 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 px-7 py-2 backdrop-blur-md transition-all hover:border-neutral-300 dark:hover:border-neutral-700">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600 flex items-center gap-2">
            <Cpu size={14} /> Powered by Next.js 16
          </p>
        </div>
        
        <h1 className="text-6xl md:text-[100px] font-black leading-[0.85] tracking-[ -0.05em] mb-8">
          GESTÃO DE LIGAS <br />
          <span className="bg-gradient-to-b from-sky-400 to-sky-700 bg-clip-text text-transparent">SEM FRICÇÃO.</span>
        </h1>
        
        <p className="mx-auto max-w-2xl text-lg font-medium text-neutral-600 dark:text-neutral-400 md:text-xl">
          A infraestrutura completa para seus campeonatos. Upload de elencos, tabelas automáticas e logs em tempo real. Tão simples quanto um `ctrl+c`.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/register" className="flex h-14 items-center justify-center gap-3 rounded-full bg-neutral-900 dark:bg-white px-10 text-lg font-black text-white dark:text-black transition-all hover:scale-105 active:scale-95">
            Começar Agora <ArrowRight size={20} />
          </Link>
          <div className="flex -space-x-3">
             {[1,2,3,4].map(i => (
               <div key={i} className="h-10 w-10 rounded-full border-2 border-white dark:border-[#030303] bg-neutral-800 flex items-center justify-center overflow-hidden">
                 <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="avatar" />
               </div>
             ))}
             <div className="flex h-10 items-center pl-4 text-sm font-bold text-neutral-500 uppercase tracking-tighter">
               +1k administradores
             </div>
          </div>
        </div>
      </MotionHeader>

      {/* Main Content */}
      <main className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        
        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          
          <FeatureCard 
            icon={<Activity className="text-sky-600" />}
            title="Real-time Engine"
            desc="Logs de atividades processados instantaneamente. Saiba quem editou o quê, no momento em que acontece."
          />
          <FeatureCard 
            icon={<Shield className="text-emerald-500" />}
            title="NextAuth Secure"
            desc="Autenticação robusta para proteger os dados da sua liga e garantir que apenas admins autorizados façam alterações."
          />
          <FeatureCard 
            icon={<Layout className="text-purple-500" />}
            title="Fully Responsive"
            desc="Gerencie seu campeonato do celular, tablet ou desktop com a mesma fluidez e Dark Mode nativo."
          />
        </div>

        {/* Section: Prints Showcase */}
        <MotionSection 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 overflow-hidden rounded-[2rem] border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/20 p-4 backdrop-blur-sm"
        >
          <div className="rounded-[1.5rem] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#080808] shadow-2xl">
            <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 px-6 py-4">
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="h-3 w-3 rounded-full bg-green-500/20 border border-green-500/50" />
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest text-neutral-500">championchips-v1.prod</div>
            </div>
            <img 
              src="/print-dashboard.png" 
              alt="Dashboard Preview" 
              className="w-full opacity-90 transition-opacity hover:opacity-100"
            />
          </div>
        </MotionSection>

      </main>

      {/* Footer Final */}
      <footer className="relative z-10 mt-40 border-t border-neutral-200 dark:border-neutral-800 py-20 px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
             <h2 className="text-4xl font-black tracking-tighter mb-4 italic">CHAMPION CHIPS</h2>
             <p className="text-neutral-500 max-w-sm font-medium">Elevando o patamar das ligas amadoras e profissionais com tecnologia de ponta.</p>
          </div>
          <div className="flex md:justify-end gap-10">
            <div className="flex flex-col gap-3 text-sm font-bold uppercase tracking-widest text-neutral-500">
              <span className="text-neutral-900 dark:text-white">Product</span>
              <Link href="#" className="hover:text-sky-600">Features</Link>
              <Link href="#" className="hover:text-sky-600">API</Link>
            </div>
            <div className="flex flex-col gap-3 text-sm font-bold uppercase tracking-widest text-neutral-500">
              <span className="text-neutral-900 dark:text-white">Legal</span>
              <Link href="#" className="hover:text-sky-600">Privacy</Link>
              <Link href="#" className="hover:text-sky-600">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Subcomponente de Card
function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="group relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 p-8 backdrop-blur-sm transition-all hover:border-sky-500/50">
      <div className="mb-4 inline-block rounded-lg bg-neutral-100 dark:bg-neutral-800 p-3">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-black tracking-tight">{title}</h3>
      <p className="text-sm font-medium text-neutral-500 leading-relaxed">{desc}</p>
    </div>
  );
}

function Trophy(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}