import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiCalendar, FiAward } from 'react-icons/fi';
import { educationList } from '../data/portfolioData';
import Card from './common/Card';

export default function Education() {
  return (
    <section id="education" className="section-container">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 lg:mb-20">
        <span className="section-tag">
          <FiBookOpen className="w-3.5 h-3.5" /> Academic Background
        </span>
        <h2 className="section-title text-white">
          Education & <span className="gradient-accent-text">Structural Foundation</span>
        </h2>
        <p className="section-subtitle mx-auto">
          Deep computer science theory paired with rigorous structural and analytical engineering discipline.
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="max-w-4xl mx-auto relative px-2 sm:px-0">
        {/* Vertical Timeline Axis Line */}
        <div className="absolute top-6 bottom-6 left-4 sm:left-8 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-emerald-400 opacity-30 pointer-events-none" />

        {/* Timeline Cards Container */}
        <div className="flex flex-col gap-10 sm:gap-12 lg:gap-14">
          {educationList.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-8 group"
            >
              {/* Circular Milestone Node */}
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-slate-950 light:bg-slate-100 border-2 border-indigo-500 light:border-indigo-600 group-hover:border-emerald-400 group-hover:scale-110 flex items-center justify-center text-indigo-400 light:text-indigo-600 group-hover:text-emerald-400 shadow-lg shadow-indigo-500/20 transition-all duration-300 shrink-0 z-10 ml-0 sm:ml-2 mt-1">
                <FiBookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>

              {/* Education Card */}
              <Card className="flex-1 w-full">
                {/* Card Header Grid */}
                <div className="flex flex-col gap-3.5 border-b border-slate-800/80 light:border-slate-200 pb-5 mb-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    {/* Degree & Institution */}
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white light:text-slate-900 tracking-tight group-hover:text-indigo-300 light:group-hover:text-indigo-600 transition-colors leading-snug">
                        {edu.degree}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-slate-400 light:text-slate-500 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-indigo-500 light:bg-indigo-600 shrink-0" />
                        <span>{edu.institution}</span>
                      </p>
                    </div>

                    {/* Right Side: Info Badges (Duration & Grade) */}
                    <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                      {/* Duration Badge */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-slate-300 light:text-slate-700 text-xs font-mono font-semibold shadow-sm">
                        <FiCalendar className="w-3.5 h-3.5 text-indigo-400 light:text-indigo-600" />
                        <span>{edu.period}</span>
                      </div>

                      {/* Percentage / CGPA Badge */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 light:bg-emerald-50 border border-emerald-500/30 light:border-emerald-200 text-emerald-400 light:text-emerald-700 text-xs font-mono font-bold">
                        <FiAward className="w-3.5 h-3.5" />
                        <span>Grade: {edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Body: Details */}
                <div className="pt-1">
                  <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-[1.8] sm:leading-[1.85] font-normal">
                    {edu.details}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
