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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.technicalSkills.map((category) => (
            <Card
              key={category.categoryName}
              hoverEffect
              className="flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-brand-700 dark:text-brand-300 mb-4 pb-2 border-b border-slate-100 dark:border-navy-700/60">
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
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-5 h-5 text-accent-500" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {labels.sections.softSkillsTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.softSkills.map((softSkill) => (
              <div
                key={softSkill}
                className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-navy-800/50 border border-slate-200 dark:border-navy-700/50 shadow-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-accent-400 shrink-0" />
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
