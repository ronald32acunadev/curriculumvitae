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
      className={`bg-white/85 dark:bg-navy-900/60 backdrop-blur-sm border border-slate-200/80 dark:border-navy-700/60 rounded-xl p-6 shadow-sm ${
        hoverEffect
          ? 'transition-all duration-200 hover:shadow-md hover:border-brand-500/50 dark:hover:border-brand-400/50 hover:-translate-y-0.5'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
