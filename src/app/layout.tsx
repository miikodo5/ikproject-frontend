import type { Metadata } from "next";
import "./globals.css";
import ContactFromProvider from "@/shared/providers/ContactFromProvider";
import Script from "next/script";
import React from "react";
import FluidCanvas from "@/shared/components/fluid";

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
          <FluidCanvas/>
          <ContactFromProvider>
              <div className={'z-[1]'}>
                {children}
              </div>
          </ContactFromProvider>
          <Script type="text/javascript" src="/js/fluid-init.js" strategy={"beforeInteractive"} async/>
      </body>
    </html>
  );
}
