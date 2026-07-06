"use client";

import React from "react";
import { motion } from "framer-motion";

export const WeaveSpinner = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
      <div className="relative flex items-center justify-center w-20 h-20">
        {[0, 1, 2, 3].map((index) => (
          <motion.span
            key={index}
            className="absolute top-0 left-0 w-full h-full border-[3px] rounded-full"
            style={{
              borderColor: index % 2 === 0 ? "#E0A96D" : "#F2D492",
              borderTopColor: "transparent",
              borderBottomColor: "transparent",
              opacity: 0.8 - index * 0.15,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.05 + index * 0.05, 1],
            }}
            transition={{
              rotate: {
                duration: 1.5 + index * 0.2,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              }
            }}
          />
        ))}
        {/* Central glowing core */}
        <div className="absolute inset-0 m-auto w-6 h-6 bg-girly-pink/30 rounded-full blur-[8px] animate-pulse-slow" />
      </div>
    </div>
  );
};
