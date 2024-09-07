import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Header from "@/app/components/header";
import Image from "next/image";
import Navbar from "@/app/components/navbar";
import {navigationElements} from "@/app/constants";
import {Footer} from "@/app/components/footer";


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
      <div>
          <Navbar navigationElements={navigationElements}/>
      </div>
      <Header/>
      <main>{children}</main>
      <Footer/>
      </body>
      </html>
  );
}