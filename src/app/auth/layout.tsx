import { Toaster } from "sonner";

export default function AuthLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <div>
      {children}
      <div className="bg-[url(/authbg.jpg)] bg-cover h-full w-3/5 absolute right-0 top-0 hidden lg:flex"></div>
      <Toaster richColors position="top-center"/>
    </div>
  );
}
