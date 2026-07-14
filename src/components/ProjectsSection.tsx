"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FolderGit2, Github, ExternalLink, ArrowRight, Eye, Code } from "lucide-react";
import { portfolioData, Project } from "@/data/portfolio";

export default function ProjectsSection() {
  const { projects } = portfolioData;

  const featuredProjects = projects.filter((p) => p.isFeatured);
  const additionalProjects = projects.filter((p) => !p.isFeatured);

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case "WEB DEVELOPMENT":
        return "text-accent-primary bg-accent-primary/10 border-accent-primary/20";
      case "AI / COMPUTER VISION":
        return "text-accent-violet bg-accent-violet/10 border-accent-violet/20";
      case "IOT":
        return "text-accent-secondary bg-accent-secondary/10 border-accent-secondary/20";
      case "AGRITECH":
        return "text-emerald-400 bg-emerald-400/10 border-emerald-400/20";
      case "RESEARCH":
        return "text-amber-400 bg-amber-400/10 border-amber-400/20";
      default:
        return "text-gray-400 bg-gray-400/10 border-gray-400/20";
    }
  };

  return (
    <section id="projects" className="py-20 relative z-10 border-b border-card-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <div className="flex items-center space-x-2 text-accent-primary mb-2">
            <FolderGit2 size={18} />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              04 // Showcase
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Featured Projects
          </h2>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card border border-card-border rounded-2xl overflow-hidden hover:border-accent-primary/30 transition-all duration-300 flex flex-col min-h-[380px]"
            >
              {/* Subtle background accent glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="p-6 md:p-8 flex flex-col h-full relative z-10">
                {/* Card Top: Category and Links */}
                <div className="flex justify-between items-start mb-6">
                  <span className={`px-2.5 py-1 rounded text-[10px] font-mono font-bold tracking-wider uppercase border ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                  
                  <div className="flex space-x-3.5 text-gray-400">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                        title="GitHub Repository"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                        title="Live Site"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Name & Short Description */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {project.shortDescription}
                </p>

                {/* Highlight Results if Available */}
                {project.results && project.results.length > 0 && (
                  <div className="mb-6 space-y-1">
                    <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest block">
                      Proven Metrics:
                    </span>
                    <ul className="text-xs text-gray-300 space-y-1 list-disc list-inside">
                      {project.results.slice(0, 2).map((res, rIndex) => (
                        <li key={rIndex} className="truncate">
                          <span className="text-accent-primary/80 font-mono font-bold mr-1">&#187;</span>
                          {res}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-card-border">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] font-mono text-gray-400 bg-white/5 border border-white/5 px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Case Study CTA Trigger */}
                <div className="pt-6">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-accent-primary hover:text-white transition-colors uppercase tracking-widest group/btn"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight size={14} className="transform group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects Section */}
        <div className="mt-20">
          <h3 className="text-xl font-bold text-white font-mono flex items-center gap-2 mb-8">
            <span className="w-1.5 h-6 bg-accent-violet rounded"></span>
            Additional Projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-6 rounded-xl bg-[#0e1424]/40 border border-card-border hover:border-accent-primary/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider border ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                    <div className="flex space-x-2.5 text-gray-500">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                          <Github size={16} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-white mb-2 group-hover:text-accent-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-card-border/40 mt-auto">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-[8px] font-mono text-gray-500 bg-white/5 px-1.5 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
