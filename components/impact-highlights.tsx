"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/lib/resume-data";

export function ImpactHighlights() {
  const achievements = resumeData.achievements.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="sticky top-0 z-40 py-6 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950/80 backdrop-blur-md border-b border-emerald-500/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center gap-4 px-6 py-4 rounded-lg bg-white/5 border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 hover:bg-white/10 group"
            >
              <div className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  {item.count}
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {item.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
