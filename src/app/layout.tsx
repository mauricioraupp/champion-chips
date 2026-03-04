import { Providers } from "@/components/layout/providers";
import { Raleway } from 'next/font/google';
import "@/app/globals.css";

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
});

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="pt-br" className={raleway.className}>
      <body className={`antialiased min-h-screen`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}