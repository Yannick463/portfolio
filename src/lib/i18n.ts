import type { CredentialHighlightId } from "@/lib/credentials";
import { publicPath } from "@/lib/public-path";
import { technicalNotes, type TechnicalNotesCopy } from "@/lib/technical-notes";
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
    title: "Yannick Martins — Software Developer",
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
          "Re!venta Hackathon by Cabo Digital in Mindelo — team participation in vehicle inspection software",
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
            "Next.js · React · TypeScript · Fastify · PostgreSQL · Supabase · Vite",
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
    title: "Yannick Martins — Desenvolvedor de Software",
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
    role: "Desenvolvedor de Software",
    subtitle:
      "Construo aplicações web, automações com IA, sistemas orientados por bases de dados e soluções seguras para problemas reais.",
  },
  operatingMode: {
    title: "Modo de Operação",
    textBefore:
      "Trabalho de forma reservada, focada e orientada ao desenvolvimento de software: começo pelos requisitos, risco e fluxo real; depois modelo dados, APIs, segurança e entrega. O objetivo é criar software útil, seguro e preparado para evoluir.",
    highlight: "",
    textAfter: "",
    steps: [
      {
        title: "Compreender",
        description: "Entender o problema, o fluxo e os limites reais.",
      },
      {
        title: "Modelar",
        description: "Organizar dados, entidades e relações com clareza.",
      },
      {
        title: "Construir",
        description: "Implementar interface, lógica e backend de forma integrada.",
      },
      {
        title: "Validar",
        description: "Testar comportamento real, não apenas aparência.",
      },
      {
        title: "Proteger",
        description: "Aplicar validação, controlo de acesso e segurança.",
      },
      {
        title: "Entregar",
        description: "Publicar algo funcional e preparado para evoluir.",
      },
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
        title: "Camada Técnica",
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
  credentials: {
    title: "Destaques & Credenciais",
    subtitle:
      "Experiências, formação e reconhecimento para além do código.",
    items: {
      reinventa: {
        metaType: "HACKATHON",
        metaYear: "2026",
        title: "Re!venta Hackathon",
        description:
          "Selecionado para o Re!venta Hackathon, realizado no Mindelo pela Cabo Digital. A equipa desenvolveu uma solução digital aplicada ao processo de inspeção veicular.",
        highlight: "4.º lugar",
        imageAlt:
          "Re!venta Hackathon da Cabo Digital no Mindelo — participação em equipa numa solução de inspeção veicular",
      },
      payaig: {
        metaType: "FELLOWSHIP",
        metaYear: "2023",
        title: "Internet Governance Fellowship",
        description:
          "Conclusão da Internet Governance Fellowship da Pan-African Youth Ambassadors for Internet Governance, na coorte de língua portuguesa.",
        highlight: "Internet Governance",
        imageAlt:
          "Certificado da Internet Governance Fellowship atribuído a Yannick Martins pelo PAYAIG",
      },
    },
  },
  missions: {
    title: "Missões de Campo",
    subtitle:
      "Projetos e conceitos que mostram como transformo problemas em sistemas reais.",
    problemLabel: "Problema",
    solutionLabel: "Solução",
    viewProject: "Ver projeto",
    showDetails: "Detalhes",
    hideDetails: "Ocultar detalhes",
    caseStudy: "Estudo de caso",
    status: {
      live: "Em produção",
      concept: "Conceito / Visão de produto",
      inProgress: "Em progresso",
      preDeploy: "Pré-deploy",
      inDevelopment: "Em desenvolvimento",
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
      "linha-6": {
        subtitle: "Plataforma digital institucional",
        description:
          "Website institucional integrado a um painel administrativo e API para gestão e publicação de conteúdos, serviços, equipa, media e comunicação.",
        stack: ["Next.js", "React", "Fastify", "PostgreSQL", "Supabase"],
        statusKey: "preDeploy",
        flip: {
          participationTitle: "Escopo",
          tapHint: "Toque para ver detalhes",
          builtTitle: "Arquitetura",
          builtItems: [
            "Website público em Next.js",
            "Admin separado em Vite/React",
            "API Fastify",
            "PostgreSQL/Supabase",
          ],
          contributedTitle: "Gestão",
          contributedItems: [
            "Conteúdos",
            "Serviços e áreas",
            "Equipa",
            "Media",
            "Contactos",
            "Newsletter",
            "Banners",
            "Definições do site",
            "Páginas legais",
          ],
          stackTitle: "Técnica",
          stackSummary:
            "Next.js · React · TypeScript · Fastify · PostgreSQL · Supabase · Vite",
          chips: [
            "autenticação",
            "RBAC",
            "sessão",
            "CSRF",
            "validação",
            "fluxo rascunho/publicação",
            "testes automatizados",
            "Docker",
          ],
        },
      },
      "b2b-platform": {
        subtitle: "Ecossistema digital para investimento e encontros empresariais",
        description:
          "Plataforma concebida para ligar participantes, investidores, expositores, reuniões e oportunidades de negócio num único ecossistema digital.",
        stack: ["Marketplace B2B", "Reuniões", "QR / Check-in", "Admin / BI", "Deal Room"],
        statusKey: "inDevelopment",
        flip: {
          participationTitle: "Escopo",
          tapHint: "Toque para ver detalhes",
          builtTitle: "Objetivo",
          builtItems: [
            "Criar um ecossistema digital para aproximar empresas, investidores, expositores e oportunidades de negócio.",
          ],
          contributedTitle: "Módulos previstos",
          contributedItems: [
            "marketplace B2B",
            "perfis de participantes e investidores",
            "agenda e reuniões",
            "oportunidades",
            "QR / check-in",
            "mapa de investidores",
            "administração e BI",
            "pipeline / Deal Room",
            "recomendação e matching, quando suportado pelo projeto",
          ],
          stackTitle: "Estado",
          stackSummary:
            "Módulos previstos e arquitetura planeada, em desenvolvimento. Nem todos estão concluídos.",
          chips: [],
        },
      },
    },
  },
  techniques: {
    title: "Princípios de Desenvolvimento",
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
  labNotes: technicalNotes.pt,
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
    title: "Yannick Martins — Développeur logiciel",
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
    role: "Développeur logiciel",
    subtitle:
      "Je construis des applications web, des automatisations avec IA, des systèmes orientés données et des solutions sécurisées pour des problèmes réels.",
  },
  operatingMode: {
    title: "Mode opératoire",
    textBefore:
      "Je travaille de manière réservée, concentrée et orientée vers le développement logiciel : je commence par les exigences, les risques et le flux réel ; puis je modélise les données, les APIs, la sécurité et la livraison. L'objectif est de construire des logiciels utiles, sûrs et capables d'évoluer.",
    highlight: "",
    textAfter: "",
    steps: [
      {
        title: "Comprendre",
        description: "Saisir le problème, le flux et les limites réelles.",
      },
      {
        title: "Modéliser",
        description: "Organiser les données, les entités et les relations avec clarté.",
      },
      {
        title: "Construire",
        description: "Implémenter l'interface, la logique et le backend de façon intégrée.",
      },
      {
        title: "Valider",
        description: "Tester le comportement réel, pas seulement l'apparence.",
      },
      {
        title: "Protéger",
        description: "Appliquer la validation, le contrôle d'accès et la sécurité.",
      },
      {
        title: "Livrer",
        description: "Publier quelque chose de fonctionnel et prêt à évoluer.",
      },
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
  credentials: {
    title: "Temps forts & qualifications",
    subtitle:
      "Expériences, formation et reconnaissance au-delà du code.",
    items: {
      reinventa: {
        metaType: "HACKATHON",
        metaYear: "2026",
        title: "Re!venta Hackathon",
        description:
          "Sélectionné pour le Re!venta Hackathon à Mindelo, organisé par Cabo Digital. L'équipe a développé une solution numérique appliquée au processus d'inspection véhiculaire.",
        highlight: "4e place",
        imageAlt:
          "Re!venta Hackathon de Cabo Digital à Mindelo — participation en équipe sur l'inspection véhiculaire",
      },
      payaig: {
        metaType: "FELLOWSHIP",
        metaYear: "2023",
        title: "Internet Governance Fellowship",
        description:
          "Achèvement de l'Internet Governance Fellowship auprès de Pan-African Youth Ambassadors for Internet Governance, dans la cohorte de langue portugaise.",
        highlight: "Internet Governance",
        imageAlt:
          "Certificat de l'Internet Governance Fellowship décerné à Yannick Martins par le PAYAIG",
      },
    },
  },
  missions: {
    title: "Missions de Terrain",
    subtitle:
      "Projets et concepts qui montrent comment je transforme des problèmes en systèmes réels.",
    problemLabel: "Problème",
    solutionLabel: "Solution",
    viewProject: "Voir le projet",
    showDetails: "Détails",
    hideDetails: "Masquer les détails",
    caseStudy: "Étude de cas",
    status: {
      live: "En production",
      concept: "Concept / Vision produit",
      inProgress: "En cours",
      preDeploy: "Pré-déploiement",
      inDevelopment: "En développement",
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
      "linha-6": {
        subtitle: "Plateforme digitale institutionnelle",
        description:
          "Site institutionnel intégré à un panneau d'administration et à une API pour gérer et publier contenus, services, équipe, médias et communication.",
        stack: ["Next.js", "React", "Fastify", "PostgreSQL", "Supabase"],
        statusKey: "preDeploy",
        flip: {
          participationTitle: "Périmètre",
          tapHint: "Appuyer pour les détails",
          builtTitle: "Architecture",
          builtItems: [
            "Site public en Next.js",
            "Admin séparé en Vite/React",
            "API Fastify",
            "PostgreSQL/Supabase",
          ],
          contributedTitle: "Gestion",
          contributedItems: [
            "Contenus",
            "Services et domaines",
            "Équipe",
            "Médias",
            "Contacts",
            "Newsletter",
            "Bannières",
            "Paramètres du site",
            "Pages légales",
          ],
          stackTitle: "Technique",
          stackSummary:
            "Next.js · React · TypeScript · Fastify · PostgreSQL · Supabase · Vite",
          chips: [
            "authentification",
            "RBAC",
            "session",
            "CSRF",
            "validation",
            "flux brouillon/publication",
            "tests automatisés",
            "Docker",
          ],
        },
      },
      "b2b-platform": {
        subtitle: "Écosystème digital pour l'investissement et les rencontres d'affaires",
        description:
          "Plateforme conçue pour relier participants, investisseurs, exposants, réunions et opportunités d'affaires dans un seul écosystème digital.",
        stack: ["Marketplace B2B", "Réunions", "QR / Check-in", "Admin / BI", "Deal Room"],
        statusKey: "inDevelopment",
        flip: {
          participationTitle: "Périmètre",
          tapHint: "Appuyer pour les détails",
          builtTitle: "Objectif",
          builtItems: [
            "Créer un écosystème digital pour rapprocher entreprises, investisseurs, exposants et opportunités d'affaires.",
          ],
          contributedTitle: "Modules prévus",
          contributedItems: [
            "marketplace B2B",
            "profils de participants et d'investisseurs",
            "agenda et réunions",
            "opportunités",
            "QR / check-in",
            "carte des investisseurs",
            "administration et BI",
            "pipeline / Deal Room",
            "recommandation et matching, lorsque le projet le prévoit",
          ],
          stackTitle: "État",
          stackSummary:
            "Modules prévus et architecture planifiée, en développement. Tous ne sont pas terminés.",
          chips: [],
        },
      },
    },
  },
  techniques: {
    title: "Principes de développement",
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
  labNotes: technicalNotes.fr,
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
    title: "Yannick Martins — 软件开发者",
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
    role: "软件开发者",
    subtitle:
      "我构建 Web 应用、AI 自动化、数据库驱动系统和面向真实问题的安全解决方案。",
  },
  operatingMode: {
    title: "工作方式",
    textBefore:
      "我以专注、克制并面向软件开发的方式工作：先理解需求、风险和真实流程，再设计数据、API、安全和交付。目标是构建有用、安全并可持续演进的软件。",
    highlight: "",
    textAfter: "",
    steps: [
      {
        title: "理解",
        description: "弄清问题、流程和真实限制。",
      },
      {
        title: "建模",
        description: "清晰组织数据、实体和关系。",
      },
      {
        title: "构建",
        description: "把界面、逻辑和后端做成一个整体。",
      },
      {
        title: "验证",
        description: "测试真实行为，而不只是外观。",
      },
      {
        title: "保护",
        description: "落实校验、访问控制和安全。",
      },
      {
        title: "交付",
        description: "发布可用、能继续演进的成果。",
      },
    ],
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
        title: "技术层",
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
  credentials: {
    title: "亮点与资历",
    subtitle: "代码之外的经历、学习与认可。",
    items: {
      reinventa: {
        metaType: "HACKATHON",
        metaYear: "2026",
        title: "Re!venta Hackathon",
        description:
          "入选 Cabo Digital 在 Mindelo 举办的 Re!venta Hackathon。团队开发了应用于车辆检验流程的数字方案。",
        highlight: "第四名",
        imageAlt:
          "Cabo Digital 在 Mindelo 举办的 Re!venta Hackathon — 团队参与车辆检验相关方案",
      },
      payaig: {
        metaType: "FELLOWSHIP",
        metaYear: "2023",
        title: "Internet Governance Fellowship",
        description:
          "完成 Pan-African Youth Ambassadors for Internet Governance 的 Internet Governance Fellowship，所属为葡萄牙语 cohort。",
        highlight: "Internet Governance",
        imageAlt:
          "PAYAIG 授予 Yannick Martins 的 Internet Governance Fellowship 证书",
      },
    },
  },
  missions: {
    title: "实地任务",
    subtitle: "展示我如何将问题转化为数字系统的项目与概念。",
    problemLabel: "问题",
    solutionLabel: "解决方案",
    viewProject: "查看项目",
    showDetails: "详情",
    hideDetails: "收起详情",
    caseStudy: "案例研究",
    status: {
      live: "已上线",
      concept: "概念 / 产品愿景",
      inProgress: "进行中",
      preDeploy: "预部署",
      inDevelopment: "开发中",
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
      "linha-6": {
        subtitle: "机构数字平台",
        description:
          "机构网站，集成管理后台和 API，用于管理和发布内容、服务、团队、媒体与沟通信息。",
        stack: ["Next.js", "React", "Fastify", "PostgreSQL", "Supabase"],
        statusKey: "preDeploy",
        flip: {
          participationTitle: "范围",
          tapHint: "点击查看详情",
          builtTitle: "架构",
          builtItems: [
            "Next.js 公共网站",
            "独立的 Vite/React 管理端",
            "Fastify API",
            "PostgreSQL/Supabase",
          ],
          contributedTitle: "管理",
          contributedItems: [
            "内容",
            "服务与领域",
            "团队",
            "媒体",
            "联系",
            "Newsletter",
            "横幅",
            "站点设置",
            "法律页面",
          ],
          stackTitle: "技术",
          stackSummary:
            "Next.js · React · TypeScript · Fastify · PostgreSQL · Supabase · Vite",
          chips: [
            "身份验证",
            "RBAC",
            "会话",
            "CSRF",
            "校验",
            "草稿/发布流程",
            "自动化测试",
            "Docker",
          ],
        },
      },
      "b2b-platform": {
        subtitle: "面向投资与商务会面的数字生态",
        description:
          "旨在把参与者、投资者、展商、会议和商业机会连接在同一数字生态中的平台。",
        stack: ["B2B 市场", "会议", "QR / 签到", "管理 / BI", "Deal Room"],
        statusKey: "inDevelopment",
        flip: {
          participationTitle: "范围",
          tapHint: "点击查看详情",
          builtTitle: "目标",
          builtItems: [
            "建立一个数字生态，拉近企业、投资者、展商与商业机会。",
          ],
          contributedTitle: "计划模块",
          contributedItems: [
            "B2B 市场",
            "参与者与投资者资料",
            "议程与会议",
            "机会",
            "QR / 签到",
            "投资者地图",
            "管理与 BI",
            "pipeline / Deal Room",
            "在项目支持时的推荐与匹配",
          ],
          stackTitle: "状态",
          stackSummary: "计划中的模块与规划架构，正在开发。并非全部已经完成。",
          chips: [],
        },
      },
    },
  },
  techniques: {
    title: "开发原则",
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
  labNotes: technicalNotes.zh,
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
