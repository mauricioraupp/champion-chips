import { Providers } from "@/components/layout/Providers";
import { ThemeProvider } from "@/components/ThemeProvider";
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
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}