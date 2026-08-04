import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight, FiZap, FiCheckCircle } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { personalDetails } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  // Live Typing Title Effect
  const titles = [
    "Java Backend Developer",
    "Spring Boot & Microservices Architect",
    "AI-Augmented Software Engineer",
    "High-Performance REST API Specialist"
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentFullText = titles[currentTitleIndex];
      if (!isDeleting) {
        setDisplayedText(currentFullText.substring(0, displayedText.length + 1));
        if (displayedText === currentFullText) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setDisplayedText(currentFullText.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 35 : 70);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex]);

  return (
    <section id="hero" className="relative min-h-[92vh] pt-36 lg:pt-40 pb-24 lg:pb-28 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-indigo-600/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-left flex flex-col gap-6"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-sm w-fit">
              <span className="status-dot" />
              <span className="text-xs font-semibold text-slate-300">
                Available for Java Full Stack Developer & AI Engineering Roles
              </span>
            </div>

            {/* Main Headline */}
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
                Hi, I'm <span className="gradient-accent-text">{personalDetails.name}</span>
              </h1>
              {/* Typing Animation Title */}
              <div className="h-12 sm:h-14 lg:h-16 flex items-center">
                <span className="text-xl sm:text-3xl lg:text-4xl font-extrabold font-mono text-indigo-400">
                  {displayedText}
                </span>
                <span className="w-0.5 h-7 sm:h-8 lg:h-9 bg-indigo-500 ml-1.5 animate-pulse" />
              </div>
            </div>

            {/* Subtitle summary */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Engineered for high-throughput enterprise systems. Expert in <span className="text-white font-semibold">Core Java (JDK 8-17)</span>, <span className="text-white font-semibold">Spring Boot</span>, <span className="text-white font-semibold">Spring Security</span>, and <span className="text-emerald-400 font-semibold">AI-Augmented Developer Workflows</span>. 400+ LeetCode problems solved.
            </p>

            {/* CTA Buttons - Standardized Button System */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a href="#projects" className="btn btn-lg btn-primary">
                <span>Explore Featured Work</span>
                <FiArrowRight className="w-4 h-4" />
              </a>

              <button onClick={onOpenResume} className="btn btn-lg btn-secondary">
                <FiDownload className="w-4 h-4 text-indigo-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
              <span className="text-xs text-slate-400 font-mono uppercase tracking-wider font-semibold">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href={personalDetails.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-icon btn-secondary"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <FiGithub className="w-4.5 h-4.5" />
                </a>
                <a
                  href={personalDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-icon btn-secondary"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <FiLinkedin className="w-4.5 h-4.5" />
                </a>
                <a
                  href={personalDetails.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-icon btn-secondary text-amber-400 hover:text-amber-300"
                  title="LeetCode Profile"
                  aria-label="LeetCode Profile"
                >
                  <SiLeetcode className="w-4.5 h-4.5" />
                </a>
                <a
                  href={`mailto:${personalDetails.email}`}
                  className="btn btn-icon btn-secondary text-emerald-400 hover:text-emerald-300"
                  title="Direct Email"
                  aria-label="Direct Email"
                >
                  <FiMail className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Profile Picture Card & Stats Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center py-4"
          >
            {/* Glowing Outer Frame */}
            <div className="relative w-72 h-72 sm:w-84 sm:h-84 lg:w-92 lg:h-92 rounded-3xl p-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-emerald-400 shadow-2xl shadow-indigo-500/25">
              <div className="w-full h-full rounded-[22px] overflow-hidden bg-slate-950 relative group">
                <img
                  src={personalDetails.profileImage}
                  alt={personalDetails.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter brightness-[1.03] contrast-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Badge 1: LeetCode DSA Metric */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-3 -left-4 sm:bottom-4 sm:-left-6 bg-slate-900/95 border border-slate-700/80 p-3.5 sm:p-4 rounded-2xl backdrop-blur-xl shadow-2xl flex items-center gap-3 z-20"
              >
                <div className="p-2 sm:p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 shrink-0">
                  <FiZap className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-extrabold text-white font-mono">400+</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 font-semibold">DSA Solved</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: AI Augmented Workflow */}
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-3 -right-4 sm:top-4 sm:-right-6 bg-slate-900/95 border border-slate-700/80 p-3.5 sm:p-4 rounded-2xl backdrop-blur-xl shadow-2xl flex items-center gap-3 z-20"
              >
                <div className="p-2 sm:p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shrink-0">
                  <FiCheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white">AI Copilot</div>
                  <div className="text-[10px] sm:text-[11px] text-emerald-400 font-semibold">Native Workflow</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Counter Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-14 sm:mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 lg:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md shadow-xl relative z-10"
        >
          {personalDetails.heroStats.map((stat, idx) => (
            <div key={idx} className="text-center p-3 border-r last:border-r-0 border-slate-800/60 flex flex-col justify-center gap-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-mono flex items-center justify-center">
                <span>{stat.value}</span>
                <span className="text-indigo-400">{stat.suffix}</span>
              </div>
              <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
