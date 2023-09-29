"use client";

import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { links } from "../../lib/data";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Antoni | Personal portfolio",
//   description: "Antoni is a front-end developer",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative h-[5000px] pt-32`}
      >
        <motion.div
          className="fixed -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"
          animate={{ backgroundColor: ["#fbe2e3", "#dbd7fb", "#fbe2e3"] }}
          transition={{ duration: 10, repeat: Infinity }}
        ></motion.div>
        <motion.div
          className="fixed -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
          animate={{ backgroundColor: ["#dbd7fb", "#fbe2e3", "#dbd7fb"] }}
          transition={{ duration: 10, repeat: Infinity }}
        ></motion.div>
        <Header />
        {children}
      </body>
    </html>
  );
}
