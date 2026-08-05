import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink, FiCheckCircle, FiClock } from 'react-icons/fi';
import { certifications, achievements } from '../data/portfolioData';
import CardGrid from './common/CardGrid';
import Card, {
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardDescription,
  CardSkills,
  CardFooter
} from './common/Card';

export default function Certifications() {
  return (
    <section id="certifications" className="section-container">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 lg:mb-20">
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

      {/* Achievements Cards Grid */}
      <div className="mb-14 sm:mb-16 lg:mb-20">
        <CardGrid cols={3}>
          {achievements.map((ach, idx) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="h-full"
            >
              <Card>
                <div>
                  {/* Badge Row */}
                  <CardHeader>
                    <span className="text-2xl sm:text-3xl font-extrabold font-mono text-indigo-400">
                      {ach.metric}
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 font-semibold border border-indigo-500/20 font-mono">
                      {ach.platform}
                    </span>
                  </CardHeader>

                  {/* Title */}
                  <CardTitle className="mb-3">{ach.title}</CardTitle>

                  {/* Description */}
                  <CardDescription>{ach.description}</CardDescription>
                </div>
              </Card>
            </motion.div>
          ))}
        </CardGrid>
      </div>

      {/* Certifications Grid */}
      <CardGrid cols={3}>
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="h-full"
          >
            <Card>
              {/* Top Section: Header, Title, Subtitle, Description, Skills */}
              <div className="flex flex-col">
                {/* 1. Badge Header */}
                <CardHeader>
                  <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-slate-900/90 text-indigo-300 border border-slate-800 font-mono">
                    {cert.issuer}
                  </span>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 font-mono ${cert.status === 'Verified'
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                      : 'bg-amber-500/10 text-amber-300 border border-amber-500/30'
                    }`}>
                    <FiCheckCircle className="w-3.5 h-3.5" />
                    <span>{cert.status}</span>
                  </span>
                </CardHeader>

                {/* 2. Title */}
                <CardTitle>{cert.title}</CardTitle>

                {/* 3. Subtitle (Duration / Date) */}
                <CardSubtitle>
                  <FiClock className="text-indigo-400 w-3.5 h-3.5 shrink-0" />
                  <span>{cert.date}</span>
                </CardSubtitle>

                {/* 4. Description */}
                <CardDescription className="mt-1">{cert.description}</CardDescription>

                {/* 5. Skills Covered Section */}
                {cert.skillsCovered && (
                  <CardSkills label="SKILLS COVERED:">
                    {cert.skillsCovered.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md bg-slate-950 text-indigo-300 text-[11px] font-mono border border-slate-800/80 hover:border-indigo-500/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </CardSkills>
                )}
              </div>

              {/* 6. CTA Button Container (with 28-32px clearance) */}
              <CardFooter>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-secondary w-full justify-center text-xs font-semibold py-3 flex items-center gap-2 hover:shadow-indigo-500/20 transition-all"
                >
                  <span>Verify Issuer Credential</span>
                  <FiExternalLink className="w-3.5 h-3.5" />
                </a>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </CardGrid>
    </section>
  );
}
