import React from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle Dark/Light Mode"
      className="p-2.5 rounded-full bg-slate-900/60 dark:bg-slate-800/60 border border-slate-700/50 text-amber-400 dark:text-indigo-400 hover:border-indigo-500/50 transition-all duration-300 backdrop-blur-md shadow-lg"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180, scale: 1 }}
        transition={{ duration: 0.4, ease: 'backOut' }}
      >
        {isDark ? <FiMoon className="w-5 h-5" /> : <FiSun className="w-5 h-5 text-amber-500" />}
      </motion.div>
    </motion.button>
  );
}
