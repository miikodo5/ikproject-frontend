import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      {children}
      </body>
    </html>
  );
}
