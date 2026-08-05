import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiCpu, FiCode, FiBookOpen, FiTrendingUp } from 'react-icons/fi';
import Card from './common/Card';

export default function About() {
  const pillars = [
    {
      icon: <FiCpu className="w-5 h-5 text-indigo-400" />,
      title: "Java & Spring Architecture",
      desc: "Specialized in Core Java (JDK 8-17), Spring Boot, Spring Security (RBAC/JWT), and JPA/Hibernate. Building clean Controller-Service-Repository patterns."
    },
    {
      icon: <FiTrendingUp className="w-5 h-5 text-emerald-400" />,
      title: "AI-Augmented Development",
      desc: "Native adoption of AI developer tooling (GitHub Copilot, ChatGPT, Prompt Engineering) to accelerate boilerplate generation, API specs, and unit testing."
    },
    {
      icon: <FiCode className="w-5 h-5 text-amber-400" />,
      title: "400+ Algorithmic Mastery",
      desc: "Proven problem solver on LeetCode & AccioJob, possessing strong algorithmic thinking, data structure optimization, and clean memory management."
    },
    {
      icon: <FiBookOpen className="w-5 h-5 text-purple-400" />,
      title: "MCA Computer Science Rigor",
      desc: "Postgraduate CS foundation delivering deep theoretical mastery in Object-Oriented Software Design, Advanced DBMS, Computer Networks, and System Architecture."
    }
  ];

  return (
    <section id="about" className="section-container">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 lg:mb-20">
        <span className="section-tag">
          <FiUser className="w-3.5 h-3.5" /> About Mohd Sajid
        </span>
        <h2 className="section-title text-white">
          Production-Grade Java Full Stack Engineering Driven by <span className="gradient-accent-text">AI & Precision</span>
        </h2>
        <p className="section-subtitle mx-auto">
          Combining deep core Java backend expertise with modern AI-native engineering tools to build scalable, resilient product architectures.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        {/* Left Column: Narrative Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col justify-between"
        >
          <Card className="flex-1">
            <div className="flex flex-col justify-between h-full gap-6">
              <div className="flex flex-col gap-5 lg:gap-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 leading-snug">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 inline-block shrink-0" />
                  <span>Building Modern Java Applications with Clean Engineering Practices</span>
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-[1.8] sm:leading-[1.85]">
                  I am a <strong className="text-white font-semibold">Java Full Stack Developer</strong> with a strong foundation in Core Java, Spring Boot, Spring Security, REST APIs, Hibernate, React, and MySQL. I enjoy building secure, scalable, and maintainable applications by following clean architecture, industry best practices, and writing production-ready code.
                </p>

                <p className="text-slate-300 text-sm sm:text-base leading-[1.8] sm:leading-[1.85]">
                  Through hands-on projects and a remote internship, I have gained practical experience in backend development, authentication, role-based authorization, database optimization, API design, and application deployment. I actively leverage <strong className="text-emerald-400 font-semibold">AI-native development workflows</strong> using GitHub Copilot, ChatGPT, Claude, and modern AI engineering tools to accelerate development, improve debugging, generate documentation, and deliver high-quality software more efficiently.
                </p>

                <p className="text-slate-300 text-sm sm:text-base leading-[1.8] sm:leading-[1.85]">
                  With <strong className="text-amber-400 font-semibold">400+ DSA problems solved</strong>, I continuously strengthen my problem-solving skills while exploring Docker, Microservices, and Spring AI to stay aligned with modern software engineering. I am passionate about continuous learning, collaborating with teams, and building reliable applications that solve real-world problems.
                </p>
              </div>

              {/* Quote Box */}
              <div className="p-5 sm:p-6 rounded-xl bg-indigo-950/40 border-l-4 border-indigo-500 text-xs sm:text-sm lg:text-[0.9375rem] text-indigo-200 italic leading-[1.75] mt-4">
                "I believe great software is built through strong engineering fundamentals, continuous learning, and the thoughtful use of AI to deliver secure, scalable, and maintainable solutions."
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Right Column: 4 Core Pillars Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5 flex flex-col gap-6 justify-between"
        >
          {pillars.map((pillar, idx) => (
            <Card key={idx} className="!p-6 flex-1">
              <div className="flex items-start gap-4 lg:gap-5">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-slate-900 border border-slate-800 shrink-0 flex items-center justify-center">
                  {pillar.icon}
                </div>
                <div className="text-left flex flex-col gap-2 flex-1">
                  <h4 className="text-base sm:text-[1.05rem] font-bold text-white leading-snug">{pillar.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-[1.7]">{pillar.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
