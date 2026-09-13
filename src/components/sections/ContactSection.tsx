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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email Card */}
          <Card hoverEffect className="flex flex-col justify-between p-6">
            <div>
              <div className="p-3 w-fit rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                Email
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 break-all">
                {contact.email}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={`mailto:${contact.email}`}
                className="flex-1 text-center py-2 px-3 rounded-lg text-xs font-semibold bg-brand-600 hover:bg-brand-700 text-white transition-colors"
              >
                {labels.actions.contactMe}
              </a>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg border border-slate-200 dark:border-navy-700 hover:bg-slate-100 dark:hover:bg-navy-800 text-slate-600 dark:text-slate-300 transition-colors"
                title={labels.actions.copyEmail}
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </Card>

          {/* Phone Card */}
          <Card hoverEffect className="flex flex-col justify-between p-6">
            <div>
              <div className="p-3 w-fit rounded-xl bg-accent-500/10 text-accent-500 mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                Teléfono / WhatsApp
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                {contact.phone}
              </p>
            </div>
            <a
              href={`tel:${contact.phone}`}
              className="text-center py-2 px-3 rounded-lg text-xs font-semibold border border-slate-300 dark:border-navy-700 hover:bg-slate-100 dark:hover:bg-navy-800 text-slate-800 dark:text-slate-200 transition-colors"
            >
              Llamar
            </a>
          </Card>

          {/* Location & Socials Card */}
          <Card hoverEffect className="flex flex-col justify-between p-6">
            <div>
              <div className="p-3 w-fit rounded-xl bg-brand-600/10 text-brand-600 dark:text-accent-400 mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                Ubicación & Redes
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                {contact.location}
              </p>
            </div>
            <div className="flex items-center gap-3 pt-2">
              {contact.linkedinUrl && (
                <a
                  href={contact.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold border border-slate-300 dark:border-navy-700 hover:bg-slate-100 dark:hover:bg-navy-800 text-slate-700 dark:text-slate-200 transition-colors"
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
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold border border-slate-300 dark:border-navy-700 hover:bg-slate-100 dark:hover:bg-navy-800 text-slate-700 dark:text-slate-200 transition-colors"
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
