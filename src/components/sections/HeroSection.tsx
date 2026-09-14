import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Badge } from '../ui/Badge';
import { MapPin, Mail, Phone, ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, FacebookIcon } from '../ui/Icons';
import { PDFDownloadButton } from '../pdf/PDFDownloadButton';

export const HeroSection: React.FC = () => {
  const { data, labels, language } = useLanguage();
  const { contact } = data;

  return (
    <section id="hero" className="pt-12 pb-16 md:py-20 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-10 -z-10 w-80 h-80 bg-accent-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-12">
          <div className="max-w-3xl flex-1">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-medium bg-brand-50 text-brand-700 border border-brand-200 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{language === 'es' ? 'Disponible para nuevos proyectos y roles' : 'Available for new roles & projects'}</span>
            </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-500 to-accent-500">{contact.name}</span>
          </h1>

          <p className="mt-4 text-xl sm:text-2xl font-semibold text-brand-700">
            {contact.headline}
          </p>

          {/* Quick contact metadata pills */}
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-brand-500" />
              <span>{contact.location}</span>
            </div>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-1.5 hover:text-brand-600 transition-colors"
            >
              <Mail className="w-4 h-4 text-brand-500" />
              <span>{contact.email}</span>
            </a>
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center gap-1.5 hover:text-brand-600 transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-500" />
              <span>{contact.phone}</span>
            </a>
          </div>

          {/* Languages badges */}
          <div className="mt-5 flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              {labels.sections.languagesTitle}:
            </span>
            <div className="flex flex-wrap gap-2">
              {data.languages.map((lang) => (
                <Badge key={lang.name} variant="accent">
                  {lang.name} — {lang.level}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <PDFDownloadButton />

            <a
              href="#contact"
              className="flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold border border-slate-300 bg-white hover:bg-slate-100 text-slate-800 shadow-sm transition-all"
            >
              <span>{labels.actions.contactMe}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-2 pl-2">
              {contact.linkedinUrl && (
                <a
                  href={contact.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg border border-slate-300 bg-white text-slate-600 hover:text-brand-600 hover:bg-slate-100 shadow-sm transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              )}
              {contact.githubUrl && (
                <a
                  href={contact.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg border border-slate-300 bg-white text-slate-600 hover:text-brand-600 hover:bg-slate-100 shadow-sm transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}
              {contact.instagramUrl && (
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg border border-slate-300 bg-white text-slate-600 hover:text-pink-600 hover:bg-slate-100 shadow-sm transition-all"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              )}
              {contact.facebookUrl && (
                <a
                  href={contact.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg border border-slate-300 bg-white text-slate-600 hover:text-blue-600 hover:bg-slate-100 shadow-sm transition-all"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              )}
              {contact.portfolioUrl && (
                <a
                  href={contact.portfolioUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg border border-slate-300 bg-white text-slate-600 hover:text-brand-600 hover:bg-slate-100 shadow-sm transition-all"
                  aria-label="Portfolio"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Profile Picture */}
        <div className="shrink-0 relative group">
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-brand-600 to-accent-400 rounded-2xl blur-md opacity-25 group-hover:opacity-45 transition duration-500" />
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border-2 border-white shadow-xl ring-1 ring-slate-200/80 bg-white">
              <img
                src="/profile.jpg"
                alt={contact.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
