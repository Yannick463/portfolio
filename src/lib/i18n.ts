import type { CredentialHighlightId } from "@/lib/credentials";
import { publicPath } from "@/lib/public-path";
import { technicalNotes, type TechnicalNotesCopy } from "@/lib/technical-notes";
export type Locale = "pt" | "en" | "fr" | "zh";

export const DEFAULT_LOCALE: Locale = "en";
export const STORAGE_KEY = "shadow-core-locale";
export const SUPPORTED_LOCALES: Locale[] = ["pt", "en", "fr", "zh"];

export const localeOptions = [
  { code: "pt" as const, label: "PortuguÃªs", short: "PT" },
  { code: "en" as const, label: "English", short: "EN" },
  { code: "fr" as const, label: "FranÃ§ais", short: "FR" },
  { code: "zh" as const, label: "ä¸­æ–‡", short: "ZH" },
];

export type MissionId =
  | "oficina-digital"
  | "vektra"
  | "linha-6"
  | "b2b-platform";

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
  };
  operatingMode: {
    title: string;
    textBefore: string;
    highlight: string;
    textAfter: string;
    steps: {
      title: string;
      description: string;
    }[];
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
  credentials: {
    title: string;
    subtitle: string;
    items: Record<
      CredentialHighlightId,
      {
        metaType: string;
        metaYear: string;
        title: string;
        description: string;
        highlight: string;
        imageAlt: string;
      }
    >;
  };
  missions: {
    title: string;
    subtitle: string;
    problemLabel: string;
    solutionLabel: string;
    viewProject: string;
    showDetails: string;
    hideDetails: string;
    caseStudy: string;
    status: {
      live: string;
      concept: string;
      inProgress: string;
      preDeploy: string;
      inDevelopment: string;
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
  labNotes: TechnicalNotesCopy;
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
    title: "Yannick Martins â€” Software Developer",
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
    role: "Software Developer",
    subtitle:
      "I build web applications, AI automations, database-driven systems and secure solutions for real-world problems.",
  },
  operatingMode: {
    title: "Operating Mode",
    textBefore:
      "I work in a reserved, focused way, oriented toward software development: I start with requirements, risk and the real user flow; then I model data, APIs, security and delivery. The goal is to build useful, secure software prepared to evolve.",
    highlight: "",
    textAfter: "",
    steps: [
      {
        title: "Understand",
        description: "Grasp the problem, the flow, and the real constraints.",
      },
      {
        title: "Model",
        description: "Organize data, entities, and relationships with clarity.",
      },
      {
        title: "Build",
        description: "Implement interface, logic, and backend as one system.",
      },
      {
        title: "Validate",
        description: "Test real behavior, not just appearance.",
      },
      {
        title: "Protect",
        description: "Apply validation, access control, and security.",
      },
      {
        title: "Deliver",
        description: "Ship something functional and ready to evolve.",
      },
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
        title: "Technical Layer",
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
  credentials: {
    title: "Highlights & Credentials",
    subtitle: "Experiences, learning and recognition beyond code.",
    items: {
      reinventa: {
        metaType: "HACKATHON",
        metaYear: "2026",
        title: "Re!venta Hackathon",
        description:
          "Selected for the Re!venta Hackathon in Mindelo, run by Cabo Digital. The team built a digital solution applied to the vehicle inspection process.",
        highlight: "4th place",
        imageAlt:
          "Re!venta Hackathon by Cabo Digital in Mindelo â€” team participation in vehicle inspection software",
      },
      payaig: {
        metaType: "FELLOWSHIP",
        metaYear: "2023",
        title: "Internet Governance Fellowship",
        description:
          "Completed the Internet Governance Fellowship with Pan-African Youth Ambassadors for Internet Governance, in the Portuguese-language cohort.",
        highlight: "Internet Governance",
        imageAlt:
          "Internet Governance Fellowship certificate awarded to Yannick Martins by PAYAIG",
      },
    },
  },
  missions: {
    title: "Field Missions",
    subtitle:
      "Projects and concepts that show how I turn problems into real systems.",
    problemLabel: "Problem",
    solutionLabel: "Solution",
    viewProject: "View Project",
    showDetails: "Details",
    hideDetails: "Hide details",
    caseStudy: "Case Study",
    status: {
      live: "In production",
      concept: "Concept / Product Vision",
      inProgress: "In progress",
      preDeploy: "Pre-deploy",
      inDevelopment: "In development",
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
            "Next.js Â· TypeScript Â· React Â· Tailwind CSS Â· Prisma Â· PostgreSQL Â· Supabase Â· Vercel",
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
            "TypeScript Â· Node.js Â· React Native Â· Expo Â· Next.js Â· PostgreSQL Â· Redis Â· Mapbox Â· OSRM",
          chips: ["Guardian Routing", "Route Authority", "Liveness", "VektraGEO"],
        },
      },
      "linha-6": {
        subtitle: "Institutional digital platform",
        description:
          "Institutional website integrated with an admin panel and API for managing and publishing content, services, team, media and communication.",
        stack: ["Next.js", "React", "Fastify", "PostgreSQL", "Supabase"],
        statusKey: "preDeploy",
        flip: {
          participationTitle: "Scope",
          tapHint: "Tap for details",
          builtTitle: "Architecture",
          builtItems: [
            "Public website in Next.js",
            "Separate admin in Vite/React",
            "Fastify API",
            "PostgreSQL/Supabase",
          ],
          contributedTitle: "Management",
          contributedItems: [
            "Content",
            "Services and areas",
            "Team",
            "Media",
            "Contacts",
            "Newsletter",
            "Banners",
            "Site settings",
            "Legal pages",
          ],
          stackTitle: "Technical",
          stackSummary:
            "Next.js Â· React Â· TypeScript Â· Fastify Â· PostgreSQL Â· Supabase Â· Vite",
          chips: [
            "authentication",
            "RBAC",
            "session",
            "CSRF",
            "validation",
            "draft/publish flow",
            "automated tests",
            "Docker",
          ],
        },
      },
      "b2b-platform": {
        subtitle: "Digital ecosystem for investment and business meetings",
        description:
          "A platform designed to connect participants, investors, exhibitors, meetings and business opportunities in a single digital ecosystem.",
        stack: ["Marketplace B2B", "Meetings", "QR / Check-in", "Admin / BI", "Deal Room"],
        statusKey: "inDevelopment",
        flip: {
          participationTitle: "Scope",
          tapHint: "Tap for details",
          builtTitle: "Objective",
          builtItems: [
            "Create a digital ecosystem to bring companies, investors, exhibitors and business opportunities closer together.",
          ],
          contributedTitle: "Planned modules",
          contributedItems: [
            "B2B marketplace",
            "Participant and investor profiles",
            "Agenda and meetings",
            "Opportunities",
            "QR / check-in",
            "Investor map",
            "Administration and BI",
            "Pipeline / Deal Room",
            "Recommendation and matching, when supported by the project",
          ],
          stackTitle: "Status",
          stackSummary:
            "Planned modules and planned architecture, in development. Not all of them are complete.",
          chips: [],
        },
      },
    },
  },
  techniques: {
    title: "Development Principles",
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
  labNotes: technicalNotes.en,
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
    copyright: "Â© 2026 Developed by Yannick Martins",
  },
  common: {
    homeAria: "Yannick Martins â€” home",
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
    title: "Yannick Martins â€” Desenvolvedor de Software",
    description:
      "Construo aplicaÃ§Ãµes web, automaÃ§Ãµes com IA, sistemas orientados por bases de dados e soluÃ§Ãµes seguras para problemas reais.",
  },
  nav: {
    systems: "Sistemas",
    modules: "MÃ³dulos",
    evolution: "EvoluÃ§Ã£o",
    missions: "MissÃµes",
    contact: "Contacto",
  },
  hero: {
    role: "Desenvolvedor de Software",
    subtitle:
      "Construo aplicaÃ§Ãµes web, automaÃ§Ãµes com IA, sistemas orientados por bases de dados e soluÃ§Ãµes seguras para problemas reais.",
  },
  operatingMode: {
    title: "Modo de OperaÃ§Ã£o",
    textBefore:
      "Trabalho de forma reservada, focada e orientada ao desenvolvimento de software: comeÃ§o pelos requisitos, risco e fluxo real; depois modelo dados, APIs, seguranÃ§a e entrega. O objetivo Ã© criar software Ãºtil, seguro e preparado para evoluir.",
    highlight: "",
    textAfter: "",
    steps: [
      {
        title: "Compreender",
        description: "Entender o problema, o fluxo e os limites reais.",
      },
      {
        title: "Modelar",
        description: "Organizar dados, entidades e relaÃ§Ãµes com clareza.",
      },
      {
        title: "Construir",
        description: "Implementar interface, lÃ³gica e backend de forma integrada.",
      },
      {
        title: "Validar",
        description: "Testar comportamento real, nÃ£o apenas aparÃªncia.",
      },
      {
        title: "Proteger",
        description: "Aplicar validaÃ§Ã£o, controlo de acesso e seguranÃ§a.",
      },
      {
        title: "Entregar",
        description: "Publicar algo funcional e preparado para evoluir.",
      },
    ],
  },
  modules: {
    title: "MÃ³dulos do Sistema",
    subtitle:
      "As camadas tÃ©cnicas que uso para transformar ideias em sistemas reais.",
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
        title: "Camada de LÃ³gica",
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
          "VariÃ¡veis de ambiente",
          "Deploy",
        ],
      },
      security: {
        title: "Camada de SeguranÃ§a",
        items: [
          "Linux",
          "Redes",
          "OWASP",
          "Nmap / Burp Suite",
          "SeguranÃ§a Wi-Fi autorizada",
        ],
      },
      engineering: {
        title: "Camada TÃ©cnica",
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
    title: "Percurso de EvoluÃ§Ã£o",
    subtitle:
      "Uma evoluÃ§Ã£o tÃ©cnica construÃ­da com disciplina, prÃ¡tica e foco em sistemas reais.",
    stageLabel: "FASE",
    items: [
      {
        stage: "01",
        title: "FundaÃ§Ã£o",
        items: ["HTML", "CSS", "JavaScript", "LÃ³gica de programaÃ§Ã£o"],
      },
      {
        stage: "02",
        title: "Construtor",
        items: [
          "React",
          "Next.js",
          "UI responsiva",
          "Componentes reutilizÃ¡veis",
        ],
      },
      {
        stage: "03",
        title: "Sistemas",
        items: ["Node.js", "APIs REST", "AutenticaÃ§Ã£o", "Arquitetura backend"],
      },
      {
        stage: "04",
        title: "InteligÃªncia",
        items: ["IA", "AutomaÃ§Ã£o", "Agentes", "Fluxos LLM"],
      },
      {
        stage: "05",
        title: "Defesa",
        items: [
          "Linux",
          "Redes",
          "OWASP",
          "SeguranÃ§a web",
        ],
      },
      {
        stage: "06",
        title: "Operador",
        items: [
          "Produto real",
          "Deploy em produÃ§Ã£o",
          "VisÃ£o de negÃ³cio",
          "Valor para cliente",
        ],
      },
    ],
  },
  credentials: {
    title: "Destaques & Credenciais",
    subtitle:
      "ExperiÃªncias, formaÃ§Ã£o e reconhecimento para alÃ©m do cÃ³digo.",
    items: {
      reinventa: {
        metaType: "HACKATHON",
        metaYear: "2026",
        title: "Re!venta Hackathon",
        description:
          "Selecionado para o Re!venta Hackathon, realizado no Mindelo pela Cabo Digital. A equipa desenvolveu uma soluÃ§Ã£o digital aplicada ao processo de inspeÃ§Ã£o veicular.",
        highlight: "4.Âº lugar",
        imageAlt:
          "Re!venta Hackathon da Cabo Digital no Mindelo â€” participaÃ§Ã£o em equipa numa soluÃ§Ã£o de inspeÃ§Ã£o veicular",
      },
      payaig: {
        metaType: "FELLOWSHIP",
        metaYear: "2023",
        title: "Internet Governance Fellowship",
        description:
          "ConclusÃ£o da Internet Governance Fellowship da Pan-African Youth Ambassadors for Internet Governance, na coorte de lÃ­ngua portuguesa.",
        highlight: "Internet Governance",
        imageAlt:
          "Certificado da Internet Governance Fellowship atribuÃ­do a Yannick Martins pelo PAYAIG",
      },
    },
  },
  missions: {
    title: "MissÃµes de Campo",
    subtitle:
      "Projetos e conceitos que mostram como transformo problemas em sistemas reais.",
    problemLabel: "Problema",
    solutionLabel: "SoluÃ§Ã£o",
    viewProject: "Ver projeto",
    showDetails: "Detalhes",
    hideDetails: "Ocultar detalhes",
    caseStudy: "Estudo de caso",
    status: {
      live: "Em produÃ§Ã£o",
      concept: "Conceito / VisÃ£o de produto",
      inProgress: "Em progresso",
      preDeploy: "PrÃ©-deploy",
      inDevelopment: "Em desenvolvimento",
    },
    items: {
      "oficina-digital": {
        subtitle: "AplicaÃ§Ã£o web para oficinas auto em Cabo Verde",
        description:
          "Plataforma que permite oficinas receberem pedidos online, organizarem serviÃ§os, clientes, veÃ­culos, agenda e comunicaÃ§Ã£o num painel simples.",
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
          participationTitle: "Minha participaÃ§Ã£o",
          tapHint: "Toque para ver detalhes",
          builtTitle: "ConstruÃ­",
          builtItems: [
            "Plataforma web completa",
            "PÃ¡gina pÃºblica de marcaÃ§Ã£o",
            "Painel da oficina",
            "Super Admin da plataforma",
          ],
          featuresTitle: "Funcionalidades",
          featuresItems: [
            "Pedidos online com fotos",
            "ServiÃ§os, clientes e veÃ­culos",
            "Agenda e datas bloqueadas",
            "NotificaÃ§Ãµes, e-mails e avaliaÃ§Ãµes",
          ],
          stackTitle: "Stack",
          stackSummary:
            "Next.js Â· TypeScript Â· React Â· Tailwind CSS Â· Prisma Â· PostgreSQL Â· Supabase Â· Vercel",
          chips: ["SaaS", "Admin", "Booking", "Email", "Storage", "i18n"],
        },
      },
      vektra: {
        subtitle: "Plataforma de mobilidade inteligente",
        description:
          "SoluÃ§Ã£o digital de mobilidade com foco em passageiro, motorista, acessibilidade, seguranÃ§a e dados urbanos.",
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
          participationTitle: "Minha participaÃ§Ã£o",
          tapHint: "Toque para ver detalhes",
          builtTitle: "ConstruÃ­",
          builtItems: [
            "IA VEKTRA",
            "VEKTRA Kids",
            "Liveness / verificaÃ§Ã£o facial",
          ],
          contributedTitle: "Participei em",
          contributedItems: [
            "VEKTRAGEO",
            "Passageiro, Motorista e PCD",
            "Backend do ecossistema",
          ],
          stackTitle: "Stack",
          stackSummary:
            "TypeScript Â· Node.js Â· React Native Â· Expo Â· Next.js Â· PostgreSQL Â· Redis Â· Mapbox Â· OSRM",
          chips: ["Guardian Routing", "Route Authority", "Liveness", "VektraGEO"],
        },
      },
      "linha-6": {
        subtitle: "Plataforma digital institucional",
        description:
          "Website institucional integrado a um painel administrativo e API para gestÃ£o e publicaÃ§Ã£o de conteÃºdos, serviÃ§os, equipa, media e comunicaÃ§Ã£o.",
        stack: ["Next.js", "React", "Fastify", "PostgreSQL", "Supabase"],
        statusKey: "preDeploy",
        flip: {
          participationTitle: "Escopo",
          tapHint: "Toque para ver detalhes",
          builtTitle: "Arquitetura",
          builtItems: [
            "Website pÃºblico em Next.js",
            "Admin separado em Vite/React",
            "API Fastify",
            "PostgreSQL/Supabase",
          ],
          contributedTitle: "GestÃ£o",
          contributedItems: [
            "ConteÃºdos",
            "ServiÃ§os e Ã¡reas",
            "Equipa",
            "Media",
            "Contactos",
            "Newsletter",
            "Banners",
            "DefiniÃ§Ãµes do site",
            "PÃ¡ginas legais",
          ],
          stackTitle: "TÃ©cnica",
          stackSummary:
            "Next.js Â· React Â· TypeScript Â· Fastify Â· PostgreSQL Â· Supabase Â· Vite",
          chips: [
            "autenticaÃ§Ã£o",
            "RBAC",
            "sessÃ£o",
            "CSRF",
            "validaÃ§Ã£o",
            "fluxo rascunho/publicaÃ§Ã£o",
            "testes automatizados",
            "Docker",
          ],
        },
      },
      "b2b-platform": {
        subtitle: "Ecossistema digital para investimento e encontros empresariais",
        description:
          "Plataforma concebida para ligar participantes, investidores, expositores, reuniÃµes e oportunidades de negÃ³cio num Ãºnico ecossistema digital.",
        stack: ["Marketplace B2B", "ReuniÃµes", "QR / Check-in", "Admin / BI", "Deal Room"],
        statusKey: "inDevelopment",
        flip: {
          participationTitle: "Escopo",
          tapHint: "Toque para ver detalhes",
          builtTitle: "Objetivo",
          builtItems: [
            "Criar um ecossistema digital para aproximar empresas, investidores, expositores e oportunidades de negÃ³cio.",
          ],
          contributedTitle: "MÃ³dulos previstos",
          contributedItems: [
            "marketplace B2B",
            "perfis de participantes e investidores",
            "agenda e reuniÃµes",
            "oportunidades",
            "QR / check-in",
            "mapa de investidores",
            "administraÃ§Ã£o e BI",
            "pipeline / Deal Room",
            "recomendaÃ§Ã£o e matching, quando suportado pelo projeto",
          ],
          stackTitle: "Estado",
          stackSummary:
            "MÃ³dulos previstos e arquitetura planeada, em desenvolvimento. Nem todos estÃ£o concluÃ­dos.",
          chips: [],
        },
      },
    },
  },
  techniques: {
    title: "PrincÃ­pios de Desenvolvimento",
    subtitle:
      "Como estruturo produtos, dados e seguranÃ§a antes de escrever cÃ³digo.",
    items: [
      {
        title: "Produto antes de cÃ³digo",
        description:
          "Entendo o fluxo real do utilizador antes de escolher telas, APIs ou base de dados.",
      },
      {
        title: "Requisitos antes da soluÃ§Ã£o",
        description:
          "Organizo requisitos, riscos e critÃ©rios de validaÃ§Ã£o antes de avanÃ§ar para implementaÃ§Ã£o.",
      },
      {
        title: "Backend como fonte da verdade",
        description:
          "Estados, permissÃµes, pedidos e regras crÃ­ticas devem ser validados no servidor.",
      },
      {
        title: "Dados organizados",
        description:
          "Modelo entidades, relaÃ§Ãµes, estados e histÃ³rico para o sistema crescer sem virar confusÃ£o.",
      },
      {
        title: "SeguranÃ§a desde o inÃ­cio",
        description:
          "Penso em autenticaÃ§Ã£o, permissÃµes, payloads seguros e validaÃ§Ã£o antes da entrega.",
      },
      {
        title: "Entrega incremental e verificÃ¡vel",
        description:
          "Prefiro evoluir por etapas pequenas, testÃ¡veis e alinhadas com valor real.",
      },
    ],
  },
  labNotes: technicalNotes.pt,
  contact: {
    title: "Vamos construir algo Ãºtil.",
    subtitle:
      "DisponÃ­vel para trabalho remoto, projetos freelance e colaboraÃ§Ãµes em aplicaÃ§Ãµes web, automaÃ§Ã£o com IA e sistemas digitais seguros.",
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
    copyright: "Â© 2026 Desenvolvido por Yannick Martins",
  },
  common: {
    homeAria: "Yannick Martins â€” inÃ­cio",
    mainNav: "NavegaÃ§Ã£o principal",
    mobileNav: "NavegaÃ§Ã£o mÃ³vel",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    selectLanguage: "Alterar idioma",
    languageMenu: "Menu de idiomas",
    coreActive: "NÃšCLEO // ATIVO",
    viewProjectAria: "Ver projeto",
    avatarAlt: "Avatar estilizado de Yannick Martins",
    externalLinkAria: "Abre num novo separador",
  },
};

const fr: Translations = {
  site: {
    title: "Yannick Martins â€” DÃ©veloppeur logiciel",
    description:
      "Je construis des applications web, des automatisations avec IA, des systÃ¨mes orientÃ©s donnÃ©es et des solutions sÃ©curisÃ©es pour des problÃ¨mes rÃ©els.",
  },
  nav: {
    systems: "SystÃ¨mes",
    modules: "Modules",
    evolution: "Ã‰volution",
    missions: "Missions",
    contact: "Contact",
  },
  hero: {
    role: "DÃ©veloppeur logiciel",
    subtitle:
      "Je construis des applications web, des automatisations avec IA, des systÃ¨mes orientÃ©s donnÃ©es et des solutions sÃ©curisÃ©es pour des problÃ¨mes rÃ©els.",
  },
  operatingMode: {
    title: "Mode opÃ©ratoire",
    textBefore:
      "Je travaille de maniÃ¨re rÃ©servÃ©e, concentrÃ©e et orientÃ©e vers le dÃ©veloppement logiciel : je commence par les exigences, les risques et le flux rÃ©el ; puis je modÃ©lise les donnÃ©es, les APIs, la sÃ©curitÃ© et la livraison. L'objectif est de construire des logiciels utiles, sÃ»rs et capables d'Ã©voluer.",
    highlight: "",
    textAfter: "",
    steps: [
      {
        title: "Comprendre",
        description: "Saisir le problÃ¨me, le flux et les limites rÃ©elles.",
      },
      {
        title: "ModÃ©liser",
        description: "Organiser les donnÃ©es, les entitÃ©s et les relations avec clartÃ©.",
      },
      {
        title: "Construire",
        description: "ImplÃ©menter l'interface, la logique et le backend de faÃ§on intÃ©grÃ©e.",
      },
      {
        title: "Valider",
        description: "Tester le comportement rÃ©el, pas seulement l'apparence.",
      },
      {
        title: "ProtÃ©ger",
        description: "Appliquer la validation, le contrÃ´le d'accÃ¨s et la sÃ©curitÃ©.",
      },
      {
        title: "Livrer",
        description: "Publier quelque chose de fonctionnel et prÃªt Ã  Ã©voluer.",
      },
    ],
  },
  modules: {
    title: "Modules SystÃ¨me",
    subtitle:
      "Les couches techniques que j'utilise pour transformer des idÃ©es en systÃ¨mes rÃ©els.",
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
        title: "Couche DonnÃ©es",
        items: [
          "PostgreSQL",
          "MySQL",
          "Prisma",
          "ModÃ©lisation relationnelle",
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
          "DÃ©ploiement",
        ],
      },
      security: {
        title: "Couche SÃ©curitÃ©",
        items: [
          "Linux",
          "RÃ©seaux",
          "OWASP",
          "Nmap / Burp Suite",
          "SÃ©curitÃ© Wi-Fi autorisÃ©e",
        ],
      },
      engineering: {
        title: "Couche technique",
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
    title: "Parcours d'Ã‰volution",
    subtitle:
      "Une Ã©volution technique construite avec discipline, pratique et focus sur des systÃ¨mes rÃ©els.",
    stageLabel: "Ã‰TAPE",
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
          "Composants rÃ©utilisables",
        ],
      },
      {
        stage: "03",
        title: "SystÃ¨mes",
        items: ["Node.js", "APIs REST", "Authentification", "Architecture backend"],
      },
      {
        stage: "04",
        title: "Intelligence",
        items: ["IA", "Automatisation", "Agents", "Workflows LLM"],
      },
      {
        stage: "05",
        title: "DÃ©fense",
        items: [
          "Linux",
          "RÃ©seaux",
          "OWASP",
          "SÃ©curitÃ© web",
        ],
      },
      {
        stage: "06",
        title: "OpÃ©rateur",
        items: [
          "Produit rÃ©el",
          "DÃ©ploiement en production",
          "Vision mÃ©tier",
          "Valeur client",
        ],
      },
    ],
  },
  credentials: {
    title: "Temps forts & qualifications",
    subtitle:
      "ExpÃ©riences, formation et reconnaissance au-delÃ  du code.",
    items: {
      reinventa: {
        metaType: "HACKATHON",
        metaYear: "2026",
        title: "Re!venta Hackathon",
        description:
          "SÃ©lectionnÃ© pour le Re!venta Hackathon Ã  Mindelo, organisÃ© par Cabo Digital. L'Ã©quipe a dÃ©veloppÃ© une solution numÃ©rique appliquÃ©e au processus d'inspection vÃ©hiculaire.",
        highlight: "4e place",
        imageAlt:
          "Re!venta Hackathon de Cabo Digital Ã  Mindelo â€” participation en Ã©quipe sur l'inspection vÃ©hiculaire",
      },
      payaig: {
        metaType: "FELLOWSHIP",
        metaYear: "2023",
        title: "Internet Governance Fellowship",
        description:
          "AchÃ¨vement de l'Internet Governance Fellowship auprÃ¨s de Pan-African Youth Ambassadors for Internet Governance, dans la cohorte de langue portugaise.",
        highlight: "Internet Governance",
        imageAlt:
          "Certificat de l'Internet Governance Fellowship dÃ©cernÃ© Ã  Yannick Martins par le PAYAIG",
      },
    },
  },
  missions: {
    title: "Missions de Terrain",
    subtitle:
      "Projets et concepts qui montrent comment je transforme des problÃ¨mes en systÃ¨mes rÃ©els.",
    problemLabel: "ProblÃ¨me",
    solutionLabel: "Solution",
    viewProject: "Voir le projet",
    showDetails: "DÃ©tails",
    hideDetails: "Masquer les dÃ©tails",
    caseStudy: "Ã‰tude de cas",
    status: {
      live: "En production",
      concept: "Concept / Vision produit",
      inProgress: "En cours",
      preDeploy: "PrÃ©-dÃ©ploiement",
      inDevelopment: "En dÃ©veloppement",
    },
    items: {
      "oficina-digital": {
        subtitle: "Application web pour ateliers automobiles au Cabo Verde",
        description:
          "Une plateforme qui aide les ateliers Ã  recevoir des demandes en ligne, organiser les services, clients, vÃ©hicules, planning et communication dans un tableau de bord simple.",
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
          tapHint: "Appuyer pour les dÃ©tails",
          builtTitle: "DÃ©veloppÃ©",
          builtItems: [
            "Plateforme web complÃ¨te",
            "Page publique de rÃ©servation",
            "Tableau de bord atelier",
            "Super Admin de la plateforme",
          ],
          featuresTitle: "FonctionnalitÃ©s",
          featuresItems: [
            "Demandes en ligne avec photos",
            "Services, clients et vÃ©hicules",
            "Planning et dates bloquÃ©es",
            "Notifications, e-mails et Ã©valuations",
          ],
          stackTitle: "Stack",
          stackSummary:
            "Next.js Â· TypeScript Â· React Â· Tailwind CSS Â· Prisma Â· PostgreSQL Â· Supabase Â· Vercel",
          chips: ["SaaS", "Admin", "Booking", "Email", "Storage", "i18n"],
        },
      },
      vektra: {
        subtitle: "Plateforme de mobilitÃ© intelligente",
        description:
          "Solution de mobilitÃ© numÃ©rique axÃ©e sur passager, conducteur, accessibilitÃ©, sÃ©curitÃ© et donnÃ©es urbaines.",
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
          tapHint: "Appuyer pour les dÃ©tails",
          builtTitle: "DÃ©veloppÃ©",
          builtItems: [
            "IA VEKTRA",
            "VEKTRA Kids",
            "Liveness / vÃ©rification faciale",
          ],
          contributedTitle: "Participation Ã ",
          contributedItems: [
            "VEKTRAGEO",
            "Passager, Conducteur et PCD",
            "Backend de l'Ã©cosystÃ¨me",
          ],
          stackTitle: "Stack",
          stackSummary:
            "TypeScript Â· Node.js Â· React Native Â· Expo Â· Next.js Â· PostgreSQL Â· Redis Â· Mapbox Â· OSRM",
          chips: ["Guardian Routing", "Route Authority", "Liveness", "VektraGEO"],
        },
      },
      "linha-6": {
        subtitle: "Plateforme digitale institutionnelle",
        description:
          "Site institutionnel intÃ©grÃ© Ã  un panneau d'administration et Ã  une API pour gÃ©rer et publier contenus, services, Ã©quipe, mÃ©dias et communication.",
        stack: ["Next.js", "React", "Fastify", "PostgreSQL", "Supabase"],
        statusKey: "preDeploy",
        flip: {
          participationTitle: "PÃ©rimÃ¨tre",
          tapHint: "Appuyer pour les dÃ©tails",
          builtTitle: "Architecture",
          builtItems: [
            "Site public en Next.js",
            "Admin sÃ©parÃ© en Vite/React",
            "API Fastify",
            "PostgreSQL/Supabase",
          ],
          contributedTitle: "Gestion",
          contributedItems: [
            "Contenus",
            "Services et domaines",
            "Ã‰quipe",
            "MÃ©dias",
            "Contacts",
            "Newsletter",
            "BanniÃ¨res",
            "ParamÃ¨tres du site",
            "Pages lÃ©gales",
          ],
          stackTitle: "Technique",
          stackSummary:
            "Next.js Â· React Â· TypeScript Â· Fastify Â· PostgreSQL Â· Supabase Â· Vite",
          chips: [
            "authentification",
            "RBAC",
            "session",
            "CSRF",
            "validation",
            "flux brouillon/publication",
            "tests automatisÃ©s",
            "Docker",
          ],
        },
      },
      "b2b-platform": {
        subtitle: "Ã‰cosystÃ¨me digital pour l'investissement et les rencontres d'affaires",
        description:
          "Plateforme conÃ§ue pour relier participants, investisseurs, exposants, rÃ©unions et opportunitÃ©s d'affaires dans un seul Ã©cosystÃ¨me digital.",
        stack: ["Marketplace B2B", "RÃ©unions", "QR / Check-in", "Admin / BI", "Deal Room"],
        statusKey: "inDevelopment",
        flip: {
          participationTitle: "PÃ©rimÃ¨tre",
          tapHint: "Appuyer pour les dÃ©tails",
          builtTitle: "Objectif",
          builtItems: [
            "CrÃ©er un Ã©cosystÃ¨me digital pour rapprocher entreprises, investisseurs, exposants et opportunitÃ©s d'affaires.",
          ],
          contributedTitle: "Modules prÃ©vus",
          contributedItems: [
            "marketplace B2B",
            "profils de participants et d'investisseurs",
            "agenda et rÃ©unions",
            "opportunitÃ©s",
            "QR / check-in",
            "carte des investisseurs",
            "administration et BI",
            "pipeline / Deal Room",
            "recommandation et matching, lorsque le projet le prÃ©voit",
          ],
          stackTitle: "Ã‰tat",
          stackSummary:
            "Modules prÃ©vus et architecture planifiÃ©e, en dÃ©veloppement. Tous ne sont pas terminÃ©s.",
          chips: [],
        },
      },
    },
  },
  techniques: {
    title: "Principes de dÃ©veloppement",
    subtitle:
      "Comment je structure les produits, les donnÃ©es et la sÃ©curitÃ© avant d'Ã©crire du code.",
    items: [
      {
        title: "Produit avant le code",
        description:
          "Je comprends le flux rÃ©el de l'utilisateur avant de choisir les Ã©crans, les APIs ou la base de donnÃ©es.",
      },
      {
        title: "Exigences avant la solution",
        description:
          "J'organise les exigences, les risques et les critÃ¨res de validation avant de passer Ã  l'implÃ©mentation.",
      },
      {
        title: "Backend comme source de vÃ©ritÃ©",
        description:
          "Les Ã©tats, permissions, demandes et rÃ¨gles critiques doivent Ãªtre validÃ©s cÃ´tÃ© serveur.",
      },
      {
        title: "DonnÃ©es organisÃ©es",
        description:
          "Je modÃ©lise les entitÃ©s, relations, Ã©tats et historiques pour que le systÃ¨me puisse Ã©voluer sans devenir chaotique.",
      },
      {
        title: "SÃ©curitÃ© dÃ¨s le dÃ©part",
        description:
          "Je pense Ã  l'authentification, aux permissions, aux payloads sÃ»rs et Ã  la validation avant la livraison.",
      },
      {
        title: "Livraison incrÃ©mentale et vÃ©rifiable",
        description:
          "Je prÃ©fÃ¨re Ã©voluer par petites Ã©tapes testables, alignÃ©es sur une valeur rÃ©elle.",
      },
    ],
  },
  labNotes: technicalNotes.fr,
  contact: {
    title: "Construisons quelque chose d'utile.",
    subtitle:
      "Disponible pour le travail Ã  distance, projets freelance et collaborations sur des applications web, l'automatisation IA et des systÃ¨mes numÃ©riques sÃ©curisÃ©s.",
    emailMe: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
    downloadCv: "TÃ©lÃ©charger CV",
    emailAria: "Envoyer un email Ã  Yannick Martins",
    linkedinAria: "Profil LinkedIn",
    githubAria: "Profil GitHub",
    cvAria: "TÃ©lÃ©charger CV",
  },
  footer: {
    copyright: "Â© 2026 DÃ©veloppÃ© par Yannick Martins",
  },
  common: {
    homeAria: "Yannick Martins â€” accueil",
    mainNav: "Navigation principale",
    mobileNav: "Navigation mobile",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    selectLanguage: "Changer de langue",
    languageMenu: "Menu des langues",
    coreActive: "NOYAU // ACTIF",
    viewProjectAria: "Voir le projet",
    avatarAlt: "Avatar stylisÃ© de Yannick Martins",
    externalLinkAria: "Ouvre dans un nouvel onglet",
  },
};

const zh: Translations = {
  site: {
    title: "Yannick Martins â€” è½¯ä»¶å¼€å‘è€…",
    description:
      "æˆ‘æž„å»º Web åº”ç”¨ã€AI è‡ªåŠ¨åŒ–ã€æ•°æ®åº“é©±åŠ¨ç³»ç»Ÿå’Œé¢å‘çœŸå®žé—®é¢˜çš„å®‰å…¨è§£å†³æ–¹æ¡ˆã€‚",
  },
  nav: {
    systems: "ç³»ç»Ÿ",
    modules: "æ¨¡å—",
    evolution: "æ¼”è¿›",
    missions: "é¡¹ç›®",
    contact: "è”ç³»",
  },
  hero: {
    role: "è½¯ä»¶å¼€å‘è€…",
    subtitle:
      "æˆ‘æž„å»º Web åº”ç”¨ã€AI è‡ªåŠ¨åŒ–ã€æ•°æ®åº“é©±åŠ¨ç³»ç»Ÿå’Œé¢å‘çœŸå®žé—®é¢˜çš„å®‰å…¨è§£å†³æ–¹æ¡ˆã€‚",
  },
  operatingMode: {
    title: "å·¥ä½œæ–¹å¼",
    textBefore:
      "æˆ‘ä»¥ä¸“æ³¨ã€å…‹åˆ¶å¹¶é¢å‘è½¯ä»¶å¼€å‘çš„æ–¹å¼å·¥ä½œï¼šå…ˆç†è§£éœ€æ±‚ã€é£Žé™©å’ŒçœŸå®žæµç¨‹ï¼Œå†è®¾è®¡æ•°æ®ã€APIã€å®‰å…¨å’Œäº¤ä»˜ã€‚ç›®æ ‡æ˜¯æž„å»ºæœ‰ç”¨ã€å®‰å…¨å¹¶å¯æŒç»­æ¼”è¿›çš„è½¯ä»¶ã€‚",
    highlight: "",
    textAfter: "",
    steps: [
      {
        title: "ç†è§£",
        description: "å¼„æ¸…é—®é¢˜ã€æµç¨‹å’ŒçœŸå®žé™åˆ¶ã€‚",
      },
      {
        title: "å»ºæ¨¡",
        description: "æ¸…æ™°ç»„ç»‡æ•°æ®ã€å®žä½“å’Œå…³ç³»ã€‚",
      },
      {
        title: "æž„å»º",
        description: "æŠŠç•Œé¢ã€é€»è¾‘å’ŒåŽç«¯åšæˆä¸€ä¸ªæ•´ä½“ã€‚",
      },
      {
        title: "éªŒè¯",
        description: "æµ‹è¯•çœŸå®žè¡Œä¸ºï¼Œè€Œä¸åªæ˜¯å¤–è§‚ã€‚",
      },
      {
        title: "ä¿æŠ¤",
        description: "è½å®žæ ¡éªŒã€è®¿é—®æŽ§åˆ¶å’Œå®‰å…¨ã€‚",
      },
      {
        title: "äº¤ä»˜",
        description: "å‘å¸ƒå¯ç”¨ã€èƒ½ç»§ç»­æ¼”è¿›çš„æˆæžœã€‚",
      },
    ],
  },
  modules: {
    title: "ç³»ç»Ÿæ¨¡å—",
    subtitle: "æˆ‘å°†æƒ³æ³•è½¬åŒ–ä¸ºçœŸå®žç³»ç»Ÿæ‰€ä½¿ç”¨çš„æŠ€æœ¯å±‚ã€‚",
    items: {
      interface: {
        title: "ç•Œé¢å±‚",
        items: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "å“åº”å¼ UI",
        ],
      },
      logic: {
        title: "é€»è¾‘å±‚",
        items: ["Node.js", "JavaScript", "PHP", "Python", "REST API"],
      },
      data: {
        title: "æ•°æ®å±‚",
        items: ["PostgreSQL", "MySQL", "Prisma", "å…³ç³»å»ºæ¨¡", "æ•°æ®è¿ç§»"],
      },
      infrastructure: {
        title: "åŸºç¡€è®¾æ–½å±‚",
        items: ["Docker", "AWS", "Vercel", "çŽ¯å¢ƒå˜é‡", "éƒ¨ç½²"],
      },
      security: {
        title: "å®‰å…¨å±‚",
        items: [
          "Linux",
          "ç½‘ç»œ",
          "OWASP",
          "Nmap / Burp Suite",
          "æŽˆæƒ Wi-Fi å®‰å…¨",
        ],
      },
      engineering: {
        title: "æŠ€æœ¯å±‚",
        items: ["éœ€æ±‚", "SysML / UML", "é£Žé™©ç®¡ç†", "V&V", "Lean / Agile"],
      },
    },
  },
  evolution: {
    title: "æ¼”è¿›è·¯å¾„",
    subtitle: "ä»¥çºªå¾‹ã€å®žè·µå’Œå¯¹çœŸå®žç³»ç»Ÿçš„ä¸“æ³¨æž„å»ºçš„æŠ€æœ¯æ¼”è¿›è·¯å¾„ã€‚",
    stageLabel: "é˜¶æ®µ",
    items: [
      {
        stage: "01",
        title: "åŸºç¡€",
        items: ["HTML", "CSS", "JavaScript", "ç¼–ç¨‹é€»è¾‘"],
      },
      {
        stage: "02",
        title: "æž„å»ºè€…",
        items: ["React", "Next.js", "å“åº”å¼ UI", "å¯å¤ç”¨ç»„ä»¶"],
      },
      {
        stage: "03",
        title: "ç³»ç»Ÿ",
        items: ["Node.js", "REST API", "èº«ä»½éªŒè¯", "åŽç«¯æž¶æž„"],
      },
      {
        stage: "04",
        title: "æ™ºèƒ½",
        items: ["AI", "è‡ªåŠ¨åŒ–", "æ™ºèƒ½ä½“", "LLM å·¥ä½œæµ"],
      },
      {
        stage: "05",
        title: "é˜²å¾¡",
        items: ["Linux", "ç½‘ç»œ", "OWASP", "Web å®‰å…¨"],
      },
      {
        stage: "06",
        title: "è¿è¥è€…",
        items: ["çœŸå®žäº§å“", "ç”Ÿäº§éƒ¨ç½²", "å•†ä¸šæ€ç»´", "å®¢æˆ·ä»·å€¼"],
      },
    ],
  },
  credentials: {
    title: "äº®ç‚¹ä¸Žèµ„åŽ†",
    subtitle: "ä»£ç ä¹‹å¤–çš„ç»åŽ†ã€å­¦ä¹ ä¸Žè®¤å¯ã€‚",
    items: {
      reinventa: {
        metaType: "HACKATHON",
        metaYear: "2026",
        title: "Re!venta Hackathon",
        description:
          "å…¥é€‰ Cabo Digital åœ¨ Mindelo ä¸¾åŠžçš„ Re!venta Hackathonã€‚å›¢é˜Ÿå¼€å‘äº†åº”ç”¨äºŽè½¦è¾†æ£€éªŒæµç¨‹çš„æ•°å­—æ–¹æ¡ˆã€‚",
        highlight: "ç¬¬å››å",
        imageAlt:
          "Cabo Digital åœ¨ Mindelo ä¸¾åŠžçš„ Re!venta Hackathon â€” å›¢é˜Ÿå‚ä¸Žè½¦è¾†æ£€éªŒç›¸å…³æ–¹æ¡ˆ",
      },
      payaig: {
        metaType: "FELLOWSHIP",
        metaYear: "2023",
        title: "Internet Governance Fellowship",
        description:
          "å®Œæˆ Pan-African Youth Ambassadors for Internet Governance çš„ Internet Governance Fellowshipï¼Œæ‰€å±žä¸ºè‘¡è„ç‰™è¯­ cohortã€‚",
        highlight: "Internet Governance",
        imageAlt:
          "PAYAIG æŽˆäºˆ Yannick Martins çš„ Internet Governance Fellowship è¯ä¹¦",
      },
    },
  },
  missions: {
    title: "å®žåœ°ä»»åŠ¡",
    subtitle: "å±•ç¤ºæˆ‘å¦‚ä½•å°†é—®é¢˜è½¬åŒ–ä¸ºæ•°å­—ç³»ç»Ÿçš„é¡¹ç›®ä¸Žæ¦‚å¿µã€‚",
    problemLabel: "é—®é¢˜",
    solutionLabel: "è§£å†³æ–¹æ¡ˆ",
    viewProject: "æŸ¥çœ‹é¡¹ç›®",
    showDetails: "è¯¦æƒ…",
    hideDetails: "æ”¶èµ·è¯¦æƒ…",
    caseStudy: "æ¡ˆä¾‹ç ”ç©¶",
    status: {
      live: "å·²ä¸Šçº¿",
      concept: "æ¦‚å¿µ / äº§å“æ„¿æ™¯",
      inProgress: "è¿›è¡Œä¸­",
      preDeploy: "é¢„éƒ¨ç½²",
      inDevelopment: "å¼€å‘ä¸­",
    },
    items: {
      "oficina-digital": {
        subtitle: "é¢å‘ Cabo Verde æ±½è½¦ç»´ä¿®åº—çš„ Web åº”ç”¨",
        description:
          "ä¸€ä¸ªå¸®åŠ©ç»´ä¿®åº—æŽ¥æ”¶çº¿ä¸Šè¯·æ±‚ï¼Œå¹¶åœ¨ç®€å•ä»ªè¡¨æ¿ä¸­ç®¡ç†æœåŠ¡ã€å®¢æˆ·ã€è½¦è¾†ã€æ—¥ç¨‹å’Œæ²Ÿé€šçš„å¹³å°ã€‚",
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
          participationTitle: "æˆ‘çš„å‚ä¸Ž",
          tapHint: "ç‚¹å‡»æŸ¥çœ‹è¯¦æƒ…",
          builtTitle: "æž„å»º",
          builtItems: [
            "å®Œæ•´ Web å¹³å°",
            "å…¬å¼€é¢„çº¦é¡µé¢",
            "ç»´ä¿®åº—ä»ªè¡¨æ¿",
            "å¹³å° Super Admin",
          ],
          featuresTitle: "åŠŸèƒ½",
          featuresItems: [
            "å¸¦ç…§ç‰‡çš„åœ¨çº¿è¯·æ±‚",
            "æœåŠ¡ã€å®¢æˆ·ä¸Žè½¦è¾†",
            "æ—¥ç¨‹ä¸Žå°é”æ—¥æœŸ",
            "é€šçŸ¥ã€é‚®ä»¶ä¸Žè¯„ä»·",
          ],
          stackTitle: "æŠ€æœ¯æ ˆ",
          stackSummary:
            "Next.js Â· TypeScript Â· React Â· Tailwind CSS Â· Prisma Â· PostgreSQL Â· Supabase Â· Vercel",
          chips: ["SaaS", "Admin", "Booking", "Email", "Storage", "i18n"],
        },
      },
      vektra: {
        subtitle: "æ™ºèƒ½å‡ºè¡Œå¹³å°",
        description:
          "èšç„¦ä¹˜å®¢ã€å¸æœºã€æ— éšœç¢ã€å®‰å…¨ä¸ŽåŸŽå¸‚æ•°æ®çš„æ•°å­—å‡ºè¡Œè§£å†³æ–¹æ¡ˆã€‚",
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
          participationTitle: "æˆ‘çš„å‚ä¸Ž",
          tapHint: "ç‚¹å‡»æŸ¥çœ‹è¯¦æƒ…",
          builtTitle: "æž„å»º",
          builtItems: ["VEKTRA AI", "VEKTRA Kids", "Liveness / äººè„¸éªŒè¯"],
          contributedTitle: "å‚ä¸Ž",
          contributedItems: ["VEKTRAGEO", "ä¹˜å®¢ã€å¸æœºä¸Ž PCD", "ç”Ÿæ€ç³»ç»ŸåŽç«¯"],
          stackTitle: "æŠ€æœ¯æ ˆ",
          stackSummary:
            "TypeScript Â· Node.js Â· React Native Â· Expo Â· Next.js Â· PostgreSQL Â· Redis Â· Mapbox Â· OSRM",
          chips: ["Guardian Routing", "Route Authority", "Liveness", "VektraGEO"],
        },
      },
      "linha-6": {
        subtitle: "æœºæž„æ•°å­—å¹³å°",
        description:
          "æœºæž„ç½‘ç«™ï¼Œé›†æˆç®¡ç†åŽå°å’Œ APIï¼Œç”¨äºŽç®¡ç†å’Œå‘å¸ƒå†…å®¹ã€æœåŠ¡ã€å›¢é˜Ÿã€åª’ä½“ä¸Žæ²Ÿé€šä¿¡æ¯ã€‚",
        stack: ["Next.js", "React", "Fastify", "PostgreSQL", "Supabase"],
        statusKey: "preDeploy",
        flip: {
          participationTitle: "èŒƒå›´",
          tapHint: "ç‚¹å‡»æŸ¥çœ‹è¯¦æƒ…",
          builtTitle: "æž¶æž„",
          builtItems: [
            "Next.js å…¬å…±ç½‘ç«™",
            "ç‹¬ç«‹çš„ Vite/React ç®¡ç†ç«¯",
            "Fastify API",
            "PostgreSQL/Supabase",
          ],
          contributedTitle: "ç®¡ç†",
          contributedItems: [
            "å†…å®¹",
            "æœåŠ¡ä¸Žé¢†åŸŸ",
            "å›¢é˜Ÿ",
            "åª’ä½“",
            "è”ç³»",
            "Newsletter",
            "æ¨ªå¹…",
            "ç«™ç‚¹è®¾ç½®",
            "æ³•å¾‹é¡µé¢",
          ],
          stackTitle: "æŠ€æœ¯",
          stackSummary:
            "Next.js Â· React Â· TypeScript Â· Fastify Â· PostgreSQL Â· Supabase Â· Vite",
          chips: [
            "èº«ä»½éªŒè¯",
            "RBAC",
            "ä¼šè¯",
            "CSRF",
            "æ ¡éªŒ",
            "è‰ç¨¿/å‘å¸ƒæµç¨‹",
            "è‡ªåŠ¨åŒ–æµ‹è¯•",
            "Docker",
          ],
        },
      },
      "b2b-platform": {
        subtitle: "é¢å‘æŠ•èµ„ä¸Žå•†åŠ¡ä¼šé¢çš„æ•°å­—ç”Ÿæ€",
        description:
          "æ—¨åœ¨æŠŠå‚ä¸Žè€…ã€æŠ•èµ„è€…ã€å±•å•†ã€ä¼šè®®å’Œå•†ä¸šæœºä¼šè¿žæŽ¥åœ¨åŒä¸€æ•°å­—ç”Ÿæ€ä¸­çš„å¹³å°ã€‚",
        stack: ["B2B å¸‚åœº", "ä¼šè®®", "QR / ç­¾åˆ°", "ç®¡ç† / BI", "Deal Room"],
        statusKey: "inDevelopment",
        flip: {
          participationTitle: "èŒƒå›´",
          tapHint: "ç‚¹å‡»æŸ¥çœ‹è¯¦æƒ…",
          builtTitle: "ç›®æ ‡",
          builtItems: [
            "å»ºç«‹ä¸€ä¸ªæ•°å­—ç”Ÿæ€ï¼Œæ‹‰è¿‘ä¼ä¸šã€æŠ•èµ„è€…ã€å±•å•†ä¸Žå•†ä¸šæœºä¼šã€‚",
          ],
          contributedTitle: "è®¡åˆ’æ¨¡å—",
          contributedItems: [
            "B2B å¸‚åœº",
            "å‚ä¸Žè€…ä¸ŽæŠ•èµ„è€…èµ„æ–™",
            "è®®ç¨‹ä¸Žä¼šè®®",
            "æœºä¼š",
            "QR / ç­¾åˆ°",
            "æŠ•èµ„è€…åœ°å›¾",
            "ç®¡ç†ä¸Ž BI",
            "pipeline / Deal Room",
            "åœ¨é¡¹ç›®æ”¯æŒæ—¶çš„æŽ¨èä¸ŽåŒ¹é…",
          ],
          stackTitle: "çŠ¶æ€",
          stackSummary: "è®¡åˆ’ä¸­çš„æ¨¡å—ä¸Žè§„åˆ’æž¶æž„ï¼Œæ­£åœ¨å¼€å‘ã€‚å¹¶éžå…¨éƒ¨å·²ç»å®Œæˆã€‚",
          chips: [],
        },
      },
    },
  },
  techniques: {
    title: "å¼€å‘åŽŸåˆ™",
    subtitle: "æˆ‘å¦‚ä½•åœ¨ç¼–å†™ä»£ç å‰ç»„ç»‡äº§å“ã€æ•°æ®å’Œå®‰å…¨é€»è¾‘ã€‚",
    items: [
      {
        title: "äº§å“å…ˆäºŽä»£ç ",
        description: "åœ¨é€‰æ‹©ç•Œé¢ã€API æˆ–æ•°æ®åº“ä¹‹å‰ï¼Œæˆ‘å…ˆç†è§£çœŸå®žçš„ç”¨æˆ·æµç¨‹ã€‚",
      },
      {
        title: "éœ€æ±‚å…ˆäºŽæ–¹æ¡ˆ",
        description: "åœ¨è¿›å…¥å®žçŽ°ä¹‹å‰ï¼Œæˆ‘å…ˆæ•´ç†éœ€æ±‚ã€é£Žé™©å’ŒéªŒè¯æ ‡å‡†ã€‚",
      },
      {
        title: "åŽç«¯ä½œä¸ºäº‹å®žæ¥æº",
        description: "çŠ¶æ€ã€æƒé™ã€è¯·æ±‚å’Œå…³é”®è§„åˆ™åº”åœ¨æœåŠ¡ç«¯è¿›è¡ŒéªŒè¯ã€‚",
      },
      {
        title: "æœ‰ç»„ç»‡çš„æ•°æ®",
        description: "æˆ‘è®¾è®¡å®žä½“ã€å…³ç³»ã€çŠ¶æ€å’ŒåŽ†å²è®°å½•ï¼Œè®©ç³»ç»Ÿèƒ½å¤Ÿå¢žé•¿è€Œä¸å˜æ··ä¹±ã€‚",
      },
      {
        title: "ä»Žä¸€å¼€å§‹è€ƒè™‘å®‰å…¨",
        description: "æˆ‘åœ¨äº¤ä»˜å‰å…³æ³¨èº«ä»½éªŒè¯ã€æƒé™ã€å®‰å…¨ payload å’ŒéªŒè¯æµç¨‹ã€‚",
      },
      {
        title: "å¢žé‡ä¸”å¯éªŒè¯çš„äº¤ä»˜",
        description: "æˆ‘å€¾å‘äºŽé€šè¿‡å°è€Œå¯æµ‹è¯•çš„æ­¥éª¤æ¼”è¿›ï¼Œå¹¶ä¸ŽçœŸå®žä»·å€¼å¯¹é½ã€‚",
      },
    ],
  },
  labNotes: technicalNotes.zh,
  contact: {
    title: "è®©æˆ‘ä»¬æž„å»ºæœ‰ç”¨çš„ä¸œè¥¿ã€‚",
    subtitle:
      "å¯æŽ¥å—è¿œç¨‹å·¥ä½œã€è‡ªç”±èŒä¸šé¡¹ç›®ï¼Œä»¥åŠ Web åº”ç”¨ã€AI è‡ªåŠ¨åŒ–å’Œå®‰å…¨æ•°å­—ç³»ç»Ÿæ–¹é¢çš„åˆä½œã€‚",
    emailMe: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
    downloadCv: "ä¸‹è½½ CV",
    emailAria: "ç»™ Yannick Martins å‘é€é‚®ä»¶",
    linkedinAria: "LinkedIn ä¸»é¡µ",
    githubAria: "GitHub ä¸»é¡µ",
    cvAria: "ä¸‹è½½ CV",
  },
  footer: {
    copyright: "Â© 2026 ç”± Yannick Martins å¼€å‘",
  },
  common: {
    homeAria: "Yannick Martins â€” é¦–é¡µ",
    mainNav: "ä¸»å¯¼èˆª",
    mobileNav: "ç§»åŠ¨ç«¯å¯¼èˆª",
    openMenu: "æ‰“å¼€èœå•",
    closeMenu: "å…³é—­èœå•",
    selectLanguage: "åˆ‡æ¢è¯­è¨€",
    languageMenu: "è¯­è¨€èœå•",
    coreActive: "æ ¸å¿ƒ // æ´»è·ƒ",
    viewProjectAria: "æŸ¥çœ‹é¡¹ç›®",
    avatarAlt: "Yannick Martins çš„é£Žæ ¼åŒ–å¤´åƒ",
    externalLinkAria: "åœ¨æ–°æ ‡ç­¾é¡µä¸­æ‰“å¼€",
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
    link: "https://oficinadigital-cv-saas25.vercel.app/login",
  },
  {
    id: "vektra",
    title: "VEKTRA",
  },
  {
    id: "linha-6",
    title: "Linha 6 Consultoria",
  },
  {
    id: "b2b-platform",
    title: "Plataforma Digital B2B",
  },
];

const cvPublicFile = "CV - Yannick Martins.pdf";

export const siteConfig = {
  name: "Yannick Martins",
  email: "yannickm637@gmail.com",
  linkedin: "https://www.linkedin.com/in/yannick-martins-3b3954314/",
  github: "https://github.com/Yannick463",
  cvPath: publicPath(`/${encodeURI(cvPublicFile)}`),
};

export const statusStyles: Record<
  keyof Translations["missions"]["status"],
  string
> = {
  live: "border-accent-green/40 bg-accent-green/10 text-accent-green",
  concept: "border-accent-blue/40 bg-accent-blue/10 text-accent-blue",
  inProgress: "border-accent-orange/40 bg-accent-orange/10 text-accent-orange",
  preDeploy: "border-accent-blue/40 bg-accent-blue/10 text-accent-blue",
  inDevelopment: "border-accent-orange/25 bg-bg-primary/50 text-accent-orange/80",
};
