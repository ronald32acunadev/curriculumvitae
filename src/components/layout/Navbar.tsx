import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { PDFDownloadButton } from '../pdf/PDFDownloadButton';
import { Globe, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage, labels, data } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: labels.nav.summary, href: '#summary' },
    { label: labels.nav.skills, href: '#skills' },
    { label: labels.nav.experience, href: '#experience' },
    { label: labels.nav.education, href: '#education' },
    ...(data.certifications && data.certifications.length > 0
      ? [{ label: labels.nav.certifications, href: '#certifications' }]
      : []),
    { label: labels.nav.contact, href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-slate-200 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2.5 font-bold text-base sm:text-lg tracking-tight text-slate-900 group">
            <img
              src="/profile.jpg"
              alt={data.contact.name}
              className="h-8 w-8 rounded-full object-cover border border-brand-500/30 shadow-sm group-hover:scale-105 transition-transform"
            />
            <span className="truncate max-w-[180px] sm:max-w-none">{data.contact.name}</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 rounded-md text-sm font-medium text-slate-600 hover:text-brand-600 hover:bg-slate-100 transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Tools */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Language Toggle */}
            <button
              data-testid="lang-toggle-btn"
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold border border-slate-300 hover:bg-slate-100 text-slate-700 transition-all shadow-sm"
              title="Cambiar idioma / Switch language"
            >
              <Globe className="w-3.5 h-3.5 text-brand-500" />
              <span>{language.toUpperCase()}</span>
            </button>

            {/* Download PDF Button */}
            <PDFDownloadButton variant="navbar" />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              data-testid="lang-toggle-btn-mobile"
              onClick={toggleLanguage}
              className="p-2 rounded-md border border-slate-300 text-xs font-bold text-slate-700"
            >
              {language.toUpperCase()}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-slate-200 bg-white/95 px-4 pt-2 pb-4 space-y-2 shadow-md">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-700 hover:text-brand-600"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <PDFDownloadButton className="w-full" />
          </div>
        </div>
      )}
    </header>
  );
};
