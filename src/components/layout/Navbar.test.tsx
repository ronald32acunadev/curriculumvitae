import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Navbar } from './Navbar';
import { LanguageProvider } from '../../context/LanguageContext';

describe('Navbar Component', () => {
  const renderNavbar = () =>
    render(
      <LanguageProvider>
        <Navbar />
      </LanguageProvider>
    );

  it('renders navigation brand and sections', () => {
    renderNavbar();
    expect(screen.getByText(/Ronald/i)).toBeInTheDocument();
    expect(screen.getByText(/Perfil/i)).toBeInTheDocument();
    expect(screen.getByText(/Habilidades/i)).toBeInTheDocument();
    expect(screen.getByText(/Experiencia/i)).toBeInTheDocument();
  });

  it('toggles language when language button is clicked', () => {
    renderNavbar();
    const langBtn = screen.getByTestId('lang-toggle-btn');
    expect(langBtn).toBeInTheDocument();

    fireEvent.click(langBtn);
    // After toggling to English:
    expect(screen.getByText(/Profile/i)).toBeInTheDocument();
    expect(screen.getByText(/Experience/i)).toBeInTheDocument();
  });
});
