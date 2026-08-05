import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiCheck } from 'react-icons/fi';
import { experiences } from '../data/portfolioData';
import Card from './common/Card';

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 lg:mb-20">
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
      <div className="max-w-4xl mx-auto flex flex-col gap-10 sm:gap-12 lg:gap-14 text-left">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
          >
            <Card>
              <div className="flex flex-col gap-6 lg:gap-8">
                {/* Clean Stacked Header: Top Badge & Date/Location Row + Title */}
                <div className="flex flex-col gap-3.5 border-b border-slate-800/80 light:border-slate-200 pb-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    {/* Role Type Badge */}
                    <span className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-indigo-500/10 light:bg-indigo-50 text-indigo-300 light:text-indigo-700 border border-indigo-500/30 light:border-indigo-200 shrink-0">
                      {exp.type}
                    </span>

                    {/* Date & Location metadata */}
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 light:text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <FiCalendar className="text-indigo-400 light:text-indigo-600" /> {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FiMapPin className="text-emerald-400 light:text-emerald-600" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Main Role & Company */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white light:text-slate-900 tracking-tight leading-snug">
                    {exp.role} <span className="text-indigo-400 light:text-indigo-600 font-semibold">@ {exp.company}</span>
                  </h3>
                </div>

                {/* Role Description */}
                <p className="text-slate-300 light:text-slate-600 text-sm sm:text-base leading-[1.8] sm:leading-[1.85]">
                  {exp.description}
                </p>

                {/* Impact Highlights */}
                <div className="flex flex-col gap-3.5">
                  <h4 className="text-xs font-mono font-bold text-slate-400 light:text-slate-500 uppercase tracking-wider">
                    Key Accomplishments & Impact Metrics:
                  </h4>
                  <div className="flex flex-col gap-3">
                    {exp.highlights.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3.5 text-xs sm:text-sm text-slate-300 light:text-slate-700 bg-slate-950/60 light:bg-slate-50 p-4 sm:p-4.5 rounded-xl border border-slate-800/80 light:border-slate-200"
                      >
                        <FiCheck className="w-4 h-4 text-emerald-400 light:text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 pt-5 border-t border-slate-800/80 light:border-slate-200">
                  {exp.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-xl bg-slate-900/90 light:bg-slate-100 text-indigo-200 light:text-indigo-700 text-xs font-mono border border-slate-800/90 light:border-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
