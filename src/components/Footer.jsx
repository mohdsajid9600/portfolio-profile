import React, { useState, useEffect } from 'react';
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { personalDetails } from '../data/portfolioData';

export default function Footer({ onOpenResume }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setTime(new Date().toLocaleTimeString('en-US', options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/80 text-slate-400 py-12 sm:py-16 px-4 sm:px-8 lg:px-12 z-10 w-full">
      <div className="w-full flex flex-col gap-8 lg:gap-10">
        
        {/* Top Row: Brand & Quick Nav */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          <div className="text-center md:text-left space-y-1">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              <span>Mohd Sajid</span>
            </h3>
            <p className="text-xs text-slate-400 font-mono">
              Java Full Stack Developer & AI Integration Engineer
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-300">
            <a href="#about" className="hover:text-indigo-400 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 rounded">About</a>
            <a href="#techstack" className="hover:text-indigo-400 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 rounded">Tech Stack</a>
            <a href="#experience" className="hover:text-indigo-400 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 rounded">Experience</a>
            <a href="#education" className="hover:text-indigo-400 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 rounded">Education</a>
            <a href="#projects" className="hover:text-indigo-400 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 rounded">Projects</a>
            <button onClick={onOpenResume} className="hover:text-indigo-400 transition-colors font-semibold cursor-pointer">Resume</button>
            <a href="#contact" className="hover:text-indigo-400 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 rounded">Contact</a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="btn btn-icon btn-secondary shrink-0"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <FiArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Row: Clock & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2 font-mono">
            <span className="status-dot" />
            <span>IST (India Standard Time): <strong className="text-slate-300">{time}</strong></span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            <a
              href={personalDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-icon btn-ghost w-9 h-9"
              aria-label="GitHub Profile"
            >
              <FiGithub className="w-4 h-4" />
            </a>
            <a
              href={personalDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-icon btn-ghost w-9 h-9"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin className="w-4 h-4" />
            </a>
            <a
              href={personalDetails.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-icon btn-ghost w-9 h-9 text-amber-400 hover:text-amber-300"
              aria-label="LeetCode Profile"
            >
              <SiLeetcode className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalDetails.email}`}
              className="btn btn-icon btn-ghost w-9 h-9 text-emerald-400 hover:text-emerald-300"
              aria-label="Direct Email"
            >
              <FiMail className="w-4 h-4" />
            </a>
          </div>

          <div className="font-mono text-[11px]">
            © {new Date().getFullYear()} Mohd Sajid. Built with React & Vite.
          </div>
        </div>
      </div>
    </footer>
  );
}

