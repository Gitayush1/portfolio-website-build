"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { resumeData } from "@/lib/resume-data";
import { ChevronDown } from "lucide-react";

export function ExperienceSection() {
  const [expanded, setExpanded] = useState<number | null>(0);
  const { experience } = resumeData;

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A timeline of my professional journey and key achievements
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experience.map((job, index) => (
            <motion.div
              key={job.id}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline line */}
              {index !== experience.length - 1 && (
                <div className="absolute left-8 top-24 w-1 h-16 bg-gradient-to-b from-emerald-500/30 to-transparent" />
              )}

              <button
                onClick={() => setExpanded(expanded === index ? null : index)}
                className="w-full text-left"
              >
                <div className="glass-dark hover:bg-slate-900/60 transition-all duration-300 p-6 rounded-xl group cursor-pointer">
                  {/* Timeline dot */}
                  <div className="flex items-start gap-6">
                    <div className="relative flex-shrink-0 mt-1">
                      <div className="w-4 h-4 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full" />
                      <div className="absolute inset-0 w-4 h-4 bg-emerald-400/50 rounded-full animate-pulse" />
                    </div>

                    <div className="flex-1 min-w-0">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                            {job.position}
                          </h3>
                          <p className="text-emerald-400 font-medium">{job.company}</p>
                        </div>
                        <span className="text-sm text-gray-400 font-mono flex-shrink-0">
                          {job.startDate} — {job.endDate}
                        </span>
                      </div>

                      {/* Duration badge */}
                      <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 font-medium mb-4">
                        {job.duration}
                      </div>

                      {/* Summary */}
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                        {job.description}
                      </p>

                      {/* Expand indicator */}
                      <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
                        <span>{expanded === index ? "Hide" : "Show"} details</span>
                        <motion.div
                          animate={{ rotate: expanded === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {expanded === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-12 mt-6 pt-6 border-t border-emerald-500/20"
                      >
                        {/* Description */}
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {job.description}
                        </p>

                        {/* Highlights */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-200 mb-3 uppercase tracking-widest">
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {job.highlights.map((highlight, i) => (
                              <li key={i} className="flex gap-3 text-sm text-gray-400">
                                <span className="text-emerald-400 flex-shrink-0">✓</span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-200 mb-3 uppercase tracking-widest">
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 font-medium hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all cursor-default"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
