import { BilingualCVData, UILabels } from '../types/cv';

export const cvData: BilingualCVData = {
  es: {
    contact: {
      name: "Ronald Daniel Acuña Arias",
      headline: "Senior Full Stack Developer & Developer Team Lead",
      phone: "+506 8572-4776",
      email: "ronald32acunadev@gmail.com",
      secondaryEmails: ["ronald23acua@gmail.com", "ronald23acua@hotmail.com"],
      location: "Venecia, San Carlos, Alajuela, Costa Rica",
      linkedinUrl: "https://www.linkedin.com/in/ronald-daniel-acuna-arias-89263818b/",
      githubUrl: "https://github.com/ronald32acunadev",
      portfolioUrl: "",
    },
    summary: "Senior Full Stack Developer y Developer Team Lead con sólida experiencia en el diseño y desarrollo de soluciones de software robustas, escalables y orientadas a resultados. Especialista en el ecosistema .NET con C# como fortaleza principal, complementado con versatilidad en JavaScript, Python, Java, PHP y Ruby, así como en la gestión avanzada de bases de datos relacionales y NoSQL (SQL Server, PostgreSQL, Azure Cosmos DB). Con amplia trayectoria en la nube con Microsoft Azure, integrando además tecnologías en Google Firebase y AWS.\n\nMe distingo por un enfoque analítico, calmado y resiliente ante desafíos técnicos complejos, priorizando siempre la resolución pragmática de problemas. Apasionado por la investigación y adopción continua de nuevas tecnologías en el día a día, integrando activamente herramientas de Inteligencia Artificial (Google Antigravity, Claude, ChatGPT) y ejecución de modelos locales (LM Studio, OpenCode) para potenciar la productividad y la calidad del desarrollo. Disfruto colaborar estrechamente en equipo a través de la comunicación asertiva, el diálogo constructivo y el liderazgo técnico empático.",
    languages: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "B2 Intermedio-Avanzado (Profesional)" },
    ],
    softSkills: [
      "Trabajo en Equipo y Comunicación Asertiva",
      "Alta Adaptabilidad al Cambio y Automejora Continua",
      "Serenidad y Resolución Analítica de Problemas bajo Presión",
      "Investigación e Implementación de Tecnologías Innovadoras",
      "Responsabilidad Profesional y Liderazgo Técnico"
    ],
    technicalSkills: [
      {
        categoryName: "Lenguajes de Programación",
        skills: ["C# (.NET)", "JavaScript", "TypeScript", "Python", "Java", "PHP", "Ruby", "SQL"]
      },
      {
        categoryName: "Frameworks & Ecosistemas",
        skills: [".NET 10", ".NET Core", "ASP.NET Core", "React", "Node.js", "Azure Functions", "Vite", "Android", "Laravel"]
      },
      {
        categoryName: "Inteligencia Artificial & Modelos Locales",
        skills: ["Modelos de IA Locales (Local LLMs)", "LM Studio", "OpenCode", "Google Antigravity", "Claude (Anthropic)", "ChatGPT (OpenAI)", "Prompt Engineering & IA Asistida"]
      },
      {
        categoryName: "Cloud, DevOps & Herramientas",
        skills: ["Microsoft Azure", "Azure DevOps", "GitHub", "Google Firebase", "Amazon Web Services (AWS)", "Git"]
      },
      {
        categoryName: "Bases de Datos",
        skills: ["SQL Server", "Azure Cosmos DB", "PostgreSQL"]
      },
      {
        categoryName: "Arquitectura & Metodologías",
        skills: ["REST APIs", "Scrum", "Agile", "Clean Architecture", "Diseño de Soluciones"]
      }
    ],
    experience: [
      {
        id: "exp-1",
        company: "Forsyte I.T. Solutions, LLC",
        role: "Developer Team Lead",
        location: "Estados Unidos (Remoto desde Costa Rica)",
        workplaceType: "Remote",
        startDate: "2019/07",
        endDate: "2026/08",
        responsibilities: [
          "Liderazgo técnico y supervisión de desarrolladores, coordinando asignación de tareas, seguimiento de avances de sprints y estándares de calidad de código en múltiples proyectos empresariales.",
          "Administración y mantenimiento de pipelines de CI/CD en Azure DevOps y gestión de recursos en Microsoft Azure para proyectos corporativos (Cloud Connect, PIM Extender, CMI, EMTIP y Guardian365).",
          "Liderazgo en el diseño y migración arquitectónica a .NET 10 para las soluciones insignia Guardian365 y Cloud Connect.",
          "Diseño, creación y publicación de paquetes internos NuGet reutilizables entre proyectos, optimizando la velocidad del equipo y unificando la arquitectura técnica."
        ],
        technologies: [".NET 10", "C#", "Microsoft Azure", "Azure DevOps", "CI/CD", "NuGet", "REST APIs", "Scrum"]
      },
      {
        id: "exp-2",
        company: "Valuación Digital",
        role: "Full Stack Developer",
        location: "Ciudad Quesada, Alajuela, Costa Rica",
        workplaceType: "On-Site",
        startDate: "2015/03",
        endDate: "2019/06",
        responsibilities: [
          "Desarrollo, mejora continua y mantenimiento de un sistema de alta criticidad para la generación de avalúos para diversas entidades bancarias, utilizado diariamente por ingenieros y peritos.",
          "Comunicación técnica directa y colaboración con ingenieros peritos y entidades financieras para resolver consultas, levantar requerimientos y solucionar incidencias operativas.",
          "Implementación de funcionalidades de negocio, optimización de consultas en SQL Server y ejecución de pruebas de calidad (QA) y estabilidad del sistema."
        ],
        technologies: ["C#", ".NET", "SQL Server", "ASP.NET", "JavaScript", "QA & Testing"]
      }
    ],
    education: [
      {
        id: "edu-1",
        degree: "Bachillerato en Ingeniería del Software",
        institution: "Universidad Técnica Nacional (UTN)",
        location: "Costa Rica",
        startDate: "2013/01",
        endDate: "2017/12",
        description: "Graduado en Diciembre de 2017. Formación integral en arquitectura de software, metodologías de desarrollo, bases de datos y diseño de soluciones empresariales."
      }
    ],
    certifications: []
  },
  en: {
    contact: {
      name: "Ronald Daniel Acuña Arias",
      headline: "Senior Full Stack Developer & Developer Team Lead",
      phone: "+506 8572-4776",
      email: "ronald32acunadev@gmail.com",
      secondaryEmails: ["ronald23acua@gmail.com", "ronald23acua@hotmail.com"],
      location: "Venecia, San Carlos, Alajuela, Costa Rica",
      linkedinUrl: "https://www.linkedin.com/in/ronald-daniel-acuna-arias-89263818b/",
      githubUrl: "https://github.com/ronald32acunadev",
      portfolioUrl: "",
    },
    summary: "Senior Full Stack Developer and Developer Team Lead with extensive experience designing and building robust, scalable, and high-impact software solutions. Highly proficient in the .NET ecosystem with C# as my core strength, backed by versatile expertise across JavaScript, Python, Java, PHP, and Ruby, along with deep knowledge of relational and NoSQL databases (SQL Server, PostgreSQL, Azure Cosmos DB). Strong background in cloud solutions on Microsoft Azure, complemented by practical experience in Google Firebase and AWS.\n\nKnown for a calm, analytical, and solution-driven mindset when tackling complex technical challenges under pressure. Passionate about continuous research, experimentation, and integrating emerging technologies into daily workflows, actively leveraging AI developer assistants (Google Antigravity, Claude, ChatGPT) and local open-source LLM environments (LM Studio, OpenCode) to accelerate engineering velocity and software quality. Thrives in collaborative team environments driven by clear communication, constructive dialogue, and empathetic technical leadership.",
    languages: [
      { name: "Spanish", level: "Native" },
      { name: "English", level: "B2 Professional / Upper-Intermediate" },
    ],
    softSkills: [
      "Team Collaboration & Assertive Communication",
      "High Adaptability to Change & Continuous Self-Improvement",
      "Composure & Analytical Problem-Solving Under Pressure",
      "Proactive Research & Implementation of Innovative Technologies",
      "Professional Responsibility & Technical Leadership"
    ],
    technicalSkills: [
      {
        categoryName: "Programming Languages",
        skills: ["C# (.NET)", "JavaScript", "TypeScript", "Python", "Java", "PHP", "Ruby", "SQL"]
      },
      {
        categoryName: "Frameworks & Ecosystems",
        skills: [".NET 10", ".NET Core", "ASP.NET Core", "React", "Node.js", "Azure Functions", "Vite", "Android", "Laravel"]
      },
      {
        categoryName: "Generative AI & Local Models",
        skills: ["Local LLMs & On-Premises Models", "LM Studio", "OpenCode", "Google Antigravity", "Claude (Anthropic)", "ChatGPT (OpenAI)", "Prompt Engineering & AI-Assisted Dev"]
      },
      {
        categoryName: "Cloud, DevOps & Tools",
        skills: ["Microsoft Azure", "Azure DevOps", "GitHub", "Google Firebase", "Amazon Web Services (AWS)", "Git"]
      },
      {
        categoryName: "Databases",
        skills: ["SQL Server", "Azure Cosmos DB", "PostgreSQL"]
      },
      {
        categoryName: "Architecture & Methodologies",
        skills: ["REST APIs", "Scrum", "Agile", "Clean Architecture", "Solution Design"]
      }
    ],
    experience: [
      {
        id: "exp-1",
        company: "Forsyte I.T. Solutions, LLC",
        role: "Developer Team Lead",
        location: "United States (Remote from Costa Rica)",
        workplaceType: "Remote",
        startDate: "2019/07",
        endDate: "2026/08",
        responsibilities: [
          "Led and supervised development teams, managing sprint task assignments, monitoring project milestones, and enforcing clean code standards across multiple enterprise initiatives.",
          "Architected and maintained CI/CD pipelines in Azure DevOps and managed Microsoft Azure cloud infrastructure and resources for mission-critical enterprise projects (Cloud Connect, PIM Extender, CMI, EMTIP, and Guardian365).",
          "Spearheaded the architectural migration and development of new versions on .NET 10 for flagship platforms Guardian365 and Cloud Connect.",
          "Authored, versioned, and published shared internal NuGet packages reused across multiple company projects, accelerating developer productivity and architectural consistency."
        ],
        technologies: [".NET 10", "C#", "Microsoft Azure", "Azure DevOps", "CI/CD", "NuGet", "REST APIs", "Scrum"]
      },
      {
        id: "exp-2",
        company: "Valuación Digital",
        role: "Full Stack Developer",
        location: "Ciudad Quesada, Alajuela, Costa Rica",
        workplaceType: "On-Site",
        startDate: "2015/03",
        endDate: "2019/06",
        responsibilities: [
          "Developed, enhanced, and maintained a mission-critical appraisal valuation system used by major banking and financial entities and certified appraisal engineers.",
          "Directly engaged with appraisal engineers and banking stakeholders to troubleshoot operational issues, clarify business requirements, and provide rapid technical support.",
          "Implemented core application features, optimized complex SQL Server database queries, and performed rigorous quality assurance and testing to ensure compliance with financial standards."
        ],
        technologies: ["C#", ".NET", "SQL Server", "ASP.NET", "JavaScript", "QA & Testing"]
      }
    ],
    education: [
      {
        id: "edu-1",
        degree: "Bachelor of Software Engineering",
        institution: "Universidad Técnica Nacional (UTN)",
        location: "Costa Rica",
        startDate: "2013/01",
        endDate: "2017/12",
        description: "Graduated in December 2017. Comprehensive curriculum in software architecture, systems engineering, relational databases, and enterprise software design."
      }
    ],
    certifications: []
  }
};

export const uiLabels: Record<'es' | 'en', UILabels> = {
  es: {
    nav: {
      profile: "Inicio",
      summary: "Perfil",
      skills: "Habilidades",
      experience: "Experiencia",
      education: "Educación",
      certifications: "Certificaciones",
      contact: "Contacto",
      downloadPdf: "Descargar PDF",
      generatingPdf: "Generando...",
    },
    sections: {
      profileTitle: "Presentación",
      summaryTitle: "Perfil Profesional",
      techSkillsTitle: "Habilidades Técnicas",
      softSkillsTitle: "Habilidades Blandas",
      experienceTitle: "Experiencia Laboral",
      educationTitle: "Educación & Formación",
      certificationsTitle: "Certificaciones Profesionales",
      languagesTitle: "Idiomas",
      contactTitle: "Contacto",
      contactSubtitle: "¿Tienes una propuesta o proyecto en mente? Hablemos.",
    },
    actions: {
      downloadResume: "Descargar Curriculum (ATS PDF)",
      viewCredential: "Ver Credencial",
      physicalCertificate: "Certificado Físico",
      present: "Presente",
      contactMe: "Contáctame",
      copyEmail: "Copiar correo",
      copied: "¡Copiado!",
    }
  },
  en: {
    nav: {
      profile: "Home",
      summary: "Profile",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      certifications: "Certifications",
      contact: "Contact",
      downloadPdf: "Download PDF",
      generatingPdf: "Generating...",
    },
    sections: {
      profileTitle: "Introduction",
      summaryTitle: "Executive Summary",
      techSkillsTitle: "Technical Skills",
      softSkillsTitle: "Soft Skills",
      experienceTitle: "Work Experience",
      educationTitle: "Education & Academics",
      certificationsTitle: "Certifications & Credentials",
      languagesTitle: "Languages",
      contactTitle: "Get in Touch",
      contactSubtitle: "Looking for new opportunities, collaborations, or consulting.",
    },
    actions: {
      downloadResume: "Download Resume (ATS PDF)",
      viewCredential: "Verify Credential",
      physicalCertificate: "Physical Certificate",
      present: "Present",
      contactMe: "Contact Me",
      copyEmail: "Copy Email",
      copied: "Copied!",
    }
  }
};
