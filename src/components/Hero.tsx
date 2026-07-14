"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Cpu, Brain, Code, Sprout } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const { profile } = portfolioData;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  const nodeVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 120, delay: 0.8 } },
  };


  return (
    <section
      id="hero"
      className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Text Presentation Column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col space-y-6 text-left"
        >
          {/* Availability Badge */}
          <motion.div variants={itemVariants} className="w-fit">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-accent-primary/10 text-accent-primary border border-accent-primary/20 shadow-[0_0_15px_rgba(0,210,255,0.15)] animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-primary"></span>
              {profile.availability}
            </span>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-2">
            <p className="text-sm md:text-base font-mono text-accent-primary font-bold tracking-widest uppercase">
              Hi, I'm
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight leading-none">
              {profile.fullName}
            </h1>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-300 font-mono tracking-tight"
          >
            <span className="text-accent-primary">Software Developer</span>
            <span className="mx-2 text-gray-600">•</span>
            <span className="text-white">Frontend Developer</span>
            <span className="mx-2 text-gray-600">•</span>
            <span className="text-accent-secondary">AI & IoT Builder</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          {/* Action CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3.5 bg-accent-primary text-[#0b0f17] font-bold rounded-lg hover:bg-accent-primary/95 transition-all duration-300 flex items-center space-x-2 shadow-[0_0_20px_rgba(0,210,255,0.35)] hover:shadow-[0_0_30px_rgba(0,210,255,0.55)] transform hover:-translate-y-0.5"
            >
              <span>View My Work</span>
              <ArrowRight size={18} />
            </a>

            <a
              href={profile.resumePath}
              download="Satheesh_Kumar_Resume.pdf"
              className="px-6 py-3.5 bg-transparent border border-gray-700 hover:border-accent-primary text-gray-300 hover:text-white font-bold rounded-lg hover:bg-white/5 transition-all duration-300 flex items-center space-x-2 transform hover:-translate-y-0.5"
            >
              <span>Download Resume</span>
              <Download size={18} />
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={itemVariants} className="flex items-center space-x-5 pt-4">
            <span className="text-xs font-mono text-gray-600 uppercase tracking-widest">Connect:</span>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${profile.socials.email}`}
              className="text-gray-400 hover:text-red-400 transition-colors"
              aria-label="Email Address"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Visual Node Diagram Column */}
        <motion.div
          variants={nodeVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-5 hidden lg:flex items-center justify-center relative min-h-[400px]"
        >
          {/* Node Graphic Container */}
          <div className="relative w-full max-w-[360px] h-[360px]">
            {/* Center Background glow */}
            <div className="absolute inset-0 m-auto w-48 h-48 rounded-full bg-accent-primary/10 filter blur-3xl"></div>

            {/* SVGs representing connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 360 360">
              {/* Connection lines */}
              <line x1="180" y1="50" x2="60" y2="180" stroke="rgba(0, 210, 255, 0.2)" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="180" y1="50" x2="300" y2="180" stroke="rgba(0, 210, 255, 0.2)" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="60" y1="180" x2="180" y2="310" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="300" y1="180" x2="180" y2="310" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="60" y1="180" x2="300" y2="180" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1.5" />
              <line x1="180" y1="50" x2="180" y2="310" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1.5" />

              {/* Pulsing glow under active nodes */}
              <circle cx="180" cy="50" r="18" fill="rgba(0, 210, 255, 0.1)" className="animate-ping" style={{ animationDuration: "3s" }} />
              <circle cx="300" cy="180" r="18" fill="rgba(139, 92, 246, 0.1)" className="animate-ping" style={{ animationDuration: "4s" }} />
              <circle cx="180" cy="310" r="18" fill="rgba(16, 185, 129, 0.1)" className="animate-ping" style={{ animationDuration: "5s" }} />
              <circle cx="60" cy="180" r="18" fill="rgba(0, 210, 255, 0.1)" className="animate-ping" style={{ animationDuration: "3.5s" }} />
            </svg>

            {/* Node 1: Software (Top) */}
            <div className="absolute top-[10px] left-1/2 -translate-x-1/2 flex flex-col items-center group">
              <div className="w-16 h-16 rounded-2xl bg-card border border-accent-primary/50 shadow-[0_0_20px_rgba(0,210,255,0.15)] flex items-center justify-center text-accent-primary transition-transform duration-500 hover:scale-110">
                <Code size={28} />
              </div>
              <span className="mt-2 text-xs font-mono font-semibold tracking-wider text-accent-primary uppercase bg-background px-2 py-0.5 rounded border border-accent-primary/20">
                Software
              </span>
            </div>

            {/* Node 2: AI (Right) */}
            <div className="absolute right-[10px] top-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-card border border-accent-violet/50 shadow-[0_0_20px_rgba(139,92,246,0.15)] flex items-center justify-center text-accent-violet transition-transform duration-500 hover:scale-110">
                <Brain size={28} />
              </div>
              <span className="mt-2 text-xs font-mono font-semibold tracking-wider text-accent-violet uppercase bg-background px-2 py-0.5 rounded border border-accent-violet/20">
                AI / ML
              </span>
            </div>

            {/* Node 3: Agriculture (Bottom) */}
            <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-card border border-accent-secondary/50 shadow-[0_0_20px_rgba(16,185,129,0.15)] flex items-center justify-center text-accent-secondary transition-transform duration-500 hover:scale-110">
                <Sprout size={28} />
              </div>
              <span className="mt-2 text-xs font-mono font-semibold tracking-wider text-accent-secondary uppercase bg-background px-2 py-0.5 rounded border border-accent-secondary/20">
                AgriTech
              </span>
            </div>

            {/* Node 4: IoT (Left) */}
            <div className="absolute left-[10px] top-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-card border border-accent-primary/50 shadow-[0_0_20px_rgba(0,210,255,0.15)] flex items-center justify-center text-accent-primary transition-transform duration-500 hover:scale-110">
                <Cpu size={28} />
              </div>
              <span className="mt-2 text-xs font-mono font-semibold tracking-wider text-accent-primary uppercase bg-background px-2 py-0.5 rounded border border-accent-primary/20">
                IoT
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
