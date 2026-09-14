import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import type { ReactNode } from 'react';
import { LanguageProvider, useLanguage, detectBrowserLanguage } from './LanguageContext';

describe('Global Contexts', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  describe('LanguageContext', () => {
    it('detects browser languages with fallback to english', () => {
      vi.spyOn(navigator, 'languages', 'get').mockReturnValue(['en-US', 'es-CR']);
      expect(detectBrowserLanguage()).toBe('en');

      vi.spyOn(navigator, 'languages', 'get').mockReturnValue(['es-CR', 'en-US']);
      expect(detectBrowserLanguage()).toBe('es');

      // Unsupported first language falls back to first supported in user's browser preferences:
      vi.spyOn(navigator, 'languages', 'get').mockReturnValue(['fr-FR', 'es-MX']);
      expect(detectBrowserLanguage()).toBe('es');

      vi.spyOn(navigator, 'languages', 'get').mockReturnValue(['de-DE', 'en-GB']);
      expect(detectBrowserLanguage()).toBe('en');

      // When neither es nor en is present, defaults to English:
      vi.spyOn(navigator, 'languages', 'get').mockReturnValue(['ja-JP', 'de-DE']);
      expect(detectBrowserLanguage()).toBe('en');
    });

    it('initializes with browser language when localStorage is empty', () => {
      vi.spyOn(navigator, 'languages', 'get').mockReturnValue(['es-CR']);

      const wrapper = ({ children }: { children: ReactNode }) => (
        <LanguageProvider>{children}</LanguageProvider>
      );

      const { result } = renderHook(() => useLanguage(), { wrapper });

      expect(result.current.language).toBe('es');
      expect(result.current.labels.nav.downloadPdf).toBe('Descargar PDF');
    });

    it('defaults to English when browser language is unsupported and localStorage is empty', () => {
      vi.spyOn(navigator, 'languages', 'get').mockReturnValue(['it-IT']);

      const wrapper = ({ children }: { children: ReactNode }) => (
        <LanguageProvider>{children}</LanguageProvider>
      );

      const { result } = renderHook(() => useLanguage(), { wrapper });

      expect(result.current.language).toBe('en');
      expect(result.current.labels.nav.downloadPdf).toBe('Download PDF');
    });

    it('prioritizes saved localStorage over browser language and allows toggling', () => {
      localStorage.setItem('cv_language', 'es');
      vi.spyOn(navigator, 'languages', 'get').mockReturnValue(['en-US']);

      const wrapper = ({ children }: { children: ReactNode }) => (
        <LanguageProvider>{children}</LanguageProvider>
      );

      const { result } = renderHook(() => useLanguage(), { wrapper });

      expect(result.current.language).toBe('es');
      expect(result.current.labels.nav.downloadPdf).toBe('Descargar PDF');

      act(() => {
        result.current.setLanguage('en');
      });

      expect(result.current.language).toBe('en');
      expect(result.current.labels.nav.downloadPdf).toBe('Download PDF');
      expect(localStorage.getItem('cv_language')).toBe('en');
    });
  });
});
