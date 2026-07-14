"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-20 relative z-10 border-b border-card-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <div className="flex items-center space-x-2 text-accent-primary mb-2">
            <User size={18} />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              01 // Profile
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Professional Story */}
          <div className="lg:col-span-7 space-y-6">
            {about.story.map((para, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-gray-300 text-sm sm:text-base leading-relaxed"
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* Currently Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 p-6 rounded-2xl bg-card border border-card-border shadow-[0_4px_30px_rgba(0,0,0,0.2)] hover:border-accent-primary/30 transition-all duration-300"
          >
            <h3 className="text-lg font-mono font-bold text-white mb-6 pb-2 border-b border-card-border flex items-center justify-between">
              <span>CURRENTLY ACTIVE</span>
              <span className="w-2 h-2 rounded-full bg-accent-primary animate-ping"></span>
            </h3>
            
            <ul className="space-y-4">
              {about.currently.map((item, index) => (
                <li key={index} className="flex items-start space-x-3 group">
                  <CheckCircle2 className="text-accent-primary shrink-0 mt-0.5" size={16} />
                  <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
