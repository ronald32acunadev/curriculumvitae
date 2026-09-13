# Curriculum Vitae Web & Portafolio (React + ATS PDF + Firebase)

Aplicación web interactiva, moderna y bilingüe (Español / Inglés) para el currículum vitae de Ronald. Diseñada con una paleta en tonos azules (modo claro y oscuro), generación de PDF vectorial 100% compatible con sistemas ATS vía `@react-pdf/renderer` y configuración lista para su publicación en **Google Firebase Hosting**.

---

## 🚀 Características Principales

* 🎨 **Diseño en Tonos Azules & Tema Dual**: Paleta en azul cobalto, azul marino (*navy*) y acentos en cian, con selector fluido de modo claro / modo oscuro.
* 🌐 **Soporte Bilingüe Completo (ES / EN)**: Conmutador de idioma que actualiza de inmediato toda la interfaz y el PDF exportable.
* 📄 **Descarga Directa de PDF ATS**: Generador integrado con `@react-pdf/renderer` que produce un PDF estructurado linealmente, con texto vectorial seleccionable, garantizando compatibilidad con filtros ATS (*Applicant Tracking Systems*).
* 🔥 **Listo para Google Firebase Hosting**: Reglas SPA configuradas en `firebase.json` y script automatizado `npm run deploy`.
* 🧩 **Estructura de Datos Desacoplada**: Todos los datos se gestionan desde `src/data/cvData.ts`, permitiendo actualizar las secciones paso a paso sin tocar código de maquetación.

---

## 🛠️ Pila Tecnológica

* **Framework & Build**: [React 19](https://react.dev/) + [Vite 6](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
* **Iconografía**: [Lucide React](https://lucide.dev/)
* **Generación de PDF**: [@react-pdf/renderer](https://react-pdf.org/)
* **Testing**: [Vitest](https://vitest.dev/) + React Testing Library
* **Despliegue**: [Google Firebase Hosting](https://firebase.google.com/docs/hosting)

---

## 📋 Comandos Disponibles

```bash
# Iniciar servidor de desarrollo local
npm run dev

# Ejecutar suite de pruebas unitarias
npm test

# Compilar versión para producción (dist/)
npm run build

# Previsualizar la compilación de producción localmente
npm run preview

# Desplegar a Firebase Hosting
npm run deploy
```

---

## 📝 Cómo Personalizar tus Secciones Paso a Paso

Toda la información del CV reside en un único archivo modular:
👉 **[`src/data/cvData.ts`](file:///run/media/ronald/Proyects/Proyects/curriculumvitae/src/data/cvData.ts)**

El archivo contiene un objeto bilingüe con dos ramas: `es` (Español) y `en` (Inglés). Puedes ir personalizándolo en las siguientes fases:

### 1. Datos Personales y de Contacto (`contact`)
Actualiza tu nombre, titular profesional, teléfono, correo, ciudad y enlaces a redes:
```typescript
contact: {
  name: "Ronald",
  headline: "Tu Título Profesional / Especialidad",
  phone: "+506 0000-0000",
  email: "tu.correo@ejemplo.com",
  location: "Tu Ciudad, País",
  linkedinUrl: "https://linkedin.com/in/tu-usuario",
  githubUrl: "https://github.com/tu-usuario",
  portfolioUrl: "https://tu-web.com",
}
```

### 2. Perfil y Resumen Ejecutivo (`summary`)
Párrafo que resume tus fortalezas, experiencia clave y propuesta de valor profesional.

### 3. Habilidades Técnicas y Blandas (`technicalSkills`, `softSkills`)
Organizadas en categorías (`Lenguajes de Programación`, `Cloud & DevOps`, `Bases de Datos`, `AI Engineering`, etc.) con lista de tecnologías en cada una.

### 4. Experiencia Laboral (`experience`)
Cada trabajo cuenta con:
* `company`: Nombre de la empresa u organización.
* `role`: Cargo desempeñado.
* `location`: Ubicación.
* `workplaceType`: `'Remote' | 'On-Site' | 'Hybrid'`.
* `startDate` / `endDate`: Fechas (ej. `'2024/01'` a `'Presente'`).
* `responsibilities`: Viñetas de logros e impacto con métricas.
* `technologies`: Etiquetas de tecnologías utilizadas en el rol.

### 5. Educación y Certificaciones (`education`, `certifications`)
* **Educación**: Grado obtenido, institución, período y descripción opcional.
* **Certificaciones**: Título, entidad emisora, fecha y enlace de verificación oficial (`verificationUrl`).

### 6. Idiomas (`languages`)
Lista de idiomas y nivel de fluidez (ej. Nativo, C1+, etc.).

---

## 🔥 Publicación en Google Firebase Hosting

Para desplegar tu CV en la web de forma gratuita con Firebase Hosting:

1. **Inicia sesión en Firebase**:
   ```bash
   npx firebase login
   ```

2. **Asocia tu proyecto de Firebase**:
   Si ya creaste un proyecto en la consola de Firebase ([console.firebase.google.com](https://console.firebase.google.com/)), vincula su ID:
   ```bash
   npx firebase use --add
   ```
   (Selecciona tu proyecto de la lista o escribe su ID).

3. **Despliega con un solo comando**:
   ```bash
   npm run deploy
   ```
   *Este comando compilará tu aplicación (`npm run build`) y la subirá de inmediato a Firebase Hosting.*

Tu currículum quedará disponible en una URL pública con HTTPS gratuito (ej. `https://tu-proyecto.web.app` o `https://tu-proyecto.firebaseapp.com`), y podrás asociar tu propio dominio personalizado en cualquier momento.
