import { Toaster } from "sonner";

export default function CreateChampionshipLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <div>
      {children}
      <Toaster richColors position="top-center"/>
    </div>
  );
}
