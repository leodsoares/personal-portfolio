export type Lang = 'en' | 'fr-CA' | 'pt-BR';

export type Translations = {
  nav: {
    links: string[];
  };
  hero: {
    greeting: string;
    subtitle: string;
    description: string;
    viewProjects: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    p1: string;
    p2: string;
    p3: string;
    stats: { label: string; value: string }[];
  };
  skills: {
    eyebrow: string;
    heading: string;
    categories: string[];
    spokenLanguages: { name: string; flag: string; proficiency: string }[];
  };
  experience: {
    eyebrow: string;
    heading: string;
    graduatedLabel: string;
    graduatedSub: string;
    jobs: { title: string; description: string }[];
  };
  gallery: {
    eyebrow: string;
    heading: string;
    readMore: string;
    projects: { description: string }[];
  };
};

export const translations: Record<Lang, Translations> = {
  en: {
    nav: {
      links: ['About', 'Skills', 'Experience', 'Projects'],
    },
    hero: {
      greeting: "Hello, I'm",
      subtitle: 'Mechanical Engineer-In-Training',
      description:
        'You are looking at my latest project. The other ones involve more concrete... and contracts... and also maybe some excavators',
      viewProjects: 'View Projects',
    },
    about: {
      eyebrow: 'About Me',
      heading: 'From job sites to VS Code',
      p1: "I'm a Mechanical EIT based in Vancouver, registered with EGBC and trained at UBC — where I also picked up a minor in Computer Science along the way. Over the past two years I've been coordinating infrastructure construction projects across the Lower Mainland, working on everything from trenchless pipeline installations to pump stations and trunk sewer replacements.",
      p2: "I like work that's tangible — the kind where you can drive past it when it's done and feel good about it.",
      p3: "Outside of work I'm usually running around Stanley Park to prepare for the next race, or working on some personal projects like music composition and this website.",
      stats: [
        { label: 'Languages', value: '4' },
        { label: 'Experience', value: '2 yrs' },
        { label: 'Coffee/day', value: '∞' },
      ],
    },
    skills: {
      eyebrow: 'What I Work With',
      heading: 'Skills & Technologies',
      categories: ['Engineering', 'Scheduling', 'Office & Collaboration', 'Languages', 'Development'],
      spokenLanguages: [
        { name: 'Portuguese', flag: '🇧🇷', proficiency: 'Native' },
        { name: 'English', flag: '🇬🇧', proficiency: 'Fluent' },
        { name: 'French', flag: '🇫🇷', proficiency: 'Advanced' },
        { name: 'Spanish', flag: '🇪🇸', proficiency: 'Intermediate' },
      ],
    },
    experience: {
      eyebrow: "Where I've Worked",
      heading: 'Work Experience',
      graduatedLabel: '🎓 Graduated',
      graduatedSub: 'BASc Mechanical Engineering — UBC Okanagan · June 2023',
      jobs: [
        {
          title: 'Project Coordinator (Infrastructure)',
          description: 'Coordinated all stages of trenchless infrastructure projects worth up to CAD $4M alongside Senior Project Managers. Took full ownership of a CAD $2M culvert repair project in Whistler from award to completion, delivering on schedule and within budget. Managed construction documentation across 10+ concurrent active projects and issued change orders exceeding $600,000 with precision in contract and cost control.',
        },
        {
          title: 'Project Coordinator (Infrastructure)',
          description: 'Led coordination of the CAD $9M North Road Trunk Sewer Replacement in Coquitlam under strict Metro Vancouver engineering specifications. Independently managed construction of a CAD $2M pump station in Delta, overseeing technical execution and stakeholder communication with minimal supervision. Submitted 100+ RFIs to resolve design conflicts between drawings and field conditions, and collaborated with engineering consulting firms to design shoring solutions for excavations up to 5m depth.',
        },
        {
          title: 'Field Technician',
          description: 'Conducted site inspections across commercial and residential projects to assess waterproofing installations and ensure compliance with product specifications. Worked directly with site superintendents to identify and resolve installation issues in real time, producing detailed daily technical reports to track findings and outcomes.',
        },
        {
          title: 'Residence Advisor',
          description: 'Supported a floor of 30+ first-year students through their transition to university life, providing guidance, conflict resolution, and community building. Developed strong interpersonal and leadership skills through one-on-one mentorship, crisis response, and collaboration with student services staff.',
        },
        {
          title: 'Barista',
          description: 'Delivered consistent customer service in a high-volume environment while managing multiple orders simultaneously. Developed time management, teamwork, and communication skills in a fast-paced team setting.',
        },
      ],
    },
    gallery: {
      eyebrow: 'Project Showcase',
      heading: 'One at a Time',
      readMore: 'Read More',
      projects: [
        {
          description: 'Designed and built an automated syringe controller for microbiome research as part of my mechanical engineering capstone. Working directly with the Pakpour Lab, I developed the mechanical design in SolidWorks and programmed an Arduino to control stepper motors for precise syringe actuation — translating complex research requirements into a functional precision instrument. The project sharpened my ability to work across disciplines, bridging mechanical design, embedded hardware, and biomedical research in a single deliverable.',
        },
        {
          description: 'Led a CAD $2M trenchless culvert repair project in Whistler from contract award through to final completion. Managed the full project lifecycle independently — coordinating subcontractors, tracking costs, maintaining construction documentation, and issuing change orders — while keeping the project on schedule and within budget. This was my first experience taking full ownership of a project from start to finish, and it reinforced both my technical foundation and my instinct for proactive problem solving on site.',
        },
        {
          description: 'Coordinated the CAD $9M replacement of the North Road Trunk Sewer in Coquitlam, one of the most technically demanding projects of my career to date. Working under strict Metro Vancouver engineering specifications, I submitted 100+ RFIs to resolve conflicts between design drawings and field conditions, and collaborated with engineering consulting firms to develop shoring solutions for excavations up to 5m deep. The scale and complexity of this project pushed me to develop sharper instincts around design interpretation, contractor coordination, and technical communication.',
        },
        {
          description: 'Managed the construction of a CAD $2M pump station in Delta with minimal supervision, overseeing day-to-day technical execution, subcontractor coordination, and stakeholder communication from start to finish. Working with limited oversight sharpened my ability to make sound decisions independently, anticipate issues before they escalated, and keep all parties aligned throughout construction. A strong test of both my technical knowledge and my judgment as a coordinator.',
        },
        {
          description: 'Designed and built this portfolio website from scratch to present my engineering and coordination experience beyond the traditional resume format. Leveraged modern AI-assisted development tools to bring the project to life efficiently — making decisions on architecture, design, and content independently throughout. A project that turned out to be as much about communication and personal branding as it was about building something from the ground up.',
        },
      ],
    },
  },

  'fr-CA': {
    nav: {
      links: ['À propos', 'Compétences', 'Expérience', 'Projets'],
    },
    hero: {
      greeting: 'Bonjour, je suis',
      subtitle: 'Ingénieur mécanique en devenir',
      description:
        'Vous regardez mon projet le plus récent. Les autres impliquent plus de béton... et des contrats... et peut-être aussi des excavatrices',
      viewProjects: 'Voir mes projets',
    },
    about: {
      eyebrow: 'À propos',
      heading: 'Des chantiers à VS Code',
      p1: "Je suis ingénieur en formation (EIT) basé à Vancouver, inscrit à l'EGBC et formé à l'UBC — où j'ai également obtenu une mineure en informatique. Au cours des deux dernières années, j'ai coordonné des projets de construction d'infrastructures à travers le Lower Mainland, en travaillant sur tout, des installations de conduites sans tranchée aux stations de pompage et aux remplacements de conduites d'égout.",
      p2: "J'aime le travail tangible — celui où l'on peut passer devant une fois terminé et en être fier.",
      p3: "En dehors du travail, je cours habituellement autour de Stanley Park pour me préparer à la prochaine course, ou je travaille sur des projets personnels comme la composition musicale et ce site web.",
      stats: [
        { label: 'Langues', value: '4' },
        { label: 'Expérience', value: '2 ans' },
        { label: 'Cafés/jour', value: '∞' },
      ],
    },
    skills: {
      eyebrow: 'Ce avec quoi je travaille',
      heading: 'Compétences et technologies',
      categories: ['Ingénierie', 'Planification', 'Bureautique et collaboration', 'Langues', 'Développement'],
      spokenLanguages: [
        { name: 'Portugais', flag: '🇧🇷', proficiency: 'Langue maternelle' },
        { name: 'Anglais', flag: '🇬🇧', proficiency: 'Courant' },
        { name: 'Français', flag: '🇫🇷', proficiency: 'Avancé' },
        { name: 'Espagnol', flag: '🇪🇸', proficiency: 'Intermédiaire' },
      ],
    },
    experience: {
      eyebrow: "Où j'ai travaillé",
      heading: 'Expérience professionnelle',
      graduatedLabel: '🎓 Diplômé',
      graduatedSub: 'B.Sc.A. Génie mécanique — UBC Okanagan · juin 2023',
      jobs: [
        {
          title: 'Coordonnateur de projet (Infrastructure)',
          description: "Coordonné toutes les étapes de projets d'infrastructure sans tranchée d'une valeur allant jusqu'à 4 M$ CAD en collaboration avec des chargés de projet seniors. Pris en charge complète d'un projet de réparation de dalot de 2 M$ CAD à Whistler, de l'attribution du contrat à la clôture, livré dans les délais et dans les limites du budget. Géré la documentation de construction pour plus de 10 projets actifs simultanés et émis des ordres de modification dépassant 600 000 $ avec précision en matière de contrôle des contrats et des coûts.",
        },
        {
          title: 'Coordonnateur de projet (Infrastructure)',
          description: "Dirigé la coordination du remplacement du collecteur principal Nord Road de 9 M$ CAD à Coquitlam, selon les spécifications d'ingénierie strictes de Metro Vancouver. Géré de manière autonome la construction d'une station de pompage de 2 M$ CAD à Delta, supervisant l'exécution technique et la communication avec les parties prenantes avec une supervision minimale. Soumis plus de 100 RFI pour résoudre les conflits entre les plans et les conditions de terrain, et collaboré avec des firmes d'ingénierie-conseil pour concevoir des solutions de blindage pour des excavations allant jusqu'à 5 m de profondeur.",
        },
        {
          title: 'Technicien de terrain',
          description: "Réalisé des inspections de chantier sur des projets commerciaux et résidentiels pour évaluer les installations d'imperméabilisation et assurer la conformité aux spécifications des produits. Travaillé directement avec les surintendants de chantier pour identifier et résoudre les problèmes d'installation en temps réel, en produisant des rapports techniques quotidiens détaillés pour suivre les résultats.",
        },
        {
          title: 'Conseiller en résidence',
          description: "Accompagné un étage de plus de 30 étudiants de première année dans leur transition vers la vie universitaire, en offrant soutien, résolution de conflits et activités de création de communauté. Développé de solides compétences interpersonnelles et de leadership grâce au mentorat individuel, à la gestion de situations de crise et à la collaboration avec le personnel des services aux étudiants.",
        },
        {
          title: 'Barista',
          description: "Offert un service client constant dans un environnement à volume élevé tout en gérant plusieurs commandes simultanément. Développé des compétences en gestion du temps, travail d'équipe et communication dans un environnement d'équipe au rythme soutenu.",
        },
      ],
    },
    gallery: {
      eyebrow: 'Vitrine de projets',
      heading: "L'un après l'autre",
      readMore: 'En savoir plus',
      projects: [
        {
          description: "Conçu et construit un contrôleur de seringue automatisé pour la recherche sur le microbiome dans le cadre de mon projet de fin d'études en génie mécanique. En collaboration directe avec le Laboratoire Pakpour, j'ai développé la conception mécanique dans SolidWorks et programmé un Arduino pour contrôler des moteurs pas-à-pas pour une actuation précise de la seringue — traduisant des exigences de recherche complexes en un instrument de précision fonctionnel. Ce projet a affiné ma capacité à travailler de manière interdisciplinaire, en combinant conception mécanique, électronique embarquée et recherche biomédicale en un seul livrable.",
        },
        {
          description: "Dirigé un projet de réparation de dalot sans tranchée de 2 M$ CAD à Whistler, de l'attribution du contrat jusqu'à la clôture finale. Géré de manière autonome l'ensemble du cycle de vie du projet — coordonnant les sous-traitants, suivant les coûts, maintenant la documentation de construction et émettant des ordres de modification — tout en respectant le calendrier et le budget. Ce fut ma première expérience de prise en charge complète d'un projet du début à la fin, et elle a renforcé à la fois mes bases techniques et mon instinct pour la résolution proactive de problèmes sur le terrain.",
        },
        {
          description: "Coordonné le remplacement de 9 M$ CAD du collecteur principal Nord Road à Coquitlam, l'un des projets les plus techniquement exigeants de ma carrière à ce jour. Travaillant selon les spécifications d'ingénierie strictes de Metro Vancouver, j'ai soumis plus de 100 RFI pour résoudre les conflits entre les plans et les conditions de terrain, et collaboré avec des firmes d'ingénierie-conseil pour développer des solutions de blindage pour des excavations allant jusqu'à 5 m de profondeur. L'ampleur et la complexité de ce projet m'ont poussé à développer des instincts plus affûtés en matière d'interprétation des plans, de coordination des entrepreneurs et de communication technique.",
        },
        {
          description: "Géré la construction d'une station de pompage de 2 M$ CAD à Delta avec une supervision minimale, supervisant l'exécution technique quotidienne, la coordination des sous-traitants et la communication avec les parties prenantes du début à la fin. Travailler avec peu de supervision a aiguisé ma capacité à prendre des décisions indépendantes judicieuses, à anticiper les problèmes avant qu'ils n'escaladent et à maintenir toutes les parties alignées tout au long de la construction. Un véritable test de mes connaissances techniques et de mon jugement en tant que coordonnateur.",
        },
        {
          description: "Conçu et construit ce site portfolio de zéro pour présenter mon expérience en ingénierie et coordination au-delà du format traditionnel du CV. Utilisé des outils de développement assistés par l'IA pour donner vie au projet efficacement — en prenant des décisions sur l'architecture, le design et le contenu de manière indépendante tout au long du processus. Un projet qui s'est avéré être autant une question de communication et d'image de marque personnelle que de construction de quelque chose à partir de zéro.",
        },
      ],
    },
  },

  'pt-BR': {
    nav: {
      links: ['Sobre', 'Habilidades', 'Experiência', 'Projetos'],
    },
    hero: {
      greeting: 'Olá, eu sou',
      subtitle: 'Engenheiro Mecânico em formação',
      description:
        'Você está vendo meu projeto mais recente. Os outros envolvem mais concreto... e contratos... e talvez algumas escavadeiras',
      viewProjects: 'Ver projetos',
    },
    about: {
      eyebrow: 'Sobre mim',
      heading: 'Das obras ao VS Code',
      p1: 'Sou um engenheiro mecânico EIT baseado em Vancouver, registrado no EGBC e formado pela UBC — onde também obtive uma especialização em Ciência da Computação. Nos últimos dois anos, coordenei projetos de construção de infraestrutura em toda a região Lower Mainland, trabalhando em tudo, desde instalações de tubulações sem abertura de valas até estações de bombeamento e substituições de coletores de esgoto.',
      p2: 'Gosto de trabalho tangível — o tipo em que você pode passar na frente quando está pronto e se sentir bem.',
      p3: 'Fora do trabalho, costumo correr pelo Stanley Park para me preparar para a próxima corrida, ou trabalhar em projetos pessoais como composição musical e este site.',
      stats: [
        { label: 'Idiomas', value: '4' },
        { label: 'Experiência', value: '2 anos' },
        { label: 'Cafés/dia', value: '∞' },
      ],
    },
    skills: {
      eyebrow: 'Com o que trabalho',
      heading: 'Habilidades e tecnologias',
      categories: ['Engenharia', 'Planejamento', 'Escritório e colaboração', 'Idiomas', 'Desenvolvimento'],
      spokenLanguages: [
        { name: 'Português', flag: '🇧🇷', proficiency: 'Nativo' },
        { name: 'Inglês', flag: '🇬🇧', proficiency: 'Fluente' },
        { name: 'Francês', flag: '🇫🇷', proficiency: 'Avançado' },
        { name: 'Espanhol', flag: '🇪🇸', proficiency: 'Intermediário' },
      ],
    },
    experience: {
      eyebrow: 'Onde trabalhei',
      heading: 'Experiência profissional',
      graduatedLabel: '🎓 Formado',
      graduatedSub: 'B.Eng. Engenharia Mecânica — UBC Okanagan · junho de 2023',
      jobs: [
        {
          title: 'Coordenador de Projetos (Infraestrutura)',
          description: 'Coordenei todas as etapas de projetos de infraestrutura sem abertura de valas com valor de até CAD $4M ao lado de Gerentes de Projeto Sênior. Assumi total responsabilidade por um projeto de reparo de bueiro de CAD $2M em Whistler, do recebimento do contrato à conclusão, entregando dentro do prazo e do orçamento. Gerenciei a documentação de construção de mais de 10 projetos ativos simultaneamente e emiti ordens de mudança superiores a $600.000 com precisão no controle contratual e de custos.',
        },
        {
          title: 'Coordenador de Projetos (Infraestrutura)',
          description: 'Liderou a coordenação da substituição do coletor-tronco North Road de CAD $9M em Coquitlam, seguindo as especificações de engenharia rigorosas da Metro Vancouver. Gerenciei de forma independente a construção de uma estação de bombeamento de CAD $2M em Delta, supervisionando a execução técnica e a comunicação com as partes interessadas com supervisão mínima. Enviei mais de 100 RFIs para resolver conflitos entre projetos e condições de campo, e colaborei com firmas de consultoria de engenharia para desenvolver soluções de escoramento para escavações de até 5m de profundidade.',
        },
        {
          title: 'Técnico de Campo',
          description: 'Realizei inspeções em obras de projetos comerciais e residenciais para avaliar instalações de impermeabilização e garantir conformidade com as especificações do produto. Trabalhei diretamente com os superintendentes de obra para identificar e resolver problemas de instalação em tempo real, produzindo relatórios técnicos diários detalhados para acompanhar os resultados.',
        },
        {
          title: 'Conselheiro de Residência',
          description: 'Apoiei um andar com mais de 30 estudantes do primeiro ano em sua transição para a vida universitária, oferecendo orientação, resolução de conflitos e atividades de integração. Desenvolvi habilidades interpessoais e de liderança por meio de mentoria individual, resposta a crises e colaboração com a equipe de serviços estudantis.',
        },
        {
          title: 'Barista',
          description: 'Prestei atendimento ao cliente consistente em um ambiente de alto volume, gerenciando múltiplos pedidos simultaneamente. Desenvolvi habilidades de gestão de tempo, trabalho em equipe e comunicação em um ambiente de equipe acelerado.',
        },
      ],
    },
    gallery: {
      eyebrow: 'Vitrine de projetos',
      heading: 'Um de cada vez',
      readMore: 'Saiba mais',
      projects: [
        {
          description: 'Projetei e construí um controlador automatizado de seringa para pesquisa em microbioma como parte do meu projeto de conclusão de curso em Engenharia Mecânica. Trabalhando diretamente com o Pakpour Lab, desenvolvi o design mecânico no SolidWorks e programei um Arduino para controlar motores de passo para atuação precisa da seringa — traduzindo requisitos complexos de pesquisa em um instrumento de precisão funcional. O projeto aprimorou minha capacidade de trabalhar de forma interdisciplinar, integrando design mecânico, hardware embarcado e pesquisa biomédica em um único entregável.',
        },
        {
          description: 'Liderou um projeto de reparo de bueiro sem abertura de valas de CAD $2M em Whistler, do recebimento do contrato até a conclusão final. Gerenciei de forma autônoma todo o ciclo de vida do projeto — coordenando subcontratados, acompanhando custos, mantendo a documentação de construção e emitindo ordens de mudança — mantendo o projeto dentro do prazo e do orçamento. Foi minha primeira experiência assumindo total responsabilidade por um projeto do início ao fim, reforçando tanto minha base técnica quanto meu instinto para resolução proativa de problemas em campo.',
        },
        {
          description: 'Coordenei a substituição de CAD $9M do Coletor-Tronco North Road em Coquitlam, um dos projetos mais tecnicamente desafiadores da minha carreira até o momento. Trabalhando sob as rígidas especificações de engenharia da Metro Vancouver, enviei mais de 100 RFIs para resolver conflitos entre os projetos e as condições de campo, e colaborei com firmas de consultoria de engenharia para desenvolver soluções de escoramento para escavações de até 5m de profundidade. A escala e a complexidade deste projeto me levaram a desenvolver instintos mais aguçados em interpretação de projetos, coordenação de empreiteiros e comunicação técnica.',
        },
        {
          description: 'Gerenciei a construção de uma estação de bombeamento de CAD $2M em Delta com supervisão mínima, supervisionando a execução técnica diária, a coordenação de subcontratados e a comunicação com as partes interessadas do início ao fim. Trabalhar com pouca supervisão aprimorou minha capacidade de tomar decisões independentes, antecipar problemas antes que escalassem e manter todas as partes alinhadas durante a construção. Um forte teste tanto do meu conhecimento técnico quanto do meu julgamento como coordenador.',
        },
        {
          description: 'Projetei e construí este site de portfólio do zero para apresentar minha experiência em engenharia e coordenação além do formato tradicional de currículo. Utilizei ferramentas modernas de desenvolvimento assistido por IA para dar vida ao projeto com eficiência — tomando decisões sobre arquitetura, design e conteúdo de forma independente ao longo do processo. Um projeto que acabou sendo tanto sobre comunicação e marca pessoal quanto sobre construir algo do zero.',
        },
      ],
    },
  },
};
