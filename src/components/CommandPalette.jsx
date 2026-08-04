import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiX, FiHome, FiUser, FiCode, FiBriefcase, FiFolder, FiAward, FiMail, FiFileText, FiCopy, FiExternalLink } from 'react-icons/fi';
import { personalDetails } from '../data/portfolioData';

export default function CommandPalette({ isOpen, onClose, onSelectSection, onOpenResume }) {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const items = [
    { id: 'hero', title: 'Go to Top / Hero', category: 'Navigation', icon: <FiHome />, action: () => onSelectSection('hero') },
    { id: 'about', title: 'About Mohd Sajid', category: 'Navigation', icon: <FiUser />, action: () => onSelectSection('about') },
    { id: 'techstack', title: 'Tech Stack & Frameworks', category: 'Navigation', icon: <FiCode />, action: () => onSelectSection('techstack') },
    { id: 'experience', title: 'Work Experience & Internship', category: 'Navigation', icon: <FiBriefcase />, action: () => onSelectSection('experience') },
    { id: 'projects', title: 'Featured Projects & Repositories', category: 'Navigation', icon: <FiFolder />, action: () => onSelectSection('projects') },
    { id: 'certifications', title: 'Certifications & Achievements', category: 'Navigation', icon: <FiAward />, action: () => onSelectSection('certifications') },
    { id: 'education', title: 'Academic History & MCA', category: 'Navigation', icon: <FiAward />, action: () => onSelectSection('education') },
    { id: 'contact', title: 'Contact & Hire Sajid', category: 'Navigation', icon: <FiMail />, action: () => onSelectSection('contact') },
    { 
      id: 'resume', 
      title: 'View / Download Official Resume', 
      category: 'Actions', 
      icon: <FiFileText />, 
      action: () => { onClose(); onOpenResume(); } 
    },
    { 
      id: 'copy-email', 
      title: `Copy Email (${personalDetails.email})`, 
      category: 'Actions', 
      icon: <FiCopy />, 
      action: () => {
        navigator.clipboard.writeText(personalDetails.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } 
    },
    { 
      id: 'github', 
      title: 'Open GitHub Profile', 
      category: 'External', 
      icon: <FiExternalLink />, 
      action: () => window.open(personalDetails.github, '_blank') 
    },
    { 
      id: 'linkedin', 
      title: 'Open LinkedIn Profile', 
      category: 'External', 
      icon: <FiExternalLink />, 
      action: () => window.open(personalDetails.linkedin, '_blank') 
    },
    { 
      id: 'leetcode', 
      title: 'Open LeetCode Stats', 
      category: 'External', 
      icon: <FiExternalLink />, 
      action: () => window.open(personalDetails.leetcode, '_blank') 
    }
  ];

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-start justify-center pt-20 px-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative w-full max-w-2xl bg-slate-900/90 border border-slate-700/60 rounded-2xl shadow-2xl overflow-hidden z-10 text-slate-100 backdrop-blur-xl"
        >
          {/* Input Bar */}
          <div className="flex items-center px-4 border-b border-slate-800">
            <FiSearch className="w-5 h-5 text-indigo-400 mr-3" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command, search section, or jump to..."
              className="w-full py-4 bg-transparent text-slate-100 placeholder-slate-500 focus:outline-none text-base font-medium"
            />
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-100 rounded-lg hover:bg-slate-800 transition"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>

          {/* Toast Notification */}
          {copied && (
            <div className="bg-emerald-500/20 text-emerald-300 text-xs px-4 py-1.5 text-center font-medium border-b border-emerald-500/30">
              Email copied to clipboard!
            </div>
          )}

          {/* List Results */}
          <div className="max-h-96 overflow-y-auto p-2">
            {filteredItems.length === 0 ? (
              <div className="p-8 text-center text-slate-400 text-sm">
                No matching results found for "{query}".
              </div>
            ) : (
              filteredItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    item.action();
                    if (item.category !== 'Actions') onClose();
                  }}
                  className="w-full flex items-center justify-between px-3 py-3 rounded-xl hover:bg-indigo-600/20 hover:border hover:border-indigo-500/30 text-left group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-indigo-400 group-hover:text-indigo-300 p-2 rounded-lg bg-slate-800/80 group-hover:bg-indigo-500/20">
                      {item.icon}
                    </span>
                    <span className="text-sm font-medium text-slate-200 group-hover:text-white">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700/50">
                    {item.category}
                  </span>
                </button>
              ))
            )}
          </div>

          {/* Footer Shortcuts */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/60 border-t border-slate-800/60 text-xs text-slate-400">
            <span>Navigation & Quick Search</span>
            <div className="flex gap-2">
              <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-[10px]">ESC to close</kbd>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
