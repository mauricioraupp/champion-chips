import LoginForm from "@/components/features/auth/LoginForm"

export default function Login(){

  return(
    <main className="absolute z-2 h-screen w-full lg:w-1/2 bg-neutral-50 dark:bg-neutral-950 flex justify-center items-center">
      <LoginForm/>
    </main>
  )
}