"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/lib/resume-data";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";

export function FooterSection() {
  const { basics } = resumeData;

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
    <footer className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-emerald-500/10 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-2">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Kunwar Ayush Pratap Singh
              </span>
            </h3>
            <p className="text-gray-400 mb-4">
              Full-Stack Developer building impactful solutions
            </p>
            <p className="text-sm text-gray-500">
              {basics.location}
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "Experience", href: "#experience" },
                { name: "Projects", href: "#projects" },
                { name: "Skills", href: "#skills" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-emerald-300 transition-colors text-sm group flex items-center gap-1"
                >
                  {link.name}
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Contact info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${basics.email}`}
                className="flex items-center gap-2 text-gray-400 hover:text-emerald-300 transition-colors text-sm group"
              >
                <Mail className="w-4 h-4" />
                <span className="group-hover:underline">{basics.email}</span>
              </a>
              <div className="flex gap-4 pt-2">
                <a
                  href={basics.socials?.[0]?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-300 transition-colors"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={basics.socials?.[1]?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-300 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-emerald-500/0 mb-8"
          variants={itemVariants}
        />

        {/* Bottom section */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500"
          variants={itemVariants}
        >
          <p>
            © 2026 Kunwar Ayush Pratap Singh. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href={basics.website} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition-colors">
              GitHub Profile
            </a>
            <a href={`mailto:${basics.email}`} className="hover:text-emerald-300 transition-colors">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
