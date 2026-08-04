import React from 'react';
import { motion } from 'framer-motion';
import { FiMessageSquare, FiStar } from 'react-icons/fi';
import { testimonials } from '../data/portfolioData';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-container">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="section-tag">
          <FiMessageSquare className="w-4 h-4" /> Endorsements
        </span>
        <h2 className="section-title text-white">
          Mentors & Peers <span className="gradient-accent-text">Feedback</span>
        </h2>
        <p className="section-subtitle mx-auto">
          What engineering leads and technical mentors say about my work ethic and backend capabilities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {testimonials.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="glass-card p-6 sm:p-8 border border-slate-800 hover:border-indigo-500/40 text-left flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                "{item.quote}"
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover border border-indigo-500/30"
              />
              <div>
                <h4 className="text-sm font-bold text-white">{item.name}</h4>
                <p className="text-xs text-slate-400">{item.role} • <span className="text-indigo-400">{item.company}</span></p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
