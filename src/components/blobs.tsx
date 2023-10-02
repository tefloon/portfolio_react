"use client";

import { motion } from "framer-motion";
import React from "react";
import { ColorValueHex } from "../../lib/types";

type BlobProps = {
  color1?: ColorValueHex;
  color2?: ColorValueHex;
  cycleDuration?: number;
};

export default function Blobs({
  color1 = "#fbe2e3",
  color2 = "#dbd7fb",
  cycleDuration = 10,
}: BlobProps) {
  return (
    <div className="relative">
      <motion.div
        className="absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"
        animate={{ backgroundColor: [color1, color2, color1] }}
        transition={{ duration: cycleDuration, repeat: Infinity }}
      ></motion.div>
      <motion.div
        className="absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
        animate={{ backgroundColor: [color2, color1, color2] }}
        transition={{ duration: cycleDuration, repeat: Infinity }}
      ></motion.div>
    </div>
  );
}
