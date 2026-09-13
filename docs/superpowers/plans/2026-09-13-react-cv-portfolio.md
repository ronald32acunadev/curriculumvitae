# React CV Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir una aplicación web moderna y bilingüe (ES/EN) para el currículum vitae de Ronald utilizando React, TypeScript y Tailwind CSS en tonos azules, con generación de PDF compatible con ATS vía `@react-pdf/renderer` y configuración lista para Google Firebase Hosting.

**Architecture:** Arquitectura modular desacoplada con fuente de verdad tipada (`cvData.ts`), contextos globales para tema oscuro/claro e idioma, componentes de sección especializados, renderizador vectorial de PDF para ATS y reglas de Firebase Hosting SPA.

**Tech Stack:** React 19 / 18, TypeScript, Vite, Tailwind CSS, Lucide React, `@react-pdf/renderer`, Vitest, Google Firebase Hosting.

**Spec:** [`docs/superpowers/specs/2026-09-13-react-cv-portfolio-design.md`](file:///run/media/ronald/Proyects/Proyects/curriculumvitae/docs/superpowers/specs/2026-09-13-react-cv-portfolio-design.md)

## Global Constraints

- Vite + React + TypeScript como base del proyecto
- Tailwind CSS configurado con tema azul (Navy `#0b132b` / `#0f172a`, Cobalt `#2563eb`, Cyan `#38bdf8`)
- Soporte de cambio bilingüe (Español e Inglés) y modo oscuro/claro con persistencia en `localStorage`
- Generación directa de PDF ATS vectorial en el idioma activo
- `firebase.json` y `.firebaserc` configurados para despliegue de `dist/` a Firebase Hosting
- TypeScript estricto sin errores de compilación (`npm run build`)

---

### Task 1: Scaffolding del Proyecto y Configuración de Herramientas

**Files:**
- Create: `package.json`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `tsconfig.app.json`
- Create: `tsconfig.node.json`
- Create: `index.html`
- Create: `src/index.css`
- Create: `firebase.json`
- Create: `.firebaserc`
- Create: `.gitignore`

**Interfaces:**
- Produces: Base ejecutable del proyecto React + Vite + Tailwind + Firebase + Vitest.

- [ ] **Step 1: Crear archivo .gitignore**

```gitignore
node_modules
dist
dist-ssr
*.local
.env
.env.*
.DS_Store
.firebase
```

- [ ] **Step 2: Crear package.json con todas las dependencias necesarias**

Incluye React, React DOM, Lucide React, `@react-pdf/renderer`, Tailwind CSS, Vite, Vitest y TypeScript.

- [ ] **Step 3: Crear configuraciones de TypeScript (tsconfig.json, tsconfig.app.json, tsconfig.node.json)**

Configuración con `strict: true`, JSX transform `react-jsx`, y resolución de módulos de Vite.

- [ ] **Step 4: Crear vite.config.ts con soporte para React y Vitest**

- [ ] **Step 5: Crear firebase.json y .firebaserc**

Configurar SPA rewrite y carpeta `dist`.

- [ ] **Step 6: Instalar dependencias con `npm install`**

Ejecutar: `npm install`
Verificar: Código de salida 0 y creación de `package-lock.json`.

- [ ] **Step 7: Configurar Tailwind CSS y `src/index.css` con la paleta de azules**

- [ ] **Step 8: Commit**

```bash
git add package.json package-lock.json vite.config.ts tsconfig*.json index.html src/index.css firebase.json .firebaserc .gitignore
git commit -m "chore: scaffold Vite React project with Tailwind and Firebase configuration"
```

---

### Task 2: Modelos de Datos Tipados y Diccionario Bilingüe (`src/types/cv.ts`, `src/data/cvData.ts`)

**Files:**
- Create: `src/types/cv.ts`
- Create: `src/data/cvData.ts`
- Test: `src/data/cvData.test.ts`

**Interfaces:**
- Produces: `BilingualCVData`, `CVContent`, `cvData` exportado para su consumo en componentes de vista y en el PDF.

- [ ] **Step 1: Escribir test unitario que verifique la integridad y completitud del diccionario de datos**

`src/data/cvData.test.ts`: Comprobar que `cvData.es` y `cvData.en` tienen datos válidos de contacto, resumen, habilidades técnicas, habilidades blandas, experiencia, educación, certificaciones e idiomas.

- [ ] **Step 2: Ejecutar test para verificar que falla**

Ejecutar: `npm test` o `npx vitest run src/data/cvData.test.ts`
Resultado esperado: FAIL (los archivos `cv.ts` y `cvData.ts` aún no existen).

- [ ] **Step 3: Crear `src/types/cv.ts`**

Definir `ContactInfo`, `SkillCategory`, `ExperienceItem`, `EducationItem`, `CertificationItem`, `LanguageItem`, `CVContent`, `BilingualCVData`.

- [ ] **Step 4: Crear `src/data/cvData.ts`**

Poblar el diccionario bilingüe con los datos completos extraídos de la plantilla base `ATS & AI COMPATIBLE RESUME - ANDRES J. JIMENEZ LEANDRO CV 4.2.5.docx` tanto en inglés como en su versión equivalente en español, listos para ser personalizados gradualmente.

- [ ] **Step 5: Ejecutar test para verificar que pasa**

Ejecutar: `npx vitest run src/data/cvData.test.ts`
Resultado esperado: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/types/cv.ts src/data/cvData.ts src/data/cvData.test.ts
git commit -m "feat: add typed bilingual CV data schema and base dataset"
```

---

### Task 3: Contextos Globales de Tema e Idioma (`ThemeContext.tsx`, `LanguageContext.tsx`)

**Files:**
- Create: `src/context/ThemeContext.tsx`
- Create: `src/context/LanguageContext.tsx`
- Test: `src/context/contexts.test.tsx`

**Interfaces:**
- Produces: `ThemeProvider`, `useTheme()`, `LanguageProvider`, `useLanguage()`.
- Modifica `document.documentElement` añadiendo o quitando la clase `'dark'`.

- [ ] **Step 1: Escribir tests unitarios para ThemeContext y LanguageContext**

Verificar que `useTheme` inicializa el modo claro/oscuro desde `localStorage`, actualiza el estado y persiste el cambio. Verificar que `useLanguage` inicializa `'es'`, conmuta a `'en'` y persiste en `localStorage`.

- [ ] **Step 2: Ejecutar test para verificar fallo**

Ejecutar: `npx vitest run src/context/contexts.test.tsx`
Resultado esperado: FAIL.

- [ ] **Step 3: Implementar `ThemeContext.tsx`**

Soporte para `'light'` y `'dark'`, sincronización con `localStorage` y toggle.

- [ ] **Step 4: Implementar `LanguageContext.tsx`**

Soporte para `'es'` y `'en'`, sincronización con `localStorage` y toggle.

- [ ] **Step 5: Ejecutar tests para verificar que pasan**

Ejecutar: `npx vitest run src/context/contexts.test.tsx`
Resultado esperado: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/context/ThemeContext.tsx src/context/LanguageContext.tsx src/context/contexts.test.tsx
git commit -m "feat: add theme and language global contexts with localStorage persistence"
```

---

### Task 4: Componentes UI Reutilizables y Layout (`Badge`, `Card`, `SectionHeader`, `Navbar`, `Footer`)

**Files:**
- Create: `src/components/ui/Badge.tsx`
- Create: `src/components/ui/Card.tsx`
- Create: `src/components/ui/SectionHeader.tsx`
- Create: `src/components/layout/Navbar.tsx`
- Create: `src/components/layout/Footer.tsx`
- Test: `src/components/layout/Navbar.test.tsx`

**Interfaces:**
- Consumes: `useTheme`, `useLanguage`, iconos de `lucide-react`.
- Produces: Estructura de navegación responsive, barra de herramientas con selector de idioma, botón de tema e indicador para PDF.

- [ ] **Step 1: Escribir test para Navbar**

Verificar que se renderizan los enlaces de navegación, los botones de cambio de tema e idioma y el botón de descarga.

- [ ] **Step 2: Ejecutar test para verificar fallo**

Ejecutar: `npx vitest run src/components/layout/Navbar.test.tsx`
Resultado esperado: FAIL.

- [ ] **Step 3: Implementar componentes UI (`Badge.tsx`, `Card.tsx`, `SectionHeader.tsx`)**

Estilizados con Tailwind con la paleta de azul cobalto, azul marino y cian.

- [ ] **Step 4: Implementar `Navbar.tsx` y `Footer.tsx`**

Barra de navegación sticky con efecto blur, menú móvil responsive, selector ES/EN interactivo y toggle sol/luna.

- [ ] **Step 5: Ejecutar test para verificar que pasa**

Ejecutar: `npx vitest run src/components/layout/Navbar.test.tsx`
Resultado esperado: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/components/ui/ src/components/layout/
git commit -m "feat: implement UI primitives and responsive layout navbar and footer"
```

---

### Task 5: Secciones del Portfolio Web (`Hero`, `Summary`, `Skills`, `Experience`, `Education`, `Certifications`, `Contact`)

**Files:**
- Create: `src/components/sections/HeroSection.tsx`
- Create: `src/components/sections/SummarySection.tsx`
- Create: `src/components/sections/SkillsSection.tsx`
- Create: `src/components/sections/ExperienceSection.tsx`
- Create: `src/components/sections/EducationSection.tsx`
- Create: `src/components/sections/CertificationsSection.tsx`
- Create: `src/components/sections/ContactSection.tsx`
- Test: `src/components/sections/sections.test.tsx`

**Interfaces:**
- Consumes: `useLanguage()`, `cvData`, `Badge`, `Card`, `SectionHeader`.
- Produces: Secciones de contenido interactivas, con filtros por categoría en habilidades y enlaces externos en certificaciones.

- [ ] **Step 1: Escribir test que verifique renderizado de las secciones**

- [ ] **Step 2: Ejecutar test para verificar fallo**

Ejecutar: `npx vitest run src/components/sections/sections.test.tsx`
Resultado esperado: FAIL.

- [ ] **Step 3: Implementar `HeroSection.tsx` y `SummarySection.tsx`**

Presentación con título profesional, badges de contacto directo, y resumen de perfil ejecutivo.

- [ ] **Step 4: Implementar `SkillsSection.tsx`**

Listado categorizado de habilidades técnicas (Cloud, DevOps, AI Engineering, etc.) y habilidades blandas con estética en tonos azules.

- [ ] **Step 5: Implementar `ExperienceSection.tsx`**

Línea de tiempo con historial de puestos, empresas, modalidad (remoto/presencial), fechas y viñetas de logros.

- [ ] **Step 6: Implementar `EducationSection.tsx` y `CertificationsSection.tsx`**

Tarjetas con grados universitarios y credenciales con enlace a verificación oficial.

- [ ] **Step 7: Implementar `ContactSection.tsx`**

Llamada a la acción para contacto con correo, teléfono, LinkedIn y GitHub.

- [ ] **Step 8: Ejecutar test para verificar que pasa**

Ejecutar: `npx vitest run src/components/sections/sections.test.tsx`
Resultado esperado: PASS.

- [ ] **Step 9: Commit**

```bash
git add src/components/sections/
git commit -m "feat: implement all portfolio CV content sections"
```

---

### Task 6: Generador de PDF Vectorial ATS con `@react-pdf/renderer`

**Files:**
- Create: `src/components/pdf/ResumePDFDocument.tsx`
- Create: `src/components/pdf/PDFDownloadButton.tsx`
- Test: `src/components/pdf/ResumePDFDocument.test.ts`

**Interfaces:**
- Consumes: `CVContent`, `language` ('es' | 'en').
- Produces: Documento PDF formal y vectorial formateado para A4 con fuentes estándar compatibles con ATS y botón de descarga interactivo.

- [ ] **Step 1: Escribir test unitario para la generación de la estructura del PDF**

- [ ] **Step 2: Ejecutar test para verificar fallo**

Ejecutar: `npx vitest run src/components/pdf/ResumePDFDocument.test.ts`
Resultado esperado: FAIL.

- [ ] **Step 3: Implementar `ResumePDFDocument.tsx`**

Uso de `@react-pdf/renderer` (`Document`, `Page`, `Text`, `View`, `StyleSheet`) estructurado de forma lineal (sin tablas complejas ni dos columnas cruzadas que confundan al ATS), márgenes estandarizados y tipografía Helvetica.

- [ ] **Step 4: Implementar `PDFDownloadButton.tsx`**

Uso de `pdf(document).toBlob()` para disparar la descarga directa de `CV_{Name}_{Language}.pdf` con estado de carga (spinner) y notificación al usuario.

- [ ] **Step 5: Ejecutar test para verificar que pasa**

Ejecutar: `npx vitest run src/components/pdf/ResumePDFDocument.test.ts`
Resultado esperado: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/components/pdf/
git commit -m "feat: implement ATS-compliant vector PDF document generator and download button"
```

---

### Task 7: Integración en `App.tsx`, Verificación de Build y Preparación para Firebase Hosting

**Files:**
- Create: `src/App.tsx`
- Create: `src/main.tsx`
- Modify: `index.html`
- Create: `README.md`

**Interfaces:**
- Produces: Aplicación completa ensamblada, compilación de producción exitosa en `dist/`, guía de despliegue a Firebase Hosting.

- [ ] **Step 1: Implementar `src/App.tsx` y `src/main.tsx`**

Ensamblar `ThemeProvider`, `LanguageProvider`, `Navbar`, todas las secciones y `Footer`.

- [ ] **Step 2: Ejecutar tests completos de la suite**

Ejecutar: `npm test`
Resultado esperado: Todos los tests pasan al 100%.

- [ ] **Step 3: Ejecutar compilación de producción con Vite**

Ejecutar: `npm run build`
Resultado esperado: Compilación exitosa en `dist/` sin advertencias de tipos de TypeScript.

- [ ] **Step 4: Crear README.md con guía de sustitución de secciones y comandos de despliegue en Firebase**

- [ ] **Step 5: Commit**

```bash
git add src/App.tsx src/main.tsx index.html README.md
git commit -m "feat: integrate application, verify production build and add Firebase deployment guide"
```
