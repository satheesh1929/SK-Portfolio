"use client";

import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-12 border-t border-card-border bg-[#070a10] relative z-10 text-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-gray-500 font-medium">
          Designed & built by{" "}
          <span className="text-gray-300 font-semibold">{portfolioData.profile.fullName}</span>
        </p>
        
        <div className="flex items-center space-x-6">
          <a
            href={portfolioData.profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={20} />
          </a>
          <a
            href={portfolioData.profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent-primary transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${portfolioData.profile.socials.email}`}
            className="text-gray-400 hover:text-red-400 transition-colors"
            aria-label="Email Satheesh"
          >
            <Mail size={20} />
          </a>
        </div>
        
        <p className="text-xs font-mono text-gray-600">
          &copy; {year} SK. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
