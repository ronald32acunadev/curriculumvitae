import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { HeroSection } from './HeroSection';
import { SummarySection } from './SummarySection';
import { SkillsSection } from './SkillsSection';
import { ExperienceSection } from './ExperienceSection';
import { EducationSection } from './EducationSection';
import { CertificationsSection } from './CertificationsSection';
import { ContactSection } from './ContactSection';
import { LanguageProvider } from '../../context/LanguageContext';

describe('CV Content Sections', () => {
  beforeEach(() => {
    localStorage.setItem('cv_language', 'es');
  });

  const renderWithProviders = (component: React.ReactNode) =>
    render(
      <LanguageProvider>{component}</LanguageProvider>
    );

  it('renders HeroSection with name, headline and quick actions', () => {
    renderWithProviders(<HeroSection />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/Hola, soy/i)).toBeInTheDocument();
  });

  it('renders HeroSection in English when language is en', () => {
    localStorage.setItem('cv_language', 'en');
    renderWithProviders(<HeroSection />);
    expect(screen.getByText(/Hi, I'm/i)).toBeInTheDocument();
  });

  it('renders SummarySection with executive summary', () => {
    renderWithProviders(<SummarySection />);
    expect(screen.getByTestId('summary-text')).toBeInTheDocument();
  });

  it('renders SkillsSection with categorized technical and soft skills', () => {
    renderWithProviders(<SkillsSection />);
    expect(screen.getByText(/Lenguajes de Programación|Programming Languages/i)).toBeInTheDocument();
  });

  it('renders ExperienceSection with timeline items', () => {
    renderWithProviders(<ExperienceSection />);
    expect(screen.getAllByText(/Forsyte I.T. Solutions, LLC/i).length).toBeGreaterThan(0);
  });

  it('renders EducationSection and CertificationsSection', () => {
    renderWithProviders(
      <>
        <EducationSection />
        <CertificationsSection />
      </>
    );
    expect(screen.getByText(/Universidad Técnica Nacional/i)).toBeInTheDocument();
    expect(screen.getByText(/Bachillerato en Ingeniería del Software/i)).toBeInTheDocument();
  });

  it('renders ContactSection with email and contact details', () => {
    renderWithProviders(<ContactSection />);
    expect(screen.getByText(/ronald32acunadev@gmail.com/i)).toBeInTheDocument();
  });
});
