import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFolder, FiGithub, FiExternalLink, FiMaximize2, FiCheckCircle, FiCode, FiArrowRight, FiCpu } from 'react-icons/fi';
import { projects } from '../data/portfolioData';
import CodePlayground from './CodePlayground';

export default function Projects({ onSelectProject }) {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'Full Stack / Backend', 'Java Enterprise'];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-container">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="section-tag">
          <FiFolder className="w-3.5 h-3.5" /> Portfolio Showcase
        </span>
        <h2 className="section-title text-white">
          Featured Engineering <span className="gradient-accent-text">Projects & Architectures</span>
        </h2>
        <p className="section-subtitle mx-auto">
          Production-ready Java REST APIs, Spring Security frameworks, and AI-augmented web platforms.
        </p>
      </div>

      {/* Category Filter Tabs with Smooth Layout Animation */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12 sm:mb-14">
        {categories.map((cat) => {
          const isActive = filter === cat;
          const count = cat === 'all' ? projects.length : projects.filter(p => p.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`relative px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${isActive
                  ? 'text-white bg-indigo-600/90 shadow-lg shadow-indigo-600/30 border border-indigo-500/50'
                  : 'text-slate-400 hover:text-slate-200 bg-slate-900/60 border border-slate-800/80 hover:bg-slate-800/60'
                }`}
            >
              <span>{cat === 'all' ? 'All Projects' : cat}</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${isActive ? 'bg-indigo-950 text-indigo-200' : 'bg-slate-800 text-slate-400'
                }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Animated Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 lg:mb-20"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-card flex flex-col group text-left rounded-2xl border border-slate-800/90 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 overflow-hidden"
            >
              {/* Card Image Banner */}
              <div className="relative h-60 sm:h-64 overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-[0.9] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-95" />

                {/* Category & Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-slate-900/90 text-indigo-300 border border-slate-700/80 backdrop-blur-md shadow-md flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                    {project.badge || project.category}
                  </span>
                </div>

                {/* Quick Expand Button */}
                <button
                  onClick={() => onSelectProject(project)}
                  className="absolute top-4 right-4 p-2.5 rounded-xl bg-slate-900/90 text-slate-300 hover:text-white hover:bg-indigo-600 border border-slate-700/80 backdrop-blur-md transition-all duration-300 shadow-lg cursor-pointer group/btn"
                  title="View Architecture & Features"
                  aria-label="View Architecture & Features"
                >
                  <FiMaximize2 className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                </button>

                {/* Card Title on Banner */}
                <div className="absolute bottom-4 left-5 right-5">
                  <span className="text-[11px] text-indigo-400 font-mono font-semibold uppercase tracking-wider block mb-1">
                    {project.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-indigo-300 transition-colors leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between gap-6 bg-slate-950/40">
                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Architectural Highlights Preview */}
                <div className="space-y-2 pt-1 border-t border-slate-800/60">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-2">
                    Key Architecture Highlights:
                  </span>
                  {project.keyFeatures.slice(0, 2).map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <FiCheckCircle className="text-emerald-400 w-3.5 h-3.5 mt-0.5 shrink-0" />
                      <span className="line-clamp-1 leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                    Technologies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-slate-900/90 text-indigo-200 text-[11px] font-mono border border-slate-800/90 hover:border-indigo-500/40 hover:text-white transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modern Usable Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/80">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex-1 btn btn-sm btn-primary justify-center text-xs font-semibold py-2.5 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all gap-2"
                  >
                    <span>View Architecture</span>
                    <FiArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-secondary text-xs font-semibold px-3 py-2.5 gap-1.5"
                      title="View Source Code on GitHub"
                      aria-label="View Source Code on GitHub"
                    >
                      <FiGithub className="w-4 h-4 text-slate-300" />
                      <span className="hidden sm:inline">Code</span>
                    </a>
                  )}

                  {project.liveDemo && project.liveDemo !== '#' && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-secondary text-xs font-semibold px-3 py-2.5 text-emerald-400 border-emerald-500/30 hover:border-emerald-500/60 gap-1.5"
                      title="View Live Demo"
                      aria-label="View Live Demo"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span className="hidden sm:inline">Live</span>
                      <FiExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

