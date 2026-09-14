import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import type { ReactNode } from 'react';
import { LanguageProvider, useLanguage } from './LanguageContext';

describe('Global Contexts', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('LanguageContext', () => {
    it('defaults to es and toggles to en', () => {
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
