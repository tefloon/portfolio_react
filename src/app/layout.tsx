import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { links } from "../../lib/data";
import { motion } from "framer-motion";
import Blobs from "@/components/blobs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Antoni | Personal portfolio",
  description: "Antoni is a front-end developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 h-[5000px]`}
      >
        <Header />
        <Blobs />
        {children}
      </body>
    </html>
  );
}
