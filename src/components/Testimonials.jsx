import React from 'react';
import { motion } from 'framer-motion';
import { FiMessageSquare, FiStar } from 'react-icons/fi';
import { testimonials } from '../data/portfolioData';
import CardGrid from './common/CardGrid';
import Card, { CardDescription } from './common/Card';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-container">
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 lg:mb-20">
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

      <div className="max-w-5xl mx-auto">
        <CardGrid cols={2}>
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="h-full"
            >
              <Card>
                <div className="flex flex-col justify-between h-full space-y-6">
                  <div className="space-y-4">
                    <div className="flex gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <FiStar key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <CardDescription className="italic text-slate-300 leading-relaxed">
                      "{item.quote}"
                    </CardDescription>
                  </div>

                  <div className="flex items-center gap-3.5 pt-5 border-t border-slate-800">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-11 h-11 rounded-full object-cover border border-indigo-500/30 shrink-0"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.name}</h4>
                      <p className="text-xs text-slate-400">
                        {item.role} • <span className="text-indigo-400 font-semibold">{item.company}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </CardGrid>
      </div>
    </section>
  );
}
