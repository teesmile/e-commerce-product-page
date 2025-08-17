import type { Metadata } from "next";
import {Kumbh_Sans} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const kumbh_sans = Kumbh_Sans({
  variable: "--font-kumbh-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Ecommerce Product Page",
  description: "Ecommerce Product Page built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${kumbh_sans.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
