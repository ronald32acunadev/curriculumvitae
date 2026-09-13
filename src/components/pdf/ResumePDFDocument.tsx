import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from '@react-pdf/renderer';
import { CVContent } from '../../types/cv';

interface ResumePDFProps {
  data: CVContent;
  language: 'es' | 'en';
}

const styles = StyleSheet.create({
  page: {
    paddingTop: 32,
    paddingBottom: 36,
    paddingHorizontal: 36,
    fontFamily: 'Helvetica',
    fontSize: 9.5,
    lineHeight: 1.35,
    color: '#1e293b',
  },
  header: {
    marginBottom: 14,
    borderBottomWidth: 1.5,
    borderBottomColor: '#2563eb',
    paddingBottom: 8,
  },
  name: {
    fontSize: 20,
    fontFamily: 'Helvetica-Bold',
    color: '#1e3a8a',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  headline: {
    fontSize: 10.5,
    fontFamily: 'Helvetica-Bold',
    color: '#2563eb',
    marginBottom: 5,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    fontSize: 8.5,
    color: '#475569',
  },
  contactItem: {
    marginRight: 6,
  },
  link: {
    color: '#2563eb',
    textDecoration: 'none',
  },
  section: {
    marginTop: 10,
    marginBottom: 6,
  },
  sectionTitle: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: '#1e3a8a',
    borderBottomWidth: 1,
    borderBottomColor: '#cbd5e1',
    paddingBottom: 2,
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  paragraph: {
    fontSize: 9,
    lineHeight: 1.4,
    color: '#334155',
    marginBottom: 4,
    textAlign: 'justify',
  },
  skillCategory: {
    marginBottom: 3,
  },
  skillTitle: {
    fontFamily: 'Helvetica-Bold',
    color: '#1e293b',
  },
  experienceItem: {
    marginBottom: 8,
  },
  expHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 1,
  },
  expRole: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: '#0f172a',
  },
  expDate: {
    fontSize: 8.5,
    color: '#64748b',
    fontFamily: 'Helvetica-Bold',
  },
  expSubHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
    fontSize: 8.5,
  },
  expCompany: {
    color: '#2563eb',
    fontFamily: 'Helvetica-Bold',
  },
  expLocation: {
    color: '#64748b',
  },
  bulletList: {
    paddingLeft: 8,
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: 2.5,
  },
  bulletPoint: {
    width: 8,
    fontSize: 9,
    color: '#2563eb',
  },
  bulletText: {
    flex: 1,
    fontSize: 8.5,
    lineHeight: 1.35,
    color: '#334155',
  },
  eduItem: {
    marginBottom: 6,
  },
  certItem: {
    marginBottom: 4,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 36,
    right: 36,
    textAlign: 'center',
    fontSize: 7.5,
    color: '#94a3b8',
    borderTopWidth: 0.5,
    borderTopColor: '#e2e8f0',
    paddingTop: 4,
  },
});

export const ResumePDFDocument: React.FC<ResumePDFProps> = ({ data, language }) => {
  const { contact } = data;

  const sectionTitles = {
    profile: language === 'es' ? 'Perfil Profesional' : 'Professional Profile',
    skills: language === 'es' ? 'Habilidades Técnicas' : 'Technical Skills',
    softSkills: language === 'es' ? 'Habilidades Blandas' : 'Soft Skills',
    experience: language === 'es' ? 'Experiencia Laboral' : 'Professional Experience',
    education: language === 'es' ? 'Educación' : 'Education',
    certifications: language === 'es' ? 'Certificaciones & Capacitación' : 'Certifications & Training',
    languages: language === 'es' ? 'Idiomas' : 'Languages',
  };

  return (
    <Document
      title={`CV - ${contact.name} (${language.toUpperCase()})`}
      author={contact.name}
      subject="Curriculum Vitae"
      keywords="CV, Resume, Software Engineer, Cloud Architect, AI Engineer, ATS"
    >
      <Page size="A4" style={styles.page}>
        {/* Header / Contact */}
        <View style={styles.header}>
          <Text style={styles.name}>{contact.name}</Text>
          <Text style={styles.headline}>{contact.headline}</Text>

          <View style={styles.contactRow}>
            <Text style={styles.contactItem}>{contact.location}</Text>
            <Text style={styles.contactItem}>• {contact.phone}</Text>
            <Text style={styles.contactItem}>• {contact.email}</Text>
            {contact.linkedinUrl && (
              <Text style={styles.contactItem}>
                • <Link src={contact.linkedinUrl} style={styles.link}>LinkedIn</Link>
              </Text>
            )}
            {contact.githubUrl && (
              <Text style={styles.contactItem}>
                • <Link src={contact.githubUrl} style={styles.link}>GitHub</Link>
              </Text>
            )}
            {contact.portfolioUrl && (
              <Text style={styles.contactItem}>
                • <Link src={contact.portfolioUrl} style={styles.link}>Portfolio</Link>
              </Text>
            )}
          </View>
        </View>

        {/* Profile / Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{sectionTitles.profile}</Text>
          <Text style={styles.paragraph}>{data.summary}</Text>
        </View>

        {/* Languages */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{sectionTitles.languages}</Text>
          <Text style={styles.paragraph}>
            {data.languages.map((l) => `${l.name}: ${l.level}`).join('   |   ')}
          </Text>
        </View>

        {/* Technical Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{sectionTitles.skills}</Text>
          {data.technicalSkills.map((cat, i) => (
            <Text key={i} style={[styles.paragraph, styles.skillCategory]}>
              <Text style={styles.skillTitle}>{cat.categoryName}: </Text>
              {cat.skills.join(', ')}
            </Text>
          ))}
        </View>

        {/* Soft Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{sectionTitles.softSkills}</Text>
          <Text style={styles.paragraph}>
            {data.softSkills.join('  •  ')}
          </Text>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{sectionTitles.experience}</Text>
          {data.experience.map((exp) => (
            <View key={exp.id} style={styles.experienceItem} wrap={false}>
              <View style={styles.expHeader}>
                <Text style={styles.expRole}>{exp.role}</Text>
                <Text style={styles.expDate}>{exp.startDate} – {exp.endDate}</Text>
              </View>
              <View style={styles.expSubHeader}>
                <Text style={styles.expCompany}>{exp.company}</Text>
                <Text style={styles.expLocation}>{exp.location} ({exp.workplaceType})</Text>
              </View>
              <View style={styles.bulletList}>
                {exp.responsibilities.map((resp, idx) => (
                  <View key={idx} style={styles.bulletItem}>
                    <Text style={styles.bulletPoint}>•</Text>
                    <Text style={styles.bulletText}>{resp}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{sectionTitles.education}</Text>
          {data.education.map((edu) => (
            <View key={edu.id} style={styles.eduItem} wrap={false}>
              <View style={styles.expHeader}>
                <Text style={styles.expRole}>{edu.degree}</Text>
                <Text style={styles.expDate}>{edu.startDate} – {edu.endDate}</Text>
              </View>
              <View style={styles.expSubHeader}>
                <Text style={styles.expCompany}>{edu.institution}</Text>
                <Text style={styles.expLocation}>{edu.location}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Certifications */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{sectionTitles.certifications}</Text>
          {data.certifications.map((cert) => (
            <View key={cert.id} style={styles.certItem} wrap={false}>
              <Text style={styles.paragraph}>
                <Text style={styles.skillTitle}>{cert.title}</Text> – {cert.issuer} ({cert.date})
              </Text>
            </View>
          ))}
        </View>

        {/* Page Footer */}
        <Text
          style={styles.footer}
          render={({ pageNumber, totalPages }) =>
            `${contact.name} - Curriculum Vitae | ${language.toUpperCase()} | ${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};
