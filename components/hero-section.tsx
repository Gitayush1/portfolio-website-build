"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/lib/resume-data";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const { basics } = resumeData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl opacity-50" />
      </div>

      <motion.div
        className="max-w-4xl w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="text-emerald-400 text-sm font-semibold uppercase tracking-wider">
            Welcome to my portfolio
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="text-white">Hey, I'm </span>
          <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            {basics.name}
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl text-emerald-300 font-light mb-6"
        >
          {basics.title}
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed"
        >
          {basics.summary}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold rounded-lg group"
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore My Work
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex gap-6">
          <a
            href={basics.socials?.[0]?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            aria-label="GitHub Profile"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg opacity-0 group-hover:opacity-50 transition-opacity blur" />
            <div className="relative bg-slate-950 p-3 rounded-lg group-hover:bg-slate-900 transition-colors">
              <Github className="w-6 h-6 text-emerald-400 group-hover:text-emerald-300" />
            </div>
          </a>
          <a
            href={basics.socials?.[1]?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            aria-label="LinkedIn Profile"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg opacity-0 group-hover:opacity-50 transition-opacity blur" />
            <div className="relative bg-slate-950 p-3 rounded-lg group-hover:bg-slate-900 transition-colors">
              <Linkedin className="w-6 h-6 text-emerald-400 group-hover:text-emerald-300" />
            </div>
          </a>
          <a
            href={`mailto:${basics.email}`}
            className="group relative"
            aria-label="Email Contact"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg opacity-0 group-hover:opacity-50 transition-opacity blur" />
            <div className="relative bg-slate-950 p-3 rounded-lg group-hover:bg-slate-900 transition-colors">
              <Mail className="w-6 h-6 text-emerald-400 group-hover:text-emerald-300" />
            </div>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-gray-400 uppercase tracking-widest">Scroll to explore</span>
            <div className="w-6 h-10 border border-emerald-400/30 rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-2 bg-emerald-400 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
