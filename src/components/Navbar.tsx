"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileText } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const isHome = pathname === "/";

  // Handle scroll events to add styling to navbar and track active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (!isHome) return;

      const sections = ["about", "skills", "experience", "projects", "research", "achievements", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const navLinks = [
    { label: "About", hash: "about" },
    { label: "Skills", hash: "skills" },
    { label: "Experience", hash: "experience" },
    { label: "Projects", hash: "projects" },
    { label: "Research", hash: "research" },
    { label: "Achievements", hash: "achievements" },
    { label: "Contact", hash: "contact" },
  ];

  const getLinkHref = (hash: string) => {
    return isHome ? `#${hash}` : `/#${hash}`;
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (isHome) {
      e.preventDefault();
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setActiveSection(hash);
        setIsOpen(false);
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-card-border py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-accent-primary to-accent-violet bg-clip-text text-transparent tracking-tight hover:opacity-85 transition-opacity"
        >
          {portfolioData.profile.shortName}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.hash}
              href={getLinkHref(link.hash)}
              onClick={(e) => handleLinkClick(e, link.hash)}
              className={`px-4 py-2 text-sm font-mono font-medium rounded-md transition-colors ${
                activeSection === link.hash
                  ? "text-accent-primary"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              <span className="text-accent-primary/50 mr-1 font-sans">#</span>
              {link.label}
            </Link>
          ))}

          <a
            href={portfolioData.profile.resumePath}
            download="Satheesh_Kumar_Resume.pdf"
            className="ml-4 px-4 py-2 border border-accent-primary/30 hover:border-accent-primary text-accent-primary hover:bg-accent-primary/10 rounded-md text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-2"
          >
            <FileText size={14} />
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-4">
          <a
            href={portfolioData.profile.resumePath}
            download="Satheesh_Kumar_Resume.pdf"
            className="px-3 py-1.5 border border-accent-primary/20 hover:border-accent-primary text-accent-primary text-xs font-mono font-bold tracking-wider uppercase rounded flex items-center gap-1"
          >
            <FileText size={12} />
            CV
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100 border-b border-card-border" : "max-h-0 opacity-0"
        } bg-background/95 backdrop-blur-md`}
      >
        <div className="px-6 py-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.hash}
              href={getLinkHref(link.hash)}
              onClick={(e) => handleLinkClick(e, link.hash)}
              className={`text-lg font-medium transition-colors font-mono ${
                activeSection === link.hash ? "text-accent-primary" : "text-gray-300 hover:text-white"
              }`}
            >
              <span className="text-accent-primary/50 mr-2">#</span>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
