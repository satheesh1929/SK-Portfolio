"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function ExperienceSection() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-20 relative z-10 border-b border-card-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center space-x-2 text-accent-primary mb-2">
            <Briefcase size={18} />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              03 // Journey
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
        </div>

        {/* Timeline Structure */}
        <div className="relative border-l border-card-border ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Pulsing Dot on Timeline */}
              <span className="absolute -left-[37px] md:-left-[53px] top-1.5 w-4.5 h-4.5 rounded-full bg-background border-2 border-accent-primary group-hover:border-accent-violet transition-colors duration-300 shadow-[0_0_10px_rgba(0,210,255,0.15)] group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]"></span>

              {/* Timeline Card */}
              <div className="p-6 md:p-8 rounded-2xl bg-card border border-card-border hover:border-accent-primary/20 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div className="space-y-1">
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-accent-primary transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-gray-400 font-medium">
                      {exp.organization}
                    </p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <span className="text-xs font-mono text-gray-500 bg-[#070a10] border border-card-border px-3 py-1 rounded-full flex items-center gap-1.5 w-fit">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase bg-accent-primary/10 text-accent-primary px-2 py-0.5 rounded-md w-fit">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {exp.contributions && exp.contributions.length > 0 && (
                  <ul className="list-disc list-inside text-xs sm:text-sm text-gray-300 space-y-2.5 leading-relaxed pl-2 mb-4">
                    {exp.contributions.map((point, pIndex) => (
                      <li key={pIndex} className="marker:text-accent-primary">
                        <span className="ml-1">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-card-border">
                    {exp.technologies.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="text-[10px] font-mono text-gray-400 bg-white/5 border border-white/5 px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
