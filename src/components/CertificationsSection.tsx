"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Award, ExternalLink } from "lucide-react";
import { portfolioData, Certification } from "@/data/portfolio";

type CategoryFilter = "All" | "Software & Programming" | "Engineering & Technology" | "Professional Development";

export default function CertificationsSection() {
  const { certifications } = portfolioData;
  const [activeTab, setActiveTab] = useState<CategoryFilter>("All");

  const tabs: CategoryFilter[] = [
    "All",
    "Software & Programming",
    "Engineering & Technology",
    "Professional Development",
  ];

  const filteredCerts = certifications.filter((cert) => {
    if (activeTab === "All") return true;
    return cert.category === activeTab;
  });

  return (
    <section id="certifications" className="py-20 relative z-10 border-b border-card-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <div className="flex items-center space-x-2 text-accent-primary mb-2">
            <ShieldCheck size={18} />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              07 // Credentials
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Licenses & Certifications
          </h2>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-card-border/40">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-xs font-mono font-bold tracking-wide rounded-md transition-all duration-300 ${
                activeTab === tab
                  ? "bg-accent-primary/10 text-accent-primary border border-accent-primary/30"
                  : "text-gray-400 hover:text-gray-200 hover:bg-white/5 border border-transparent"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards Grid with Transitions */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={cert.name}
                className="group p-6 rounded-2xl bg-card border border-card-border hover:border-accent-primary/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Card Top: Icon & Metadata */}
                  <div className="flex items-start justify-between">
                    <div className="p-2.5 bg-[#070a10] border border-card-border rounded-xl text-accent-primary group-hover:text-accent-violet transition-colors">
                      <Award size={20} />
                    </div>
                    <span className="text-[10px] font-mono text-gray-500 bg-[#070a10] border border-card-border px-2 py-0.5 rounded">
                      {cert.year}
                    </span>
                  </div>

                  {/* Cert details */}
                  <div className="space-y-1">
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-accent-primary transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-xs text-gray-400 font-medium">
                      {cert.issuer}
                    </p>
                  </div>

                  {cert.description && (
                    <p className="text-xs text-gray-400 leading-relaxed pt-2">
                      {cert.description}
                    </p>
                  )}
                </div>

                <div className="pt-6 mt-4 border-t border-card-border flex items-center justify-between">
                  <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                    {cert.category}
                  </span>
                  
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-accent-primary hover:text-white transition-colors"
                    >
                      <span>Verify</span>
                      <ExternalLink size={10} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
