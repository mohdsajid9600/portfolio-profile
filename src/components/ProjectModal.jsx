import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiX, FiGithub, FiExternalLink, FiCheckCircle, FiServer, 
  FiLayers, FiShield, FiCpu, FiDatabase, FiCode, FiArrowUpRight 
} from 'react-icons/fi';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 320 }}
          className="relative w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-y-auto z-10 text-slate-100 p-5 sm:p-8 text-left"
        >
          {/* Sticky Header Action Bar */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6 sticky top-0 bg-slate-900/95 backdrop-blur-md z-20 pt-1">
            <div className="flex items-center gap-3">
              <span className="text-xs px-3 py-1 rounded-full bg-indigo-600/90 text-white font-mono font-semibold backdrop-blur-md shadow-sm">
                {project.badge || project.category}
              </span>
              <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                Architecture Blueprint & Specs
              </span>
            </div>

            <div className="flex items-center gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-secondary text-xs font-semibold gap-1.5"
                  title="View GitHub Repository"
                >
                  <FiGithub className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Repository</span>
                </a>
              )}
              {project.liveDemo && project.liveDemo !== '#' && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-primary text-xs font-semibold gap-1.5"
                  title="Launch Live Demo"
                >
                  <FiExternalLink className="w-3.5 h-3.5" />
                  <span>Live System</span>
                </a>
              )}
              <button
                onClick={onClose}
                className="btn btn-icon btn-secondary"
                aria-label="Close Project Modal"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Project Image Banner & Floating Badges */}
          <div className="relative h-60 sm:h-72 lg:h-80 rounded-2xl overflow-hidden mb-8 border border-slate-800 shadow-xl group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.9] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-95" />
            
            {/* Title Overlay */}
            <div className="absolute bottom-5 left-5 right-5 space-y-1">
              <span className="text-xs text-indigo-400 font-mono font-semibold uppercase tracking-wider block">
                {project.subtitle}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Structured Content Grid */}
          <div className="space-y-8">
            {/* 1. Architecture Overview */}
            <div className="space-y-3 bg-slate-950/60 p-5 rounded-2xl border border-slate-800/80">
              <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
                <FiCpu className="text-indigo-400 w-4 h-4" /> System Overview & Engineering Scope
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                {project.description}
              </p>
            </div>

            {/* 2. Key Architectural Highlights & Capabilities */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
                <FiLayers className="text-indigo-400 w-4 h-4" /> Key Architectural Highlights & Security Implementation
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {project.keyFeatures.map((feat, i) => (
                  <div 
                    key={i} 
                    className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 bg-slate-950/70 p-4 rounded-xl border border-slate-800/80 hover:border-indigo-500/40 transition-colors"
                  >
                    <FiCheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Tech Stack Breakdown */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
                <FiCode className="text-indigo-400 w-4 h-4" /> Stack & Integration Matrix
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs font-mono font-semibold rounded-lg bg-slate-950 text-indigo-300 border border-slate-800 hover:border-indigo-500/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 4. Footer Action Links */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-slate-800">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[160px] btn btn-secondary justify-center text-xs font-semibold py-3 gap-2"
                >
                  <FiGithub className="w-4 h-4" />
                  <span>Inspect GitHub Repository</span>
                </a>
              )}

              {project.liveDemo && project.liveDemo !== '#' && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[160px] btn btn-primary justify-center text-xs font-semibold py-3 gap-2 shadow-lg shadow-indigo-600/30"
                >
                  <span>Launch Live System</span>
                  <FiArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

