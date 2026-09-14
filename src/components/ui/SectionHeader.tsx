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
          <div className="p-2.5 rounded-lg bg-brand-50 border border-brand-200 text-brand-600 shadow-sm">
            {icon}
          </div>
        )}
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-1 text-sm text-slate-600">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      <div className="mt-3.5 h-[3px] w-12 bg-gradient-to-r from-brand-600 to-accent-400 rounded-full" />
    </div>
  );
};
