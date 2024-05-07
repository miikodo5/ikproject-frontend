import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ContactFromProvider from "@/shared/providers/ContactFromProvider";
import Fluid from "@/shared/components/fluid";
import Script from "next/script";
import React from "react";

export const metadata: Metadata = {
  title: "IK Project",
  description: "We help companies, brands, and products to make high returns on digital marketing investments consistently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      {/*<div className={'w-full flex justify-center items-center fixed'}>*/}
      {/*  <div className={'w-[2px] bg-black h-screen'}/>*/}
      {/*</div>*/}
      <div className='main-body'>
          <ContactFromProvider>
              <div className={'z-[1]'}>
                {children}
              </div>
          </ContactFromProvider>
          <Fluid/>
      </div>
      <Script type="text/javascript" src="/js/fluid-init.js" async></Script>
      </body>
    </html>
  );
}
