"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export function AccessibilityToggle() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    // Check user's prefers-reduced-motion setting
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduceMotion(prefersReducedMotion);

    // Apply to HTML element
    if (prefersReducedMotion) {
      document.documentElement.style.setProperty("--motion-safe", "none");
    }
  }, []);

  const handleMotionToggle = () => {
    const newValue = !reduceMotion;
    setReduceMotion(newValue);
    
    if (newValue) {
      document.documentElement.style.setProperty("--motion-safe", "none");
      document.documentElement.classList.add("reduce-motion");
    } else {
      document.documentElement.style.setProperty("--motion-safe", "1");
      document.documentElement.classList.remove("reduce-motion");
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 hidden lg:flex flex-col gap-3">
      {/* Reduce motion toggle */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleMotionToggle}
        className="glass-dark p-3 rounded-full hover:bg-slate-900/60 transition-all group"
        title={reduceMotion ? "Enable animations" : "Reduce animations"}
        aria-label={reduceMotion ? "Enable animations" : "Reduce animations"}
      >
        <motion.div
          animate={{ rotate: reduceMotion ? 360 : 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={`w-6 h-6 rounded-full border-2 ${
            reduceMotion 
              ? "border-red-500/50 bg-red-500/10" 
              : "border-green-500/50 bg-green-500/10"
          }`}>
            <div className={`w-2 h-2 rounded-full absolute top-2 left-2 ${
              reduceMotion ? "bg-red-400" : "bg-green-400"
            }`} />
          </div>
        </motion.div>
        <span className="sr-only">
          {reduceMotion ? "Enable animations" : "Reduce animations"}
        </span>
      </motion.button>

      {/* Sound toggle */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setSoundEnabled(!soundEnabled)}
        className="glass-dark p-3 rounded-full hover:bg-slate-900/60 transition-all group"
        title={soundEnabled ? "Disable sound" : "Enable sound"}
        aria-label={soundEnabled ? "Disable sound" : "Enable sound"}
      >
        {soundEnabled ? (
          <Volume2 className="w-6 h-6 text-emerald-400" />
        ) : (
          <VolumeX className="w-6 h-6 text-gray-400" />
        )}
        <span className="sr-only">
          {soundEnabled ? "Disable sound" : "Enable sound"}
        </span>
      </motion.button>

      {/* Accessibility info tooltip */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute left-20 bottom-0 glass-dark px-3 py-2 rounded text-xs text-gray-400 pointer-events-none opacity-0 hover:opacity-100 whitespace-nowrap"
      >
        Accessibility options
      </motion.div>
    </div>
  );
}
