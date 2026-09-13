import React, { useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import { ResumePDFDocument } from './ResumePDFDocument';
import { useLanguage } from '../../context/LanguageContext';
import { FileDown, Loader2 } from 'lucide-react';

interface PDFDownloadButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'navbar';
}

export const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({
  className = '',
  variant = 'primary',
}) => {
  const { data, language, labels } = useLanguage();
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    if (isGenerating) return;
    try {
      setIsGenerating(true);
      const doc = <ResumePDFDocument data={data} language={language} />;
      const asPdf = pdf(doc);
      const blob = await asPdf.toBlob();
      const url = URL.createObjectURL(blob);

      const sanitizedName = data.contact.name.replace(/\s+/g, '_');
      const filename = `CV_${sanitizedName}_${language.toUpperCase()}.pdf`;

      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Error generating PDF:', err);
      alert(language === 'es' ? 'Error al generar el PDF. Por favor intenta de nuevo.' : 'Error generating PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  if (variant === 'navbar') {
    return (
      <button
        onClick={handleDownload}
        disabled={isGenerating}
        className={`flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-semibold bg-brand-600 hover:bg-brand-500 active:bg-brand-700 text-white shadow-sm transition-all disabled:opacity-50 ${className}`}
        aria-label="Download ATS PDF Resume"
      >
        {isGenerating ? (
          <Loader2 className="w-3.5 h-3.5 animate-spin" />
        ) : (
          <FileDown className="w-3.5 h-3.5" />
        )}
        <span>{isGenerating ? labels.nav.generatingPdf : labels.nav.downloadPdf}</span>
      </button>
    );
  }

  return (
    <button
      onClick={handleDownload}
      disabled={isGenerating}
      className={`flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg text-sm font-semibold bg-brand-600 hover:bg-brand-500 active:bg-brand-700 text-white shadow-sm hover:shadow-md transition-all active:scale-[0.99] disabled:opacity-60 ${className}`}
      aria-label="Download ATS PDF Resume"
    >
      {isGenerating ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <FileDown className="w-4 h-4" />
      )}
      <span>{isGenerating ? labels.nav.generatingPdf : labels.actions.downloadResume}</span>
    </button>
  );
};
