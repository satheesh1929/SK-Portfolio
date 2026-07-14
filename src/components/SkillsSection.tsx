"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, CheckCircle } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function SkillsSection() {
  const { skillCategories } = portfolioData;

  const getProficiencyStyle = (prof: string) => {
    switch (prof) {
      case "Core":
        return "bg-accent-primary/10 text-accent-primary border-accent-primary/20";
      case "Working Knowledge":
        return "bg-accent-violet/10 text-accent-violet border-accent-violet/20";
      case "Familiar":
      default:
        return "bg-white/5 text-gray-400 border-white/5";
    }
  };

  return (
    <section id="skills" className="py-20 relative z-10 border-b border-card-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <div className="flex items-center space-x-2 text-accent-primary mb-2">
            <Cpu size={18} />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              02 // Expertise
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-card-border hover:border-accent-primary/20 transition-all duration-300 flex flex-col space-y-4"
            >
              <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2 border-b border-card-border pb-3">
                <span className="w-1.5 h-6 bg-accent-primary rounded"></span>
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2.5 pt-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-mono flex items-center gap-1.5 transition-all duration-300 hover:scale-102 ${getProficiencyStyle(
                      skill.proficiency
                    )}`}
                  >
                    <span>{skill.name}</span>
                    <span className="text-[9px] opacity-60 font-sans">({skill.proficiency})</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
