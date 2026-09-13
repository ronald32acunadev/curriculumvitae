import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const { data, labels } = useLanguage();

  return (
    <section id="education" className="py-12 border-t border-slate-200/60 dark:border-navy-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={labels.sections.educationTitle}
          icon={<GraduationCap className="w-5 h-5" />}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {data.education.map((edu) => (
            <Card key={edu.id} hoverEffect className="flex flex-col justify-between p-5 sm:p-6">
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100/80 dark:bg-navy-900/80 border border-slate-200/60 dark:border-navy-700/60 px-2.5 py-1 rounded-md shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-brand-500" />
                    <span>{edu.startDate} - {edu.endDate}</span>
                  </span>
                </div>

                <p className="text-sm font-semibold text-brand-600 dark:text-accent-400 mb-1.5">
                  {edu.institution}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-3.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-500" />
                  <span>{edu.location}</span>
                </div>

                {edu.description && (
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {edu.description}
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
