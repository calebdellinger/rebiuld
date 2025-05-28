import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import Script from "next/script";

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "REBiULD Construction",
  description:
    "Where we build your dreams!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            try {
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
              } else {
                document.documentElement.classList.remove('dark')
              }
            } catch (_) {}
          `}
        </Script>
      </head>
      <body className={`${inter.className} bg-black min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <nav className="sticky top-0 z-50">
            <Navbar />
          </nav>
          <main className="flex-grow w-full px-[10%]">
            {children}
          </main>
          <FloatingContactButton />
          <footer className="mt-auto">
            <Footer />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
