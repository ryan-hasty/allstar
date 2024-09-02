import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Header from "@/app/components/header";
import Image from "next/image";


export const metadata: Metadata = {
  title: "Allstar Roofing & Fencing",
  description: "Allstar Roofing & Fencing Web page offering services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body>
      <Header></Header>
      <main>{children}</main>
          <footer className="flex justify-between md:gap-20 bottom-0 p-4 mt-10 bg-[#0F2E6C] border-none">
          <a
          href="https://www.facebook.com/profile.php?id=100077235862867"
          target={"_blank"}
          className="bg-white sm:ml-20">
          <Image src="/assets/miscImages/facebook-logo.svg" alt="facebook-logo" width={34} height={34} className="h-auto"></Image>
          </a>
          <a
            href="https://www.linkedin.com/in/ryan-hasty/"
            target="_blank"
            className="hover:text-[#F50000] text-xl text-white sm:mr-20">
          Created by Ryan Hasty
        </a>
      </footer>
      </body>
      </html>
  );
}