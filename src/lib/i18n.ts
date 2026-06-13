export type Locale = "pt" | "en" | "fr" | "zh";

export const DEFAULT_LOCALE: Locale = "en";
export const STORAGE_KEY = "shadow-core-locale";
export const SUPPORTED_LOCALES: Locale[] = ["pt", "en", "fr", "zh"];

export const localeOptions = [
  { code: "pt" as const, label: "Português", short: "PT" },
  { code: "en" as const, label: "English", short: "EN" },
  { code: "fr" as const, label: "Français", short: "FR" },
  { code: "zh" as const, label: "中文", short: "ZH" },
];

export type MissionId =
  | "oficina-digital"
  | "vektra"
  | "ai-automation-lab"
  | "security-lab";

export type ModuleId =
  | "interface"
  | "logic"
  | "data"
  | "infrastructure"
  | "security"
  | "engineering";

export type Translations = {
  site: {
    title: string;
    description: string;
  };
  nav: {
    systems: string;
    modules: string;
    evolution: string;
    missions: string;
    contact: string;
  };
  hero: {
    role: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    github: string;
    linkedin: string;
  };
  floatingTestimonials: {
    items: {
      initials: string;
      text: string;
    }[];
  };
  terminal: {
    title: string;
    lines: string[];
    ariaLabel: string;
  };
  operatingMode: {
    title: string;
    textBefore: string;
    highlight: string;
    textAfter: string;
    highlights: string[];
  };
  modules: {
    title: string;
    subtitle: string;
    items: Record<
      ModuleId,
      {
        title: string;
        items: string[];
      }
    >;
  };
  evolution: {
    title: string;
    subtitle: string;
    stageLabel: string;
    items: {
      stage: string;
      title: string;
      items: string[];
    }[];
  };
  missions: {
    title: string;
    subtitle: string;
    problemLabel: string;
    solutionLabel: string;
    viewProject: string;
    caseStudy: string;
    status: {
      live: string;
      concept: string;
      inProgress: string;
      learning: string;
    };
    items: Record<
      MissionId,
      {
        subtitle: string;
        description: string;
        stack: string[];
        problem?: string;
        solution?: string;
        statusKey: keyof Translations["missions"]["status"];
        flip?: {
          participationTitle: string;
          tapHint: string;
          builtTitle: string;
          builtItems: string[];
          contributedTitle?: string;
          contributedItems?: string[];
          featuresTitle?: string;
          featuresItems?: string[];
          stackTitle: string;
          stackSummary: string;
          chips: string[];
        };
      }
    >;
  };
  techniques: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  labNotes: {
    title: string;
    subtitle: string;
    status: {
      preparing: string;
      draft: string;
    };
    items: {
      title: string;
      category: string;
      statusKey: keyof Translations["labNotes"]["status"];
    }[];
  };
  contact: {
    title: string;
    subtitle: string;
    emailMe: string;
    linkedin: string;
    github: string;
    downloadCv: string;
    emailAria: string;
    linkedinAria: string;
    githubAria: string;
    cvAria: string;
  };
  footer: {
    copyright: string;
  };
  common: {
    homeAria: string;
    mainNav: string;
    mobileNav: string;
    openMenu: string;
    closeMenu: string;
    selectLanguage: string;
    languageMenu: string;
    coreActive: string;
    viewProjectAria: string;
    avatarAlt: string;
    externalLinkAria: string;
  };
};

const en: Translations = {
  site: {
    title: "Yannick Martins — Software Engineer",
    description:
      "I build web applications, AI automations, database-driven systems and secure solutions for real-world problems.",
  },
  nav: {
    systems: "Systems",
    modules: "Modules",
    evolution: "Evolution",
    missions: "Missions",
    contact: "Contact",
  },
  hero: {
    role: "Software Engineer",
    subtitle:
      "I build web applications, AI automations, database-driven systems and secure solutions for real-world problems.",
    primaryCta: "View Systems",
    secondaryCta: "Contact Me",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  floatingTestimonials: {
    items: [
      { initials: "HM", text: "Online booking became simple." },
      { initials: "MC", text: "Service became more organized." },
      { initials: "AC", text: "Requests now arrive clearer." },
      { initials: "JS", text: "Fewer missed calls." },
      { initials: "LR", text: "Direct and easy-to-use system." },
      { initials: "CV", text: "More control over service." },
    ],
  },
  terminal: {
    title: "dev-shell.sh",
    lines: [
      "> initializing profile...",
      "> loading modules: full-stack / ai / security",
      "> stack: next.js | node | postgres | prisma",
      "> mode: focused / reserved / production-ready",
      "> status: available for remote work",
    ],
    ariaLabel: "System terminal output",
  },
  operatingMode: {
    title: "Operating Mode",
    textBefore:
      "I work in a reserved, focused and engineering-oriented way: I start with requirements, risk and the real user flow; then I model data, APIs, security and delivery. The goal is to build useful, secure software prepared to evolve.",
    highlight: "",
    textAfter: "",
    highlights: [
      "Software Engineering",
      "Full-Stack",
      "Data",
      "Security",
      "Applied AI",
      "MBSE",
    ],
  },
  modules: {
    title: "System Modules",
    subtitle: "The technical layers I use to turn ideas into real systems.",
    items: {
      interface: {
        title: "Interface Layer",
        items: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Responsive UI",
        ],
      },
      logic: {
        title: "Logic Layer",
        items: [
          "Node.js",
          "JavaScript",
          "PHP",
          "Python",
          "REST APIs",
        ],
      },
      data: {
        title: "Data Layer",
        items: [
          "PostgreSQL",
          "MySQL",
          "Prisma",
          "Relational modeling",
          "Migrations",
        ],
      },
      infrastructure: {
        title: "Infrastructure Layer",
        items: [
          "Docker",
          "AWS",
          "Vercel",
          "Environment variables",
          "Deployment",
        ],
      },
      security: {
        title: "Security Layer",
        items: [
          "Linux",
          "Networking",
          "OWASP",
          "Nmap / Burp Suite",
          "Authorized Wi-Fi Security",
        ],
      },
      engineering: {
        title: "Engineering Layer",
        items: [
          "Requirements",
          "SysML / UML",
          "Risk management",
          "V&V",
          "Lean / Agile",
        ],
      },
    },
  },
  evolution: {
    title: "Evolution Path",
    subtitle:
      "A technical evolution built with discipline, practice and focus on real systems.",
    stageLabel: "STAGE",
    items: [
      {
        stage: "01",
        title: "Foundation",
        items: ["HTML", "CSS", "JavaScript", "Programming logic"],
      },
      {
        stage: "02",
        title: "Builder",
        items: ["React", "Next.js", "Responsive UI", "Reusable components"],
      },
      {
        stage: "03",
        title: "Systems",
        items: ["Node.js", "REST APIs", "Authentication", "Backend architecture"],
      },
      {
        stage: "04",
        title: "Intelligence",
        items: ["AI", "Automation", "Agents", "LLM workflows"],
      },
      {
        stage: "05",
        title: "Defense",
        items: ["Linux", "Networking", "OWASP", "Web security"],
      },
      {
        stage: "06",
        title: "Operator",
        items: [
          "Real product",
          "Production deploy",
          "Business mindset",
          "Client value",
        ],
      },
    ],
  },
  missions: {
    title: "Field Missions",
    subtitle:
      "Projects and concepts that show how I turn problems into real systems.",
    problemLabel: "Problem",
    solutionLabel: "Solution",
    viewProject: "View Project",
    caseStudy: "Case Study",
    status: {
      live: "In production",
      concept: "Concept / Product Vision",
      inProgress: "In progress",
      learning: "Learning",
    },
    items: {
      "oficina-digital": {
        subtitle: "Web application for auto workshops in Cabo Verde",
        description:
          "A platform that helps workshops receive online requests and organize services, clients, vehicles, schedules and communication in a simple dashboard.",
        stack: [
          "Next.js",
          "TypeScript",
          "React",
          "PostgreSQL",
          "Prisma",
          "Supabase",
          "Vercel",
          "SMTP",
        ],
        statusKey: "live",
        flip: {
          participationTitle: "My contribution",
          tapHint: "Tap for details",
          builtTitle: "Built",
          builtItems: [
            "Full web platform",
            "Public booking page",
            "Workshop dashboard",
            "Platform Super Admin",
          ],
          featuresTitle: "Features",
          featuresItems: [
            "Online requests with photos",
            "Services, clients and vehicles",
            "Schedule and blocked dates",
            "Notifications, emails and reviews",
          ],
          stackTitle: "Stack",
          stackSummary:
            "Next.js · TypeScript · React · Tailwind CSS · Prisma · PostgreSQL · Supabase · Vercel",
          chips: ["SaaS", "Admin", "Booking", "Email", "Storage", "i18n"],
        },
      },
      vektra: {
        subtitle: "Intelligent mobility platform",
        description:
          "Digital mobility solution focused on passenger, driver, accessibility, safety and urban data.",
        stack: [
          "React Native",
          "Expo",
          "TypeScript",
          "Node.js",
          "PostgreSQL",
          "Mapbox",
          "OSRM",
          "AI / Liveness",
        ],
        statusKey: "inProgress",
        flip: {
          participationTitle: "My contribution",
          tapHint: "Tap for details",
          builtTitle: "Built",
          builtItems: [
            "VEKTRA AI",
            "VEKTRA Kids",
            "Liveness / facial verification",
          ],
          contributedTitle: "Contributed to",
          contributedItems: [
            "VEKTRAGEO",
            "Passenger, Driver & PCD",
            "Ecosystem backend",
          ],
          stackTitle: "Stack",
          stackSummary:
            "TypeScript · Node.js · React Native · Expo · Next.js · PostgreSQL · Redis · Mapbox · OSRM",
          chips: ["Guardian Routing", "Route Authority", "Liveness", "VektraGEO"],
        },
      },
      "ai-automation-lab": {
        subtitle: "AI automation learning lab",
        description:
          "A practice space for building small AI workflows, structured prompts, APIs and simple automations for real processes.",
        stack: [
          "Python",
          "JavaScript",
          "APIs",
          "LLM Workflows",
          "Prompt Engineering",
          "Automation",
        ],
        statusKey: "learning",
        flip: {
          participationTitle: "Practice focus",
          tapHint: "Tap for details",
          builtTitle: "I'm developing",
          builtItems: [
            "Structured prompts",
            "Small API workflows",
            "Repetitive task automation",
          ],
          contributedTitle: "Goal",
          contributedItems: [
            "Connect AI to real problems",
            "Improve automation logic",
            "Build foundations for simple agents",
          ],
          stackTitle: "Stack",
          stackSummary:
            "Python · JavaScript · APIs · LLM Workflows · Prompt Engineering",
          chips: ["Prompts", "APIs", "Automation", "LLM", "Workflows"],
        },
      },
      "security-lab": {
        subtitle: "Web security and defense learning lab",
        description:
          "Practical studies in Linux, networking, authentication, OWASP, analysis tools and best practices for building safer web applications.",
        stack: [
          "Linux",
          "Networking",
          "OWASP",
          "Nmap",
          "Burp Suite",
          "Wi-Fi Security",
          "Secure Code",
        ],
        statusKey: "learning",
        flip: {
          participationTitle: "Practice focus",
          tapHint: "Tap for details",
          builtTitle: "I'm studying",
          builtItems: [
            "Linux, networks and basic reconnaissance",
            "Authentication, access control and OWASP",
            "Authorized Wi-Fi security",
          ],
          contributedTitle: "Goal",
          contributedItems: [
            "Write safer applications",
            "Understand real web risks",
            "Think like an attacker to defend better",
          ],
          stackTitle: "Stack",
          stackSummary:
            "Linux · Nmap · Burp Suite · OWASP · Networking · Web Security",
          chips: ["Linux", "OWASP", "Nmap", "Wi-Fi Security", "Secure Code"],
        },
      },
    },
  },
  techniques: {
    title: "Engineering Principles",
    subtitle:
      "How I structure products, data and security before writing code.",
    items: [
      {
        title: "Product before code",
        description:
          "I understand the real user flow before choosing screens, APIs or databases.",
      },
      {
        title: "Requirements before solution",
        description:
          "I organize requirements, risks and validation criteria before moving to implementation.",
      },
      {
        title: "Backend as source of truth",
        description:
          "States, permissions, requests and critical rules should be validated on the server.",
      },
      {
        title: "Organized data",
        description:
          "I model entities, relationships, states and history so the system can grow without turning into chaos.",
      },
      {
        title: "Security from the start",
        description:
          "I think about authentication, permissions, safe payloads and validation before delivery.",
      },
      {
        title: "Incremental and verifiable delivery",
        description:
          "I prefer evolving through small, testable steps aligned with real value.",
      },
    ],
  },
  labNotes: {
    title: "Lab Notes",
    subtitle:
      "Technical notes and ideas based on the projects I'm building.",
    status: {
      preparing: "Preparing",
      draft: "Draft",
    },
    items: [
      {
        title: "How I designed the online booking flow for Oficina Digital",
        category: "Product / Web Application",
        statusKey: "preparing",
      },
      {
        title: "Requirements before code: applied MBSE notes",
        category: "Systems Engineering",
        statusKey: "draft",
      },
      {
        title: "Backend as source of truth: states, permissions and audit",
        category: "Backend",
        statusKey: "preparing",
      },
      {
        title:
          "Web security for developers: OWASP, authentication and authorized Wi-Fi labs",
        category: "Web Security",
        statusKey: "preparing",
      },
    ],
  },
  contact: {
    title: "Let's build something useful.",
    subtitle:
      "Available for remote work, freelance projects and collaborations in web applications, AI automation and secure digital systems.",
    emailMe: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
    downloadCv: "Download CV",
    emailAria: "Send email to Yannick Martins",
    linkedinAria: "LinkedIn profile",
    githubAria: "GitHub profile",
    cvAria: "Download CV",
  },
  footer: {
    copyright: "© 2026 Developed by Yannick Martins",
  },
  common: {
    homeAria: "Yannick Martins — home",
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    selectLanguage: "Change language",
    languageMenu: "Language menu",
    coreActive: "CORE // ACTIVE",
    viewProjectAria: "View project",
    avatarAlt: "Stylized avatar of Yannick Martins",
    externalLinkAria: "Opens in a new tab",
  },
};

const pt: Translations = {
  site: {
    title: "Yannick Martins — Engenheiro de Software",
    description:
      "Construo aplicações web, automações com IA, sistemas orientados por bases de dados e soluções seguras para problemas reais.",
  },
  nav: {
    systems: "Sistemas",
    modules: "Módulos",
    evolution: "Evolução",
    missions: "Missões",
    contact: "Contacto",
  },
  hero: {
    role: "Engenheiro de Software",
    subtitle:
      "Construo aplicações web, automações com IA, sistemas orientados por bases de dados e soluções seguras para problemas reais.",
    primaryCta: "Ver sistemas",
    secondaryCta: "Contactar",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  floatingTestimonials: {
    items: [
      { initials: "HM", text: "Marcação online ficou simples." },
      { initials: "MC", text: "Atendimento mais organizado." },
      { initials: "AC", text: "Agora o pedido chega mais claro." },
      { initials: "JS", text: "Menos chamadas perdidas." },
      { initials: "LR", text: "Sistema direto e fácil de usar." },
      { initials: "CV", text: "Mais controlo no atendimento." },
    ],
  },
  terminal: {
    title: "dev-shell.sh",
    lines: [
      "> a inicializar perfil...",
      "> a carregar módulos: full-stack / ia / segurança",
      "> stack: next.js | node | postgres | prisma",
      "> modo: focado / reservado / pronto para produção",
      "> estado: disponível para trabalho remoto",
    ],
    ariaLabel: "Saída do terminal do sistema",
  },
  operatingMode: {
    title: "Modo de Operação",
    textBefore:
      "Trabalho de forma reservada, focada e orientada a engenharia: começo por requisitos, risco e fluxo real; depois modelo dados, APIs, segurança e entrega. O objetivo é criar software útil, seguro e preparado para evoluir.",
    highlight: "",
    textAfter: "",
    highlights: [
      "Engenharia de Software",
      "Full-Stack",
      "Dados",
      "Segurança",
      "IA Aplicada",
      "MBSE",
    ],
  },
  modules: {
    title: "Módulos do Sistema",
    subtitle:
      "As camadas técnicas que uso para transformar ideias em sistemas reais.",
    items: {
      interface: {
        title: "Camada de Interface",
        items: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "UI responsiva",
        ],
      },
      logic: {
        title: "Camada de Lógica",
        items: [
          "Node.js",
          "JavaScript",
          "PHP",
          "Python",
          "APIs REST",
        ],
      },
      data: {
        title: "Camada de Dados",
        items: [
          "PostgreSQL",
          "MySQL",
          "Prisma",
          "Modelagem relacional",
          "Migrations",
        ],
      },
      infrastructure: {
        title: "Camada de Infraestrutura",
        items: [
          "Docker",
          "AWS",
          "Vercel",
          "Variáveis de ambiente",
          "Deploy",
        ],
      },
      security: {
        title: "Camada de Segurança",
        items: [
          "Linux",
          "Redes",
          "OWASP",
          "Nmap / Burp Suite",
          "Segurança Wi-Fi autorizada",
        ],
      },
      engineering: {
        title: "Camada de Engenharia",
        items: [
          "Requirements",
          "SysML / UML",
          "Risk management",
          "V&V",
          "Lean / Agile",
        ],
      },
    },
  },
  evolution: {
    title: "Percurso de Evolução",
    subtitle:
      "Uma evolução técnica construída com disciplina, prática e foco em sistemas reais.",
    stageLabel: "FASE",
    items: [
      {
        stage: "01",
        title: "Fundação",
        items: ["HTML", "CSS", "JavaScript", "Lógica de programação"],
      },
      {
        stage: "02",
        title: "Construtor",
        items: [
          "React",
          "Next.js",
          "UI responsiva",
          "Componentes reutilizáveis",
        ],
      },
      {
        stage: "03",
        title: "Sistemas",
        items: ["Node.js", "APIs REST", "Autenticação", "Arquitetura backend"],
      },
      {
        stage: "04",
        title: "Inteligência",
        items: ["IA", "Automação", "Agentes", "Fluxos LLM"],
      },
      {
        stage: "05",
        title: "Defesa",
        items: [
          "Linux",
          "Redes",
          "OWASP",
          "Segurança web",
        ],
      },
      {
        stage: "06",
        title: "Operador",
        items: [
          "Produto real",
          "Deploy em produção",
          "Visão de negócio",
          "Valor para cliente",
        ],
      },
    ],
  },
  missions: {
    title: "Missões de Campo",
    subtitle:
      "Projetos e conceitos que mostram como transformo problemas em sistemas reais.",
    problemLabel: "Problema",
    solutionLabel: "Solução",
    viewProject: "Ver projeto",
    caseStudy: "Estudo de caso",
    status: {
      live: "Em produção",
      concept: "Conceito / Visão de produto",
      inProgress: "Em progresso",
      learning: "Em estudo",
    },
    items: {
      "oficina-digital": {
        subtitle: "Aplicação web para oficinas auto em Cabo Verde",
        description:
          "Plataforma que permite oficinas receberem pedidos online, organizarem serviços, clientes, veículos, agenda e comunicação num painel simples.",
        stack: [
          "Next.js",
          "TypeScript",
          "React",
          "PostgreSQL",
          "Prisma",
          "Supabase",
          "Vercel",
          "SMTP",
        ],
        statusKey: "live",
        flip: {
          participationTitle: "Minha participação",
          tapHint: "Toque para ver detalhes",
          builtTitle: "Construí",
          builtItems: [
            "Plataforma web completa",
            "Página pública de marcação",
            "Painel da oficina",
            "Super Admin da plataforma",
          ],
          featuresTitle: "Funcionalidades",
          featuresItems: [
            "Pedidos online com fotos",
            "Serviços, clientes e veículos",
            "Agenda e datas bloqueadas",
            "Notificações, e-mails e avaliações",
          ],
          stackTitle: "Stack",
          stackSummary:
            "Next.js · TypeScript · React · Tailwind CSS · Prisma · PostgreSQL · Supabase · Vercel",
          chips: ["SaaS", "Admin", "Booking", "Email", "Storage", "i18n"],
        },
      },
      vektra: {
        subtitle: "Plataforma de mobilidade inteligente",
        description:
          "Solução digital de mobilidade com foco em passageiro, motorista, acessibilidade, segurança e dados urbanos.",
        stack: [
          "React Native",
          "Expo",
          "TypeScript",
          "Node.js",
          "PostgreSQL",
          "Mapbox",
          "OSRM",
          "IA / Liveness",
        ],
        statusKey: "inProgress",
        flip: {
          participationTitle: "Minha participação",
          tapHint: "Toque para ver detalhes",
          builtTitle: "Construí",
          builtItems: [
            "IA VEKTRA",
            "VEKTRA Kids",
            "Liveness / verificação facial",
          ],
          contributedTitle: "Participei em",
          contributedItems: [
            "VEKTRAGEO",
            "Passageiro, Motorista e PCD",
            "Backend do ecossistema",
          ],
          stackTitle: "Stack",
          stackSummary:
            "TypeScript · Node.js · React Native · Expo · Next.js · PostgreSQL · Redis · Mapbox · OSRM",
          chips: ["Guardian Routing", "Route Authority", "Liveness", "VektraGEO"],
        },
      },
      "ai-automation-lab": {
        subtitle: "Laboratório de automação com IA",
        description:
          "Espaço de prática para criar pequenos fluxos com IA, prompts estruturados, APIs e automações simples para processos reais.",
        stack: [
          "Python",
          "JavaScript",
          "APIs",
          "LLM Workflows",
          "Prompt Engineering",
          "Automação",
        ],
        statusKey: "learning",
        flip: {
          participationTitle: "Foco de prática",
          tapHint: "Toque para ver detalhes",
          builtTitle: "Estou a desenvolver",
          builtItems: [
            "Prompts estruturados",
            "Pequenos fluxos com APIs",
            "Automação de tarefas repetitivas",
          ],
          contributedTitle: "Objetivo",
          contributedItems: [
            "Ligar IA a problemas reais",
            "Melhorar lógica de automação",
            "Construir bases para agentes simples",
          ],
          stackTitle: "Stack",
          stackSummary:
            "Python · JavaScript · APIs · LLM Workflows · Prompt Engineering",
          chips: ["Prompts", "APIs", "Automação", "LLM", "Workflows"],
        },
      },
      "security-lab": {
        subtitle: "Laboratório de segurança web e defesa",
        description:
          "Estudos práticos em Linux, redes, autenticação, OWASP, ferramentas de análise e boas práticas para construir aplicações web mais seguras.",
        stack: [
          "Linux",
          "Redes",
          "OWASP",
          "Nmap",
          "Burp Suite",
          "Wi-Fi Security",
          "Código Seguro",
        ],
        statusKey: "learning",
        flip: {
          participationTitle: "Foco de prática",
          tapHint: "Toque para ver detalhes",
          builtTitle: "Estou a estudar",
          builtItems: [
            "Linux, redes e reconhecimento básico",
            "Autenticação, controlo de acesso e OWASP",
            "Segurança Wi-Fi em ambiente autorizado",
          ],
          contributedTitle: "Objetivo",
          contributedItems: [
            "Escrever aplicações mais seguras",
            "Entender riscos reais na web",
            "Pensar como atacante para defender melhor",
          ],
          stackTitle: "Stack",
          stackSummary:
            "Linux · Nmap · Burp Suite · OWASP · Redes · Web Security",
          chips: ["Linux", "OWASP", "Nmap", "Wi-Fi Security", "Código Seguro"],
        },
      },
    },
  },
  techniques: {
    title: "Princípios de Engenharia",
    subtitle:
      "Como estruturo produtos, dados e segurança antes de escrever código.",
    items: [
      {
        title: "Produto antes de código",
        description:
          "Entendo o fluxo real do utilizador antes de escolher telas, APIs ou base de dados.",
      },
      {
        title: "Requisitos antes da solução",
        description:
          "Organizo requisitos, riscos e critérios de validação antes de avançar para implementação.",
      },
      {
        title: "Backend como fonte da verdade",
        description:
          "Estados, permissões, pedidos e regras críticas devem ser validados no servidor.",
      },
      {
        title: "Dados organizados",
        description:
          "Modelo entidades, relações, estados e histórico para o sistema crescer sem virar confusão.",
      },
      {
        title: "Segurança desde o início",
        description:
          "Penso em autenticação, permissões, payloads seguros e validação antes da entrega.",
      },
      {
        title: "Entrega incremental e verificável",
        description:
          "Prefiro evoluir por etapas pequenas, testáveis e alinhadas com valor real.",
      },
    ],
  },
  labNotes: {
    title: "Notas do Laboratório",
    subtitle:
      "Notas técnicas e ideias baseadas nos projetos que estou a construir.",
    status: {
      preparing: "Em preparação",
      draft: "Rascunho",
    },
    items: [
      {
        title: "Como desenhei o fluxo de marcação online da Oficina Digital",
        category: "Produto / Aplicação Web",
        statusKey: "preparing",
      },
      {
        title: "Requisitos antes do código: notas de MBSE aplicado",
        category: "Systems Engineering",
        statusKey: "draft",
      },
      {
        title: "Backend como fonte da verdade: estados, permissões e auditoria",
        category: "Backend",
        statusKey: "preparing",
      },
      {
        title:
          "Segurança web para devs: OWASP, autenticação e Wi-Fi lab autorizado",
        category: "Segurança Web",
        statusKey: "preparing",
      },
    ],
  },
  contact: {
    title: "Vamos construir algo útil.",
    subtitle:
      "Disponível para trabalho remoto, projetos freelance e colaborações em aplicações web, automação com IA e sistemas digitais seguros.",
    emailMe: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
    downloadCv: "Baixar CV",
    emailAria: "Enviar email para Yannick Martins",
    linkedinAria: "Perfil LinkedIn",
    githubAria: "Perfil GitHub",
    cvAria: "Baixar CV",
  },
  footer: {
    copyright: "© 2026 Desenvolvido por Yannick Martins",
  },
  common: {
    homeAria: "Yannick Martins — início",
    mainNav: "Navegação principal",
    mobileNav: "Navegação móvel",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    selectLanguage: "Alterar idioma",
    languageMenu: "Menu de idiomas",
    coreActive: "NÚCLEO // ATIVO",
    viewProjectAria: "Ver projeto",
    avatarAlt: "Avatar estilizado de Yannick Martins",
    externalLinkAria: "Abre num novo separador",
  },
};

const fr: Translations = {
  site: {
    title: "Yannick Martins — Ingénieur logiciel",
    description:
      "Je construis des applications web, des automatisations avec IA, des systèmes orientés données et des solutions sécurisées pour des problèmes réels.",
  },
  nav: {
    systems: "Systèmes",
    modules: "Modules",
    evolution: "Évolution",
    missions: "Missions",
    contact: "Contact",
  },
  hero: {
    role: "Ingénieur logiciel",
    subtitle:
      "Je construis des applications web, des automatisations avec IA, des systèmes orientés données et des solutions sécurisées pour des problèmes réels.",
    primaryCta: "Voir les systèmes",
    secondaryCta: "Me contacter",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  floatingTestimonials: {
    items: [
      { initials: "HM", text: "La réservation en ligne est devenue simple." },
      { initials: "MC", text: "Le service est mieux organisé." },
      { initials: "AC", text: "Les demandes arrivent plus clairement." },
      { initials: "JS", text: "Moins d'appels manqués." },
      { initials: "LR", text: "Système direct et facile à utiliser." },
      { initials: "CV", text: "Plus de contrôle sur le service." },
    ],
  },
  terminal: {
    title: "dev-shell.sh",
    lines: [
      "> initialisation du profil...",
      "> chargement des modules : full-stack / ia / sécurité",
      "> stack : next.js | node | postgres | prisma",
      "> mode : concentré / discret / prêt pour la production",
      "> statut : disponible pour le travail à distance",
    ],
    ariaLabel: "Sortie du terminal système",
  },
  operatingMode: {
    title: "Mode opératoire",
    textBefore:
      "Je travaille de manière réservée, concentrée et orientée ingénierie : je commence par les exigences, les risques et le flux réel; puis je modélise les données, les APIs, la sécurité et la livraison. L'objectif est de construire des logiciels utiles, sûrs et capables d'évoluer.",
    highlight: "",
    textAfter: "",
    highlights: [
      "Ingénierie logicielle",
      "Full-Stack",
      "Données",
      "Sécurité",
      "IA appliquée",
      "MBSE",
    ],
  },
  modules: {
    title: "Modules Système",
    subtitle:
      "Les couches techniques que j'utilise pour transformer des idées en systèmes réels.",
    items: {
      interface: {
        title: "Couche Interface",
        items: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "UI responsive",
        ],
      },
      logic: {
        title: "Couche Logique",
        items: [
          "Node.js",
          "JavaScript",
          "PHP",
          "Python",
          "APIs REST",
        ],
      },
      data: {
        title: "Couche Données",
        items: [
          "PostgreSQL",
          "MySQL",
          "Prisma",
          "Modélisation relationnelle",
          "Migrations",
        ],
      },
      infrastructure: {
        title: "Couche Infrastructure",
        items: [
          "Docker",
          "AWS",
          "Vercel",
          "Variables d'environnement",
          "Déploiement",
        ],
      },
      security: {
        title: "Couche Sécurité",
        items: [
          "Linux",
          "Réseaux",
          "OWASP",
          "Nmap / Burp Suite",
          "Sécurité Wi-Fi autorisée",
        ],
      },
      engineering: {
        title: "Couche Ingénierie",
        items: [
          "Requirements",
          "SysML / UML",
          "Gestion des risques",
          "V&V",
          "Lean / Agile",
        ],
      },
    },
  },
  evolution: {
    title: "Parcours d'Évolution",
    subtitle:
      "Une évolution technique construite avec discipline, pratique et focus sur des systèmes réels.",
    stageLabel: "ÉTAPE",
    items: [
      {
        stage: "01",
        title: "Fondation",
        items: ["HTML", "CSS", "JavaScript", "Logique de programmation"],
      },
      {
        stage: "02",
        title: "Constructeur",
        items: [
          "React",
          "Next.js",
          "UI responsive",
          "Composants réutilisables",
        ],
      },
      {
        stage: "03",
        title: "Systèmes",
        items: ["Node.js", "APIs REST", "Authentification", "Architecture backend"],
      },
      {
        stage: "04",
        title: "Intelligence",
        items: ["IA", "Automatisation", "Agents", "Workflows LLM"],
      },
      {
        stage: "05",
        title: "Défense",
        items: [
          "Linux",
          "Réseaux",
          "OWASP",
          "Sécurité web",
        ],
      },
      {
        stage: "06",
        title: "Opérateur",
        items: [
          "Produit réel",
          "Déploiement en production",
          "Vision métier",
          "Valeur client",
        ],
      },
    ],
  },
  missions: {
    title: "Missions de Terrain",
    subtitle:
      "Projets et concepts qui montrent comment je transforme des problèmes en systèmes réels.",
    problemLabel: "Problème",
    solutionLabel: "Solution",
    viewProject: "Voir le projet",
    caseStudy: "Étude de cas",
    status: {
      live: "En production",
      concept: "Concept / Vision produit",
      inProgress: "En cours",
      learning: "En étude",
    },
    items: {
      "oficina-digital": {
        subtitle: "Application web pour ateliers automobiles au Cabo Verde",
        description:
          "Une plateforme qui aide les ateliers à recevoir des demandes en ligne, organiser les services, clients, véhicules, planning et communication dans un tableau de bord simple.",
        stack: [
          "Next.js",
          "TypeScript",
          "React",
          "PostgreSQL",
          "Prisma",
          "Supabase",
          "Vercel",
          "SMTP",
        ],
        statusKey: "live",
        flip: {
          participationTitle: "Ma contribution",
          tapHint: "Appuyer pour les détails",
          builtTitle: "Développé",
          builtItems: [
            "Plateforme web complète",
            "Page publique de réservation",
            "Tableau de bord atelier",
            "Super Admin de la plateforme",
          ],
          featuresTitle: "Fonctionnalités",
          featuresItems: [
            "Demandes en ligne avec photos",
            "Services, clients et véhicules",
            "Planning et dates bloquées",
            "Notifications, e-mails et évaluations",
          ],
          stackTitle: "Stack",
          stackSummary:
            "Next.js · TypeScript · React · Tailwind CSS · Prisma · PostgreSQL · Supabase · Vercel",
          chips: ["SaaS", "Admin", "Booking", "Email", "Storage", "i18n"],
        },
      },
      vektra: {
        subtitle: "Plateforme de mobilité intelligente",
        description:
          "Solution de mobilité numérique axée sur passager, conducteur, accessibilité, sécurité et données urbaines.",
        stack: [
          "React Native",
          "Expo",
          "TypeScript",
          "Node.js",
          "PostgreSQL",
          "Mapbox",
          "OSRM",
          "IA / Liveness",
        ],
        statusKey: "inProgress",
        flip: {
          participationTitle: "Ma contribution",
          tapHint: "Appuyer pour les détails",
          builtTitle: "Développé",
          builtItems: [
            "IA VEKTRA",
            "VEKTRA Kids",
            "Liveness / vérification faciale",
          ],
          contributedTitle: "Participation à",
          contributedItems: [
            "VEKTRAGEO",
            "Passager, Conducteur et PCD",
            "Backend de l'écosystème",
          ],
          stackTitle: "Stack",
          stackSummary:
            "TypeScript · Node.js · React Native · Expo · Next.js · PostgreSQL · Redis · Mapbox · OSRM",
          chips: ["Guardian Routing", "Route Authority", "Liveness", "VektraGEO"],
        },
      },
      "ai-automation-lab": {
        subtitle: "Laboratoire d'automatisation avec IA",
        description:
          "Un espace de pratique pour créer de petits workflows IA, des prompts structurés, des APIs et des automatisations simples pour des processus réels.",
        stack: [
          "Python",
          "JavaScript",
          "APIs",
          "Workflows LLM",
          "Prompt Engineering",
          "Automatisation",
        ],
        statusKey: "learning",
        flip: {
          participationTitle: "Focus de pratique",
          tapHint: "Appuyer pour les détails",
          builtTitle: "Je développe",
          builtItems: [
            "Prompts structurés",
            "Petits workflows avec APIs",
            "Automatisation de tâches répétitives",
          ],
          contributedTitle: "Objectif",
          contributedItems: [
            "Relier l'IA à des problèmes réels",
            "Améliorer la logique d'automatisation",
            "Construire les bases d'agents simples",
          ],
          stackTitle: "Stack",
          stackSummary:
            "Python · JavaScript · APIs · Workflows LLM · Prompt Engineering",
          chips: ["Prompts", "APIs", "Automatisation", "LLM", "Workflows"],
        },
      },
      "security-lab": {
        subtitle: "Laboratoire de sécurité web et défense",
        description:
          "Études pratiques sur Linux, les réseaux, l'authentification, OWASP, les outils d'analyse et les bonnes pratiques pour créer des applications web plus sûres.",
        stack: [
          "Linux",
          "Réseaux",
          "OWASP",
          "Nmap",
          "Burp Suite",
          "Wi-Fi Security",
          "Code Sécurisé",
        ],
        statusKey: "learning",
        flip: {
          participationTitle: "Focus de pratique",
          tapHint: "Appuyer pour les détails",
          builtTitle: "J'étudie",
          builtItems: [
            "Linux, réseaux et reconnaissance de base",
            "Authentification, contrôle d'accès et OWASP",
            "Sécurité Wi-Fi en environnement autorisé",
          ],
          contributedTitle: "Objectif",
          contributedItems: [
            "Écrire des applications plus sûres",
            "Comprendre les risques réels du web",
            "Penser comme un attaquant pour mieux défendre",
          ],
          stackTitle: "Stack",
          stackSummary:
            "Linux · Nmap · Burp Suite · OWASP · Réseaux · Web Security",
          chips: ["Linux", "OWASP", "Nmap", "Wi-Fi Security", "Code Sécurisé"],
        },
      },
    },
  },
  techniques: {
    title: "Principes d'ingénierie",
    subtitle:
      "Comment je structure les produits, les données et la sécurité avant d'écrire du code.",
    items: [
      {
        title: "Produit avant le code",
        description:
          "Je comprends le flux réel de l'utilisateur avant de choisir les écrans, les APIs ou la base de données.",
      },
      {
        title: "Exigences avant la solution",
        description:
          "J'organise les exigences, les risques et les critères de validation avant de passer à l'implémentation.",
      },
      {
        title: "Backend comme source de vérité",
        description:
          "Les états, permissions, demandes et règles critiques doivent être validés côté serveur.",
      },
      {
        title: "Données organisées",
        description:
          "Je modélise les entités, relations, états et historiques pour que le système puisse évoluer sans devenir chaotique.",
      },
      {
        title: "Sécurité dès le départ",
        description:
          "Je pense à l'authentification, aux permissions, aux payloads sûrs et à la validation avant la livraison.",
      },
      {
        title: "Livraison incrémentale et vérifiable",
        description:
          "Je préfère évoluer par petites étapes testables, alignées sur une valeur réelle.",
      },
    ],
  },
  labNotes: {
    title: "Notes du laboratoire",
    subtitle:
      "Notes techniques et idées basées sur les projets que je construis.",
    status: {
      preparing: "En préparation",
      draft: "Brouillon",
    },
    items: [
      {
        title: "Comment j'ai conçu le flux de réservation en ligne d'Oficina Digital",
        category: "Produit / Application Web",
        statusKey: "preparing",
      },
      {
        title: "Exigences avant le code : notes de MBSE appliqué",
        category: "Ingénierie des systèmes",
        statusKey: "draft",
      },
      {
        title:
          "Backend comme source de vérité : états, permissions et audit",
        category: "Backend",
        statusKey: "preparing",
      },
      {
        title:
          "Sécurité web pour développeurs : OWASP, authentification et labs Wi-Fi autorisés",
        category: "Sécurité Web",
        statusKey: "preparing",
      },
    ],
  },
  contact: {
    title: "Construisons quelque chose d'utile.",
    subtitle:
      "Disponible pour le travail à distance, projets freelance et collaborations sur des applications web, l'automatisation IA et des systèmes numériques sécurisés.",
    emailMe: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
    downloadCv: "Télécharger CV",
    emailAria: "Envoyer un email à Yannick Martins",
    linkedinAria: "Profil LinkedIn",
    githubAria: "Profil GitHub",
    cvAria: "Télécharger CV",
  },
  footer: {
    copyright: "© 2026 Développé par Yannick Martins",
  },
  common: {
    homeAria: "Yannick Martins — accueil",
    mainNav: "Navigation principale",
    mobileNav: "Navigation mobile",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    selectLanguage: "Changer de langue",
    languageMenu: "Menu des langues",
    coreActive: "NOYAU // ACTIF",
    viewProjectAria: "Voir le projet",
    avatarAlt: "Avatar stylisé de Yannick Martins",
    externalLinkAria: "Ouvre dans un nouvel onglet",
  },
};

const zh: Translations = {
  site: {
    title: "Yannick Martins — 软件工程师",
    description:
      "我构建 Web 应用、AI 自动化、数据库驱动系统和面向真实问题的安全解决方案。",
  },
  nav: {
    systems: "系统",
    modules: "模块",
    evolution: "演进",
    missions: "项目",
    contact: "联系",
  },
  hero: {
    role: "软件工程师",
    subtitle:
      "我构建 Web 应用、AI 自动化、数据库驱动系统和面向真实问题的安全解决方案。",
    primaryCta: "查看系统",
    secondaryCta: "联系我",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  floatingTestimonials: {
    items: [
      { initials: "HM", text: "在线预约变得更简单。" },
      { initials: "MC", text: "服务流程更有条理。" },
      { initials: "AC", text: "请求信息更清晰。" },
      { initials: "JS", text: "漏接电话更少。" },
      { initials: "LR", text: "系统直接且易用。" },
      { initials: "CV", text: "服务管理更可控。" },
    ],
  },
  terminal: {
    title: "dev-shell.sh",
    lines: [
      "> 正在初始化档案...",
      "> 正在加载模块：全栈 / AI / 安全",
      "> 技术栈：next.js | node | postgres | prisma",
      "> 模式：专注 / 克制 / 可用于生产",
      "> 状态：可接受远程工作",
    ],
    ariaLabel: "系统终端输出",
  },
  operatingMode: {
    title: "工作方式",
    textBefore:
      "我以专注、克制并偏工程化的方式工作：先理解需求、风险和真实流程，再设计数据、API、安全和交付。目标是构建有用、安全并可持续演进的软件。",
    highlight: "",
    textAfter: "",
    highlights: ["软件工程", "全栈", "数据", "安全", "应用 AI", "MBSE"],
  },
  modules: {
    title: "系统模块",
    subtitle: "我将想法转化为真实系统所使用的技术层。",
    items: {
      interface: {
        title: "界面层",
        items: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "响应式 UI",
        ],
      },
      logic: {
        title: "逻辑层",
        items: ["Node.js", "JavaScript", "PHP", "Python", "REST API"],
      },
      data: {
        title: "数据层",
        items: ["PostgreSQL", "MySQL", "Prisma", "关系建模", "数据迁移"],
      },
      infrastructure: {
        title: "基础设施层",
        items: ["Docker", "AWS", "Vercel", "环境变量", "部署"],
      },
      security: {
        title: "安全层",
        items: [
          "Linux",
          "网络",
          "OWASP",
          "Nmap / Burp Suite",
          "授权 Wi-Fi 安全",
        ],
      },
      engineering: {
        title: "工程层",
        items: ["需求", "SysML / UML", "风险管理", "V&V", "Lean / Agile"],
      },
    },
  },
  evolution: {
    title: "演进路径",
    subtitle: "以纪律、实践和对真实系统的专注构建的技术演进路径。",
    stageLabel: "阶段",
    items: [
      {
        stage: "01",
        title: "基础",
        items: ["HTML", "CSS", "JavaScript", "编程逻辑"],
      },
      {
        stage: "02",
        title: "构建者",
        items: ["React", "Next.js", "响应式 UI", "可复用组件"],
      },
      {
        stage: "03",
        title: "系统",
        items: ["Node.js", "REST API", "身份验证", "后端架构"],
      },
      {
        stage: "04",
        title: "智能",
        items: ["AI", "自动化", "智能体", "LLM 工作流"],
      },
      {
        stage: "05",
        title: "防御",
        items: ["Linux", "网络", "OWASP", "Web 安全"],
      },
      {
        stage: "06",
        title: "运营者",
        items: ["真实产品", "生产部署", "商业思维", "客户价值"],
      },
    ],
  },
  missions: {
    title: "实地任务",
    subtitle: "展示我如何将问题转化为数字系统的项目与概念。",
    problemLabel: "问题",
    solutionLabel: "解决方案",
    viewProject: "查看项目",
    caseStudy: "案例研究",
    status: {
      live: "已上线",
      concept: "概念 / 产品愿景",
      inProgress: "进行中",
      learning: "学习实验室",
    },
    items: {
      "oficina-digital": {
        subtitle: "面向 Cabo Verde 汽车维修店的 Web 应用",
        description:
          "一个帮助维修店接收线上请求，并在简单仪表板中管理服务、客户、车辆、日程和沟通的平台。",
        stack: [
          "Next.js",
          "TypeScript",
          "React",
          "PostgreSQL",
          "Prisma",
          "Supabase",
          "Vercel",
          "SMTP",
        ],
        statusKey: "live",
        flip: {
          participationTitle: "我的参与",
          tapHint: "点击查看详情",
          builtTitle: "构建",
          builtItems: [
            "完整 Web 平台",
            "公开预约页面",
            "维修店仪表板",
            "平台 Super Admin",
          ],
          featuresTitle: "功能",
          featuresItems: [
            "带照片的在线请求",
            "服务、客户与车辆",
            "日程与封锁日期",
            "通知、邮件与评价",
          ],
          stackTitle: "技术栈",
          stackSummary:
            "Next.js · TypeScript · React · Tailwind CSS · Prisma · PostgreSQL · Supabase · Vercel",
          chips: ["SaaS", "Admin", "Booking", "Email", "Storage", "i18n"],
        },
      },
      vektra: {
        subtitle: "智能出行平台",
        description:
          "聚焦乘客、司机、无障碍、安全与城市数据的数字出行解决方案。",
        stack: [
          "React Native",
          "Expo",
          "TypeScript",
          "Node.js",
          "PostgreSQL",
          "Mapbox",
          "OSRM",
          "AI / Liveness",
        ],
        statusKey: "inProgress",
        flip: {
          participationTitle: "我的参与",
          tapHint: "点击查看详情",
          builtTitle: "构建",
          builtItems: ["VEKTRA AI", "VEKTRA Kids", "Liveness / 人脸验证"],
          contributedTitle: "参与",
          contributedItems: ["VEKTRAGEO", "乘客、司机与 PCD", "生态系统后端"],
          stackTitle: "技术栈",
          stackSummary:
            "TypeScript · Node.js · React Native · Expo · Next.js · PostgreSQL · Redis · Mapbox · OSRM",
          chips: ["Guardian Routing", "Route Authority", "Liveness", "VektraGEO"],
        },
      },
      "ai-automation-lab": {
        subtitle: "AI 自动化学习实验室",
        description:
          "用于练习构建小型 AI 工作流、结构化提示、API 和简单自动化流程的实验空间。",
        stack: [
          "Python",
          "JavaScript",
          "APIs",
          "LLM Workflows",
          "Prompt Engineering",
          "自动化",
        ],
        statusKey: "learning",
        flip: {
          participationTitle: "练习重点",
          tapHint: "点击查看详情",
          builtTitle: "正在练习",
          builtItems: ["结构化提示词", "小型 API 工作流", "重复任务自动化"],
          contributedTitle: "目标",
          contributedItems: [
            "将 AI 连接到真实问题",
            "提升自动化逻辑",
            "构建简单智能体基础",
          ],
          stackTitle: "技术栈",
          stackSummary:
            "Python · JavaScript · APIs · LLM Workflows · Prompt Engineering",
          chips: ["Prompts", "APIs", "自动化", "LLM", "Workflows"],
        },
      },
      "security-lab": {
        subtitle: "Web 安全与防御学习实验室",
        description:
          "关于 Linux、网络、身份验证、OWASP、分析工具和安全开发实践的学习实验室。",
        stack: [
          "Linux",
          "网络",
          "OWASP",
          "Nmap",
          "Burp Suite",
          "Wi-Fi Security",
          "安全代码",
        ],
        statusKey: "learning",
        flip: {
          participationTitle: "练习重点",
          tapHint: "点击查看详情",
          builtTitle: "正在学习",
          builtItems: [
            "Linux、网络与基础侦察",
            "身份验证、访问控制与 OWASP",
            "授权环境下的 Wi-Fi 安全",
          ],
          contributedTitle: "目标",
          contributedItems: [
            "编写更安全的应用",
            "理解真实 Web 风险",
            "从攻击者角度思考以更好防御",
          ],
          stackTitle: "技术栈",
          stackSummary: "Linux · Nmap · Burp Suite · OWASP · 网络 · Web 安全",
          chips: ["Linux", "OWASP", "Nmap", "Wi-Fi Security", "安全代码"],
        },
      },
    },
  },
  techniques: {
    title: "工程原则",
    subtitle: "我如何在编写代码前组织产品、数据和安全逻辑。",
    items: [
      {
        title: "产品先于代码",
        description: "在选择界面、API 或数据库之前，我先理解真实的用户流程。",
      },
      {
        title: "需求先于方案",
        description: "在进入实现之前，我先整理需求、风险和验证标准。",
      },
      {
        title: "后端作为事实来源",
        description: "状态、权限、请求和关键规则应在服务端进行验证。",
      },
      {
        title: "有组织的数据",
        description: "我设计实体、关系、状态和历史记录，让系统能够增长而不变混乱。",
      },
      {
        title: "从一开始考虑安全",
        description: "我在交付前关注身份验证、权限、安全 payload 和验证流程。",
      },
      {
        title: "增量且可验证的交付",
        description: "我倾向于通过小而可测试的步骤演进，并与真实价值对齐。",
      },
    ],
  },
  labNotes: {
    title: "实验室笔记",
    subtitle: "基于我正在构建的项目整理的技术笔记和想法。",
    status: {
      preparing: "准备中",
      draft: "草稿",
    },
    items: [
      {
        title: "我如何设计 Oficina Digital 的在线预约流程",
        category: "产品 / Web 应用",
        statusKey: "preparing",
      },
      {
        title: "代码之前的需求：应用 MBSE 笔记",
        category: "系统工程",
        statusKey: "draft",
      },
      {
        title: "后端作为事实来源：状态、权限与审计",
        category: "后端",
        statusKey: "preparing",
      },
      {
        title: "开发者 Web 安全：OWASP、身份验证与授权 Wi-Fi 实验",
        category: "Web 安全",
        statusKey: "preparing",
      },
    ],
  },
  contact: {
    title: "让我们构建有用的东西。",
    subtitle:
      "可接受远程工作、自由职业项目，以及 Web 应用、AI 自动化和安全数字系统方面的合作。",
    emailMe: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
    downloadCv: "下载 CV",
    emailAria: "给 Yannick Martins 发送邮件",
    linkedinAria: "LinkedIn 主页",
    githubAria: "GitHub 主页",
    cvAria: "下载 CV",
  },
  footer: {
    copyright: "© 2026 由 Yannick Martins 开发",
  },
  common: {
    homeAria: "Yannick Martins — 首页",
    mainNav: "主导航",
    mobileNav: "移动端导航",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    selectLanguage: "切换语言",
    languageMenu: "语言菜单",
    coreActive: "核心 // 活跃",
    viewProjectAria: "查看项目",
    avatarAlt: "Yannick Martins 的风格化头像",
    externalLinkAria: "在新标签页中打开",
  },
};

export const translations: Record<Locale, Translations> = { pt, en, fr, zh };

export function getTranslations(locale: Locale): Translations {
  return translations[locale] ?? translations[DEFAULT_LOCALE];
}

export function isValidLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale);
}

export function getHtmlLang(locale: Locale): string {
  const map: Record<Locale, string> = {
    pt: "pt",
    en: "en",
    fr: "fr",
    zh: "zh-CN",
  };
  return map[locale];
}

export function getLocaleShort(locale: Locale): string {
  return localeOptions.find((o) => o.code === locale)?.short ?? "EN";
}

export const navHrefs = [
  { key: "systems" as const, href: "#operating-mode" },
  { key: "modules" as const, href: "#system-modules" },
  { key: "evolution" as const, href: "#evolution-path" },
  { key: "missions" as const, href: "#field-missions" },
  { key: "contact" as const, href: "#contact" },
];

export const moduleOrder: ModuleId[] = [
  "interface",
  "logic",
  "data",
  "infrastructure",
  "security",
  "engineering",
];

export const moduleIcons: Record<ModuleId, string> = {
  interface: "layout",
  logic: "cpu",
  data: "database",
  infrastructure: "rocket",
  security: "shield",
  engineering: "brain",
};

export const missionMeta: {
  id: MissionId;
  title: string;
  link?: string;
}[] = [
  {
    id: "oficina-digital",
    title: "Oficina Digital",
    link: "https://oficinadigital-cv-saas25.vercel.app/oficina/hereneu-oficina-auto/marcar",
  },
  {
    id: "vektra",
    title: "VEKTRA",
  },
  {
    id: "ai-automation-lab",
    title: "AI Automation Lab",
  },
  {
    id: "security-lab",
    title: "Security & Web Defense Lab",
  },
];

export const siteConfig = {
  name: "Yannick Martins",
  email: "yannickm637@gmail.com",
  linkedin: "https://www.linkedin.com/in/yannick-martins-3b3954314/",
  github: "https://github.com/Yannick463",
  cvPath: "/cv.pdf",
};

export const statusStyles: Record<
  keyof Translations["missions"]["status"],
  string
> = {
  live: "border-accent-green/40 bg-accent-green/10 text-accent-green",
  concept: "border-accent-blue/40 bg-accent-blue/10 text-accent-blue",
  inProgress: "border-accent-orange/40 bg-accent-orange/10 text-accent-orange",
  learning: "border-border-subtle bg-bg-primary/60 text-text-secondary",
};

export const labStatusStyles: Record<
  keyof Translations["labNotes"]["status"],
  string
> = {
  preparing: "text-accent-blue",
  draft: "text-accent-orange",
};
