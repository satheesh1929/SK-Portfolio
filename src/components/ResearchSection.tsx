"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Award, FileText } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function ResearchSection() {
  const { publications } = portfolioData;

  return (
    <section id="research" className="py-20 relative z-10 border-b border-card-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <div className="flex items-center space-x-2 text-accent-primary mb-2">
            <BookOpen size={18} />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              05 // Research
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Publications & Papers
          </h2>
        </div>

        {/* Academic Card */}
        <div className="max-w-4xl">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.paperId}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 md:p-8 rounded-2xl bg-card border border-card-border hover:border-accent-primary/20 transition-all duration-300 relative overflow-hidden"
            >
              {/* Paper ID corner ribbon */}
              <div className="absolute top-0 right-0 px-3 py-1 bg-accent-primary/10 text-accent-primary border-l border-b border-accent-primary/20 rounded-bl-lg text-[10px] font-mono font-semibold">
                ID: {pub.paperId}
              </div>

              <div className="space-y-4">
                <div className="space-y-1 max-w-[85%]">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 uppercase">
                    {pub.status}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                    "{pub.title}"
                  </h3>
                </div>

                <div className="text-xs sm:text-sm text-gray-400">
                  <span className="font-mono text-gray-500 mr-2">Authors:</span>
                  <span className="text-gray-300 font-medium">
                    {pub.authors.map((author, aIdx) => (
                      <React.Fragment key={author}>
                        <span className={author === "S. Satheesh Kumar" ? "text-accent-primary font-semibold" : ""}>
                          {author}
                        </span>
                        {aIdx < pub.authors.length - 1 ? ", " : ""}
                      </React.Fragment>
                    ))}
                  </span>
                </div>

                <div className="p-4 rounded-lg bg-[#070a10] border border-card-border text-xs sm:text-sm text-gray-400 leading-relaxed">
                  <span className="font-mono text-gray-500 font-bold block mb-1">ABSTRACT PREVIEW:</span>
                  {pub.abstractPreview}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-2">
                    <Award size={16} className="text-accent-primary" />
                    <span className="text-xs font-mono text-gray-400 font-medium">
                      {pub.conference}
                    </span>
                  </div>
                  
                  {pub.paperUrl && (
                    <a
                      href={pub.paperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white/5 border border-white/10 hover:border-accent-primary text-gray-300 hover:text-white rounded-md text-xs font-mono font-semibold transition-all duration-300 flex items-center gap-2"
                    >
                      <FileText size={12} />
                      View Paper
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
