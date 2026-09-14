import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const { data, labels } = useLanguage();

  if (!data.certifications || data.certifications.length === 0) {
    return null;
  }

  return (
    <section id="certifications" className="py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={labels.sections.certificationsTitle}
          icon={<Award className="w-5 h-5" />}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.certifications.map((cert) => (
            <Card
              key={cert.id}
              hoverEffect
              className="p-5 flex flex-col justify-between border-t-[3px] border-t-brand-600"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-xs font-semibold text-brand-600">
                    {cert.issuer}
                  </span>
                  <Badge variant="secondary" className="text-[10px]">
                    {cert.date}
                  </Badge>
                </div>

                <h3 className="text-sm font-bold text-slate-900 leading-snug mb-3">
                  {cert.title}
                </h3>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                {cert.verificationUrl ? (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{labels.actions.viewCredential}</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{labels.actions.physicalCertificate}</span>
                  </span>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
