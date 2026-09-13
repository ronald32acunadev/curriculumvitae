import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Briefcase, Calendar, MapPin, Building2, Check } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const { data, labels } = useLanguage();

  return (
    <section id="experience" className="py-12 border-t border-slate-200/60 dark:border-navy-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={labels.sections.experienceTitle}
          icon={<Briefcase className="w-5 h-5" />}
        />

        <div className="relative pl-6 sm:pl-8 border-l-2 border-brand-500/25 dark:border-brand-500/20 space-y-8">
          {data.experience.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline marker node */}
              <div className="absolute -left-[30px] sm:-left-[38px] top-2 w-3.5 h-3.5 rounded-full bg-brand-600 ring-4 ring-slate-50 dark:ring-navy-950 border border-brand-400/60 group-hover:scale-125 transition-transform" />

              <Card hoverEffect className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-brand-600 dark:text-accent-400 font-semibold text-sm mt-0.5">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100/80 dark:bg-navy-900/80 border border-slate-200/60 dark:border-navy-700/60 px-2.5 py-1 rounded-md">
                      <Calendar className="w-3.5 h-3.5 text-brand-500" />
                      <span>
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </span>
                    <Badge variant="accent">
                      {exp.workplaceType}
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-brand-500" />
                  <span>{exp.location}</span>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-2.5 mb-4">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      <Check className="w-4 h-4 text-brand-600 dark:text-accent-400 mt-0.5 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="pt-3.5 border-t border-slate-100 dark:border-navy-800/80 flex flex-wrap items-center gap-1.5">
                    <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 mr-1">
                      Tech:
                    </span>
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-[11px] py-0.5 px-2">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
