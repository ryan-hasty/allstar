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
      <footer className="flex justify-start gap-20 sm:justify-between static bottom-0 right-0 p-4 bg-[#0F2E6C] border-none">
          <a
          href="https://www.facebook.com/profile.php?id=100077235862867"
          target={"_blank"}
          className="bg-white ml-10">
          <Image src="/assets/miscImages/facebook-logo.svg" alt="facebook-logo" width={32} height={32}></Image>
          </a>
          <a
            href="https://www.linkedin.com/in/ryan-hasty/"
            target="_blank"
            className="hover:text-[#F50000] text-xl text-white">
          Created by Ryan Hasty
        </a>
      </footer>
      </body>
      </html>
  );
}