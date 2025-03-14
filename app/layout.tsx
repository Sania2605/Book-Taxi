import type { Metadata } from "next";
import { Inter,Outfit } from 'next/font/google'
import NavBar from '@/components/NavBar'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'

const outfit = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={outfit.className}>
        <NavBar/>
        {children}
        </body>
    </html>
    </ClerkProvider>
  );
}
