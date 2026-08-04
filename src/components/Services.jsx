import React from 'react';
import { motion } from 'framer-motion';
import { FiServer, FiDatabase, FiCheck, FiCpu, FiCode } from 'react-icons/fi';
import { FaBrain, FaLaptopCode } from 'react-icons/fa';
import { services } from '../data/portfolioData';

export default function Services() {
  const iconMap = {
    FaServer: <FiServer className="w-6 h-6 text-indigo-400" />,
    FaDatabase: <FiDatabase className="w-6 h-6 text-purple-400" />,
    FaBrain: <FaBrain className="w-6 h-6 text-emerald-400" />,
    FaLaptopCode: <FaLaptopCode className="w-6 h-6 text-cyan-400" />
  };

  return (
    <section id="services" className="section-container">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="section-tag">
          <FiCpu className="w-4 h-4" /> Capabilities & Services
        </span>
        <h2 className="section-title text-white">
          Engineering & <span className="gradient-accent-text">Architectural Services</span>
        </h2>
        <p className="section-subtitle mx-auto">
          Tailored backend development, database optimization, and AI integration services for high-growth tech platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-card p-8 border border-slate-800 hover:border-indigo-500/40 text-left space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 shrink-0">
                {iconMap[service.icon] || <FiServer className="w-6 h-6 text-indigo-400" />}
              </div>
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {service.description}
            </p>

            <div className="space-y-2 pt-2 border-t border-slate-800/80">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Included Capabilities</h4>
              {service.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs text-slate-300">
                  <FiCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
