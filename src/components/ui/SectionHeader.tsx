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
          <div className="p-2.5 rounded-lg bg-brand-500/10 dark:bg-brand-950/60 border border-brand-500/20 dark:border-brand-800/50 text-brand-600 dark:text-accent-400 shadow-sm">
            {icon}
          </div>
        )}
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      <div className="mt-3.5 h-[3px] w-12 bg-gradient-to-r from-brand-600 to-accent-400 rounded-full" />
    </div>
  );
};
