"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

let imageUrl =
  "https://images.unsplash.com/photo-1543946207-39bd91e70ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80";

export default function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative ">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "ease",
              duration: 0.2,
            }}
          >
            <Image
              src={imageUrl}
              alt="Personal photo"
              width="150"
              height="150"
              quality={95}
              className="h-24 w-24 rounded-full border-4 border-white"
            />
          </motion.div>
          <motion.span
            className="absolute z-50 -bottom-2 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              duration: 0.7,
              delay: 0.1,
            }}
          >
            💙
          </motion.span>
        </div>
      </div>
    </section>
  );
}
