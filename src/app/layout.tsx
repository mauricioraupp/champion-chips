import { Providers } from "@/components/layout/Providers";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Raleway } from 'next/font/google';
import { Metadata } from "next";
import "@/app/globals.css";

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
});

export const metadata: Metadata = {
  title: "championchips",
  description: "Gerenciador de torneios",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning className={raleway.className}>
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