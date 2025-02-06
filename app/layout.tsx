import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import {Josefin_Sans, Lato} from 'next/font/google'
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  variable: "--font-josefin-sans"
})
const lato = Lato({
  subsets: ['latin'],
  variable: "--font-lato",
  weight: ["100", "900"]
})

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${josefinSans.variable} ${lato.variable} antialiased `}
      >
         <Banner/> 
         <Navbar/> 
        {children}
         <Footer /> 
      </body>
    </html>
  );
}
