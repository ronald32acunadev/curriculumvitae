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
    summary: "Senior Full Stack Developer y Developer Team Lead con sólida experiencia en el diseño y desarrollo de soluciones de software robustas, escalables y orientadas a resultados. Especialista en el ecosistema .NET con C# como fortaleza principal, complementado con versatilidad en JavaScript, Python, Java, PHP y Ruby, así como en la gestión avanzada de bases de datos relacionales y NoSQL (SQL Server, PostgreSQL, Azure Cosmos DB). Con amplia trayectoria en la nube con Microsoft Azure, integrando además tecnologías en Google Firebase y AWS.\n\nMe distingo por un enfoque analítico, calmado y resiliente ante desafíos técnicos complejos, priorizando siempre la resolución pragmática de problemas. Apasionado por la investigación y adopción continua de nuevas tecnologías en el día a día, disfruto colaborar estrechamente en equipo a través de la comunicación asertiva, el diálogo constructivo y el liderazgo técnico empático.",
    languages: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "C1+ Profesional (TOEIC)" },
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
        skills: [".NET Core", "ASP.NET Core", "React", "Node.js", "Azure Functions", "Vite", "Android", "Laravel"]
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
        startDate: "2019/02",
        endDate: "2026/02",
        responsibilities: [
          "Liderazgo técnico y supervisión de desarrolladores, coordinando asignación de tareas, seguimiento de avances de sprints y estándares de calidad de código en múltiples proyectos empresariales.",
          "Administración y mantenimiento de pipelines de CI/CD en Azure DevOps y gestión de recursos en Microsoft Azure para proyectos corporativos (Cloud Connect, PIM Extender, CMI, EMTIP y Guardian365).",
          "Liderazgo en el diseño y migración arquitectónica a .NET 6 para las soluciones insignia Guardian365 y Cloud Connect.",
          "Diseño, creación y publicación de paquetes internos NuGet reutilizables entre proyectos, optimizando la velocidad del equipo y unificando la arquitectura técnica."
        ],
        technologies: [".NET 6", "C#", "Microsoft Azure", "Azure DevOps", "CI/CD", "NuGet", "REST APIs", "Scrum"]
      },
      {
        id: "exp-2",
        company: "Valuación Digital",
        role: "Full Stack Developer",
        location: "Ciudad Quesada, Alajuela, Costa Rica",
        workplaceType: "On-Site",
        startDate: "2015/01",
        endDate: "2019/01",
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
        degree: "Diplomado Técnico en Ingeniería de Inteligencia Artificial",
        institution: "PLATZI",
        location: "Colombia (Virtual)",
        startDate: "2025/11",
        endDate: "Presente",
        description: "Formación especializada en agentes de IA, RAG, LLMs, modelos generativos e integración en producción."
      },
      {
        id: "edu-2",
        degree: "Licenciatura en Ingeniería del Software",
        institution: "Universidad Técnica Nacional (UTN)",
        location: "Costa Rica (Presencial)",
        startDate: "2013/01",
        endDate: "2017/12",
        description: "Enfoque en arquitectura de software, patrones de diseño, desarrollo web y bases de datos relacionales."
      },
      {
        id: "edu-3",
        degree: "Diplomado en Ingeniería de Tecnologías de Información",
        institution: "Universidad Técnica Nacional (UTN)",
        location: "Costa Rica (Presencial)",
        startDate: "2012/09",
        endDate: "2015/06",
        description: "Fundamentos de redes, sistemas operativos, programación y telecomunicaciones."
      },
      {
        id: "edu-4",
        degree: "Técnico Medio en Redes de Computadoras",
        institution: "Colegio Técnico Profesional Regional de San Carlos",
        location: "Costa Rica (Presencial)",
        startDate: "2003/02",
        endDate: "2006/12",
        description: "Certificación técnica en infraestructura de redes cableadas e inalámbricas y mantenimiento preventivo."
      }
    ],
    certifications: [
      {
        id: "cert-1",
        title: "Design Microsoft Azure Infrastructure Solutions",
        issuer: "Microsoft",
        date: "2026/08",
        verificationUrl: "https://learn.microsoft.com/certifications/",
        credentialType: "online"
      },
      {
        id: "cert-2",
        title: "Microsoft 365 Administrator",
        issuer: "Microsoft",
        date: "2026/08",
        verificationUrl: "https://learn.microsoft.com/certifications/",
        credentialType: "online"
      },
      {
        id: "cert-3",
        title: "AI-SSD Training: Specification Driven Development with AI & Semantic Kernel",
        issuer: "Google & Entrenamiento Certero",
        date: "2026/07",
        verificationUrl: "https://entrenamientocertero.com",
        credentialType: "online"
      },
      {
        id: "cert-4",
        title: "Model Context Protocol: Advanced Topics",
        issuer: "Anthropic",
        date: "2026/05",
        verificationUrl: "https://anthropic.com",
        credentialType: "online"
      },
      {
        id: "cert-5",
        title: "Claude with Google Cloud's Vertex AI",
        issuer: "Google & Anthropic",
        date: "2026/05",
        verificationUrl: "https://cloud.google.com/vertex-ai",
        credentialType: "online"
      },
      {
        id: "cert-6",
        title: "AZ-400: Designing & Implementing Microsoft DevOps Solutions",
        issuer: "Microsoft",
        date: "2026/06",
        verificationUrl: "https://learn.microsoft.com/certifications/",
        credentialType: "online"
      },
      {
        id: "cert-7",
        title: "Cybersecurity Essentials",
        issuer: "CISCO Academy & UTN",
        date: "2019/11",
        credentialType: "physical"
      }
    ]
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
    summary: "Senior Full Stack Developer and Developer Team Lead with extensive experience designing and building robust, scalable, and high-impact software solutions. Highly proficient in the .NET ecosystem with C# as my core strength, backed by versatile expertise across JavaScript, Python, Java, PHP, and Ruby, along with deep knowledge of relational and NoSQL databases (SQL Server, PostgreSQL, Azure Cosmos DB). Strong background in cloud solutions on Microsoft Azure, complemented by practical experience in Google Firebase and AWS.\n\nKnown for a calm, analytical, and solution-driven mindset when tackling complex technical challenges under pressure. Passionate about continuous research, experimentation, and integrating emerging technologies into daily workflows. Thrives in collaborative team environments driven by clear communication, constructive dialogue, and empathetic technical leadership.",
    languages: [
      { name: "Spanish", level: "Native" },
      { name: "English", level: "C1+ Professional (TOEIC)" },
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
        skills: [".NET Core", "ASP.NET Core", "React", "Node.js", "Azure Functions", "Vite", "Android", "Laravel"]
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
        startDate: "2019/02",
        endDate: "2026/02",
        responsibilities: [
          "Led and supervised development teams, managing sprint task assignments, monitoring project milestones, and enforcing clean code standards across multiple enterprise initiatives.",
          "Architected and maintained CI/CD pipelines in Azure DevOps and managed Microsoft Azure cloud infrastructure and resources for mission-critical enterprise projects (Cloud Connect, PIM Extender, CMI, EMTIP, and Guardian365).",
          "Spearheaded the architectural migration and development of new versions on .NET 6 for flagship platforms Guardian365 and Cloud Connect.",
          "Authored, versioned, and published shared internal NuGet packages reused across multiple company projects, accelerating developer productivity and architectural consistency."
        ],
        technologies: [".NET 6", "C#", "Microsoft Azure", "Azure DevOps", "CI/CD", "NuGet", "REST APIs", "Scrum"]
      },
      {
        id: "exp-2",
        company: "Valuación Digital",
        role: "Full Stack Developer",
        location: "Ciudad Quesada, Alajuela, Costa Rica",
        workplaceType: "On-Site",
        startDate: "2015/01",
        endDate: "2019/01",
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
        degree: "Technical Diploma in AI Engineering",
        institution: "PLATZI",
        location: "Colombia (Virtual)",
        startDate: "2025/11",
        endDate: "Present",
        description: "Specialized training in AI agents, RAG workflows, LLM orchestration, and production deployments."
      },
      {
        id: "edu-2",
        degree: "Bachelor's Degree in Software Engineering",
        institution: "Universidad Técnica Nacional (UTN)",
        location: "Costa Rica (On-Site)",
        startDate: "2013/01",
        endDate: "2017/12",
        description: "In-depth curriculum in software engineering, design patterns, database architecture, and algorithms."
      },
      {
        id: "edu-3",
        degree: "Diploma in Information Technology Engineering",
        institution: "Universidad Técnica Nacional (UTN)",
        location: "Costa Rica (On-Site)",
        startDate: "2012/09",
        endDate: "2015/06",
        description: "Core studies in networking, systems administration, applied programming, and hardware architecture."
      },
      {
        id: "edu-4",
        degree: "Technical Diploma in Computer Networking",
        institution: "Colegio Técnico Profesional Regional de San Carlos",
        location: "Costa Rica (On-Site)",
        startDate: "2003/02",
        endDate: "2006/12",
        description: "Vocational degree in wired/wireless networking topologies and hardware diagnostics."
      }
    ],
    certifications: [
      {
        id: "cert-1",
        title: "Design Microsoft Azure Infrastructure Solutions",
        issuer: "Microsoft",
        date: "2026/08",
        verificationUrl: "https://learn.microsoft.com/certifications/",
        credentialType: "online"
      },
      {
        id: "cert-2",
        title: "Microsoft 365 Administrator",
        issuer: "Microsoft",
        date: "2026/08",
        verificationUrl: "https://learn.microsoft.com/certifications/",
        credentialType: "online"
      },
      {
        id: "cert-3",
        title: "AI-SSD Training: Specification Driven Development with AI & Semantic Kernel",
        issuer: "Google & Entrenamiento Certero",
        date: "2026/07",
        verificationUrl: "https://entrenamientocertero.com",
        credentialType: "online"
      },
      {
        id: "cert-4",
        title: "Model Context Protocol: Advanced Topics",
        issuer: "Anthropic",
        date: "2026/05",
        verificationUrl: "https://anthropic.com",
        credentialType: "online"
      },
      {
        id: "cert-5",
        title: "Claude with Google Cloud's Vertex AI",
        issuer: "Google & Anthropic",
        date: "2026/05",
        verificationUrl: "https://cloud.google.com/vertex-ai",
        credentialType: "online"
      },
      {
        id: "cert-6",
        title: "AZ-400: Designing & Implementing Microsoft DevOps Solutions",
        issuer: "Microsoft",
        date: "2026/06",
        verificationUrl: "https://learn.microsoft.com/certifications/",
        credentialType: "online"
      },
      {
        id: "cert-7",
        title: "Cybersecurity Essentials",
        issuer: "CISCO Academy & UTN",
        date: "2019/11",
        credentialType: "physical"
      }
    ]
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
