import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiCommand,
  FiMenu,
  FiX,
  FiFileText,
  FiUser,
  FiCode,
  FiBriefcase,
  FiBookOpen,
  FiFolder,
  FiMail,
  FiChevronRight
} from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ theme, toggleTheme, onOpenCommand, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about', id: 'about', icon: <FiUser className="w-4 h-4" /> },
    { name: 'Tech Stack', href: '#techstack', id: 'techstack', icon: <FiCode className="w-4 h-4" /> },
    { name: 'Experience', href: '#experience', id: 'experience', icon: <FiBriefcase className="w-4 h-4" /> },
    { name: 'Education', href: '#education', id: 'education', icon: <FiBookOpen className="w-4 h-4" /> },
    { name: 'Projects', href: '#projects', id: 'projects', icon: <FiFolder className="w-4 h-4" /> },
    { name: 'Contact', href: '#contact', id: 'contact', icon: <FiMail className="w-4 h-4" /> },
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[9000] transition-all duration-300 ${
          scrolled
            ? 'bg-slate-950/90 light:bg-white/90 backdrop-blur-xl border-b border-slate-800/80 light:border-slate-200 shadow-lg py-3'
            : 'bg-slate-950/40 light:bg-white/50 backdrop-blur-md border-b border-slate-800/30 light:border-slate-200/50 py-4'
        }`}
      >
        <div className="w-full px-4 sm:px-8 xl:px-12 flex items-center justify-between">

          {/* Column 1: Brand Logo (Left Aligned) */}
          <div className="flex items-center justify-start shrink-0">
            <a href="#hero" className="flex items-center gap-3 group focus:outline-none rounded-xl p-1">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-emerald-500 p-[1.5px] shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-slate-950 light:bg-white rounded-[10.5px] flex items-center justify-center font-bold text-white light:text-slate-900 text-base font-mono">
                  MS
                </div>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-extrabold text-slate-100 light:text-slate-900 group-hover:text-indigo-400 transition-colors tracking-tight text-base leading-tight">
                  Mohd Sajid
                </span>
                <span className="text-[10px] text-slate-400 light:text-slate-500 font-mono tracking-wider uppercase whitespace-nowrap">
                  Java Backend & AI Architect
                </span>
              </div>
            </a>
          </div>

          {/* Column 2: Professional Desktop Navigation Pill */}
          <nav className="hidden xl:flex items-center gap-1.5 bg-slate-900/85 light:bg-slate-100 px-3 py-1.5 rounded-full border border-slate-800/90 light:border-slate-200 backdrop-blur-xl shadow-xl shadow-slate-950/40 relative shrink-0 whitespace-nowrap">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none whitespace-nowrap ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-300 light:text-slate-600 hover:text-white light:hover:text-slate-900 hover:bg-slate-800/60 light:hover:bg-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-full shadow-md shadow-indigo-600/35 border border-indigo-400/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {link.name}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Column 3: Action Controls (Right Aligned) */}
          <div className="flex items-center justify-end gap-3 shrink-0">
            {/* Command Palette Button */}
            <button
              onClick={onOpenCommand}
              className="hidden sm:flex items-center gap-2 btn btn-sm btn-secondary font-mono text-xs h-9 px-3.5 rounded-xl border border-slate-800 light:border-slate-200 hover:border-indigo-500/40 transition-colors whitespace-nowrap"
              title="Open Command Palette (Ctrl+K)"
              aria-label="Open Command Palette"
            >
              <FiCommand className="w-3.5 h-3.5 text-indigo-400 light:text-indigo-600" />
              <span className="text-slate-300 light:text-slate-700 font-sans">Search</span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 light:bg-slate-200 text-[10px] border border-slate-700 light:border-slate-300 text-slate-400 light:text-slate-600">⌘K</kbd>
            </button>

            {/* Theme Switcher */}
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

            {/* Resume CTA Button */}
            <button
              onClick={onOpenResume}
              className="hidden sm:flex btn btn-sm btn-primary h-9 px-4 rounded-xl text-xs font-semibold shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all whitespace-nowrap"
              aria-label="Download Resume"
            >
              <FiFileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden btn btn-icon btn-secondary w-9 h-9 rounded-xl flex items-center justify-center border border-slate-800 light:border-slate-200 text-slate-200 light:text-slate-800"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Production-Quality Mobile Drawer Rendered via React Portal into document.body */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* 4. Dark Backdrop: rgba(0,0,0,0.45) & backdrop-filter blur(6px) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.45)',
                  backdropFilter: 'blur(6px)',
                  WebkitBackdropFilter: 'blur(6px)',
                  zIndex: 99998
                }}
              />

              {/* 1, 2, 3, 6, 8, 9. Production-Grade Right Slide Mobile Navigation Drawer */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={{
                  position: 'fixed',
                  top: 0,
                  right: 0,
                  height: '100vh',
                  width: '320px',
                  maxWidth: '90vw',
                  zIndex: 99999
                }}
                className="bg-slate-950 light:bg-white text-slate-100 light:text-slate-900 border-l border-slate-800 light:border-slate-200 shadow-2xl flex flex-col justify-between p-6 overflow-y-auto box-border text-left"
              >
                {/* 8. Vertically Aligned Header & Navigation Links */}
                <div className="space-y-6">
                  {/* Top Bar: Brand Logo + Close Button */}
                  <div className="flex items-center justify-between border-b border-slate-800 light:border-slate-200 pb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-emerald-500 p-[1.5px] shadow-lg shadow-indigo-500/20 shrink-0">
                        <div className="w-full h-full bg-slate-950 light:bg-white rounded-[10.5px] flex items-center justify-center font-bold text-white light:text-slate-900 text-base font-mono">
                          MS
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-extrabold text-white light:text-slate-900 text-base tracking-tight leading-tight">
                          Mohd Sajid
                        </span>
                        <span className="text-[10px] text-indigo-400 light:text-indigo-600 font-mono uppercase font-semibold">
                          Navigation Menu
                        </span>
                      </div>
                    </div>

                    {/* Close Button */}
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2 rounded-xl bg-slate-900 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-slate-300 light:text-slate-700 hover:text-white transition focus:outline-none"
                      aria-label="Close Mobile Navigation Drawer"
                    >
                      <FiX className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Navigation Links */}
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-slate-400 light:text-slate-500 block px-2 mb-2">
                      Navigation Sections:
                    </span>
                    {navLinks.map((link) => {
                      const isActive = activeSection === link.id;
                      return (
                        <a
                          key={link.name}
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                            isActive
                              ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-bold shadow-lg shadow-indigo-600/25 border border-indigo-400/40'
                              : 'text-slate-300 light:text-slate-700 hover:text-white light:hover:text-slate-900 hover:bg-slate-900/80 light:hover:bg-slate-100 border border-transparent'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={isActive ? 'text-white' : 'text-indigo-400 light:text-indigo-600'}>
                              {link.icon}
                            </span>
                            <span>{link.name}</span>
                          </div>
                          {isActive ? (
                            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400" />
                          ) : (
                            <FiChevronRight className="w-4 h-4 text-slate-500 opacity-60" />
                          )}
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* 8. Vertically Aligned Controls & Actions */}
                <div className="space-y-4 pt-6 border-t border-slate-800 light:border-slate-200 mt-6">
                  {/* Theme Toggle Bar inside Drawer */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 light:bg-slate-100 border border-slate-800 light:border-slate-200">
                    <span className="text-xs font-semibold text-slate-300 light:text-slate-700">Theme Appearance</span>
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                  </div>

                  {/* Search Command Palette Button */}
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenCommand();
                    }}
                    className="w-full btn btn-md btn-secondary justify-center text-xs font-semibold gap-2 py-3 rounded-xl border border-slate-800 light:border-slate-200"
                  >
                    <FiCommand className="text-indigo-400 light:text-indigo-600 w-4 h-4" />
                    <span>Search Command Palette (⌘K)</span>
                  </button>

                  {/* Resume CTA Button */}
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenResume();
                    }}
                    className="w-full btn btn-md btn-primary justify-center text-xs font-semibold gap-2 py-3 rounded-xl shadow-lg shadow-indigo-600/20"
                  >
                    <FiFileText className="w-4 h-4" />
                    <span>View Official Resume</span>
                  </button>

                  {/* Social Icons Row */}
                  <div className="flex items-center justify-center gap-5 pt-3 text-slate-400 light:text-slate-600">
                    <a
                      href="https://github.com/mohdsajid9600"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-900 light:bg-slate-100 border border-slate-800 light:border-slate-200 hover:text-indigo-400 light:hover:text-indigo-600 hover:border-indigo-500/40 transition"
                      aria-label="GitHub Profile"
                    >
                      <FaGithub className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/mohdsajid9600"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-900 light:bg-slate-100 border border-slate-800 light:border-slate-200 hover:text-indigo-400 light:hover:text-indigo-600 hover:border-indigo-500/40 transition"
                      aria-label="LinkedIn Profile"
                    >
                      <FaLinkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="https://leetcode.com/u/mohdsajid9600/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-900 light:bg-slate-100 border border-slate-800 light:border-slate-200 hover:text-indigo-400 light:hover:text-indigo-600 hover:border-indigo-500/40 transition"
                      aria-label="LeetCode Profile"
                    >
                      <FaCode className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
