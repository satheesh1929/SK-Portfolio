import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, ExternalLink, Cpu, Terminal, Award, AlertCircle, ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioData.projects
    .filter((project) => project.isFeatured)
    .map((project) => ({
      slug: project.slug,
    }));
}

export default async function ProjectCaseStudy({ params }: PageProps) {
  const resolvedParams = await params;
  const project = portfolioData.projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const pipeline = project.pipeline;

  return (
    <div className="min-h-screen py-16 md:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Back Link Button */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-accent-primary hover:text-white transition-colors uppercase tracking-widest group"
          >
            <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
        </div>

        {/* Big Page Title Banner */}
        <div className="border-b border-card-border pb-8 mb-12 space-y-4">
          <span className="px-2.5 py-1 rounded text-[10px] font-mono font-bold tracking-wider uppercase bg-accent-primary/10 text-accent-primary border border-accent-primary/20">
            {project.category}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            {project.title}
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-4xl leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Main Grid: Main Body + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Body (Left, 8-columns) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Overview & Problem */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white font-mono flex items-center gap-2">
                <span className="w-1.5 h-6 bg-accent-primary rounded"></span>
                01 // Overview & Problem Statement
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
              <div className="p-5 rounded-xl bg-card border border-card-border mt-4">
                <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest block mb-2">
                  THE CHALLENGE:
                </span>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>
            </div>

            {/* Approach & Workflow Pipeline */}
            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl font-bold text-white font-mono flex items-center gap-2">
                <span className="w-1.5 h-6 bg-accent-violet rounded"></span>
                02 // Methodology & Workflow Pipeline
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {project.approach}
              </p>

              {/* Dynamic Pipeline Flow Chart */}
              {pipeline && pipeline.length > 0 && (
                <div className="p-6 rounded-xl bg-[#0a0f1d]/50 border border-card-border/60 mt-4 overflow-x-auto">
                  <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest block mb-6">
                    Pipeline Stages:
                  </span>
                  
                  <div className="flex items-center space-x-4 min-w-[650px] py-2">
                    {pipeline.map((stage, sIndex) => (
                      <React.Fragment key={stage}>
                        <div className="flex flex-col items-center flex-1 p-3 rounded-lg bg-card border border-card-border text-center">
                          <span className="w-5 h-5 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary font-mono text-[10px] flex items-center justify-center font-bold mb-2">
                            {sIndex + 1}
                          </span>
                          <span className="text-xs font-semibold text-gray-200">
                            {stage}
                          </span>
                        </div>
                        {sIndex < pipeline.length - 1 && (
                          <ArrowRight size={18} className="text-gray-600 shrink-0" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Solution & Contribution */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white font-mono flex items-center gap-2">
                <span className="w-1.5 h-6 bg-accent-secondary rounded"></span>
                03 // The Solution & My Contribution
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {project.whatIBuilt}
              </p>
              <div className="p-5 rounded-xl bg-card border border-card-border mt-4">
                <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest block mb-2">
                  MY SPECIFIC ROLE:
                </span>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {project.myContribution}
                </p>
              </div>
            </div>

            {/* Key Challenges Callout */}
            {project.challenges && (
              <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-3">
                <h3 className="text-sm font-mono font-bold text-amber-400 flex items-center gap-2 uppercase tracking-wider">
                  <AlertCircle size={16} />
                  Technical Roadblock & Resolution
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {project.challenges}
                </p>
              </div>
            )}

            {/* Lessons Learned & Future Improvements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {project.lessonsLearned && (
                <div className="p-5 rounded-xl bg-[#0e1424]/40 border border-card-border space-y-3">
                  <h4 className="text-sm font-bold text-white font-mono flex items-center gap-2 uppercase tracking-wider">
                    <Terminal size={16} className="text-accent-primary" />
                    LESSONS LEARNED
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {project.lessonsLearned}
                  </p>
                </div>
              )}

              {project.futureImprovements && project.futureImprovements.length > 0 && (
                <div className="p-5 rounded-xl bg-[#0e1424]/40 border border-card-border space-y-3">
                  <h4 className="text-sm font-bold text-white font-mono flex items-center gap-2 uppercase tracking-wider">
                    <Cpu size={16} className="text-accent-violet" />
                    FUTURE ROADMAP
                  </h4>
                  <ul className="list-disc list-inside text-xs sm:text-sm text-gray-400 space-y-1.5">
                    {project.futureImprovements.map((imp, idx) => (
                      <li key={idx} className="marker:text-accent-violet">
                        <span className="ml-1">{imp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

          </div>

          {/* Sidebar (Right, 4-columns) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Quick Metadata Box */}
            <div className="p-6 rounded-2xl bg-card border border-card-border space-y-6">
              <h3 className="text-sm font-mono font-bold text-white border-b border-card-border pb-3 uppercase tracking-wider">
                Project Dossier
              </h3>
              
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">
                    Domain Domain
                  </span>
                  <span className="text-sm font-semibold text-gray-200">
                    {project.category}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">
                    My Contribution
                  </span>
                  <span className="text-sm font-semibold text-gray-200">
                    System Architecture & Dev
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">
                    Repository & Live Link
                  </span>
                  <div className="flex gap-4 pt-1.5 text-gray-400">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-white transition-colors text-xs font-mono"
                      >
                        <Github size={14} />
                        GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-white transition-colors text-xs font-mono"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics & Performance Box */}
            {project.results && project.results.length > 0 && (
              <div className="p-6 rounded-2xl bg-[#0a0f1d]/80 border border-card-border shadow-[0_0_15px_rgba(0,210,255,0.05)] space-y-4">
                <h3 className="text-sm font-mono font-bold text-accent-primary flex items-center gap-2 uppercase tracking-wider">
                  <Award size={16} />
                  Evaluation Results
                </h3>
                
                <div className="space-y-4">
                  {project.results.map((res, rIdx) => (
                    <div key={rIdx} className="p-3 bg-card border border-card-border/60 rounded-lg">
                      <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-semibold">
                        {res}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}
