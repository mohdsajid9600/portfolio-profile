import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiCheck } from 'react-icons/fi';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
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

      <div className="max-w-4xl mx-auto flex flex-col gap-6 sm:gap-8 text-left">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="glass-card p-6 sm:p-8 flex flex-col gap-5 relative"
          >
            {/* Top Row: Role & Company */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-semibold px-3 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 w-fit mb-0.5">
                  {exp.type}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {exp.role} <span className="text-indigo-400">@ {exp.company}</span>
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
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {exp.description}
            </p>

            {/* Impact Highlights */}
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Key Accomplishments & Impact Metrics
              </h4>
              <div className="flex flex-col gap-2.5">
                {exp.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 bg-slate-950/60 p-3.5 sm:p-4 rounded-xl border border-slate-800/80">
                    <FiCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-800/80">
              {exp.tech.map((t, i) => (
                <span key={i} className="px-3 py-1 rounded-lg bg-slate-900 text-slate-300 text-xs font-mono border border-slate-800">
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
