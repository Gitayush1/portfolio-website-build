"use client";

import { motion } from "framer-motion";
import { Sparkles, Terminal, Code, Cpu } from "lucide-react";

export function AboutSection() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-950/20">
      {/* Background radial glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column: Visual Card */}
          <motion.div variants={itemVariants} className="lg:col-span-5 relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl opacity-20 group-hover:opacity-30 transition duration-500 blur-xl" />
            
            <div className="relative glass-dark p-8 rounded-3xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
                  <Terminal className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">developer.json</h3>
                  <p className="text-xs text-gray-500">Self-summary payload</p>
                </div>
              </div>

              <div className="font-mono text-xs sm:text-sm space-y-2 text-gray-400">
                <p><span className="text-cyan-400">const</span> developer = &#123;</p>
                <p className="pl-4"><span className="text-emerald-400">name</span>: <span className="text-orange-300">"Kunwar Ayush"</span>,</p>
                <p className="pl-4"><span className="text-emerald-400">focus</span>: <span className="text-orange-300">"Scalable Web & SaaS platforms"</span>,</p>
                <p className="pl-4"><span className="text-emerald-400">stack</span>: [<span className="text-orange-300">"Next.js"</span>, <span className="text-orange-300">"MERN"</span>, <span className="text-orange-300">"TypeScript"</span>],</p>
                <p className="pl-4"><span className="text-emerald-400">solvedProblems</span>: <span className="text-purple-400">680</span>,</p>
                <p className="pl-4"><span className="text-emerald-400">philosophy</span>: <span className="text-orange-300">"Ship fast, scale safely"</span></p>
                <p>&#125;;</p>
              </div>

              {/* Availability Indicator */}
              <div className="mt-8 pt-6 border-t border-slate-800/60 flex items-center justify-between">
                <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold flex items-center gap-2">
                  Status
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-400 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for contracts
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Copy */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-400 font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Me</span>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Engineering web products with{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                tangible real-world impact
              </span>
            </h2>

            {/* Human-centric narrative */}
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a full-stack developer who loves bridging the gap between high-performance backends and highly interactive user interfaces. Specializing in Next.js, React, Node.js, and MongoDB/SQL, I build secure, scale-ready web applications, safety platforms, and SaaS products.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Driven by complex problem-solving, I've solved over 680 algorithmic challenges, sharpening my eye for efficiency and clean architectures. I focus on optimizing web applications to load faster, reduce deployment risk, and provide outstanding premium UX.
            </p>

            {/* Key Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex gap-4 p-4 rounded-xl bg-slate-900/30 border border-slate-800/40">
                <div className="text-emerald-400 mt-1">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">Modern Frontends</h4>
                  <p className="text-xs text-gray-400">Next.js 15, React, Zustand, state optimization & premium layout animations.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl bg-slate-900/30 border border-slate-800/40">
                <div className="text-cyan-400 mt-1">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">Robust APIs & Databases</h4>
                  <p className="text-xs text-gray-400">Node, Express, MongoDB, PostgreSQL, secure JWT authentication & APIs.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
