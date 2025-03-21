
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/global.scss";
import { Inria_Sans } from "next/font/google";
import { Irish_Grover } from "next/font/google";

import ReduxProvider from '../.components/ReduxProvider';
import AuthProvider from "./clientMember/authProvider";
import BarsProvider from '../.components/providers/BarsProvider';

const irishGrover = Irish_Grover({
  variable: "--font-irish-grover",
  subsets: ["latin"],
  weight: ["400"],
})
const inriaSans = Inria_Sans({
  variable: "--font-inria-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <ReduxProvider>
          <body className={`${geistSans.variable} ${irishGrover.variable} ${inriaSans.variable} ${geistMono.variable}`}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <BarsProvider >
                {children}
              </BarsProvider>
            </div>

          </body></ReduxProvider></AuthProvider>

    </html>
  );
}
