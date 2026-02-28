import { Instagram, Github, Linkedin, Mail } from '@geist-ui/icons'


export default function Footer() {
  return(
    <footer className="flex flex-col items-center justify-center gap-6 bg-zinc-950 py-20">
      <article className="flex gap-8">
        <a 
          href="https://www.instagram.com/mauricioraupp_" 
          target="blank" 
          rel="noopener noreferrer">
          <Instagram color={"white"} size={28}/>
        </a>
        <a 
          href="https://github.com/mauricioraupp" 
          target="blank" 
          rel="noopener noreferrer">
          <Github color={"white"} size={28}/>
        </a>
        <a 
          href="https://www.linkedin.com/in/mauricioraupp1/" 
          target="blank" 
          rel="noopener noreferrer">
          <Linkedin color={"white"} size={28}/>
        </a>
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=mauricio.p.raupp@gmail.com&su=Assunto%20do%20email&body=Escreva%20sua%20mensagem%20aqui" 
          target="blank" 
          rel="noopener noreferrer">
          <Mail color={"white"} size={28}/>
        </a>
      </article>
      <div className="flex items-center justify-center gap-8 w-9/10 pb-6 border-b-1 border-white">
        <a className="text-sm font-medium text-white">Sobre</a>
        <a
          className="text-sm font-medium text-white" 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=mauricio.p.raupp@gmail.com&su=Assunto%20do%20email&body=Escreva%20sua%20mensagem%20aqui" 
          target="blank" 
          rel="noopener noreferrer">
          Contato
        </a>
        <a className="text-sm font-medium text-white">FAQs</a>
        <a className="text-sm font-medium text-white">Carreira</a>
        <a className="text-sm font-medium text-white">Blog</a>
      </div>
      <div className="flex flex-col gap-2 text-center">
        <a 
          className="text-md font-medium text-white"
          href="${copyright}" 
          target="blank" 
          rel="noopener noreferrer">
          Termos de Serviço | Políticas de Privacidade
        </a>
        <span className="font-thin text-white">Copyright © 2024 Braining - Todos os direitos reservados.</span>
      </div>
    </footer>
  )
}