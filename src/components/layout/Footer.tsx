import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Heart, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export const Footer: React.FC = () => {
  const { data, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-navy-800 bg-white/50 dark:bg-navy-950/50 py-12 mt-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-bold text-lg text-slate-900 dark:text-white">
              {data.contact.name}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              {data.contact.headline}
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {data.contact.githubUrl && (
              <a
                href={data.contact.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg text-slate-600 hover:text-brand-600 dark:text-slate-400 dark:hover:text-accent-400 hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            )}
            {data.contact.linkedinUrl && (
              <a
                href={data.contact.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg text-slate-600 hover:text-brand-600 dark:text-slate-400 dark:hover:text-accent-400 hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            )}
            {data.contact.email && (
              <a
                href={`mailto:${data.contact.email}`}
                className="p-2 rounded-lg text-slate-600 hover:text-brand-600 dark:text-slate-400 dark:hover:text-accent-400 hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200/60 dark:border-navy-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <p>© {currentYear} {data.contact.name}. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</p>
          <p className="flex items-center gap-1">
            <span>{language === 'es' ? 'Diseñado con React, Tailwind y' : 'Built with React, Tailwind &'}</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
            <span>{language === 'es' ? 'en tonos azules' : 'in shades of blue'}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
