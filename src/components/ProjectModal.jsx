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
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
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
          className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-y-auto z-10 text-slate-100 p-6 sm:p-8 lg:p-10 text-left"
        >
          {/* Sticky Header Action Bar */}
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-5 mb-8 sticky top-0 bg-slate-900/95 backdrop-blur-md z-20 -mx-6 sm:-mx-8 lg:-mx-10 px-6 sm:px-8 lg:px-10 pt-1">
            <div className="flex items-center gap-3">
              <span className="text-xs px-3.5 py-1 rounded-full bg-indigo-600/90 text-white font-mono font-semibold backdrop-blur-md shadow-sm">
                {project.badge || project.category}
              </span>
              <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                Architecture Blueprint & Specs
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800/80 hover:bg-slate-700/90 border border-slate-700/80 hover:border-slate-600 transition-all duration-200 shadow-sm group"
                  title="View GitHub Repository"
                >
                  <FiGithub className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
                  <span className="hidden sm:inline">Repository</span>
                </a>
              )}
              {project.liveDemo && project.liveDemo !== '#' && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 border border-indigo-400/30 shadow-md shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all duration-200 group"
                  title="Launch Live Demo"
                >
                  <FiExternalLink className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                  <span>Live System</span>
                </a>
              )}
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700/90 border border-slate-700/80 transition-all duration-200"
                aria-label="Close Project Modal"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Project Image Banner & Floating Title */}
          <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden mb-8 sm:mb-10 border border-slate-800/80 shadow-xl group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.9] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-95" />

            {/* Title Overlay with Generous Spacing */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10 space-y-1.5">
              <span className="text-xs text-indigo-400 font-mono font-semibold uppercase tracking-wider block">
                {project.subtitle}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Structured Content Groups (32px - 40px Spacing) */}
          <div className="flex flex-col gap-8 sm:gap-10">
            {/* 1. Architecture Overview */}
            <div className="space-y-4 bg-slate-950/70 p-6 sm:p-7 lg:p-8 rounded-2xl border border-slate-800/80 shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-3 border-b border-slate-800/80 pb-3">
                <FiCpu className="text-indigo-400 w-4.5 h-4.5" /> <span>System Overview & Engineering Scope</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-[1.8] sm:leading-[1.85]">
                {project.description}
              </p>
            </div>

            {/* 2. Key Architectural Highlights & Capabilities */}
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-3 border-b border-slate-800/80 pb-3">
                <FiLayers className="text-indigo-400 w-4.5 h-4.5" /> <span>Key Architectural Highlights & Security Implementation</span>
              </h3>
              <div className="grid grid-cols-1 gap-3.5 sm:gap-4">
                {project.keyFeatures.map((feat, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 text-xs sm:text-sm text-slate-200 bg-slate-950/70 p-4 sm:p-5 rounded-xl border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-200 min-h-[56px]"
                  >
                    <FiCheckCircle className="w-4.5 h-4.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-[1.75]">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Tech Stack Breakdown */}
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-3 border-b border-slate-800/80 pb-3">
                <FiCode className="text-indigo-400 w-4.5 h-4.5" /> <span>Stack & Integration Matrix</span>
              </h3>
              <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-1">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 text-xs font-mono font-semibold rounded-xl bg-slate-950/90 text-indigo-300 border border-slate-800/90 hover:border-indigo-500/40 hover:text-white transition-colors shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 4. Dedicated Footer Action Links */}
            <div className="pt-6 sm:pt-8 mt-2 border-t border-slate-800/80 flex flex-col sm:flex-row items-center gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700/80 hover:border-slate-600 shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer"
                >
                  <FiGithub className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                  <span>Inspect GitHub Repository</span>
                </a>
              )}

              {project.liveDemo && project.liveDemo !== '#' && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 border border-indigo-400/30 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
                >
                  <span>Launch Live System</span>
                  <FiArrowUpRight className="w-4 h-4 text-indigo-200 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}


