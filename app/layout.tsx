import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";

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
      <ThemeProvider>
        <body className={`${inter.className} bg-black min-h-screen flex flex-col`}>
          <nav>
            <Navbar />
          </nav>
          <main className="flex-grow w-full px-[10%]">{children}</main>
          <FloatingContactButton />
          <footer className="mt-auto">
            <Footer />
          </footer>
        </body>
      </ThemeProvider>
    </html>
  );
}
