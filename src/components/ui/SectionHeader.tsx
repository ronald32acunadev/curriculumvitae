import React, { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  icon,
}) => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3">
        {icon && (
          <div className="p-2 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400">
            {icon}
          </div>
        )}
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          {subtitle}
        </p>
      )}
      <div className="mt-3 h-1 w-16 bg-gradient-to-r from-brand-600 to-accent-400 rounded-full" />
    </div>
  );
};
