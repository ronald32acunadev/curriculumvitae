import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { PDFDownloadButton } from '../pdf/PDFDownloadButton';
import { Sun, Moon, Globe, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
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
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-navy-950/80 border-b border-slate-200/80 dark:border-navy-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2.5 font-bold text-lg tracking-tight text-slate-900 dark:text-white group">
            <span className="h-8 w-8 rounded-lg bg-gradient-to-tr from-brand-600 to-accent-400 flex items-center justify-center text-white text-sm font-semibold shadow-sm group-hover:scale-105 transition-transform">
              R
            </span>
            <span>Ronald<span className="text-brand-500 font-semibold">.cv</span></span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 rounded-md text-sm font-medium text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-accent-400 hover:bg-slate-100/70 dark:hover:bg-navy-900/70 transition-all"
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
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold border border-slate-300/80 dark:border-navy-700/80 hover:bg-slate-100/80 dark:hover:bg-navy-800/80 text-slate-700 dark:text-slate-200 transition-all shadow-sm"
              title="Cambiar idioma / Switch language"
            >
              <Globe className="w-3.5 h-3.5 text-brand-500" />
              <span>{language.toUpperCase()}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md border border-slate-300/80 dark:border-navy-700/80 hover:bg-slate-100/80 dark:hover:bg-navy-800/80 text-slate-700 dark:text-slate-200 transition-all shadow-sm"
              title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-brand-600" />
              )}
            </button>

            {/* Download PDF Button */}
            <PDFDownloadButton variant="navbar" />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              data-testid="lang-toggle-btn-mobile"
              onClick={toggleLanguage}
              className="p-2 rounded-md border border-slate-300/80 dark:border-navy-700/80 text-xs font-bold"
            >
              {language.toUpperCase()}
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md border border-slate-300/80 dark:border-navy-700/80 text-slate-700 dark:text-slate-200"
              aria-label="Toggle Theme Mobile"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-brand-600" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md border border-slate-200 dark:border-navy-800 text-slate-700 dark:text-slate-200"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-slate-200 dark:border-navy-800 bg-white/95 dark:bg-navy-900/95 px-4 pt-2 pb-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:text-brand-500"
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
