import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = false,
}) => {
  return (
    <div
      className={`bg-white dark:bg-navy-800/70 border border-slate-200 dark:border-navy-700/70 rounded-xl p-6 shadow-sm ${
        hoverEffect
          ? 'transition-all duration-200 hover:shadow-md hover:border-brand-400 dark:hover:border-brand-500/50 hover:-translate-y-0.5'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
