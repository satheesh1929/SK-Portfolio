import React from "react";
import Hero from "@/components/Hero";
import CredibilityStrip from "@/components/CredibilityStrip";
import About from "@/components/About";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResearchSection from "@/components/ResearchSection";
import AchievementsSection from "@/components/AchievementsSection";
import CertificationsSection from "@/components/CertificationsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <CredibilityStrip />
      
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <About />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ResearchSection />
        <AchievementsSection />
        <CertificationsSection />
        <EducationSection />
        <ContactSection />
      </div>
    </div>
  );
}

