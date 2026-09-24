import Navbar from "@/components/Navbar";
import "./globals.css";
import React from "react";
import { Playfair_Display, Work_Sans } from "next/font/google";
import { Metadata } from "next";
import Footer from "@/components/Footer";

const playFairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})
const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-worksans',
})
export const metadata:Metadata={
  title: 'Book Vibe',
  description: 'A book listing and reading tracking application',
}


export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en" data-theme='light' className={`${playFairDisplay.variable} ${workSans.variable} `}>
      <body className="min-h-screen flex flex-col">
        <Navbar></Navbar>
        <main className="flex-grow">

          {children}

        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
