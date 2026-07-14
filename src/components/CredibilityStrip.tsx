"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Cpu, BookOpen, Globe } from "lucide-react";

export default function CredibilityStrip() {
  const credentials = [
    {
      icon: <GraduationCap className="text-accent-primary" size={20} />,
      label: "Academic Focus",
      value: "B.Tech Agri Eng (2023-27)",
      desc: "KIT Coimbatore",
    },
    {
      icon: <Cpu className="text-accent-secondary" size={20} />,
      label: "Interdisciplinary Focus",
      value: "Software + AI + IoT",
      desc: "Embedded Systems & Models",
    },
    {
      icon: <BookOpen className="text-accent-violet" size={20} />,
      label: "Publications",
      value: "IMACSI-26 Paper ID 253",
      desc: "Accepted IoT Predator Research",
    },
    {
      icon: <Award className="text-accent-primary" size={20} />,
      label: "Hackathon",
      value: "Drone Phenomics TNAU",
      desc: "YOLOv11 Crop/Weed Analytics",
    },
    {
      icon: <Globe className="text-accent-secondary" size={20} />,
      label: "Production Launch",
      value: "mugavarithazhai.in",
      desc: "Live Catalog & Shop Builder",
    },
  ];

  return (
    <div className="w-full relative z-10 py-6 border-y border-card-border bg-[#0a0f1d]/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {credentials.map((cred, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="flex items-start space-x-3 p-2 group"
            >
              <div className="p-2 bg-card border border-card-border rounded-lg group-hover:border-accent-primary/40 group-hover:bg-[#161f36] transition-colors duration-300">
                {cred.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                  {cred.label}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">
                  {cred.value}
                </span>
                <span className="text-[10px] text-gray-400">
                  {cred.desc}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
