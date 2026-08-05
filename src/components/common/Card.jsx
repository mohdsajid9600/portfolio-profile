import React from 'react';

/**
 * Reusable Card component enforcing equal height flex layout,
 * 32px consistent internal padding (p-8), premium hover effects,
 * and clear vertical content hierarchy.
 */
export function Card({ children, className = '', ...props }) {
  return (
    <div
      className={`glass-card p-8 flex flex-col justify-between h-full rounded-2xl border border-slate-800/80 hover:border-indigo-500/40 shadow-card hover:shadow-glow hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '' }) {
  return (
    <div className={`flex items-center justify-between gap-3 border-b border-slate-800/80 pb-4 mb-5 ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = '' }) {
  return (
    <h3 className={`text-lg sm:text-xl font-extrabold text-white leading-snug tracking-tight ${className}`}>
      {children}
    </h3>
  );
}

export function CardSubtitle({ children, className = '' }) {
  return (
    <div className={`flex items-center gap-2 text-xs font-mono text-slate-400 mt-2 mb-3 ${className}`}>
      {children}
    </div>
  );
}

export function CardDescription({ children, className = '' }) {
  return (
    <p className={`text-xs sm:text-sm text-slate-300 leading-relaxed font-normal ${className}`}>
      {children}
    </p>
  );
}

export function CardSkills({ children, label = "SKILLS COVERED:", className = '' }) {
  if (!children) return null;
  return (
    <div className={`flex flex-col gap-2.5 mt-6 pt-2 ${className}`}>
      {label && (
        <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-slate-400">
          {label}
        </span>
      )}
      <div className="flex flex-wrap gap-2">
        {children}
      </div>
    </div>
  );
}

export function CardFooter({ children, className = '' }) {
  return (
    <div className={`mt-8 pt-7 border-t border-slate-800/80 flex items-center justify-center ${className}`}>
      {children}
    </div>
  );
}

export default Card;
