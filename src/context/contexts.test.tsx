import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import type { ReactNode } from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';
import { LanguageProvider, useLanguage } from './LanguageContext';

describe('Global Contexts', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  describe('ThemeContext', () => {
    it('defaults to dark or saved theme and toggles correctly', () => {
      const wrapper = ({ children }: { children: ReactNode }) => (
        <ThemeProvider>{children}</ThemeProvider>
      );

      const { result } = renderHook(() => useTheme(), { wrapper });

      expect(['light', 'dark']).toContain(result.current.theme);

      const initialTheme = result.current.theme;
      act(() => {
        result.current.toggleTheme();
      });

      const newTheme = initialTheme === 'dark' ? 'light' : 'dark';
      expect(result.current.theme).toBe(newTheme);
      expect(localStorage.getItem('cv_theme')).toBe(newTheme);
    });
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
