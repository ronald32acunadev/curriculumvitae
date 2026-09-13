import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Mail, Phone, MapPin, Copy, Check, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export const ContactSection: React.FC = () => {
  const { data, labels } = useLanguage();
  const { contact } = data;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-16 border-t border-slate-200/60 dark:border-navy-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={labels.sections.contactTitle}
          subtitle={labels.sections.contactSubtitle}
          icon={<Send className="w-5 h-5" />}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Email Card */}
          <Card hoverEffect className="flex flex-col justify-between p-6">
            <div>
              <div className="p-2.5 w-fit rounded-lg bg-brand-500/10 dark:bg-brand-950/60 border border-brand-500/20 dark:border-brand-800/50 text-brand-600 dark:text-accent-400 mb-4 shadow-sm">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                Email
              </h3>
              <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 break-all mb-2">
                {contact.email}
              </p>
              {contact.secondaryEmails && contact.secondaryEmails.length > 0 && (
                <div className="mb-4 pt-2.5 border-t border-slate-100/90 dark:border-navy-800/80">
                  <span className="text-[10px] uppercase font-semibold text-slate-400 dark:text-slate-500 block mb-1">
                    Otros correos:
                  </span>
                  {contact.secondaryEmails.map((alt) => (
                    <a
                      key={alt}
                      href={`mailto:${alt}`}
                      className="block text-[11px] text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-accent-400 truncate transition-colors"
                    >
                      {alt}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center gap-2 pt-2">
              <a
                href={`mailto:${contact.email}`}
                className="flex-1 text-center py-2 px-3 rounded-md text-xs font-semibold bg-brand-600 hover:bg-brand-500 active:bg-brand-700 text-white shadow-sm transition-all"
              >
                {labels.actions.contactMe}
              </a>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-md border border-slate-300/80 dark:border-navy-700/80 hover:bg-slate-100/80 dark:hover:bg-navy-800/80 text-slate-600 dark:text-slate-300 shadow-sm transition-all"
                title={labels.actions.copyEmail}
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </Card>

          {/* Phone Card */}
          <Card hoverEffect className="flex flex-col justify-between p-6">
            <div>
              <div className="p-2.5 w-fit rounded-lg bg-accent-400/10 dark:bg-accent-950/40 border border-accent-400/25 text-brand-600 dark:text-accent-400 mb-4 shadow-sm">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                Teléfono / WhatsApp
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                {contact.phone}
              </p>
            </div>
            <div className="pt-2">
              <a
                href={`tel:${contact.phone}`}
                className="block text-center py-2 px-3 rounded-md text-xs font-semibold border border-slate-300/80 dark:border-navy-700/80 hover:bg-slate-100/80 dark:hover:bg-navy-800/80 text-slate-800 dark:text-slate-200 shadow-sm transition-all"
              >
                Llamar
              </a>
            </div>
          </Card>

          {/* Location & Socials Card */}
          <Card hoverEffect className="flex flex-col justify-between p-6">
            <div>
              <div className="p-2.5 w-fit rounded-lg bg-brand-600/10 dark:bg-brand-950/60 border border-brand-500/20 dark:border-brand-800/50 text-brand-600 dark:text-accent-400 mb-4 shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                Ubicación & Redes
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                {contact.location}
              </p>
            </div>
            <div className="flex items-center gap-2.5 pt-2">
              {contact.linkedinUrl && (
                <a
                  href={contact.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-md text-xs font-semibold border border-slate-300/80 dark:border-navy-700/80 hover:bg-slate-100/80 dark:hover:bg-navy-800/80 text-slate-700 dark:text-slate-200 shadow-sm transition-all"
                >
                  <LinkedinIcon className="w-4 h-4 text-brand-600 dark:text-accent-400" />
                  <span>LinkedIn</span>
                </a>
              )}
              {contact.githubUrl && (
                <a
                  href={contact.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-md text-xs font-semibold border border-slate-300/80 dark:border-navy-700/80 hover:bg-slate-100/80 dark:hover:bg-navy-800/80 text-slate-700 dark:text-slate-200 shadow-sm transition-all"
                >
                  <GithubIcon className="w-4 h-4 text-slate-700 dark:text-slate-200" />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
