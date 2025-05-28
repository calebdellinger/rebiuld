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
          <nav className="sticky top-0 z-50">
            <Navbar />
          </nav>
          <main className="flex-grow w-full px-[10%]">
            {/* Hidden form for Netlify */}
            <form
              name="contact"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              hidden
              action="/success"
            >
              <input type="text" name="name" />
              <input type="email" name="email" />
              <input type="text" name="subject" />
              <textarea name="message"></textarea>
              <input type="hidden" name="form-name" value="contact" />
            </form>
            {children}
          </main>
          <FloatingContactButton />
          <footer className="mt-auto">
            <Footer />
          </footer>
        </body>
      </ThemeProvider>
    </html>
  );
}
