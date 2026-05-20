"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { resumeData } from "@/lib/resume-data";

function AnimatedCounter({ end, duration = 2 }: { end: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(end);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isInView || hasAnimated) return;

    // Match a number (integer or float) at the beginning, followed by any suffix
    const match = end.match(/^([0-9]+(?:\.[0-9]+)?)(.*)$/);
    
    if (!match) {
      setCount(end);
      setHasAnimated(true);
      return;
    }

    const numEnd = parseFloat(match[1]);
    const suffix = match[2];
    const isFloat = match[1].includes('.');
    const decimalPlaces = isFloat ? match[1].split('.')[1].length : 0;

    if (isNaN(numEnd)) {
      setCount(end);
      setHasAnimated(true);
      return;
    }

    let current = 0;
    const increment = numEnd / (duration * 60);
    setCount((isFloat ? "0.00" : "0") + suffix);

    const timer = setInterval(() => {
      current += increment;
      if (current >= numEnd) {
        setCount(numEnd.toFixed(decimalPlaces) + suffix);
        setHasAnimated(true);
        clearInterval(timer);
      } else {
        setCount(current.toFixed(decimalPlaces) + suffix);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, end, duration, hasAnimated]);

  return <span ref={ref}>{count}</span>;
}

export function AchievementsSection() {
  const { achievements } = resumeData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Key Achievements
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Measurable impact and milestones from my career
          </p>
        </motion.div>

        {/* Achievements grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />

              {/* Card content */}
              <div className="relative glass-dark p-8 rounded-2xl h-full flex flex-col justify-between hover:bg-slate-900/60 transition-all duration-300">
                {/* Icon */}
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>

                {/* Stat */}
                <div className="mb-3">
                  <div className="text-5xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text mb-2">
                    <AnimatedCounter end={achievement.count} />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {achievement.label}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {achievement.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 rounded-b-2xl group-hover:via-emerald-500/100 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
