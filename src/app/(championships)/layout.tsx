import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/header";
import { Raleway } from 'next/font/google';

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="pt-br" className={raleway.className}>
      <body className={`antialiased min-h-screen`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
