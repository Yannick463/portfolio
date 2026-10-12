import type { Locale } from "@/lib/i18n";

export const technicalNoteSlugs = [
  "oficina-digital",
  "consult",
  "b2b",
  "vektra",
] as const;

export type TechnicalNoteSlug = (typeof technicalNoteSlugs)[number];

export type TechnicalNoteSection = {
  index: string;
  title: string;
  paragraphs: string[];
  flow?: {
    nodes: string[];
    caption?: string;
  };
  groups?: {
    title: string;
    items: string[];
  }[];
  phases?: string[];
  decision?: string;
  callout?: string;
  points?: string[];
};

export type TechnicalNoteMedia = {
  src?: string;
  alt?: string;
  position?: string;
};

export type TechnicalNote = {
  slug: TechnicalNoteSlug;
  title: string;
  category: string;
  lead: string;
  media?: TechnicalNoteMedia;
  sections: TechnicalNoteSection[];
};

export type BrandNoteSlug = "oficina-digital" | "consult" | "vektra";

export type NoteLogo = {
  src: string;
  width: number;
  height: number;
};

export type BrandCompact = {
  maxWidth: number;
  maxHeight: number;
};

export type BrandMedia = {
  width: string;
  maxHeight: number;
  mobileMaxWidth: number;
};

export type BrandVisual = {
  compact: BrandCompact;
  media: BrandMedia;
};

export type NoteIdentity =
  | {
      displayName: string;
      allowBrandMedia: true;
      logo: NoteLogo;
      visual: BrandVisual;
    }
  | {
      displayName: string;
      allowBrandMedia: false;
    };

export const noteIdentity: Record<TechnicalNoteSlug, NoteIdentity> = {
  "oficina-digital": {
    displayName: "Oficina Digital",
    allowBrandMedia: true,
    logo: { src: "/oficina.png", width: 677, height: 369 },
    visual: {
      compact: { maxWidth: 48, maxHeight: 26 },
      media: {
        width: "clamp(320px, 30vw, 430px)",
        maxHeight: 240,
        mobileMaxWidth: 300,
      },
    },
  },
  consult: {
    displayName: "Linha 6 Consultoria",
    allowBrandMedia: true,
    logo: { src: "/logo.png", width: 535, height: 466 },
    visual: {
      compact: { maxWidth: 44, maxHeight: 30 },
      media: {
        width: "clamp(220px, 20vw, 290px)",
        maxHeight: 260,
        mobileMaxWidth: 220,
      },
    },
  },
  b2b: {
    displayName: "B2B",
    allowBrandMedia: false,
  },
  vektra: {
    displayName: "Vektra Mobilidade Inteligente",
    allowBrandMedia: true,
    logo: { src: "/vektra.png", width: 500, height: 500 },
    visual: {
      compact: { maxWidth: 32, maxHeight: 32 },
      media: {
        width: "clamp(210px, 18vw, 260px)",
        maxHeight: 260,
        mobileMaxWidth: 190,
      },
    },
  },
};

export type TechnicalNotesCopy = {
  title: string;
  subtitle: string;
  back: string;
  returnLabel: string;
  readNote: string;
  mediaPlaceholder: string;
  reservedIdentity: string;
  logoAlt: Record<BrandNoteSlug, string>;
  items: TechnicalNote[];
};

export function isTechnicalNoteSlug(value: string): value is TechnicalNoteSlug {
  return technicalNoteSlugs.includes(value as TechnicalNoteSlug);
}

const pt: TechnicalNotesCopy = {
  title: "Notas Técnicas",
  subtitle:
    "Decisões de arquitetura, integração e produto extraídas de projetos reais.",
  back: "Notas Técnicas",
  returnLabel: "Voltar às Notas Técnicas",
  readNote: "Ler nota",
  mediaPlaceholder: "Imagem do projeto",
  reservedIdentity: "Identidade reservada",
  logoAlt: {
    "oficina-digital": "Logótipo da Oficina Digital",
    consult: "Logótipo da Linha 6 Consultoria",
    vektra: "Logótipo da Vektra Mobilidade Inteligente",
  },
  items: [
    {
      slug: "oficina-digital",
      title: "Como desenhei o fluxo de marcação online da Oficina Digital",
      category: "Produto · Aplicação Web",
      lead: "A marcação pública tinha de chegar à oficina já organizada: pedido, fotos, veículo e uma data que a agenda ainda pudesse aceitar.",
      media: {},
      sections: [
        {
          index: "01",
          title: "O problema",
          paragraphs: [
            "Uma oficina não opera só com um formulário solto. O pedido online precisava trazer o serviço, o cliente, o veículo e as fotos, e a agenda precisava poder recusar datas que a oficina já tinha bloqueado.",
          ],
        },
        {
          index: "02",
          title: "A decisão",
          paragraphs: [
            "A página pública de marcação e o painel da oficina são superfícies diferentes do mesmo pedido. O cliente submete. A oficina organiza. O super admin da plataforma fica separado da operação de cada oficina.",
          ],
        },
        {
          index: "03",
          title: "Como foi estruturado",
          paragraphs: [
            "O pedido não é reescrito à mão para passar do site público para a operação.",
          ],
          flow: {
            nodes: [
              "Página pública",
              "Pedido com fotos",
              "Painel da oficina",
              "Agenda e datas bloqueadas",
            ],
            caption:
              "Notificações, e-mails e avaliações acompanham o pedido. Não são um canal paralelo onde o mesmo pedido volta a ser copiado.",
          },
        },
        {
          index: "04",
          title: "O que isso resolveu",
          paragraphs: [
            "O pedido entra estruturado. Serviços, clientes, veículos e agenda ficam no mesmo sistema, em vez de serem transferidos entre mensagens e o painel.",
          ],
        },
        {
          index: "05",
          title: "O que aprendi",
          paragraphs: [],
          points: [
            "O fluxo público e o painel são estados diferentes do mesmo pedido.",
            "Uma data bloqueada tem de existir antes de a marcação prometer um horário.",
            "Fotos fazem parte do pedido, não de um anexo posterior.",
            "O admin da plataforma não é o painel de uma oficina.",
          ],
        },
      ],
    },
    {
      slug: "consult",
      title: "Como liguei Admin, API e Website num CMS real",
      category: "CMS · Integração",
      lead: "O desafio não era criar apenas um painel administrativo. Era garantir que uma alteração feita pelo cliente percorresse todo o sistema e chegasse ao website publicado sem editar código manualmente.",
      media: {},
      sections: [
        {
          index: "01",
          title: "O problema",
          paragraphs: [
            "O sistema foi desenvolvido para um cliente, a Linha 6 Consultoria.",
            "O website e o painel administrativo precisavam funcionar como um único sistema editorial. Um formulário que apenas guarda dados não resolve esse problema. Era necessário controlar rascunho, pré-visualização, publicação, persistência, API pública e atualização do website.",
          ],
        },
        {
          index: "02",
          title: "A arquitetura",
          paragraphs: [],
          flow: {
            nodes: [
              "Admin",
              "Fastify API",
              "Supabase",
              "Public API",
              "Next.js",
              "Website",
            ],
            caption:
              "A API fica entre o painel e a persistência. O website consome apenas o conteúdo publicado, enquanto o Admin trabalha com estados editoriais e permissões próprias.",
          },
        },
        {
          index: "03",
          title: "O fluxo editorial",
          paragraphs: [
            "Separar draft e published evita que uma alteração incompleta apareça publicamente. Depois da publicação, o backend dispara a revalidação do conteúdo consumido pelo Next.js.",
          ],
          flow: {
            nodes: [
              "Editar",
              "Guardar rascunho",
              "Preview",
              "Publicar",
              "Revalidar",
              "Website atualizado",
            ],
          },
        },
        {
          index: "04",
          title: "O problema da fonte de verdade",
          paragraphs: [
            "Uma das partes mais delicadas foi identificar conteúdo que ainda podia vir de fallbacks, constantes ou código hardcoded. Ter um CMS não significa ter uma fonte única de verdade se o frontend ainda puder substituir silenciosamente aquilo que foi publicado.",
          ],
          decision:
            "Tornar explícito o que pertence ao CMS, o que é calculado e o que é apenas interface.",
        },
        {
          index: "05",
          title: "O que retirei deste trabalho",
          paragraphs: [],
          points: [
            "CMS não é apenas CRUD.",
            "Draft e published são estados diferentes.",
            "Cache e publicação precisam ser coordenados.",
            "Integração só está concluída quando a alteração chega ao DOM do website.",
          ],
        },
      ],
    },
    {
      slug: "b2b",
      title: "Como transformei um TDR complexo numa arquitetura modular",
      category: "Arquitetura · Produto B2B",
      lead: "Num produto B2B grande, começar pelos componentes seria o caminho mais rápido para criar inconsistências. O primeiro trabalho foi decompor requisitos, atores, fluxos e domínios antes de transformar o documento em software.",
      media: {},
      sections: [
        {
          index: "01",
          title: "O desafio",
          paragraphs: [
            "Colaboro neste projeto em regime freelance, num produto destinado à Cabo Verde TradeInvest. O que se segue descreve o escopo, não módulos concluídos.",
            "O escopo reúne participantes, empresas, investidores, expositores, reuniões, agenda, marketplace, recomendações, check-in, administração, analytics e acompanhamento pós-evento. O desafio é impedir que dezenas de funcionalidades se transformem numa aplicação monolítica e difícil de evoluir.",
          ],
        },
        {
          index: "02",
          title: "Da documentação para o sistema",
          paragraphs: [],
          flow: {
            nodes: [
              "TDR",
              "Requisitos",
              "Fluxos de negócio",
              "Domínios",
              "Arquitetura",
              "Protótipo",
              "Backlog",
              "Implementação incremental",
            ],
            caption:
              "O documento deixa de ser apenas uma lista de funcionalidades quando cada requisito ganha ator, regra de negócio, estado, dependência e fronteira de domínio.",
          },
        },
        {
          index: "03",
          title: "Decomposição do produto",
          paragraphs: [
            "Estes grupos organizam o escopo. Não descrevem módulos concluídos.",
          ],
          groups: [
            { title: "Identidade", items: ["Utilizadores", "Organizações", "Perfis"] },
            { title: "Descoberta", items: ["Marketplace", "Pesquisa", "Matching"] },
            {
              title: "Interação",
              items: ["Reuniões", "Agenda", "Notificações", "Check-in"],
            },
            { title: "Operação", items: ["Admin", "BI", "Auditoria"] },
            {
              title: "Continuidade",
              items: ["Oportunidades", "Pipeline", "Deal Room"],
            },
          ],
        },
        {
          index: "04",
          title: "Por que trabalhar por fases",
          paragraphs: [
            "Num produto com este número de dependências, desenvolver tudo em paralelo aumenta o risco de contratos inconsistentes e retrabalho. A abordagem incremental permite validar fluxos, regras e interfaces antes de expandir para módulos mais dependentes.",
          ],
          phases: [
            "Requisitos",
            "Protótipo",
            "Backend e dados",
            "Frontend e Admin",
            "Integrações",
            "Testes",
            "Produção",
          ],
        },
        {
          index: "05",
          title: "O que retirei deste trabalho",
          paragraphs: [],
          points: [
            "Um requisito precisa virar regra testável.",
            "Domínios claros reduzem acoplamento.",
            "Arquitetura deve acompanhar o fluxo de negócio.",
            "Documentação boa reduz decisões implícitas durante o desenvolvimento.",
          ],
        },
      ],
    },
    {
      slug: "vektra",
      title: "Como levei rota, risco e pricing para o backend",
      category: "Backend · Routing",
      lead: "Em fluxos críticos de mobilidade, o frontend não deve decidir sozinho qual rota usar, quanto cobrar ou como interpretar risco. Essas decisões precisam de uma fonte controlada, auditável e consistente.",
      media: {},
      sections: [
        {
          index: "01",
          title: "O problema",
          paragraphs: [
            "Quando lógica crítica fica espalhada entre mobile, serviços geográficos e backend, duas telas podem chegar a decisões diferentes para a mesma corrida. Além da inconsistência, isso dificulta auditoria e aumenta a superfície para manipulação.",
          ],
        },
        {
          index: "02",
          title: "Backend como fonte de verdade",
          paragraphs: [
            "O mobile solicita e apresenta. A decisão de rota, o contexto de risco e a governação de pricing ficam no servidor.",
          ],
          flow: {
            nodes: [
              "Mobile",
              "Backend",
              "Route Authority",
              "VEKTRA-GEO / Provider",
              "Guardian Routing",
              "Route Candidates",
              "Pricing",
              "Resposta pública",
            ],
          },
        },
        {
          index: "03",
          title: "Route Authority",
          paragraphs: [
            "A camada de Route Authority centraliza a obtenção da rota oficial e o contexto usado pelo restante fluxo.",
          ],
          flow: {
            nodes: [
              "Origem/destino",
              "Distância",
              "Duração",
              "Polyline",
              "Route hash",
              "Route context",
            ],
          },
        },
        {
          index: "04",
          title: "Guardian e rotas candidatas",
          paragraphs: [
            "A rota pode ser analisada por risco e contexto territorial antes de ser apresentada ao utilizador.",
          ],
          flow: {
            nodes: ["FASTEST", "SAFEST", "BALANCED", "SINGLE_FALLBACK"],
          },
          callout:
            "Neste contexto, Guardian combina regras, scoring, dados geográficos e decisões operacionais. Não é apresentado aqui como um modelo de machine learning.",
        },
        {
          index: "05",
          title: "Segurança e auditoria",
          paragraphs: [
            "O que este fluxo precisa de controlar fica limitado a cinco pontos: quem é dono da corrida, o snapshot da decisão, a serialização da resposta, o que não segue para o mobile, e o rasto de rota e pricing.",
          ],
          points: [
            "Ownership de corridas.",
            "Snapshots de decisões.",
            "Serialização controlada.",
            "Dados internos não expostos ao mobile.",
            "Auditoria de rota e pricing.",
          ],
        },
        {
          index: "06",
          title: "O que retirei deste trabalho",
          paragraphs: [],
          points: [
            "Decisão crítica deve ter uma fonte de verdade.",
            "Frontend deve apresentar estado, não governar regras sensíveis.",
            "Explicabilidade ajuda operação e debugging.",
            "Auditoria precisa nascer junto com a regra, não depois dela.",
          ],
        },
      ],
    },
  ],
};

const en: TechnicalNotesCopy = {
  title: "Technical Notes",
  subtitle:
    "Architecture, integration and product decisions taken from real projects.",
  back: "Technical Notes",
  returnLabel: "Back to Technical Notes",
  readNote: "Read note",
  mediaPlaceholder: "Project image",
  reservedIdentity: "Reserved identity",
  logoAlt: {
    "oficina-digital": "Logo of Oficina Digital",
    consult: "Logo of Linha 6 Consultoria",
    vektra: "Logo of Vektra Mobilidade Inteligente",
  },
  items: [
    {
      slug: "oficina-digital",
      title: "How I designed the online booking flow for Oficina Digital",
      category: "Product · Web Application",
      lead: "A public booking had to reach the workshop already organized: the request, the photos, the vehicle, and a date the schedule could still accept.",
      media: {},
      sections: [
        {
          index: "01",
          title: "The problem",
          paragraphs: [
            "A workshop does not run on a loose form. The online request had to carry the service, the client, the vehicle and the photos, and the schedule had to be able to refuse dates the workshop had already blocked.",
          ],
        },
        {
          index: "02",
          title: "The decision",
          paragraphs: [
            "The public booking page and the workshop panel are different surfaces of the same request. The client submits. The workshop organizes. The platform super admin stays separate from each workshop's operation.",
          ],
        },
        {
          index: "03",
          title: "How it was structured",
          paragraphs: [
            "The request is not rewritten by hand to move from the public site into operations.",
          ],
          flow: {
            nodes: [
              "Public page",
              "Request with photos",
              "Workshop panel",
              "Schedule and blocked dates",
            ],
            caption:
              "Notifications, emails and reviews follow the request. They are not a parallel channel where the same request is copied again.",
          },
        },
        {
          index: "04",
          title: "What this solved",
          paragraphs: [
            "The request arrives structured. Services, clients, vehicles and the schedule live in the same system, instead of being moved between messages and the panel.",
          ],
        },
        {
          index: "05",
          title: "What I took from this work",
          paragraphs: [],
          points: [
            "The public flow and the panel are different states of the same request.",
            "A blocked date has to exist before booking can promise a time.",
            "Photos are part of the request, not a later attachment.",
            "The platform admin is not a workshop panel.",
          ],
        },
      ],
    },
    {
      slug: "consult",
      title: "How I connected Admin, API and Website into a real CMS",
      category: "CMS · Integration",
      lead: "The challenge was not only to build an admin panel. It was to make sure a change made by the client traveled through the whole system and reached the published website without a manual code edit.",
      media: {},
      sections: [
        {
          index: "01",
          title: "The problem",
          paragraphs: [
            "The system was built for a client, Linha 6 Consultoria.",
            "The website and the admin panel had to work as one editorial system. A form that only stores data does not solve that. Draft, preview, publishing, persistence, a public API and the website update all had to be controlled.",
          ],
        },
        {
          index: "02",
          title: "The architecture",
          paragraphs: [],
          flow: {
            nodes: [
              "Admin",
              "Fastify API",
              "Supabase",
              "Public API",
              "Next.js",
              "Website",
            ],
            caption:
              "The API sits between the panel and persistence. The website consumes only published content, while Admin works with editorial states and its own permissions.",
          },
        },
        {
          index: "03",
          title: "The editorial flow",
          paragraphs: [
            "Separating draft and published keeps an unfinished change off the public site. After publishing, the backend triggers revalidation of the content Next.js consumes.",
          ],
          flow: {
            nodes: [
              "Edit",
              "Save draft",
              "Preview",
              "Publish",
              "Revalidate",
              "Website updated",
            ],
          },
        },
        {
          index: "04",
          title: "The source-of-truth problem",
          paragraphs: [
            "One of the delicate parts was finding content that could still come from fallbacks, constants or hardcoded code. Having a CMS is not a single source of truth if the frontend can still silently replace what was published.",
          ],
          decision:
            "Make explicit what belongs to the CMS, what is calculated, and what is only interface.",
        },
        {
          index: "05",
          title: "What I took from this work",
          paragraphs: [],
          points: [
            "A CMS is not just CRUD.",
            "Draft and published are different states.",
            "Cache and publishing have to be coordinated.",
            "Integration is done only when the change reaches the website DOM.",
          ],
        },
      ],
    },
    {
      slug: "b2b",
      title: "How I turned a complex TDR into a modular architecture",
      category: "Architecture · B2B Product",
      lead: "On a large B2B product, starting from components is the fastest way to create inconsistencies. The first job was to break down requirements, actors, flows and domains before turning the document into software.",
      media: {},
      sections: [
        {
          index: "01",
          title: "The challenge",
          paragraphs: [
            "I am collaborating on this project as freelance work, on a product intended for Cabo Verde TradeInvest. What follows describes scope, not finished modules.",
            "The scope brings together participants, companies, investors, exhibitors, meetings, agenda, marketplace, recommendations, check-in, administration, analytics and post-event follow-up. The challenge is to keep dozens of capabilities from becoming a monolith that is hard to evolve.",
          ],
        },
        {
          index: "02",
          title: "From documentation to the system",
          paragraphs: [],
          flow: {
            nodes: [
              "TDR",
              "Requirements",
              "Business flows",
              "Domains",
              "Architecture",
              "Prototype",
              "Backlog",
              "Incremental implementation",
            ],
            caption:
              "The document stops being only a feature list when each requirement gains an actor, a business rule, a state, a dependency and a domain boundary.",
          },
        },
        {
          index: "03",
          title: "Product decomposition",
          paragraphs: [
            "These groups organize the scope. They do not describe finished modules.",
          ],
          groups: [
            { title: "Identity", items: ["Users", "Organizations", "Profiles"] },
            { title: "Discovery", items: ["Marketplace", "Search", "Matching"] },
            {
              title: "Interaction",
              items: ["Meetings", "Agenda", "Notifications", "Check-in"],
            },
            { title: "Operations", items: ["Admin", "BI", "Audit"] },
            {
              title: "Continuity",
              items: ["Opportunities", "Pipeline", "Deal Room"],
            },
          ],
        },
        {
          index: "04",
          title: "Why work in phases",
          paragraphs: [
            "On a product with this many dependencies, building everything in parallel raises the risk of inconsistent contracts and rework. An incremental approach validates flows, rules and interfaces before expanding into more dependent modules.",
          ],
          phases: [
            "Requirements",
            "Prototype",
            "Backend and data",
            "Frontend and Admin",
            "Integrations",
            "Tests",
            "Production",
          ],
        },
        {
          index: "05",
          title: "What I took from this work",
          paragraphs: [],
          points: [
            "A requirement has to become a testable rule.",
            "Clear domains reduce coupling.",
            "Architecture should follow the business flow.",
            "Good documentation reduces implicit decisions during development.",
          ],
        },
      ],
    },
    {
      slug: "vektra",
      title: "How I moved route, risk and pricing into the backend",
      category: "Backend · Routing",
      lead: "In critical mobility flows, the frontend should not decide alone which route to use, what to charge, or how to interpret risk. Those decisions need a controlled, auditable and consistent source.",
      media: {},
      sections: [
        {
          index: "01",
          title: "The problem",
          paragraphs: [
            "When critical logic is spread across mobile, geographic services and the backend, two screens can reach different decisions for the same trip. Besides the inconsistency, that makes auditing harder and widens the surface for manipulation.",
          ],
        },
        {
          index: "02",
          title: "Backend as source of truth",
          paragraphs: [
            "Mobile requests and presents. The route decision, the risk context and pricing governance stay on the server.",
          ],
          flow: {
            nodes: [
              "Mobile",
              "Backend",
              "Route Authority",
              "VEKTRA-GEO / Provider",
              "Guardian Routing",
              "Route Candidates",
              "Pricing",
              "Public response",
            ],
          },
        },
        {
          index: "03",
          title: "Route Authority",
          paragraphs: [
            "The Route Authority layer centralizes how the official route is obtained and the context used by the rest of the flow.",
          ],
          flow: {
            nodes: [
              "Origin/destination",
              "Distance",
              "Duration",
              "Polyline",
              "Route hash",
              "Route context",
            ],
          },
        },
        {
          index: "04",
          title: "Guardian and candidate routes",
          paragraphs: [
            "A route can be read through risk and territorial context before it is shown to the user.",
          ],
          flow: {
            nodes: ["FASTEST", "SAFEST", "BALANCED", "SINGLE_FALLBACK"],
          },
          callout:
            "In this context, Guardian combines rules, scoring, geographic data and operational decisions. It is not presented here as a machine-learning model.",
        },
        {
          index: "05",
          title: "Security and audit",
          paragraphs: [
            "What this flow needs to control is limited to five points: who owns the trip, the decision snapshot, response serialization, what does not go to mobile, and the trail for route and pricing.",
          ],
          points: [
            "Trip ownership.",
            "Decision snapshots.",
            "Controlled serialization.",
            "Internal data not exposed to mobile.",
            "Route and pricing audit.",
          ],
        },
        {
          index: "06",
          title: "What I took from this work",
          paragraphs: [],
          points: [
            "A critical decision needs a source of truth.",
            "The frontend should present state, not govern sensitive rules.",
            "Explainability helps operations and debugging.",
            "Audit has to be born with the rule, not added later.",
          ],
        },
      ],
    },
  ],
};

const fr: TechnicalNotesCopy = {
  title: "Notes techniques",
  subtitle:
    "Décisions d'architecture, d'intégration et de produit tirées de projets réels.",
  back: "Notes techniques",
  returnLabel: "Retour aux notes techniques",
  readNote: "Lire la note",
  mediaPlaceholder: "Image du projet",
  reservedIdentity: "Identité réservée",
  logoAlt: {
    "oficina-digital": "Logo d'Oficina Digital",
    consult: "Logo de Linha 6 Consultoria",
    vektra: "Logo de Vektra Mobilidade Inteligente",
  },
  items: [
    {
      slug: "oficina-digital",
      title: "Comment j'ai conçu le flux de réservation en ligne d'Oficina Digital",
      category: "Produit · Application web",
      lead: "Une réservation publique devait arriver à l'atelier déjà organisée : demande, photos, véhicule et une date que l'agenda pouvait encore accepter.",
      media: {},
      sections: [
        {
          index: "01",
          title: "Le problème",
          paragraphs: [
            "Un atelier ne fonctionne pas avec un formulaire isolé. La demande en ligne devait porter le service, le client, le véhicule et les photos, et l'agenda devait pouvoir refuser des dates déjà bloquées.",
          ],
        },
        {
          index: "02",
          title: "La décision",
          paragraphs: [
            "La page publique de réservation et le panneau de l'atelier sont deux surfaces de la même demande. Le client envoie. L'atelier organise. Le super admin de la plateforme reste séparé de l'exploitation de chaque atelier.",
          ],
        },
        {
          index: "03",
          title: "Comment c'était structuré",
          paragraphs: [
            "La demande n'est pas réécrite à la main pour passer du site public à l'exploitation.",
          ],
          flow: {
            nodes: [
              "Page publique",
              "Demande avec photos",
              "Panneau de l'atelier",
              "Agenda et dates bloquées",
            ],
            caption:
              "Notifications, e-mails et avis suivent la demande. Ils ne sont pas un canal parallèle où la même demande est recopiée.",
          },
        },
        {
          index: "04",
          title: "Ce que cela a résolu",
          paragraphs: [
            "La demande arrive structurée. Services, clients, véhicules et agenda vivent dans le même système, au lieu de circuler entre des messages et le panneau.",
          ],
        },
        {
          index: "05",
          title: "Ce que j'en retiens",
          paragraphs: [],
          points: [
            "Le flux public et le panneau sont des états différents de la même demande.",
            "Une date bloquée doit exister avant que la réservation promette un horaire.",
            "Les photos font partie de la demande, pas d'une pièce jointe ultérieure.",
            "L'admin de la plateforme n'est pas le panneau d'un atelier.",
          ],
        },
      ],
    },
    {
      slug: "consult",
      title: "Comment j'ai relié Admin, API et site dans un CMS réel",
      category: "CMS · Intégration",
      lead: "Le défi n'était pas seulement de créer un panneau d'administration. Il fallait qu'une modification faite par le client traverse tout le système et arrive sur le site publié sans édition manuelle du code.",
      media: {},
      sections: [
        {
          index: "01",
          title: "Le problème",
          paragraphs: [
            "Le système a été développé pour un client, Linha 6 Consultoria.",
            "Le site et le panneau d'administration devaient fonctionner comme un seul système éditorial. Un formulaire qui se contente d'enregistrer des données ne résout pas cela. Il fallait contrôler brouillon, prévisualisation, publication, persistance, API publique et mise à jour du site.",
          ],
        },
        {
          index: "02",
          title: "L'architecture",
          paragraphs: [],
          flow: {
            nodes: [
              "Admin",
              "Fastify API",
              "Supabase",
              "Public API",
              "Next.js",
              "Site",
            ],
            caption:
              "L'API se place entre le panneau et la persistance. Le site ne consomme que le contenu publié, tandis que l'Admin travaille avec des états éditoriaux et ses propres permissions.",
          },
        },
        {
          index: "03",
          title: "Le flux éditorial",
          paragraphs: [
            "Séparer draft et published empêche une modification incomplète d'apparaître publiquement. Après la publication, le backend déclenche la revalidation du contenu consommé par Next.js.",
          ],
          flow: {
            nodes: [
              "Éditer",
              "Enregistrer le brouillon",
              "Preview",
              "Publier",
              "Revalider",
              "Site mis à jour",
            ],
          },
        },
        {
          index: "04",
          title: "Le problème de la source de vérité",
          paragraphs: [
            "L'une des parties les plus délicates a été d'identifier du contenu qui pouvait encore venir de fallbacks, de constantes ou de code en dur. Avoir un CMS ne veut pas dire avoir une source unique de vérité si le frontend peut encore remplacer silencieusement ce qui a été publié.",
          ],
          decision:
            "Rendre explicite ce qui appartient au CMS, ce qui est calculé et ce qui n'est que de l'interface.",
        },
        {
          index: "05",
          title: "Ce que j'en retiens",
          paragraphs: [],
          points: [
            "Un CMS n'est pas seulement du CRUD.",
            "Draft et published sont des états différents.",
            "Cache et publication doivent être coordonnés.",
            "L'intégration n'est terminée que lorsque la modification arrive dans le DOM du site.",
          ],
        },
      ],
    },
    {
      slug: "b2b",
      title: "Comment j'ai transformé un TDR complexe en architecture modulaire",
      category: "Architecture · Produit B2B",
      lead: "Sur un grand produit B2B, commencer par les composants est le chemin le plus rapide vers des incohérences. Le premier travail a été de décomposer exigences, acteurs, flux et domaines avant de transformer le document en logiciel.",
      media: {},
      sections: [
        {
          index: "01",
          title: "Le défi",
          paragraphs: [
            "Je collabore à ce projet en freelance, sur un produit destiné à Cabo Verde TradeInvest. Ce qui suit décrit le périmètre, pas des modules terminés.",
            "Le périmètre réunit participants, entreprises, investisseurs, exposants, réunions, agenda, marketplace, recommandations, check-in, administration, analytics et suivi après l'événement. Le défi est d'empêcher des dizaines de fonctions de devenir une application monolithique difficile à faire évoluer.",
          ],
        },
        {
          index: "02",
          title: "De la documentation au système",
          paragraphs: [],
          flow: {
            nodes: [
              "TDR",
              "Exigences",
              "Flux métier",
              "Domaines",
              "Architecture",
              "Prototype",
              "Backlog",
              "Implémentation incrémentale",
            ],
            caption:
              "Le document cesse d'être seulement une liste de fonctions quand chaque exigence gagne un acteur, une règle métier, un état, une dépendance et une frontière de domaine.",
          },
        },
        {
          index: "03",
          title: "Décomposition du produit",
          paragraphs: [
            "Ces groupes organisent le périmètre. Ils ne décrivent pas des modules terminés.",
          ],
          groups: [
            { title: "Identité", items: ["Utilisateurs", "Organisations", "Profils"] },
            { title: "Découverte", items: ["Marketplace", "Recherche", "Matching"] },
            {
              title: "Interaction",
              items: ["Réunions", "Agenda", "Notifications", "Check-in"],
            },
            { title: "Opération", items: ["Admin", "BI", "Audit"] },
            {
              title: "Continuité",
              items: ["Opportunités", "Pipeline", "Deal Room"],
            },
          ],
        },
        {
          index: "04",
          title: "Pourquoi travailler par phases",
          paragraphs: [
            "Sur un produit avec ce nombre de dépendances, tout développer en parallèle augmente le risque de contrats incohérents et de reprise. L'approche incrémentale permet de valider flux, règles et interfaces avant d'étendre vers des modules plus dépendants.",
          ],
          phases: [
            "Exigences",
            "Prototype",
            "Backend et données",
            "Frontend et Admin",
            "Intégrations",
            "Tests",
            "Production",
          ],
        },
        {
          index: "05",
          title: "Ce que j'en retiens",
          paragraphs: [],
          points: [
            "Une exigence doit devenir une règle testable.",
            "Des domaines clairs réduisent le couplage.",
            "L'architecture doit suivre le flux métier.",
            "Une bonne documentation réduit les décisions implicites pendant le développement.",
          ],
        },
      ],
    },
    {
      slug: "vektra",
      title: "Comment j'ai porté route, risque et pricing dans le backend",
      category: "Backend · Routing",
      lead: "Dans les flux critiques de mobilité, le frontend ne doit pas décider seul quelle route utiliser, combien facturer ou comment interpréter le risque. Ces décisions ont besoin d'une source contrôlée, auditable et cohérente.",
      media: {},
      sections: [
        {
          index: "01",
          title: "Le problème",
          paragraphs: [
            "Quand la logique critique est dispersée entre mobile, services géographiques et backend, deux écrans peuvent aboutir à des décisions différentes pour la même course. Outre l'incohérence, cela complique l'audit et élargit la surface de manipulation.",
          ],
        },
        {
          index: "02",
          title: "Le backend comme source de vérité",
          paragraphs: [
            "Le mobile demande et présente. La décision de route, le contexte de risque et la gouvernance du pricing restent sur le serveur.",
          ],
          flow: {
            nodes: [
              "Mobile",
              "Backend",
              "Route Authority",
              "VEKTRA-GEO / Provider",
              "Guardian Routing",
              "Route Candidates",
              "Pricing",
              "Réponse publique",
            ],
          },
        },
        {
          index: "03",
          title: "Route Authority",
          paragraphs: [
            "La couche Route Authority centralise l'obtention de la route officielle et le contexte utilisé par le reste du flux.",
          ],
          flow: {
            nodes: [
              "Origine/destination",
              "Distance",
              "Durée",
              "Polyline",
              "Route hash",
              "Route context",
            ],
          },
        },
        {
          index: "04",
          title: "Guardian et routes candidates",
          paragraphs: [
            "La route peut être lue selon le risque et le contexte territorial avant d'être présentée à l'utilisateur.",
          ],
          flow: {
            nodes: ["FASTEST", "SAFEST", "BALANCED", "SINGLE_FALLBACK"],
          },
          callout:
            "Dans ce contexte, Guardian combine règles, scoring, données géographiques et décisions opérationnelles. Il n'est pas présenté ici comme un modèle de machine learning.",
        },
        {
          index: "05",
          title: "Sécurité et audit",
          paragraphs: [
            "Ce que ce flux doit contrôler se limite à cinq points : qui possède la course, le snapshot de la décision, la sérialisation de la réponse, ce qui ne part pas vers le mobile, et la trace de route et de pricing.",
          ],
          points: [
            "Ownership des courses.",
            "Snapshots des décisions.",
            "Sérialisation contrôlée.",
            "Données internes non exposées au mobile.",
            "Audit de route et de pricing.",
          ],
        },
        {
          index: "06",
          title: "Ce que j'en retiens",
          paragraphs: [],
          points: [
            "Une décision critique doit avoir une source de vérité.",
            "Le frontend doit présenter l'état, pas gouverner des règles sensibles.",
            "L'explicabilité aide l'exploitation et le debugging.",
            "L'audit doit naître avec la règle, pas après elle.",
          ],
        },
      ],
    },
  ],
};

const zh: TechnicalNotesCopy = {
  title: "技术笔记",
  subtitle: "从真实项目中抽出的架构、集成与产品决策。",
  back: "技术笔记",
  returnLabel: "返回技术笔记",
  readNote: "阅读笔记",
  mediaPlaceholder: "项目图片",
  reservedIdentity: "标识暂不公开",
  logoAlt: {
    "oficina-digital": "Oficina Digital 的标志",
    consult: "Linha 6 Consultoria 的标志",
    vektra: "Vektra Mobilidade Inteligente 的标志",
  },
  items: [
    {
      slug: "oficina-digital",
      title: "我如何设计 Oficina Digital 的在线预约流程",
      category: "产品 · Web 应用",
      lead: "公开预约到达车间时必须已经组织好：请求、照片、车辆，以及日程仍然可以接受的日期。",
      media: {},
      sections: [
        {
          index: "01",
          title: "问题",
          paragraphs: [
            "车间不能只靠一张散落的表单运转。在线请求需要带上服务、客户、车辆和照片，日程也必须能够拒绝车间已经封锁的日期。",
          ],
        },
        {
          index: "02",
          title: "决策",
          paragraphs: [
            "公开预约页和车间面板是同一条请求的两个表面。客户提交。车间整理。平台超级管理员与每家车间的日常操作分开。",
          ],
        },
        {
          index: "03",
          title: "如何组织",
          paragraphs: ["请求不会靠手工重写，才从公开网站进入运营。"],
          flow: {
            nodes: ["公开页面", "带照片的请求", "车间面板", "日程与封锁日期"],
            caption: "通知、邮件和评价跟随这条请求。它们不是把同一条请求再抄一遍的平行渠道。",
          },
        },
        {
          index: "04",
          title: "这解决了什么",
          paragraphs: [
            "请求以结构化的方式进入。服务、客户、车辆和日程留在同一个系统里，而不是在消息和面板之间搬运。",
          ],
        },
        {
          index: "05",
          title: "我从这项工作中带走的",
          paragraphs: [],
          points: [
            "公开流程和面板是同一条请求的不同状态。",
            "封锁日期必须先存在，预约才能承诺一个时间。",
            "照片是请求的一部分，不是事后附件。",
            "平台管理端不是某一家车间的面板。",
          ],
        },
      ],
    },
    {
      slug: "consult",
      title: "我如何把 Admin、API 和网站连成一个真实的 CMS",
      category: "CMS · 集成",
      lead: "挑战并不只是做一个管理后台。客户做的一次修改必须穿过整个系统，到达已发布的网站，而不需要手工改代码。",
      media: {},
      sections: [
        {
          index: "01",
          title: "问题",
          paragraphs: [
            "这个系统是为客户 Linha 6 Consultoria 开发的。",
            "网站和管理后台需要作为同一个编辑系统工作。只负责存数据的表单解决不了这个问题。草稿、预览、发布、持久化、公开 API 和网站更新都需要被控制。",
          ],
        },
        {
          index: "02",
          title: "架构",
          paragraphs: [],
          flow: {
            nodes: ["Admin", "Fastify API", "Supabase", "Public API", "Next.js", "网站"],
            caption:
              "API 位于面板和持久化之间。网站只消费已发布的内容，Admin 则使用编辑状态和自己的权限。",
          },
        },
        {
          index: "03",
          title: "编辑流程",
          paragraphs: [
            "把 draft 和 published 分开，可以避免未完成的修改出现在公开网站上。发布之后，后端触发 Next.js 所消费内容的重新验证。",
          ],
          flow: {
            nodes: ["编辑", "保存草稿", "Preview", "发布", "重新验证", "网站已更新"],
          },
        },
        {
          index: "04",
          title: "事实来源问题",
          paragraphs: [
            "比较微妙的一部分，是找出仍可能来自 fallback、常量或硬编码的内容。如果前端仍能悄悄替换已发布的内容，那么有 CMS 并不等于有单一事实来源。",
          ],
          decision: "明确什么属于 CMS，什么是计算出来的，什么只是界面。",
        },
        {
          index: "05",
          title: "我从这项工作中带走的",
          paragraphs: [],
          points: [
            "CMS 不只是 CRUD。",
            "Draft 和 published 是不同状态。",
            "缓存和发布必须一起协调。",
            "只有当修改到达网站 DOM 时，集成才算完成。",
          ],
        },
      ],
    },
    {
      slug: "b2b",
      title: "我如何把一份复杂的 TDR 拆成模块化架构",
      category: "架构 · B2B 产品",
      lead: "在一个大型 B2B 产品里，从组件开始是制造不一致的最快方式。第一项工作是先拆开需求、参与者、流程和领域，再把文档变成软件。",
      media: {},
      sections: [
        {
          index: "01",
          title: "挑战",
          paragraphs: [
            "我以自由职业的方式参与这个项目，产品面向 Cabo Verde TradeInvest。下面描述的是范围，不是已经完成的模块。",
            "范围包括参与者、企业、投资者、展商、会议、议程、marketplace、推荐、签到、管理、分析和会后跟进。挑战是避免几十项能力变成难以演进的单体应用。",
          ],
        },
        {
          index: "02",
          title: "从文档到系统",
          paragraphs: [],
          flow: {
            nodes: [
              "TDR",
              "需求",
              "业务流程",
              "领域",
              "架构",
              "原型",
              "Backlog",
              "增量实现",
            ],
            caption:
              "当每条需求都有参与者、业务规则、状态、依赖和领域边界时，文档就不再只是一份功能清单。",
          },
        },
        {
          index: "03",
          title: "产品分解",
          paragraphs: ["这些分组整理的是范围。它们不表示模块已经完成。"],
          groups: [
            { title: "身份", items: ["用户", "组织", "资料"] },
            { title: "发现", items: ["Marketplace", "搜索", "Matching"] },
            { title: "互动", items: ["会议", "议程", "通知", "签到"] },
            { title: "运营", items: ["Admin", "BI", "审计"] },
            { title: "延续", items: ["机会", "Pipeline", "Deal Room"] },
          ],
        },
        {
          index: "04",
          title: "为什么分阶段做",
          paragraphs: [
            "在依赖这么多的产品里，并行开发一切会增加契约不一致和返工的风险。增量方式先验证流程、规则和界面，再扩展到更依赖其他部分的模块。",
          ],
          phases: ["需求", "原型", "后端与数据", "前端与 Admin", "集成", "测试", "生产"],
        },
        {
          index: "05",
          title: "我从这项工作中带走的",
          paragraphs: [],
          points: [
            "一条需求需要变成可测试的规则。",
            "清晰的领域减少耦合。",
            "架构应跟随业务流程。",
            "好的文档减少开发过程中的隐含决策。",
          ],
        },
      ],
    },
    {
      slug: "vektra",
      title: "我如何把路线、风险和定价放到后端",
      category: "后端 · Routing",
      lead: "在关键的出行流程里，前端不应该单独决定用哪条路线、收多少钱，或如何解释风险。这些决策需要一个受控、可审计且一致的来源。",
      media: {},
      sections: [
        {
          index: "01",
          title: "问题",
          paragraphs: [
            "当关键逻辑分散在移动端、地理服务和后端之间时，两个界面可能对同一次行程做出不同决定。除了不一致，这还会让审计更难，并扩大被篡改的表面。",
          ],
        },
        {
          index: "02",
          title: "后端作为事实来源",
          paragraphs: ["移动端请求并展示。路线决策、风险上下文和定价治理留在服务器上。"],
          flow: {
            nodes: [
              "Mobile",
              "Backend",
              "Route Authority",
              "VEKTRA-GEO / Provider",
              "Guardian Routing",
              "Route Candidates",
              "Pricing",
              "公开响应",
            ],
          },
        },
        {
          index: "03",
          title: "Route Authority",
          paragraphs: [
            "Route Authority 层集中获取正式路线，以及流程其余部分所使用的上下文。",
          ],
          flow: {
            nodes: ["起点/终点", "距离", "时长", "Polyline", "Route hash", "Route context"],
          },
        },
        {
          index: "04",
          title: "Guardian 与候选路线",
          paragraphs: ["路线可以先按风险和地域上下文读取，再呈现给用户。"],
          flow: {
            nodes: ["FASTEST", "SAFEST", "BALANCED", "SINGLE_FALLBACK"],
          },
          callout:
            "在这个上下文里，Guardian 组合的是规则、评分、地理数据和运营决策。这里不把它呈现为一个机器学习模型。",
        },
        {
          index: "05",
          title: "安全与审计",
          paragraphs: [
            "这个流程需要控制的内容限于五点：行程归谁、决策快照、响应序列化、哪些数据不进入移动端，以及路线和定价的痕迹。",
          ],
          points: [
            "行程所有权。",
            "决策快照。",
            "受控序列化。",
            "内部数据不暴露给移动端。",
            "路线与定价审计。",
          ],
        },
        {
          index: "06",
          title: "我从这项工作中带走的",
          paragraphs: [],
          points: [
            "关键决策必须有一个事实来源。",
            "前端应呈现状态，而不是治理敏感规则。",
            "可解释性有助于运营和调试。",
            "审计必须和规则一起出现，而不是事后补上。",
          ],
        },
      ],
    },
  ],
};

export const technicalNotes: Record<Locale, TechnicalNotesCopy> = {
  pt,
  en,
  fr,
  zh,
};
