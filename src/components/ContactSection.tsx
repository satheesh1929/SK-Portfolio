"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle, FileText } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  botfield: string; // Honeypot field for spam prevention
}

export default function ContactSection() {
  const { socials, resumePath } = portfolioData.profile;

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
    botfield: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    // Honeypot check
    if (form.botfield) {
      // Quietly succeed without sending anything (fooled the bot)
      setTimeout(() => {
        setStatus("success");
      }, 1000);
      return;
    }

    // Client-side validations
    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setStatus("error");
      setErrorMessage("All fields are required.");
      return;
    }

    if (!validateEmail(form.email)) {
      setStatus("error");
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    if (form.message.trim().length < 10) {
      setStatus("error");
      setErrorMessage("Message must be at least 10 characters long.");
      return;
    }

    // Simulate Server Request (without exposing private keys)
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // 95% success rate simulation
          if (Math.random() > 0.05) {
            resolve(true);
          } else {
            reject(new Error("Network congestion. Please try again."));
          }
        }, 1500);
      });

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "", botfield: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong.");
    }
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <div className="flex items-center space-x-2 text-accent-primary mb-2">
            <Mail size={18} />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              09 // Contact
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Let's build something useful.
          </h2>
          <p className="text-gray-400 mt-2 max-w-2xl text-sm sm:text-base">
            I am currently open to internships, fresher opportunities, software projects, and collaborations involving web development, AI, IoT, and AgriTech.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="p-6 rounded-2xl bg-card border border-card-border space-y-6">
              <h3 className="text-lg font-bold text-white font-mono border-b border-card-border pb-3 uppercase tracking-wider">
                Direct Channels
              </h3>
              
              <div className="space-y-4">
                <a
                  href={`mailto:${socials.email}`}
                  className="flex items-center gap-3 p-3 rounded-lg bg-[#070a10] border border-card-border/60 text-gray-300 hover:text-white hover:border-red-400/40 transition-all duration-300 group"
                >
                  <div className="p-2 bg-red-400/10 text-red-400 rounded-md group-hover:scale-105 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Email</span>
                    <span className="text-sm font-semibold">{socials.email}</span>
                  </div>
                </a>

                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-[#070a10] border border-card-border/60 text-gray-300 hover:text-white hover:border-accent-primary/40 transition-all duration-300 group"
                >
                  <div className="p-2 bg-accent-primary/10 text-accent-primary rounded-md group-hover:scale-105 transition-transform">
                    <Linkedin size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">LinkedIn</span>
                    <span className="text-sm font-semibold">satheesh-kumar-aspiring-developer</span>
                  </div>
                </a>

                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-[#070a10] border border-card-border/60 text-gray-300 hover:text-white hover:border-accent-violet/40 transition-all duration-300 group"
                >
                  <div className="p-2 bg-accent-violet/10 text-accent-violet rounded-md group-hover:scale-105 transition-transform">
                    <Github size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">GitHub</span>
                    <span className="text-sm font-semibold">satheesh1929</span>
                  </div>
                </a>
              </div>
            </div>

            <a
              href={resumePath}
              download="Satheesh_Kumar_Resume.pdf"
              className="w-full py-4 bg-transparent border border-card-border hover:border-accent-primary text-gray-300 hover:text-white rounded-2xl flex items-center justify-center gap-2 font-mono font-bold tracking-wider uppercase text-sm hover:bg-[#131b2e] transition-all duration-300"
            >
              <FileText size={18} />
              Download Full Resume
            </a>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-2xl bg-card border border-card-border">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                  >
                    <div className="p-4 bg-emerald-400/10 text-emerald-400 rounded-full">
                      <CheckCircle size={48} />
                    </div>
                    <h3 className="text-xl font-bold text-white">Message Transmitted!</h3>
                    <p className="text-gray-400 text-sm max-w-sm">
                      Thank you for reaching out. I've received your query and will reply within approximately 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-6 px-4 py-2 border border-card-border text-gray-400 hover:text-white rounded-md text-xs font-mono font-semibold transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    noValidate
                  >
                    {/* Bot Honeypot */}
                    <div className="hidden">
                      <label htmlFor="botfield">Do not fill this if you are human:</label>
                      <input
                        type="text"
                        id="botfield"
                        name="botfield"
                        value={form.botfield}
                        onChange={handleChange}
                        autoComplete="off"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-xs font-mono font-bold text-gray-400 block">
                          YOUR NAME <span className="text-accent-primary">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          disabled={status === "loading"}
                          className="w-full bg-[#070a10] border border-card-border hover:border-gray-700 focus:border-accent-primary text-sm rounded-lg px-4 py-3 outline-none text-white transition-all disabled:opacity-50"
                          placeholder="Satheesh Kumar"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-mono font-bold text-gray-400 block">
                          EMAIL ADDRESS <span className="text-accent-primary">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          disabled={status === "loading"}
                          className="w-full bg-[#070a10] border border-card-border hover:border-gray-700 focus:border-accent-primary text-sm rounded-lg px-4 py-3 outline-none text-white transition-all disabled:opacity-50"
                          placeholder="satheesh@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-xs font-mono font-bold text-gray-400 block">
                        SUBJECT <span className="text-accent-primary">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        disabled={status === "loading"}
                        className="w-full bg-[#070a10] border border-card-border hover:border-gray-700 focus:border-accent-primary text-sm rounded-lg px-4 py-3 outline-none text-white transition-all disabled:opacity-50"
                        placeholder="Opportunity / Collaboration Inquiry"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-mono font-bold text-gray-400 block">
                        MESSAGE CONTENT <span className="text-accent-primary">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        disabled={status === "loading"}
                        rows={5}
                        className="w-full bg-[#070a10] border border-card-border hover:border-gray-700 focus:border-accent-primary text-sm rounded-lg px-4 py-3 outline-none text-white transition-all disabled:opacity-50 resize-y"
                        placeholder="Hi Satheesh, I noticed your interdisciplinary background in Software/IoT and AgriTech..."
                        required
                      />
                    </div>

                    {status === "error" && (
                      <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-lg flex items-center gap-2">
                        <AlertCircle size={16} className="shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full sm:w-fit px-6 py-3.5 bg-accent-primary text-[#0b0f17] font-bold rounded-lg hover:bg-accent-primary/95 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,210,255,0.2)] disabled:opacity-60 cursor-pointer"
                    >
                      {status === "loading" ? (
                        <>
                          <div className="w-4.5 h-4.5 border-2 border-[#0b0f17] border-t-transparent rounded-full animate-spin"></div>
                          <span>Transmitting...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
