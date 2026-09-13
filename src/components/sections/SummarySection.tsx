import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { UserCheck, Quote } from 'lucide-react';

export const SummarySection: React.FC = () => {
  const { data, labels } = useLanguage();

  return (
    <section id="summary" className="py-12 border-t border-slate-200/60 dark:border-navy-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={labels.sections.summaryTitle}
          icon={<UserCheck className="w-5 h-5" />}
        />

        <Card className="relative overflow-hidden border-l-[3.5px] border-l-brand-600 dark:border-l-brand-500 bg-white/80 dark:bg-navy-900/60 backdrop-blur-sm p-6 md:p-8 shadow-sm">
          <Quote className="absolute -bottom-4 -right-4 w-28 h-28 text-brand-500/5 dark:text-brand-400/5 pointer-events-none" />
          <div
            data-testid="summary-text"
            className="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300 font-normal whitespace-pre-line relative z-10"
          >
            {data.summary}
          </div>
        </Card>
      </div>
    </section>
  );
};
