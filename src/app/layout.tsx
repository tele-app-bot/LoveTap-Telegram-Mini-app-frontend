"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { SDKProvider } from "@tma.js/sdk-react";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SDKProvider acceptCustomStyles debug={false}>
        <body className={inter.className} style={{ userSelect: 'none' }}>
          {children}
        </body>
      </SDKProvider>
    </html>
  );
}