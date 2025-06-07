import LoginForm from "@/components/login-form"

export default function Login(){

  return(
    <>
      <main className="absolute z-2 h-screen w-full lg:w-1/2 bg-neutral-50 flex justify-center items-center">
        <LoginForm/>
      </main>
      <div className="bg-[url(/authbg.jpg)] bg-cover h-full w-3/5 absolute right-0 top-0 hidden lg:flex"></div>
    </>
  )
}