export default function Register(){

  return(
    <>
      <main className="absolute z-2 h-screen w-1/2 bg-neutral-50 flex justify-center items-center">
        <form className="flex flex-col gap-7 justify-center items-center h-3/5 w-3/5 max-w-md">

          <div className="w-full">
            <h1 className="text-4xl font-bold w-full text-left">Seja bem vindo!</h1>
            <p className="text-neutral-700 w-full text-left pt-2">Insira seus dados</p>
          </div>
          <button className="py-3 w-full border-2 rounded-sm border-neutral-300 text-lg">Sign up with Google</button>
          <div className="flex items-center justify-center w-full">
            <hr className="w-full border-1 rounded-xs border-neutral-300"/>
            <span className="absolute px-4 font-medium text-neutral-700 -translate-x-1/2 bg-neutral-50 left-1/2">or</span>
          </div>

          <fieldset className="flex flex-col gap-1 w-full">
            <label className="font-medium text-neutral-700">Email</label>
            <input className="py-2 px-3 w-full border-2 rounded-sm border-neutral-300"></input>
          </fieldset>

          <fieldset className="flex flex-col gap-1 w-full">
            <label className="font-medium text-neutral-700">Senha</label>
            <input className="py-2 w-full border-2 rounded-sm border-neutral-300"></input>
          </fieldset>

          <fieldset className="flex flex-col gap-1 w-full">
            <label className="font-medium text-neutral-700">Confirme sua senha</label>
            <input className="py-2 px-2 w-full border-2 rounded-sm border-neutral-300"></input>
          </fieldset>

          <fieldset className="flex justify-between w-full">
            <div className="flex gap-2">
              <input type="checkbox"></input>
              <span className="font-medium text-neutral-700">Lembrar de mim</span>
            </div>
            <p className="text-sky-600 underline font-medium">Esqueci minha senha</p>
          </fieldset>

          <button className="bg-zinc-950 py-3 w-full rounded-md text-neutral-50">Entrar</button>
          <p className="font-medium text-neutral-700">Já possui uma conta? <span className="text-sky-600 underline font-medium">Fazer login</span></p>
        </form>
      </main>
      <div className="bg-[url(/authbg.jpg)] bg-cover h-full w-3/5 absolute right-0 top-0"></div>
    </>
  )
}