import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiCheck } from 'react-icons/fi';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
        <span className="section-tag">
          <FiBriefcase className="w-3.5 h-3.5" /> Career Journey
        </span>
        <h2 className="section-title text-white">
          Work Experience & <span className="gradient-accent-text">Impact Metrics</span>
        </h2>
        <p className="section-subtitle mx-auto">
          Delivering production-grade backend code, optimizing database performance, and driving AI-augmented engineering workflows.
        </p>
      </div>

      {/* Experience Cards Container */}
      <div className="max-w-4xl mx-auto flex flex-col gap-6 sm:gap-8 lg:gap-10 text-left">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="glass-card p-6 sm:p-8 lg:p-10 flex flex-col gap-6 lg:gap-8 relative border border-slate-800/80 hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300"
          >
            {/* Top Row: Role & Company */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-5">
              <div className="flex flex-col gap-1.5">
                <span className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 w-fit mb-0.5">
                  {exp.type}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {exp.role} <span className="text-indigo-400 font-semibold">@ {exp.company}</span>
                </h3>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono text-slate-400 shrink-0">
                <span className="flex items-center gap-1.5">
                  <FiCalendar className="text-indigo-400" /> {exp.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <FiMapPin className="text-emerald-400" /> {exp.location}
                </span>
              </div>
            </div>

            {/* Role Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-[1.8] sm:leading-[1.85]">
              {exp.description}
            </p>

            {/* Impact Highlights */}
            <div className="flex flex-col gap-3.5">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                Key Accomplishments & Impact Metrics:
              </h4>
              <div className="flex flex-col gap-3">
                {exp.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-3.5 text-xs sm:text-sm text-slate-300 bg-slate-950/60 p-4 lg:p-4.5 rounded-xl border border-slate-800/80 hover:border-slate-700/80 transition-colors">
                    <FiCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-[1.75]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
              {exp.tech.map((t, i) => (
                <span key={i} className="px-3 py-1.5 rounded-xl bg-slate-900/90 text-indigo-200 text-xs font-mono border border-slate-800/90 hover:border-indigo-500/40 hover:text-white transition-colors">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

