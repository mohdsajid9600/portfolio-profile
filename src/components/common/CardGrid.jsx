import React from 'react';

/**
 * Reusable CardGrid component for portfolio sections.
 * Enforces standardized spacing rules:
 * - Row gap: 40-56px (gap-y-10 lg:gap-y-14)
 * - Column gap: 32-40px (gap-x-8 lg:gap-x-10)
 */
export default function CardGrid({
  children,
  cols = 3,
  className = '',
  ...props
}) {
  const getColClass = () => {
    switch (cols) {
      case 1:
        return 'grid-cols-1';
      case 2:
        return 'grid-cols-1 md:grid-cols-2';
      case 4:
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';
      case 3:
      default:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    }
  };

  return (
    <div
      className={`grid ${getColClass()} gap-x-8 lg:gap-x-10 gap-y-10 lg:gap-y-14 text-left ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
