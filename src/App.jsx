import React, { useState, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import ResumeModal from './components/ResumeModal';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  // Modals state
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Keyboard shortcut Ctrl+K / Cmd+K for Command Palette
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500/30 selection:text-white overflow-x-hidden font-sans">
      {/* Background Particles Canvas */}
      <ParticleBackground />

      {/* Custom Glowing Cursor */}
      <CustomCursor />

      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Header / Navbar */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenCommand={() => setCommandPaletteOpen(true)}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Main Sections with Structured Dividers */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setResumeModalOpen(true)} />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        <About />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        <TechStack />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        <Experience />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        <Education />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        <Certifications />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeModalOpen(true)} />

      {/* Command Palette Modal */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onSelectSection={handleSelectSection}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Resume Preview & Download Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      {/* Detailed Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
