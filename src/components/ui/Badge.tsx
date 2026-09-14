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
      'bg-brand-50 text-brand-700 border-brand-200',
    secondary:
      'bg-slate-100 text-slate-700 border-slate-200',
    accent:
      'bg-accent-50 text-accent-600 border-accent-200',
    outline:
      'bg-transparent text-slate-700 border-slate-300',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium border transition-all ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
