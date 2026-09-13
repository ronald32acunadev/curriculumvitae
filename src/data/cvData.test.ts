import { describe, it, expect } from 'vitest';
import { cvData } from './cvData';

describe('cvData bilingual dataset integrity', () => {
  it('contains both Spanish (es) and English (en) versions', () => {
    expect(cvData).toHaveProperty('es');
    expect(cvData).toHaveProperty('en');
  });

  it('validates Spanish dataset completeness', () => {
    const { es } = cvData;
    expect(es.contact.name).toBeTruthy();
    expect(es.contact.email).toBeTruthy();
    expect(es.contact.phone).toBeTruthy();
    expect(es.summary.length).toBeGreaterThan(50);
    expect(es.technicalSkills.length).toBeGreaterThan(0);
    expect(es.softSkills.length).toBeGreaterThan(0);
    expect(es.experience.length).toBeGreaterThan(0);
    expect(es.education.length).toBeGreaterThan(0);
    expect(es.certifications.length).toBeGreaterThan(0);
    expect(es.languages.length).toBeGreaterThan(0);
  });

  it('validates English dataset completeness', () => {
    const { en } = cvData;
    expect(en.contact.name).toBeTruthy();
    expect(en.contact.email).toBeTruthy();
    expect(en.contact.phone).toBeTruthy();
    expect(en.summary.length).toBeGreaterThan(50);
    expect(en.technicalSkills.length).toBeGreaterThan(0);
    expect(en.softSkills.length).toBeGreaterThan(0);
    expect(en.experience.length).toBeGreaterThan(0);
    expect(en.education.length).toBeGreaterThan(0);
    expect(en.certifications.length).toBeGreaterThan(0);
    expect(en.languages.length).toBeGreaterThan(0);
  });
});
