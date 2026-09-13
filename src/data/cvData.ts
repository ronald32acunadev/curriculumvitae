import { BilingualCVData, UILabels } from '../types/cv';

export const cvData: BilingualCVData = {
  es: {
    contact: {
      name: "Ronald",
      headline: "Azure Cloud Solutions Architect, Technical Program Manager & AI Engineer",
      phone: "+506 8965-1446",
      email: "ronald.dev@example.com",
      location: "San Carlos, Alajuela, Costa Rica",
      linkedinUrl: "https://www.linkedin.com/",
      githubUrl: "https://github.com/",
      portfolioUrl: "https://ronald.dev",
    },
    summary: "Azure Cloud Solutions Architect, Technical Program Manager e Ingeniero de Inteligencia Artificial con sólida trayectoria como Senior Full Stack Developer en Java, C# y Python. Amplia experiencia en ingeniería de software, DevOps, ingeniería de datos y gestión de TI. Liderazgo comprobado en equipos multidisciplinarios y operaciones de servicios. Educador con experiencia desde niveles iniciales hasta universitarios, uniendo la excelencia técnica con la pasión por la enseñanza y la mentoría.",
    languages: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "C1+ Profesional (TOEIC)" },
    ],
    softSkills: [
      "Servicio al Cliente y Responsabilidad Profesional",
      "Alta Adaptabilidad y Resolución Analítica de Problemas",
      "Liderazgo Multidisciplinario y Mentoría Técnica",
      "Planificación Estratégica y Mejora Continua",
      "Toma de Decisiones Técnicas y Arquitectura"
    ],
    technicalSkills: [
      {
        categoryName: "Lenguajes de Programación",
        skills: ["C#", "Java", "Python", "TypeScript", "JavaScript", "SQL"]
      },
      {
        categoryName: "Cloud & DevOps",
        skills: ["Microsoft Azure", "AWS", "Google Cloud (GCP)", "Docker", "Kubernetes", "GitHub Actions", "Azure DevOps", "CI/CD Pipelines"]
      },
      {
        categoryName: "Bases de Datos",
        skills: ["PostgreSQL", "SQL Server", "Oracle", "Azure Cosmos DB", "Redis"]
      },
      {
        categoryName: "AI Engineering & Herramientas",
        skills: ["RAG", "LLMs", "Model Context Protocol (MCP)", "Generative AI", "AI Agents", "Azure AI Foundry", "Amazon Bedrock", "Google Vertex AI", "Claude Code", "OpenAI Codex"]
      },
      {
        categoryName: "Metodologías & Prácticas",
        skills: ["TDD (Test-Driven Development)", "AI-SDD / Specification-Driven Development", "Scrum", "XP", "Kanban"]
      },
      {
        categoryName: "Sistemas de Gestión de Contenido",
        skills: ["WordPress", "Drupal", "Joomla"]
      }
    ],
    experience: [
      {
        id: "exp-1",
        company: "Voiceflip Technologies, Inc.",
        role: "Azure Cloud Solutions Architect",
        location: "Canadá (Remoto)",
        workplaceType: "Remote",
        startDate: "2026/06",
        endDate: "Presente",
        responsibilities: [
          "Diseño y despliegue de aplicaciones nativas de la nube en Azure Kubernetes Service utilizando Docker, Kubernetes, Azure Container Registry, Application Gateway, Key Vault, PostgreSQL, Redis y pipelines automatizados de CI/CD.",
          "Diseño de soluciones de automatización e inteligencia web integradas con IA utilizando Django, Scrapy, Playwright, Celery, procesamiento con LLMs, RAG y orquestación de tareas asíncronas.",
          "Liderazgo en decisiones de arquitectura y despliegue en entornos de desarrollo y staging, abarcando escalabilidad, monitoreo de salud, redes, seguridad e integración de servicios cloud."
        ],
        technologies: ["Azure", "Kubernetes", "Docker", "PostgreSQL", "Redis", "RAG", "LLMs", "CI/CD"]
      },
      {
        id: "exp-2",
        company: "Voiceflip Technologies, Inc.",
        role: "AI-Integrated Web Scraping & Automation Engineer Specialist",
        location: "Canadá (Remoto)",
        workplaceType: "Remote",
        startDate: "2025/06",
        endDate: "2026/06",
        responsibilities: [
          "Diseño e integración de flujos de inteligencia de contenido asistidos por IA combinando rastreo web, automatización de navegadores, extracción de contenido, LLMs, RAG, almacenamiento vectorial, embeddings y servicios Azure AI/OpenAI.",
          "Ingeniería de arquitectura escalable de web scraping y automatización con Scrapy y Playwright, soportando sitios renderizados con JavaScript, procesamiento de binarios, sesiones autenticadas reutilizables y ejecución programada.",
          "Ampliación de capacidades de autenticación a nivel de ruta: login por formularios, Bearer tokens, autenticación básica, API keys, OAuth2 y cookies."
        ],
        technologies: ["Python", "Playwright", "Scrapy", "Azure AI", "OpenAI", "Vector DB"]
      },
      {
        id: "exp-3",
        company: "Foresight Solutions, S.R.L.",
        role: "Fundador y Director Ejecutivo (CEO)",
        location: "Costa Rica (Presencial)",
        workplaceType: "On-Site",
        startDate: "2022/02",
        endDate: "Presente",
        responsibilities: [
          "Fundación y dirección de empresa de consultoría tecnológica que ofrece desarrollo de software, IA, infraestructura en la nube, redes y servicios de TI a micro, pequeñas y medianas empresas.",
          "Gestión de relaciones comerciales, administración general y supervisión del ciclo de vida completo de proyectos de software."
        ],
        technologies: ["Cloud", "AI Consulting", "Business Management", "Software Development"]
      },
      {
        id: "exp-4",
        company: "Universidad Técnica Nacional (UTN)",
        role: "Docente y Profesor Universitario II",
        location: "Costa Rica (Presencial)",
        workplaceType: "On-Site",
        startDate: "2018/02",
        endDate: "Presente",
        responsibilities: [
          "Impartición de cursos en Ingeniería del Software, Ingeniería de TI, Ciencias Básicas y Administración de Recursos Tecnológicos.",
          "Liderazgo en programas de extensión y acción social comunitaria antes de la transición a la facultad formal.",
          "Mentoría y formación de nuevas generaciones de profesionales en tecnología."
        ],
        technologies: ["Software Engineering Education", "Mentorship", "Algorithms", "Databases"]
      },
      {
        id: "exp-5",
        company: "Forsyte I.T. Solutions, LLC. (Microsoft Gold Partner)",
        role: "LATAM General Manager & Senior .NET Team Lead / DevOps",
        location: "Estados Unidos (Remoto desde CR)",
        workplaceType: "Remote",
        startDate: "2019/02",
        endDate: "2024/10",
        responsibilities: [
          "Progresión a través de múltiples roles técnicos y gerenciales: desde MDM Cloud Engineer y Desarrollador Full Stack .NET hasta Gerente General para Latinoamérica.",
          "Dirección de equipos de desarrollo .NET, gestión de entregables e implementación de prácticas DevOps en Azure.",
          "Gestión de operaciones de servicio y alineación con los estándares corporativos de Microsoft Gold Partner."
        ],
        technologies: [".NET", "C#", "Azure DevOps", "Cloud Management", "Team Leadership"]
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
      name: "Ronald",
      headline: "Azure Cloud Solutions Architect, Technical Program Manager & AI Engineer",
      phone: "+506 8965-1446",
      email: "ronald.dev@example.com",
      location: "San Carlos, Alajuela, Costa Rica",
      linkedinUrl: "https://www.linkedin.com/",
      githubUrl: "https://github.com/",
      portfolioUrl: "https://ronald.dev",
    },
    summary: "Azure Cloud Solutions Architect, Technical Program Manager, and AI Engineer with extensive experience as a Senior Full Stack Developer in Java, C#, and Python, coupled with a strong background in software engineering, DevOps, data engineering, and IT management. Proven leadership across cross-functional teams and service operations. Experienced educator from foundational to university levels, blending technical excellence with a genuine passion for teaching and mentorship.",
    languages: [
      { name: "Spanish", level: "Native" },
      { name: "English", level: "C1+ Professional (TOEIC)" },
    ],
    softSkills: [
      "Customer Service & Professional Responsibility",
      "High Adaptability & Analytical Problem Solving",
      "Cross-Functional Leadership & Technical Mentoring",
      "Strategic Planning & Continuous Improvement",
      "Technical Decision-Making & Architecture"
    ],
    technicalSkills: [
      {
        categoryName: "Programming Languages",
        skills: ["C#", "Java", "Python", "TypeScript", "JavaScript", "SQL"]
      },
      {
        categoryName: "Cloud & DevOps",
        skills: ["Microsoft Azure", "AWS", "Google Cloud (GCP)", "Docker", "Kubernetes", "GitHub Actions", "Azure DevOps", "CI/CD Pipelines"]
      },
      {
        categoryName: "Databases",
        skills: ["PostgreSQL", "SQL Server", "Oracle", "Azure Cosmos DB", "Redis"]
      },
      {
        categoryName: "AI Engineering & Tools",
        skills: ["RAG", "LLMs", "Model Context Protocol (MCP)", "Generative AI", "AI Agents", "Azure AI Foundry", "Amazon Bedrock", "Google Vertex AI", "Claude Code", "OpenAI Codex"]
      },
      {
        categoryName: "Methods & Best Practices",
        skills: ["TDD (Test-Driven Development)", "AI-SDD / Specification-Driven Development", "Scrum", "XP", "Kanban"]
      },
      {
        categoryName: "Content Management Systems",
        skills: ["WordPress", "Drupal", "Joomla"]
      }
    ],
    experience: [
      {
        id: "exp-1",
        company: "Voiceflip Technologies, Inc.",
        role: "Azure Cloud Solutions Architect",
        location: "Canada (Remote / Work-from-Home)",
        workplaceType: "Remote",
        startDate: "2026/06",
        endDate: "Present",
        responsibilities: [
          "Architected and deployed cloud-native applications on Azure Kubernetes Service using Docker, Kubernetes, Azure Container Registry, Application Gateway, Key Vault, PostgreSQL, Redis, and automated CI/CD pipelines.",
          "Designed AI-integrated web intelligence and automation solutions using Django, Scrapy, Playwright, Celery, LLM processing, RAG, and asynchronous task orchestration.",
          "Led architecture and deployment decisions across development and staging environments, including scalability, health monitoring, networking, security, and cloud service integration."
        ],
        technologies: ["Azure", "Kubernetes", "Docker", "PostgreSQL", "Redis", "RAG", "LLMs", "CI/CD"]
      },
      {
        id: "exp-2",
        company: "Voiceflip Technologies, Inc.",
        role: "AI-Integrated Web Scraping & Automation Engineer Specialist",
        location: "Canada (Remote / Work-from-Home)",
        workplaceType: "Remote",
        startDate: "2025/06",
        endDate: "2026/06",
        responsibilities: [
          "Designed and integrated AI-assisted content intelligence workflows combining web crawling, browser automation, document/content extraction, LLM processing, Retrieval-Augmented Generation (RAG), vector storage, embeddings, and Azure AI/OpenAI services.",
          "Engineered a scalable web scraping and browser-automation architecture using Scrapy and Playwright, supporting JavaScript-rendered websites, binary content handling, reusable authenticated sessions, route-specific crawling, and scheduled execution.",
          "Expanded authentication capabilities from site-level configuration to route-level authentication, supporting form-based login, Bearer tokens, Basic Authentication, API keys, OAuth2, and cookies."
        ],
        technologies: ["Python", "Playwright", "Scrapy", "Azure AI", "OpenAI", "Vector DB"]
      },
      {
        id: "exp-3",
        company: "Foresight Solutions, S.R.L.",
        role: "Founder & CEO: General Manager and Administrator",
        location: "Costa Rica (On-Site)",
        workplaceType: "On-Site",
        startDate: "2022/02",
        endDate: "Present",
        responsibilities: [
          "Founded and manage a technology consulting company providing software development, AI, cloud infrastructure, networking, and IT services to micro, small, and medium-sized enterprises.",
          "Led business development, administrative leadership, and complete lifecycle execution of custom enterprise software projects."
        ],
        technologies: ["Cloud", "AI Consulting", "Business Management", "Software Development"]
      },
      {
        id: "exp-4",
        company: "Universidad Técnica Nacional (UTN)",
        role: "Lecturer and Professor II",
        location: "Costa Rica (On-Site)",
        workplaceType: "On-Site",
        startDate: "2018/02",
        endDate: "Present",
        responsibilities: [
          "Taught courses across Software Engineering, IT Engineering, Finances, Basic Sciences, and Shared Services Management programs for university degrees.",
          "Delivered extension and social-action programs and projects before transitioning to a formal faculty appointment.",
          "Mentored and guided undergraduate engineering students in real-world software architecture practices."
        ],
        technologies: ["Software Engineering Education", "Mentorship", "Algorithms", "Databases"]
      },
      {
        id: "exp-5",
        company: "Forsyte I.T. Solutions, LLC. (Microsoft Gold Partner)",
        role: "LATAM General Manager & Senior .NET Development Team Lead / DevOps",
        location: "United States (Remote from CR)",
        workplaceType: "Remote",
        startDate: "2019/02",
        endDate: "2024/10",
        responsibilities: [
          "Progressed through multiple technical and management roles, starting as an MDM Cloud Engineer and .NET Full Stack Developer and culminating as LATAM General Manager.",
          "Directed .NET engineering teams, managed client milestones, and instituted CI/CD and DevOps standards on Microsoft Azure.",
          "Maintained service excellence and operational alignment with Microsoft Gold Partner quality benchmarks."
        ],
        technologies: [".NET", "C#", "Azure DevOps", "Cloud Management", "Team Leadership"]
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
