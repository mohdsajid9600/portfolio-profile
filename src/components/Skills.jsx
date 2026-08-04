import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCheckCircle, FiZap } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

export default function Skills() {
  const coreCompetencies = [
    {
      title: "Core Java & Multithreading",
      desc: "Deep mastery of Object-Oriented Design, Java Collections Framework, Streams API, and Concurrency patterns.",
      percent: 95
    },
    {
      title: "Spring Security & RBAC Auth",
      desc: "Implementation of role-based security, principal `/me` endpoints, JWT token authentication, and CORS control.",
      percent: 90
    },
    {
      title: "RESTful API Architecture",
      desc: "Layered Controller-Service-Repository separation, global error handling (@ControllerAdvice), and Swagger documentation.",
      percent: 95
    },
    {
      title: "MySQL & Query Latency Optimization",
      desc: "Schema normalization, indexing strategies, JPA persistence tuning, and sub-second response times.",
      percent: 88
    },
    {
      title: "AI-Augmented Developer Workflows",
      desc: "Using GitHub Copilot & LLM prompt engineering to triple code generation speed and automate unit test coverage.",
      percent: 95
    },
    {
      title: "Cloud & Deployment Pipelines",
      desc: "Continuous integration & deployment of backend APIs on Render and web interfaces on Vercel.",
      percent: 88
    }
  ];

  return (
    <section id="skills" className="section-container">
      <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
        <span className="section-tag">
          <FiAward className="w-3.5 h-3.5" /> Core Competencies
        </span>
        <h2 className="section-title text-white">
          Algorithmic Rigor & <span className="gradient-accent-text">Engineering Proficiency</span>
        </h2>
        <p className="section-subtitle mx-auto">
          Combining mathematical problem solving with enterprise-grade backend development standards.
        </p>
      </div>

      {/* LeetCode Algorithmic Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-6 sm:p-8 lg:p-10 mb-14 lg:mb-16 border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-slate-900 to-indigo-950/40 relative overflow-hidden"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 text-left">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/40 shrink-0">
              <SiLeetcode className="w-9 h-9 sm:w-10 sm:h-10" />
            </div>
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold mb-1 border border-amber-500/30">
                <FiZap /> Solved 400+ Algorithmic Problems
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">
                LeetCode & AccioJob Coding Milestone
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                Demonstrated algorithmic problem solving across Arrays, HashMaps, Dynamic Programming, Trees, Graphs, and System Design.
              </p>
            </div>
          </div>

          <a
            href="https://leetcode.com/u/mohdsajid9600/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-md bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold uppercase tracking-wider shrink-0 shadow-lg shadow-amber-500/20"
          >
            Verify LeetCode Profile
          </a>
        </div>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-left">
        {coreCompetencies.map((comp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass-card p-6 sm:p-7 space-y-3.5 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2.5">
                  <FiCheckCircle className="text-indigo-400 w-4 h-4 shrink-0" />
                  <span>{comp.title}</span>
                </h3>
                <span className="text-xs font-mono font-bold text-emerald-400">{comp.percent}%</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {comp.desc}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800 pt-1">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${comp.percent}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
