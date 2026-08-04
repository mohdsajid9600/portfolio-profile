import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCode } from 'react-icons/fi';
import { FaJava, FaServer, FaBrain, FaDatabase, FaReact, FaLock, FaGithub } from 'react-icons/fa';
import { SiSpringboot, SiSpringsecurity, SiHibernate, SiSpring, SiMysql, SiJavascript, SiGithubcopilot, SiPostman, SiApachemaven, SiVercel, SiIntellijidea, SiApachetomcat } from 'react-icons/si';
import { TbBrandOpenai } from 'react-icons/tb';
import { techCategories } from '../data/portfolioData';

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('all');

  const iconMap = {
    FaJava: <FaJava className="w-5 h-5 text-orange-500" />,
    SiSpringboot: <SiSpringboot className="w-5 h-5 text-emerald-500" />,
    SiSpringsecurity: <SiSpringsecurity className="w-5 h-5 text-emerald-400" />,
    SiHibernate: <SiHibernate className="w-5 h-5 text-amber-500" />,
    SiSpring: <SiSpring className="w-5 h-5 text-emerald-500" />,
    FaServer: <FaServer className="w-5 h-5 text-indigo-400" />,
    FaLock: <FaLock className="w-5 h-5 text-purple-400" />,
    SiGithubcopilot: <SiGithubcopilot className="w-5 h-5 text-cyan-400" />,
    SiOpenai: <TbBrandOpenai className="w-5 h-5 text-emerald-400" />,
    SiMysql: <SiMysql className="w-5 h-5 text-blue-400" />,
    FaDatabase: <FaDatabase className="w-5 h-5 text-indigo-400" />,
    FaReact: <FaReact className="w-5 h-5 text-cyan-400" />,
    SiJavascript: <SiJavascript className="w-5 h-5 text-yellow-400" />,
    FaGithub: <FaGithub className="w-5 h-5 text-slate-200" />,
    SiApachemaven: <SiApachemaven className="w-5 h-5 text-rose-400" />,
    SiPostman: <SiPostman className="w-5 h-5 text-orange-400" />,
    SiVercel: <SiVercel className="w-5 h-5 text-slate-100" />,
    SiIntellijidea: <SiIntellijidea className="w-5 h-5 text-pink-500" />,
    SiApachetomcat: <SiApachetomcat className="w-5 h-5 text-amber-600" />
  };

  const filteredCategories = activeCategory === 'all'
    ? techCategories
    : techCategories.filter(cat => cat.id === activeCategory);

  return (
    <section id="techstack" className="section-container">
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="section-tag">
          <FiCode className="w-3.5 h-3.5" /> Technical Stack
        </span>
        <h2 className="section-title text-white">
          Production-Grade <span className="gradient-accent-text">Technologies & Tooling</span>
        </h2>
        <p className="section-subtitle mx-auto">
          Every tool, framework, and language in my stack is chosen for high reliability, performance, and modern engineering standards.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12 sm:mb-14">
        <button
          onClick={() => setActiveCategory('all')}
          className={`btn btn-sm ${activeCategory === 'all' ? 'btn-primary' : 'btn-secondary'}`}
        >
          All Categories
        </button>
        {techCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`btn btn-sm ${activeCategory === cat.id ? 'btn-primary' : 'btn-secondary'}`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Display Categories */}
      <div className="flex flex-col gap-12 sm:gap-14">
        {filteredCategories.map((category) => (
          <div key={category.id} className="flex flex-col gap-5 text-left">
            <h3 className="text-lg sm:text-xl font-bold text-slate-200 flex items-center gap-3 border-b border-slate-800/80 pb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 shrink-0" />
              <span>{category.name}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="glass-card p-5 sm:p-6 flex items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-slate-950 border border-slate-800 shrink-0 flex items-center justify-center">
                    {iconMap[skill.icon] || <FiCode className="w-5 h-5 text-indigo-400" />}
                  </div>
                  <div className="flex-1 flex flex-col gap-2 min-w-0">
                    <div className="flex justify-between items-center">
                      <h4 className="text-sm font-bold text-white leading-snug truncate">{skill.name}</h4>
                      <span className="text-xs font-mono font-bold text-indigo-400 shrink-0">{skill.level}%</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">{skill.highlight}</p>
                    
                    {/* Animated Skill Level Bar */}
                    <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800 mt-1">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
