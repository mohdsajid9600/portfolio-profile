import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCommand, FiMenu, FiX, FiFileText } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ theme, toggleTheme, onOpenCommand, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Tech Stack', href: '#techstack', id: 'techstack' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section ScrollSpy Observer
      const sections = ['hero', ...navLinks.map((l) => l.id)];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9000] transition-all duration-300 ${scrolled
          ? 'bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 shadow-lg py-3'
          : 'bg-slate-950/40 backdrop-blur-md border-b border-slate-800/30 py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Column 1: Brand Logo (Left Aligned) */}
        <div className="flex-1 flex items-center justify-start">
          <a href="#hero" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-xl p-1">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-emerald-500 p-[1.5px] shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10.5px] flex items-center justify-center font-bold text-white text-base font-mono">
                MS
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-slate-100 group-hover:text-indigo-400 transition-colors tracking-tight text-base leading-tight">
                Mohd Sajid
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">
                Java Backend & AI Architect
              </span>
            </div>
          </a>
        </div>

        {/* Column 2: Desktop Navigation Pill (Centered) */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-full border border-slate-800/80 backdrop-blur-md shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 focus-visible:ring-2 focus-visible:ring-indigo-500 ${isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                  }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Column 3: Action Controls (Right Aligned) */}
        <div className="flex-1 flex items-center justify-end gap-3">
          {/* Command Palette Button */}
          <button
            onClick={onOpenCommand}
            className="hidden sm:flex items-center gap-2 btn btn-sm btn-secondary font-mono text-xs h-9 px-3.5 rounded-xl"
            title="Open Command Palette (Ctrl+K)"
            aria-label="Open Command Palette"
          >
            <FiCommand className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-slate-300 font-sans">Search</span>
            <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] border border-slate-700 text-slate-400">⌘K</kbd>
          </button>

          {/* Theme Switcher */}
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

          {/* Resume CTA Button */}
          <button
            onClick={onOpenResume}
            className="hidden sm:flex btn btn-sm btn-primary h-9 px-4 rounded-xl text-xs font-semibold"
            aria-label="Download Resume"
          >
            <FiFileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden btn btn-icon btn-secondary w-9 h-9 rounded-xl"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Animated Slide-Over Mobile Sidebar Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[9999]"
            />

            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="lg:hidden fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-slate-950/95 border-l border-slate-800/90 backdrop-blur-2xl shadow-2xl z-[10000] flex flex-col justify-between p-6 overflow-y-auto text-left"
            >
              {/* Drawer Top Bar: Brand & Close */}
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-emerald-500 p-[1.5px] shadow-lg shadow-indigo-500/20">
                      <div className="w-full h-full bg-slate-950 rounded-[10.5px] flex items-center justify-center font-bold text-white text-base font-mono">
                        MS
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-extrabold text-white text-base tracking-tight">Mohd Sajid</span>
                      <span className="text-[10px] text-slate-400 font-mono uppercase">Navigation Menu</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition"
                    aria-label="Close Mobile Navigation Drawer"
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-slate-400 block px-2 mb-1">
                    Menu Sections:
                  </span>
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.id;
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${isActive
                            ? 'bg-indigo-600/90 text-white font-bold shadow-lg shadow-indigo-600/20 border border-indigo-500/40'
                            : 'text-slate-300 hover:text-white hover:bg-slate-900/80'
                          }`}
                      >
                        <span>{link.name}</span>
                        {isActive && <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400" />}
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Drawer Bottom Actions */}
              <div className="space-y-4 pt-6 border-t border-slate-800/80 mt-6">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCommand();
                  }}
                  className="w-full btn btn-md btn-secondary justify-center text-xs font-semibold gap-2 py-2.5"
                >
                  <FiCommand className="text-indigo-400 w-4 h-4" />
                  <span>Search Command Palette</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full btn btn-md btn-primary justify-center text-xs font-semibold gap-2 py-2.5 shadow-lg shadow-indigo-600/20"
                >
                  <FiFileText className="w-4 h-4" />
                  <span>View Official Resume</span>
                </button>

                {/* Social Links Row */}
                <div className="flex items-center justify-center gap-4 pt-2 text-slate-400 text-xs font-mono">
                  <a href="https://github.com/mohdsajid9600" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">GitHub</a>
                  <span>•</span>
                  <a href="https://www.linkedin.com/in/mohdsajid9600" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">LinkedIn</a>
                  <span>•</span>
                  <a href="https://leetcode.com/u/mohdsajid9600/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">LeetCode</a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
