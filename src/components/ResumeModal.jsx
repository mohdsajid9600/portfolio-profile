import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiX, FiDownload, FiCheckCircle, FiBriefcase, FiBookOpen, 
  FiAward, FiCode, FiExternalLink, FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiFolder
} from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const resumeData = {
    header: {
      name: "MOHD SAJID",
      title: "Java Full Stack Developer | AI-Augmented Software Engineer",
      location: "Shahberi, Ghaziabad, UP",
      phone: "+91-7500941959",
      email: "mohdsajid9600@gmail.com",
      linkedin: "https://www.linkedin.com/in/mohdsajid9600",
      github: "https://github.com/mohdsajid9600",
      leetcode: "https://leetcode.com/u/mohdsajid9600/"
    },
    summary: `Java Full Stack Developer with a strong foundation in Core Java, Spring Boot, Spring Security, RESTful API design, and JPA/Hibernate, built through hands-on projects covering secure authentication, layered architecture, and production deployment. A fast, self-driven learner who actively leverages modern AI-assisted development tools (GitHub Copilot, ChatGPT, prompt engineering) to accelerate coding, debugging, and documentation — reflecting comfort working alongside AI-native workflows that today's engineering teams increasingly rely on. Solved 400+ DSA problems on AccioJob & LeetCode, demonstrating solid problem-solving and algorithmic thinking. Genuinely curious about new technologies, quick to pick up new tools, frameworks, and codebases, and enjoys collaborating with new people and teams. Looking to start a career as a Java Full Stack Developer and grow into a well-rounded software engineer.`,
    technicalSkills: [
      { category: "Languages", skills: "Java (Core, Collections, JDK 8-17), SQL, JavaScript, HTML5, CSS3" },
      { category: "Frameworks", skills: "Spring Boot, Spring MVC, Spring Security, Hibernate ORM, Spring Data JPA & React JS" },
      { category: "Database", skills: "MySQL - schema design, query optimization, CRUD operations, JPA-based persistence" },
      { category: "API & Backend Practices", skills: "RESTful API design, layered (Controller-Service-Repository) architecture, global exception handling, input validation, role-based authorization, pagination & filtering" },
      { category: "AI-Augmented Development", skills: "GitHub Copilot, ChatGPT / prompt engineering for code generation, debugging & documentation, AI-assisted frontend generation, quick adoption of AI developer tooling" },
      { category: "Tools & Platforms", skills: "Git, GitHub, Postman, Maven, IntelliJ IDEA, Swagger UI, Apache Tomcat" },
      { category: "Deployment", skills: "Render (Backend), Vercel (Frontend)" },
      { category: "Problem Solving", skills: "400+ DSA problems solved on LeetCode / AccioJob platform" },
      { category: "Currently Exploring", skills: "Docker basics, microservices concepts, and Spring AI / LLM-integration patterns to stay aligned with current industry direction" }
    ],
    projects: [
      {
        title: "EasyTrip - Cab Booking Backend Application",
        github: "https://github.com/mohdsajid9600",
        liveDemo: "https://easytrip.vercel.app",
        stack: "Spring Boot | Spring Security | REST API | JPA/Hibernate | MySQL | Render + Vercel",
        bullets: [
          "End-to-end ownership: designed and deployed a full-featured cab booking REST API with complete CRUD operations, session-based authentication, and role-based authorization for Customer, Driver, and Admin roles.",
          "Security & robustness: implemented ownership-based access control, Principal-based '/me' APIs, global exception handling, request validation, and pagination & filtering for scalable data access.",
          "Core booking lifecycle: built cab registration, booking creation, enum-based status tracking, and automated email notifications end to end.",
          "AI-augmented workflow: used AI coding assistants to speed up boilerplate generation, debugging, and API documentation, and integrated the Spring Boot backend with an AI-generated frontend - reflecting a practical, tool-forward development approach.",
          "Clean architecture & delivery: followed layered architecture best practices and independently deployed the backend on Render and frontend on Vercel."
        ]
      },
      {
        title: "Hospital Management System",
        github: "https://github.com/mohdsajid9600",
        stack: "Java Servlets | JDBC | MySQL | JSP | MVC | Apache Tomcat",
        bullets: [
          "Built a role-based web application with Patient, Doctor, and Admin modules for appointment scheduling, following the MVC pattern with a JSP + Bootstrap UI, deployed on Apache Tomcat."
        ]
      },
      {
        title: "Product Management System - CRUD Web App",
        github: "https://github.com/mohdsajid9600",
        stack: "Spring MVC | Spring ORM | JPA | MySQL | JSP | JSTL",
        bullets: [
          "Developed a full CRUD product management application using Spring MVC, JPA, and MySQL with a JSTL-based JSP UI, demonstrating clean MVC architecture and ORM-based data persistence."
        ]
      }
    ],
    internship: {
      role: "Java Backend Developer Intern",
      company: "NativeSoftTech (Remote)",
      period: "April 2025 - May 2025",
      bullets: [
        "Completed a one-month remote internship applying Core Java and OOP concepts to real backend development tasks.",
        "Collaborated remotely with a new team, quickly ramping up on unfamiliar codebases and delivering assigned tasks within set timelines.",
        "Worked on MySQL schema design and query optimization, improving database response time and application performance.",
        "Gained hands-on exposure to debugging, problem-solving, and the full software development lifecycle."
      ]
    },
    education: [
      {
        degree: "MCA - Master of Computer Applications",
        grade: "72.1%",
        period: "2024 - 2026",
        institution: "AKTU, Lucknow",
        details: "Strong foundation in software development, data structures & algorithms, database management, computer networks, and scalable application development."
      },
      {
        degree: "B.Tech - Civil Engineering",
        grade: "83%",
        period: "2017 - 2021",
        institution: "AKTU, Lucknow",
        details: "Strong analytical and structural thinking foundation; completed industrial training in Road Pavement Design."
      }
    ],
    certifications: [
      "Java Full Stack Development - AccioJob (Pursuing, Expected Completion: August 2026)",
      "Java Bootcamp, JavaScript Bootcamp, HTML & CSS - Let's Upgrade",
      "Spring Boot - Scaler Academy | Git & Java Hibernate - Simplilearn",
      "400+ DSA problems solved on LeetCode / AccioJob platform - strong coding fundamentals"
    ]
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-y-auto z-10 text-slate-100 p-5 sm:p-8 lg:p-10 text-left"
        >
          {/* Action Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-5 mb-6 gap-4 sticky top-0 bg-slate-900/95 backdrop-blur-md z-20 pt-1">
            <div className="flex items-center gap-3">
              <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                {resumeData.header.name}
              </h2>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-semibold shrink-0">
                Official PDF Preview
              </span>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="/resume.pdf"
                download="Mohd_Sajid_Java_Developer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-primary text-xs font-semibold"
                title="Download Official Resume PDF"
              >
                <FiDownload className="w-3.5 h-3.5" />
                <span>Download Official PDF</span>
              </a>
              <button
                onClick={onClose}
                className="btn btn-icon btn-secondary"
                aria-label="Close Resume Preview"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Document Container */}
          <div className="space-y-7 text-slate-200">
            {/* Candidate Header & Links */}
            <div className="text-center sm:text-left border-b border-slate-800 pb-6 space-y-3">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{resumeData.header.name}</h1>
                <p className="text-sm sm:text-base font-semibold text-indigo-400 mt-0.5">{resumeData.header.title}</p>
              </div>

              {/* Contact Information Bar */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-mono text-slate-300">
                <span className="flex items-center gap-1.5"><FiMapPin className="text-indigo-400" /> {resumeData.header.location}</span>
                <span className="flex items-center gap-1.5"><FiPhone className="text-emerald-400" /> {resumeData.header.phone}</span>
                <span className="flex items-center gap-1.5"><FiMail className="text-purple-400" /> {resumeData.header.email}</span>
              </div>

              {/* Profiles Row */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-1 text-xs">
                <a href={resumeData.header.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-secondary text-xs">
                  <FiLinkedin className="w-3.5 h-3.5 text-indigo-400" /> LinkedIn
                </a>
                <a href={resumeData.header.github} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-secondary text-xs">
                  <FiGithub className="w-3.5 h-3.5 text-slate-200" /> GitHub
                </a>
                <a href={resumeData.header.leetcode} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-secondary text-xs">
                  <SiLeetcode className="w-3.5 h-3.5 text-amber-400" /> LeetCode Profile
                </a>
              </div>
            </div>

            {/* 1. PROFESSIONAL SUMMARY */}
            <div className="space-y-2">
              <h3 className="text-sm uppercase font-mono font-extrabold text-indigo-400 tracking-wider flex items-center gap-2 border-b border-slate-800/80 pb-1.5">
                <FiCode className="w-4 h-4" /> Professional Summary
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                {resumeData.summary}
              </p>
            </div>

            {/* 2. TECHNICAL SKILLS MATRIX */}
            <div className="space-y-3">
              <h3 className="text-sm uppercase font-mono font-extrabold text-indigo-400 tracking-wider flex items-center gap-2 border-b border-slate-800/80 pb-1.5">
                <FiCode className="w-4 h-4" /> Technical Skills
              </h3>
              <div className="grid grid-cols-1 gap-2.5">
                {resumeData.technicalSkills.map((item, idx) => (
                  <div key={idx} className="bg-slate-950/70 p-3 sm:p-3.5 rounded-xl border border-slate-800/80 text-xs flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                    <span className="font-bold text-indigo-300 sm:w-44 shrink-0 font-mono">{item.category}:</span>
                    <span className="text-slate-300 leading-relaxed">{item.skills}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. PROJECT EXPERIENCE */}
            <div className="space-y-5">
              <h3 className="text-sm uppercase font-mono font-extrabold text-indigo-400 tracking-wider flex items-center gap-2 border-b border-slate-800/80 pb-1.5">
                <FiFolder className="w-4 h-4" /> Project Experience
              </h3>
              <div className="space-y-5">
                {resumeData.projects.map((proj, idx) => (
                  <div key={idx} className="bg-slate-950/60 p-4 sm:p-5 rounded-xl border border-slate-800/80 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/60 pb-2">
                      <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                        <span>{proj.title}</span>
                      </h4>
                      <div className="flex items-center gap-2 shrink-0">
                        {proj.github && (
                          <a href={proj.github} target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-400 hover:underline flex items-center gap-1 font-mono">
                            [GitHub <FiExternalLink className="w-3 h-3" />]
                          </a>
                        )}
                        {proj.liveDemo && (
                          <a href={proj.liveDemo} target="_blank" rel="noopener noreferrer" className="text-xs text-emerald-400 hover:underline flex items-center gap-1 font-mono">
                            [Live Demo <FiExternalLink className="w-3 h-3" />]
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-xs font-mono text-indigo-300 font-medium">{proj.stack}</p>

                    <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                      {proj.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="leading-relaxed">{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. INTERNSHIP EXPERIENCE */}
            <div className="space-y-3">
              <h3 className="text-sm uppercase font-mono font-extrabold text-indigo-400 tracking-wider flex items-center gap-2 border-b border-slate-800/80 pb-1.5">
                <FiBriefcase className="w-4 h-4" /> Internship Experience
              </h3>
              <div className="bg-slate-950/60 p-4 sm:p-5 rounded-xl border border-slate-800/80 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-800/60 pb-2">
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    {resumeData.internship.role} <span className="text-indigo-400">| {resumeData.internship.company}</span>
                  </h4>
                  <span className="text-xs font-mono text-slate-400">{resumeData.internship.period}</span>
                </div>

                <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                  {resumeData.internship.bullets.map((bullet, i) => (
                    <li key={i} className="leading-relaxed">{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 5. EDUCATION */}
            <div className="space-y-3">
              <h3 className="text-sm uppercase font-mono font-extrabold text-indigo-400 tracking-wider flex items-center gap-2 border-b border-slate-800/80 pb-1.5">
                <FiBookOpen className="w-4 h-4" /> Education
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {resumeData.education.map((edu, idx) => (
                  <div key={idx} className="bg-slate-950/70 p-4 rounded-xl border border-slate-800/80 space-y-1.5">
                    <div className="flex justify-between items-start">
                      <h4 className="text-xs sm:text-sm font-bold text-white">{edu.degree}</h4>
                      <span className="text-xs font-mono font-bold text-emerald-400 shrink-0">{edu.grade}</span>
                    </div>
                    <p className="text-xs text-indigo-300 font-mono">{edu.institution} ({edu.period})</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. CERTIFICATIONS & ACHIEVEMENTS */}
            <div className="space-y-3">
              <h3 className="text-sm uppercase font-mono font-extrabold text-indigo-400 tracking-wider flex items-center gap-2 border-b border-slate-800/80 pb-1.5">
                <FiAward className="w-4 h-4" /> Certifications & Achievements
              </h3>
              <div className="space-y-2">
                {resumeData.certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                    <FiCheckCircle className="text-emerald-400 w-4 h-4 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-8 pt-4 border-t border-slate-800 flex flex-wrap justify-between items-center text-xs text-slate-400 gap-2">
            <span>Verified Portfolio Document for Mohd Sajid</span>
            <button onClick={onClose} className="hover:text-indigo-400 font-semibold">Close Preview</button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

