import React, { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  className = '',
}) => {
  const variants = {
    primary:
      'bg-brand-50 text-brand-700 border-brand-200 dark:bg-brand-950/60 dark:text-brand-300 dark:border-brand-800/60',
    secondary:
      'bg-slate-100 text-slate-700 border-slate-200 dark:bg-navy-800/80 dark:text-slate-300 dark:border-navy-700',
    accent:
      'bg-accent-400/10 text-accent-600 border-accent-400/30 dark:bg-accent-400/10 dark:text-accent-300 dark:border-accent-400/30',
    outline:
      'bg-transparent text-slate-700 border-slate-300 dark:text-slate-300 dark:border-navy-700',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
