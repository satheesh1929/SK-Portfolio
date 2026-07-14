"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Compass, Medal } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function AchievementsSection() {
  const { achievements } = portfolioData;

  // Prioritize Technical Achievements as requested: "Prioritize technical achievements. Do not overload this section with every participation certificate."
  const techAchievements = achievements.filter((a) => a.category === "Technical");
  const generalAchievements = achievements.filter((a) => a.category === "General");

  return (
    <section id="achievements" className="py-20 relative z-10 border-b border-card-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <div className="flex items-center space-x-2 text-accent-primary mb-2">
            <Medal size={18} />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              06 // Honors
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Achievements & Activities
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Achievements Column */}
          <div className="space-y-6">
            <h3 className="text-base font-bold text-white font-mono flex items-center gap-2 mb-6 uppercase tracking-wider">
              <span className="w-1 h-5 bg-accent-primary rounded"></span>
              Technical Events & Hackathons
            </h3>

            <div className="space-y-4">
              {techAchievements.map((ach, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-5 rounded-xl bg-card border border-card-border hover:border-accent-primary/20 transition-all duration-300 flex items-start space-x-4"
                >
                  <div className="p-2.5 bg-accent-primary/10 text-accent-primary rounded-lg shrink-0">
                    <Award size={20} />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-gray-500">{ach.year}</span>
                      <span className="text-xs text-gray-500">•</span>
                      <span className="text-xs font-mono text-accent-primary">{ach.context}</span>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      {ach.title}
                    </h4>
                    {ach.description && (
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {ach.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* General Achievements Column */}
          <div className="space-y-6">
            <h3 className="text-base font-bold text-white font-mono flex items-center gap-2 mb-6 uppercase tracking-wider">
              <span className="w-1 h-5 bg-accent-violet rounded"></span>
              Co-Curricular Honours
            </h3>

            <div className="space-y-4">
              {generalAchievements.map((ach, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-5 rounded-xl bg-card border border-card-border hover:border-accent-violet/20 transition-all duration-300 flex items-start space-x-4"
                >
                  <div className="p-2.5 bg-accent-violet/10 text-accent-violet rounded-lg shrink-0">
                    <Compass size={20} />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-gray-500">{ach.year}</span>
                      <span className="text-xs text-gray-500">•</span>
                      <span className="text-xs font-mono text-accent-violet">{ach.context}</span>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      {ach.title}
                    </h4>
                    {ach.description && (
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {ach.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
