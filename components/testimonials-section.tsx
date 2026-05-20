"use client";

import { motion } from "framer-motion";
import { MessageSquare, Quote, Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Ayush demonstrated exceptional technical skill during his internship. He successfully implemented complex features like a scalable feature flag system and optimized MERN applications, showing a level of maturity and problem-solving capability far beyond his years.",
      author: "Devansh Saxena",
      role: "Senior Engineer",
      company: "MyMedicos Community",
      avatar: "DS",
      accent: "from-emerald-500 to-teal-500",
    },
    {
      quote:
        "Ayush stands out as a highly capable and analytical developer. His dedication to solving algorithmic problems and translating that logic into real-world applications like the Women Safety Portal is exemplary. He has a very bright career ahead in full-stack engineering.",
      author: "Dr. Prachi Arora",
      role: "Mentor",
      company: "Women's Safety Portal",
      avatar: "PA",
      accent: "from-teal-500 to-cyan-500",
    },
  ];

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
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-400 font-medium mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Recommendations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Social Proof & Testimonials
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Endorsements from my industry internship manager and academic professors
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="relative group h-full"
            >
              {/* Glow background on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur-md" />

              <div className="relative glass-dark p-8 md:p-10 rounded-2xl h-full flex flex-col justify-between border border-emerald-500/10 group-hover:border-emerald-500/30 hover:bg-slate-900/60 transition-all duration-300">

                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
                    <Quote className="w-6 h-6 transform rotate-180" />
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-emerald-400/90 text-emerald-400" />
                    ))}
                  </div>
                </div>

                {/* Quote Body */}
                <p className="text-gray-300 text-base md:text-lg leading-relaxed italic mb-8 flex-grow">
                  "{t.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-slate-800/60">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.accent} flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-lg`}>
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base">{t.author}</h4>
                    <p className="text-gray-400 text-xs font-medium">
                      {t.role} at{" "}
                      <span className="text-emerald-400 font-semibold">{t.company}</span>
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
