import RegisterForm from "@/app/auth/register/form"

export default function Register(){

  return(
    <>
      <main className="absolute z-2 h-screen w-full lg:w-1/2 bg-neutral-50 flex justify-center items-center">
        <RegisterForm/>
      </main>
      <div className="bg-[url(/authbg.jpg)] bg-cover h-full w-3/5 absolute right-0 top-0 hidden lg:flex"></div>
    </>
  )
}