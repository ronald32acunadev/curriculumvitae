export interface ContactInfo {
  name: string;
  headline: string;
  phone: string;
  email: string;
  secondaryEmails?: string[];
  location: string;
  linkedinUrl?: string;
  githubUrl?: string;
  portfolioUrl?: string;
  instagramUrl?: string;
  facebookUrl?: string;
}

export interface SkillCategory {
  categoryName: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  workplaceType: 'Remote' | 'On-Site' | 'Hybrid';
  startDate: string;
  endDate: string;
  responsibilities: string[];
  technologies?: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  verificationUrl?: string;
  credentialType?: 'online' | 'physical';
}

export interface LanguageItem {
  name: string;
  level: string;
}

export interface CVContent {
  contact: ContactInfo;
  summary: string;
  languages: LanguageItem[];
  softSkills: string[];
  technicalSkills: SkillCategory[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
}

export interface UILabels {
  nav: {
    profile: string;
    summary: string;
    skills: string;
    experience: string;
    education: string;
    certifications: string;
    contact: string;
    downloadPdf: string;
    generatingPdf: string;
  };
  sections: {
    profileTitle: string;
    summaryTitle: string;
    techSkillsTitle: string;
    softSkillsTitle: string;
    experienceTitle: string;
    educationTitle: string;
    certificationsTitle: string;
    languagesTitle: string;
    contactTitle: string;
    contactSubtitle: string;
  };
  actions: {
    downloadResume: string;
    viewCredential: string;
    physicalCertificate: string;
    present: string;
    contactMe: string;
    copyEmail: string;
    copied: string;
  };
}

export interface BilingualCVData {
  es: CVContent;
  en: CVContent;
}
