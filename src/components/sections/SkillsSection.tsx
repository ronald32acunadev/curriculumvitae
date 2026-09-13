import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Cpu, CheckCircle2, Award } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const { data, labels } = useLanguage();

  return (
    <section id="skills" className="py-12 border-t border-slate-200/60 dark:border-navy-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={labels.sections.techSkillsTitle}
          icon={<Cpu className="w-5 h-5" />}
        />

        {/* Technical Skills Categorized Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.technicalSkills.map((category) => (
            <Card
              key={category.categoryName}
              hoverEffect
              className="flex flex-col justify-between p-5"
            >
              <div>
                <h3 className="text-sm font-bold text-brand-700 dark:text-brand-300 mb-3.5 pb-2.5 border-b border-slate-200/70 dark:border-navy-700/60">
                  {category.categoryName}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="primary" className="py-1 px-2.5 text-xs font-medium">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className="mt-12">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="p-1.5 rounded-md bg-accent-400/10 text-brand-600 dark:text-accent-400 border border-accent-400/20">
              <Award className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {labels.sections.softSkillsTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {data.softSkills.map((softSkill) => (
              <div
                key={softSkill}
                className="flex items-center gap-3 p-3.5 rounded-lg bg-white/80 dark:bg-navy-900/60 backdrop-blur-sm border border-slate-200/80 dark:border-navy-700/60 shadow-sm hover:border-brand-500/40 transition-all"
              >
                <CheckCircle2 className="w-4 h-4 text-brand-500 dark:text-accent-400 shrink-0" />
                <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                  {softSkill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
