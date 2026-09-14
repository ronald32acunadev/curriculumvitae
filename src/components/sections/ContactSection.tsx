import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Mail, Phone, MapPin, Copy, Check, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, FacebookIcon } from '../ui/Icons';

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
    <section id="contact" className="py-16 border-t border-slate-200">
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
              <div className="p-2.5 w-fit rounded-lg bg-brand-50 border border-brand-200 text-brand-600 mb-4 shadow-sm">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Email
              </h3>
              <p className="text-xs font-semibold text-slate-800 break-all mb-2">
                {contact.email}
              </p>
              {contact.secondaryEmails && contact.secondaryEmails.length > 0 && (
                <div className="mb-4 pt-2.5 border-t border-slate-100">
                  <span className="text-[10px] uppercase font-semibold text-slate-400 block mb-1">
                    Otros correos:
                  </span>
                  {contact.secondaryEmails.map((alt) => (
                    <a
                      key={alt}
                      href={`mailto:${alt}`}
                      className="block text-[11px] text-slate-500 hover:text-brand-600 truncate transition-colors"
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
                className="p-2 rounded-md border border-slate-300 hover:bg-slate-100 text-slate-600 shadow-sm transition-all"
                title={labels.actions.copyEmail}
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </Card>

          {/* Phone Card */}
          <Card hoverEffect className="flex flex-col justify-between p-6">
            <div>
              <div className="p-2.5 w-fit rounded-lg bg-accent-50 border border-accent-200 text-brand-600 mb-4 shadow-sm">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Teléfono / WhatsApp
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                {contact.phone}
              </p>
            </div>
            <div className="pt-2">
              <a
                href={`tel:${contact.phone}`}
                className="block text-center py-2 px-3 rounded-md text-xs font-semibold border border-slate-300 hover:bg-slate-100 text-slate-800 shadow-sm transition-all"
              >
                Llamar
              </a>
            </div>
          </Card>

          {/* Location & Socials Card */}
          <Card hoverEffect className="flex flex-col justify-between p-6">
            <div>
              <div className="p-2.5 w-fit rounded-lg bg-brand-50 border border-brand-200 text-brand-600 mb-4 shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Ubicación & Redes
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                {contact.location}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-2">
              {contact.linkedinUrl && (
                <a
                  href={contact.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-md text-xs font-semibold border border-slate-300 hover:bg-slate-100 text-slate-700 shadow-sm transition-all"
                >
                  <LinkedinIcon className="w-4 h-4 text-brand-600" />
                  <span>LinkedIn</span>
                </a>
              )}
              {contact.githubUrl && (
                <a
                  href={contact.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-md text-xs font-semibold border border-slate-300 hover:bg-slate-100 text-slate-700 shadow-sm transition-all"
                >
                  <GithubIcon className="w-4 h-4 text-slate-700" />
                  <span>GitHub</span>
                </a>
              )}
              {contact.instagramUrl && (
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-md text-xs font-semibold border border-slate-300 hover:bg-slate-100 text-slate-700 shadow-sm transition-all"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-600" />
                  <span>Instagram</span>
                </a>
              )}
              {contact.facebookUrl && (
                <a
                  href={contact.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-md text-xs font-semibold border border-slate-300 hover:bg-slate-100 text-slate-700 shadow-sm transition-all"
                >
                  <FacebookIcon className="w-4 h-4 text-blue-600" />
                  <span>Facebook</span>
                </a>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
