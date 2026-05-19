"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = windowHeight > 0 ? (scrolled / windowHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 z-50 origin-left"
        style={{ scaleX: scrollProgress / 100 }}
        transition={{ duration: 0.1 }}
      />

      {/* Scroll indicator dot */}
      <motion.div
        className="fixed right-8 bottom-8 z-40"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="text-xs text-gray-400 uppercase tracking-widest font-mono">
            {Math.round(scrollProgress)}%
          </div>
          <div className="w-3 h-3 bg-gradient-to-b from-emerald-400 to-teal-400 rounded-full shadow-lg shadow-emerald-500/50" />
        </div>
      </motion.div>
    </>
  );
}
