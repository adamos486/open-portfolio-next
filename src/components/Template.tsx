import React from "react";
import Header from "@/components/Header";
import "../app/globals.css";
import Footer from "@/components/Footer";

export default function Template({
  children,
 }: Readonly<{children: React.ReactNode}>) {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {children}
      </main>
      <Footer />
    </div>
  )
}