"use client";

import { motion } from "framer-motion";
import React from "react";
import { links } from "../../lib/data";
import Link from "next/link";

export default function Header() {
  return (
    <header className="z-[999] relative">
      <motion.div
        className="flex	fixed top-0 left-1/2 h-16 w-full rounded-none border border-white bg-white border-opacity-40 bg-opacity-70 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:px-0 sm:top-7 sm:h-12 sm:rounded-full sm:w-[34rem]"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <nav className="flex items-center justify-center w-full sm:top-7 sm:h-[initial] sm:py-0 ">
          <ul className="flex content-between  justify-center flex-wrap px-6 text-sm text-gray-500 font-medium sm:w-[initial] sm:gap-4 sm:basis-full sm:justify-around sm:flex-nowrap gap-y-2 sm:px-5">
            {links.map((link) => (
              <li
                className="h-3/4 flex px-2 self-center hover:text-gray-950"
                key={link.hash}
              >
                <Link href={link.hash}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
