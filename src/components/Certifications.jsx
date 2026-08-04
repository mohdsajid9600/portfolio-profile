import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink, FiCheckCircle, FiClock, FiCode } from 'react-icons/fi';
import { certifications, achievements } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="section-container">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="section-tag">
          <FiAward className="w-3.5 h-3.5" /> Credentials & Badges
        </span>
        <h2 className="section-title text-white">
          Certifications & <span className="gradient-accent-text">Key Achievements</span>
        </h2>
        <p className="section-subtitle mx-auto">
          Industrial certifications, bootcamp achievements, and algorithmic milestones.
        </p>
      </div>

      {/* Achievements Cards Grid (3 Cols Desktop, 2 Cols Tablet, 1 Col Mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
        {achievements.map((ach, idx) => (
          <motion.div
            key={ach.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-card p-6 sm:p-7 text-left flex flex-col justify-between h-full shadow-card hover:shadow-glow"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-indigo-400">{ach.metric}</span>
                <span className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 font-semibold border border-indigo-500/20">
                  {ach.platform}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white leading-snug">{ach.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{ach.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications Grid (3 Cols Desktop, 2 Cols Tablet/Laptop, 1 Col Mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-card p-6 sm:p-7 flex flex-col justify-between h-full shadow-card hover:shadow-glow hover:-translate-y-1.5 transition-all duration-300"
          >
            <div className="flex flex-col gap-4">
              {/* 1 & 2. Top Badges Row: Institution (Left) & Status (Right) */}
              <div className="flex items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                {/* 1. Institution Badge */}
                <span className="text-xs font-semibold px-3 py-1 rounded-md bg-slate-900 text-indigo-300 border border-slate-800">
                  {cert.issuer}
                </span>

                {/* 2. Status Badge */}
                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1.5 ${cert.status === 'Verified'
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                    : 'bg-amber-500/10 text-amber-300 border border-amber-500/30'
                  }`}>
                  <FiCheckCircle className="w-3.5 h-3.5" />
                  <span>{cert.status}</span>
                </span>
              </div>

              {/* 3. Certification Title */}
              <h3 className="text-lg font-extrabold text-white leading-snug tracking-tight">
                {cert.title}
              </h3>

              {/* 4. Duration / Completion Status */}
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                <FiClock className="text-indigo-400 w-3.5 h-3.5 shrink-0" />
                <span>{cert.date}</span>
              </div>

              {/* 5. Short Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {cert.description}
              </p>

              {/* 6. Skills Covered (Technology Chips) */}
              {cert.skillsCovered && (
                <div className="flex flex-col gap-1.5 pt-1">
                  <span className="text-[10px] uppercase font-mono font-semibold text-slate-400">Skills Covered</span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsCovered.map((skill, sIdx) => (
                      <span key={sIdx} className="px-2.5 py-0.5 rounded-md bg-slate-950 text-indigo-300 text-[11px] font-mono border border-slate-800">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 7. Credential Link Button (Always pinned to bottom) */}
            <div className="pt-4 mt-4 border-t border-slate-800/80">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-secondary w-full justify-center text-xs font-semibold"
              >
                <span>Verify Issuer Credential</span>
                <FiExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
