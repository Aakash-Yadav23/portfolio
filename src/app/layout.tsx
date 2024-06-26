import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aakash Yadav",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  bg-gradient-to-br from-black via-gray-900 to-black text-white`}>
        <header className="fixed  top-0">

          <Navbar />
        </header>
        <main className="main  h-screen overflow-hidden ">

          {children}
        </main>
        <footer className="fixed bottom-0">

          <Footer />
        </footer>
      </body>
    </html>
  );
}
