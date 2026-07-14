"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function EducationSection() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 relative z-10 border-b border-card-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <div className="flex items-center space-x-2 text-accent-primary mb-2">
            <GraduationCap size={18} />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              08 // Academics
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Education
          </h2>
        </div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 md:p-8 rounded-2xl bg-card border border-card-border hover:border-accent-primary/20 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Main Info */}
          <div className="lg:col-span-7 space-y-4">
            <div className="space-y-1">
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {education.degree}
              </h3>
              <p className="text-sm sm:text-base text-accent-primary font-medium">
                {education.institution}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-gray-500" />
                {education.location}
              </span>
              <span className="text-gray-600">|</span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-gray-500" />
                {education.period}
              </span>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed pt-2">
              {education.focus}
            </p>
          </div>

          {/* Core Modules Grid */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <h4 className="text-sm font-bold text-white font-mono flex items-center gap-2">
              <BookOpen size={16} className="text-accent-violet" />
              SPECIALIZED COURSEWORK
            </h4>
            
            <div className="flex flex-wrap gap-2">
              {education.courses.map((course) => (
                <span
                  key={course}
                  className="text-xs font-mono text-gray-300 bg-[#070a10] border border-card-border px-3 py-1.5 rounded-lg hover:border-accent-primary/30 transition-colors duration-300"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
