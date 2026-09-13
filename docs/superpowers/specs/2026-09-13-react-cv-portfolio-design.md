# Especificación de Diseño: Curriculum Vitae Interactivo en React (Bilingüe, PDF ATS & Firebase Hosting)

**Fecha:** 2026-09-13  
**Estado:** Aprobado  
**Clasificación:** Arquitectónico (Architectural)

---

## 1. Visión General del Proyecto

Creación de una aplicación web moderna para el Curriculum Vitae y portafolio profesional de Ronald. La aplicación está desarrollada en React con TypeScript y Tailwind CSS, estilizada con una paleta en tonos azules, soporte bilingüe completo (Español / Inglés) y modo dual claro/oscuro.

Incluye un generador de documentos PDF vectorial compatible con estándares de sistemas ATS (*Applicant Tracking Systems*) mediante `@react-pdf/renderer` y está configurada para su despliegue continuo en **Google Firebase Hosting**.

Los datos están desacoplados de la interfaz visual en un modelo tipado (`src/data/cvData.ts`), permitiendo que las secciones basadas en el documento de muestra (`ATS & AI COMPATIBLE RESUME - ANDRES J. JIMENEZ LEANDRO CV 4.2.5.docx`) se sustituyan de manera progresiva y ordenada.

---

## 2. Pila Tecnológica (Tech Stack)

* **Build Tool & Entorno**: Vite 6+
* **Framework Frontend**: React 19 / 18 con TypeScript
* **Estilizado & Diseño**: Tailwind CSS
* **Iconografía**: Lucide React
* **Motor de Generación PDF**: `@react-pdf/renderer` (renderizado vectorial ATS nativo)
* **Plataforma de Despliegue**: Google Firebase Hosting
* **Control de Estado**: React Context API para temas (Light/Dark) e idioma (ES/EN) con persistencia en `localStorage`.

---

## 3. Estructura de Directorios y Archivos

```
curriculumvitae/
├── docs/
│   └── superpowers/
│       └── specs/
│           └── 2026-09-13-react-cv-portfolio-design.md
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx             # Navegación fija, toggle de tema, selector de idioma, botón PDF
│   │   │   └── Footer.tsx             # Pie de página con derechos, enlaces rápidos y versión
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx        # Presentación, nombre, cargo, redes sociales y contacto rápido
│   │   │   ├── SummarySection.tsx     # Resumen ejecutivo y propuesta de valor
│   │   │   ├── SkillsSection.tsx      # Habilidades técnicas categorizadas y habilidades blandas
│   │   │   ├── ExperienceSection.tsx  # Historial laboral cronológico con viñetas de impacto
│   │   │   ├── EducationSection.tsx   # Títulos académicos y educación formal
│   │   │   ├── CertificationsSection.tsx # Certificaciones oficiales y enlaces de verificación
│   │   │   └── ContactSection.tsx     # Tarjetas de contacto y llamada a la acción
│   │   ├── ui/
│   │   │   ├── Badge.tsx              # Componente reutilizable de etiqueta/píldora
│   │   │   ├── Card.tsx               # Tarjeta con bordes y efectos hover en tonos azules
│   │   │   └── SectionHeader.tsx      # Título de sección con icono y línea decorativa
│   │   └── pdf/
│   │       ├── ResumePDFDocument.tsx  # Documento @react-pdf estructurado linealmente para ATS
│   │       └── PDFDownloadButton.tsx  # Botón con estado de carga y descarga de blob
│   ├── context/
│   │   ├── ThemeContext.tsx           # Contexto para modo 'dark' / 'light'
│   │   └── LanguageContext.tsx        # Contexto para idioma 'es' / 'en'
│   ├── data/
│   │   └── cvData.ts                  # Diccionario de datos bilingüe y fuente única de la verdad
│   ├── types/
│   │   └── cv.ts                      # Interfaces y tipos de TypeScript para la estructura del CV
│   ├── index.css                      # Variables CSS, fuentes e importaciones de Tailwind
│   ├── App.tsx                        # Layout principal y orquestación de contextos y secciones
│   └── main.tsx                       # Punto de entrada de la aplicación
├── firebase.json                      # Configuración de hosting SPA para Firebase
├── .firebaserc                        # Identificador del proyecto Firebase
├── tsconfig.json                      # Configuración estricta de TypeScript
├── vite.config.ts                     # Configuración de empaquetado Vite
└── package.json                       # Scripts y dependencias del proyecto
```

---

## 4. Modelo de Datos y Esquema de Secciones (`src/types/cv.ts`)

El modelo define la estructura bilingüe mediante un objeto raíz con claves `es` y `en`:

```typescript
export interface ContactInfo {
  name: string;
  headline: string;
  phone: string;
  email: string;
  location: string;
  linkedinUrl?: string;
  githubUrl?: string;
  portfolioUrl?: string;
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
  endDate: string; // 'Present' o fecha 'YYYY/MM'
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
  level: string; // Ej: "Nativo / Native", "C1+ (TOEIC)"
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

export interface BilingualCVData {
  es: CVContent;
  en: CVContent;
}
```

---

## 5. Diseño Visual y Paleta de Colores

* **Filosofía**: Enfoque profesional con temática centrada en el color azul favorito del usuario.
* **Modo Oscuro (Dark Navy Tech)**:
  * Fondo: `bg-[#0b132b]` y `bg-[#0f172a]`
  * Superficies y Tarjetas: `bg-[#1c2541]` / `bg-[#1e293b]` con bordes suaves `border-blue-900/40`
  * Textos: Blanco nítido `text-slate-100` y secundario `text-slate-300`
  * Acentos: Cian eléctrico `text-cyan-400` y Azul Cobalto `bg-blue-600`
* **Modo Claro (Crisp Corporate Blue)**:
  * Fondo: `bg-[#f8fafc]` (blanco gélido/marfil suave)
  * Superficies y Tarjetas: `bg-white` con sombras tenues y bordes `border-slate-200`
  * Textos: Azul marino profundo `text-slate-900` y gris plomo `text-slate-600`
  * Acentos: Azul real `text-blue-700` y `bg-blue-600`

---

## 6. Generador de PDF compatible con ATS (`@react-pdf/renderer`)

* **Estándar ATS**:
  * Diseño lineal a una sola columna para las secciones de contenido denso (garantiza que los analizadores automáticos lean los párrafos en el orden correcto sin mezclar columnas adyacentes).
  * Tipografía estándar vectorial (Helvetica) totalmente seleccionable y legible por OCR.
  * Formato de página: `A4` con márgenes estandarizados de 28pt.
  * Encabezados reconocidos universalmente: *PROFILE*, *EXPERIENCE*, *TECHNICAL SKILLS*, *EDUCATION*, *CERTIFICATIONS*, *LANGUAGES*.
* **Descarga Automática**:
  * Genera y descarga el archivo con formato `CV_{Nombre}_{Idioma}.pdf` dependiendo del idioma activo en la aplicación.

---

## 7. Configuración de Google Firebase Hosting

* **`firebase.json`**:
```json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "/assets/**",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=31536000,immutable"
          }
        ]
      }
    ]
  }
}
```
* **Comandos en `package.json`**:
  * `npm run build`: Genera la compilación lista para producción en `dist/`.
  * `npm run deploy`: Ejecuta la publicación a Firebase con `firebase deploy --only hosting`.

---

## 8. Estrategia de Sustitución Progresiva de Secciones

1. Se inicializará la aplicación con la estructura completa en ambos idiomas (`es` y `en`), utilizando la información del documento base del amigo como plantilla de demostración completamente funcional.
2. Cada sección de `src/data/cvData.ts` estará claramente modularizada.
3. Se invitará al usuario a ir sustituyendo sus datos sección por sección:
   * **Fase 1**: Datos de Contacto, Nombre, Cargo y Enlaces.
   * **Fase 2**: Resumen Profesional / Perfil.
   * **Fase 3**: Habilidades Técnicas y Blandas.
   * **Fase 4**: Historial de Experiencia Laboral.
   * **Fase 5**: Educación y Certificaciones.
   * **Fase 6**: Idiomas.
4. Cada cambio impactará de inmediato tanto la interfaz web como el PDF exportado.
