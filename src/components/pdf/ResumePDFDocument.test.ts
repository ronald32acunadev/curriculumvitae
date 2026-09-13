import { describe, it, expect } from 'vitest';
import React from 'react';
import { ResumePDFDocument } from './ResumePDFDocument';
import { cvData } from '../../data/cvData';

describe('ResumePDFDocument', () => {
  it('instantiates ResumePDFDocument element correctly with Spanish content', () => {
    const element = React.createElement(ResumePDFDocument, {
      data: cvData.es,
      language: 'es',
    });
    expect(element).toBeDefined();
    expect(element.props.data.contact.name).toBe(cvData.es.contact.name);
    expect(element.props.language).toBe('es');
  });

  it('instantiates ResumePDFDocument element correctly with English content', () => {
    const element = React.createElement(ResumePDFDocument, {
      data: cvData.en,
      language: 'en',
    });
    expect(element).toBeDefined();
    expect(element.props.data.contact.name).toBe(cvData.en.contact.name);
    expect(element.props.language).toBe('en');
  });
});
