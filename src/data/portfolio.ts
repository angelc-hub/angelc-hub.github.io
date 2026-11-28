// Contenido editable del portfolio, en español e inglés.
// Los textos con { es, en } se traducen; los strings simples son iguales en ambos idiomas.
// Los valores marcados con TODO son placeholders: reemplázalos con tus datos reales.

export type Lang = 'es' | 'en';
export type L = Record<Lang, string>;
export type Txt = string | L;
export const tr = (v: Txt, lang: Lang): string => (typeof v === 'string' ? v : v[lang]);
const t = (es: string, en: string): L => ({ es, en });

export type Level = 1 | 2 | 3 | 4;
export interface TechItem { name: Txt; abbr: string; level: Level; learning?: boolean; note?: Txt }
export interface TechGroup { title: Txt; description: Txt; items: TechItem[] }
export interface Project {
  name: Txt; category: Txt; description: Txt; tech: string[];
  preview: string[]; repo: string | null; demo: string | null; placeholder: boolean;
}

export const profile = {
  name: 'Jose Angel Condori Ccapa',
  shortName: 'Jose Angel',
  role: 'Backend Developer',
  tagline: 'Software Development · Data Science · AI',
  headline: 'Backend Developer | Software Developer | Data Science & AI Enthusiast',
  location: t('Puno, Perú', 'Puno, Peru'),
  email: 'cj_angel@outlook.com',
  phone: '+51 930 911 491',
  whatsapp: 'https://wa.me/51930911491',
  github: 'https://github.com/angelc-hub',
  githubUser: '@angelc-hub',
  linkedin: null as string | null, // TODO: 'https://www.linkedin.com/in/tu-usuario'
  cv: t('/Jose_Angel_Condori_Ccapa_CV.pdf', '/Jose_Angel_Condori_Ccapa_CV_EN.pdf'),
  site: 'https://angelc-hub.github.io',
  available: true, // false oculta el indicador de disponibilidad
  availableText: t('Disponible para prácticas y oportunidades', 'Open to internships and opportunities'),
  intro: t(
    'Construyo APIs y aplicaciones web con Java, Node.js y Python, y estoy profundizando en ciencia de datos e inteligencia artificial.',
    'I build APIs and web applications with Java, Node.js and Python, and I am deepening my skills in data science and artificial intelligence.'),
  summary: t(
    'Estudiante de décimo ciclo de Ingeniería de Sistemas, orientado al desarrollo Backend: diseño de APIs REST, aplicaciones web y soluciones basadas en datos. Trabajo con Java (Spring Boot), Node.js (Express) y Python (Django, FastAPI). Me interesan la arquitectura de software, las buenas prácticas, la automatización y el aprendizaje de Machine Learning. Busco una oportunidad donde aportar, seguir creciendo y construir soluciones útiles.',
    'Tenth-semester Systems Engineering student focused on Backend development: REST API design, web applications and data-driven solutions. I work with Java (Spring Boot), Node.js (Express) and Python (Django, FastAPI). I am interested in software architecture, good engineering practices, automation and learning Machine Learning. I am looking for an opportunity to contribute, keep growing and build useful solutions.'),
};

export const nav = [
  { label: t('Inicio', 'Home'), href: '#inicio' },
  { label: t('Sobre mí', 'About'), href: '#sobre-mi' },
  { label: t('Tecnologías', 'Technologies'), href: '#tecnologias' },
  { label: t('Proyectos', 'Projects'), href: '#proyectos' },
  { label: t('Formación', 'Education'), href: '#formacion' },
  { label: t('Habilidades', 'Skills'), href: '#habilidades' },
  { label: t('Contacto', 'Contact'), href: '#contacto' },
];

export const about: L[] = [
  t('Estudio Ingeniería de Sistemas en la Universidad Peruana Unión y estoy en el décimo ciclo. Mi camino se ha centrado en el desarrollo Backend: modelar datos, exponer APIs claras y estructurar el código para que sea fácil de mantener.',
    'I study Systems Engineering at Universidad Peruana Unión and I am in my tenth semester. My path has focused on Backend development: modeling data, exposing clear APIs and structuring code so it is easy to maintain.'),
  t('He trabajado con varios ecosistemas (Java con Spring Boot, Node.js con Express y Python con Django y FastAPI) porque me gusta comparar enfoques y elegir la herramienta adecuada para cada problema.',
    'I have worked with several ecosystems (Java with Spring Boot, Node.js with Express and Python with Django and FastAPI) because I like comparing approaches and choosing the right tool for each problem.'),
  t('Mi interés a mediano plazo está en la ciencia de datos y la inteligencia artificial. Hoy aprendo análisis de datos con Python y fundamentos de Machine Learning, con la idea de integrarlos en sistemas de software reales.',
    'My medium-term interest is in data science and artificial intelligence. Today I am learning data analysis with Python and Machine Learning fundamentals, with the goal of integrating them into real software systems.'),
];

export const aboutFacts = [
  { label: t('Carrera', 'Degree'), value: t('Ingeniería de Sistemas', 'Systems Engineering') },
  { label: t('Ciclo', 'Semester'), value: t('Décimo', 'Tenth') },
  { label: t('Enfoque', 'Focus'), value: t('Backend y APIs', 'Backend and APIs') },
  { label: t('Aprendiendo', 'Learning'), value: t('Data Science y ML', 'Data Science and ML') },
];

// Ajusta `level` (1–4) y `learning` según tu nivel real. Es una autoevaluación, no una certificación.
export const techGroups: TechGroup[] = [
  {
    title: 'Backend Development',
    description: t('Lenguajes, frameworks y prácticas para construir servicios.', 'Languages, frameworks and practices for building services.'),
    items: [
      { name: 'Java', abbr: 'Jv', level: 3, note: t('POO y lógica de negocio', 'OOP and business logic') },
      { name: 'Spring Boot', abbr: 'Sb', level: 3, note: t('APIs REST y capas', 'REST APIs and layers') },
      { name: 'Node.js', abbr: 'No', level: 3, note: t('Runtime del lado servidor', 'Server-side runtime') },
      { name: 'Express.js', abbr: 'Ex', level: 3, note: t('Rutas y middlewares', 'Routes and middleware') },
      { name: 'Python', abbr: 'Py', level: 3, note: t('Scripts, backend y datos', 'Scripting, backend and data') },
      { name: 'Django', abbr: 'Dj', level: 2, note: t('Apps web con ORM', 'Web apps with ORM') },
      { name: 'FastAPI', abbr: 'Fa', level: 2, note: t('APIs tipadas y rápidas', 'Fast, typed APIs') },
      { name: 'REST API', abbr: 'Rs', level: 3, note: t('Diseño y consumo', 'Design and consumption') },
      { name: t('Arquitectura backend', 'Backend architecture'), abbr: 'Ar', level: 2, learning: true, note: t('Capas y patrones', 'Layers and patterns') },
      { name: t('POO', 'OOP'), abbr: 'Oo', level: 3, note: t('Diseño orientado a objetos', 'Object-oriented design') },
    ],
  },
  {
    title: t('Bases de datos', 'Databases'),
    description: t('Niveles por validar: edítalos según tu experiencia.', 'Levels to be validated: edit them to match your experience.'),
    items: [
      { name: 'PostgreSQL', abbr: 'Pg', level: 2, note: t('Por validar', 'To be validated') },
      { name: 'MySQL', abbr: 'My', level: 2, note: t('Por validar', 'To be validated') },
      { name: 'SQLite', abbr: 'Sq', level: 2, note: t('Por validar', 'To be validated') },
      { name: 'MongoDB', abbr: 'Mo', level: 1, note: t('Por validar', 'To be validated') },
    ],
  },
  {
    title: 'Data Science & AI',
    description: t('Área en la que estoy profundizando.', 'An area I am actively deepening.'),
    items: [
      { name: t('Python para datos', 'Python for data'), abbr: 'Py', level: 2, note: t('Análisis y limpieza', 'Analysis and cleaning') },
      { name: 'Pandas', abbr: 'Pd', level: 2, note: t('Manipulación de datos', 'Data manipulation') },
      { name: 'NumPy', abbr: 'Np', level: 2, note: t('Cálculo numérico', 'Numerical computing') },
      { name: t('Visualización de datos', 'Data visualization'), abbr: 'Vz', level: 2, note: t('Gráficos y dashboards', 'Charts and dashboards') },
      { name: t('Análisis exploratorio', 'Exploratory analysis'), abbr: 'Ea', level: 2, note: 'EDA' },
      { name: t('Preparación de datos', 'Data preparation'), abbr: 'Pr', level: 2, note: t('Limpieza y transformación', 'Cleaning and transformation') },
      { name: 'Machine Learning', abbr: 'Ml', level: 1, learning: true, note: t('En aprendizaje', 'In progress') },
      { name: t('Inteligencia Artificial', 'Artificial Intelligence'), abbr: 'Ai', level: 1, learning: true, note: t('En aprendizaje', 'In progress') },
    ],
  },
  {
    title: 'Tools & Development',
    description: t('Herramientas del flujo de trabajo diario.', 'Tools from my daily workflow.'),
    items: [
      { name: 'Git', abbr: 'Gt', level: 3 }, { name: 'GitHub', abbr: 'Gh', level: 3 },
      { name: 'Docker', abbr: 'Dk', level: 2, learning: true }, { name: 'Linux', abbr: 'Lx', level: 2 },
      { name: 'Postman', abbr: 'Pm', level: 3 }, { name: 'VS Code', abbr: 'Vs', level: 3 },
      { name: 'IntelliJ IDEA', abbr: 'Ij', level: 3 },
    ],
  },
];

// Proyectos demostrativos. Reemplázalos con tus repositorios reales:
// pon `repo` y `demo` con URLs válidas y `placeholder: false`.
export const projects: Project[] = [
  { name: t('API de gestión de usuarios', 'User management API'), category: 'Backend · Java', placeholder: true, repo: null, demo: null,
    description: t('API REST con autenticación, roles y validación de datos, organizada en capas.', 'REST API with authentication, roles and data validation, organized in layers.'),
    tech: ['Java', 'Spring Boot', 'PostgreSQL'], preview: ['POST /api/users', 'GET  /api/users/{id}', 'PUT  /api/users/{id}/role'] },
  { name: t('Gestor de tareas', 'Task manager'), category: 'Backend · Node.js', placeholder: true, repo: null, demo: null,
    description: t('Servicio para crear, asignar y filtrar tareas con middlewares y manejo de errores.', 'Service to create, assign and filter tasks, with middleware and error handling.'),
    tech: ['Node.js', 'Express', 'MongoDB'], preview: ['GET   /tasks?status=open', 'POST  /tasks', 'PATCH /tasks/:id'] },
  { name: t('API de productos', 'Products API'), category: 'Backend · Python', placeholder: true, repo: null, demo: null,
    description: t('API tipada con documentación automática (OpenAPI) para catálogo e inventario.', 'Typed API with automatic documentation (OpenAPI) for catalog and inventory.'),
    tech: ['Python', 'FastAPI', 'SQLite'], preview: ['GET  /products', 'POST /products', 'GET  /docs'] },
  { name: t('Panel de administración', 'Admin dashboard'), category: t('Web · Django', 'Web · Django'), placeholder: true, repo: null, demo: null,
    description: t('Aplicación web con panel de gestión, modelos relacionales y control de acceso.', 'Web application with a management panel, relational models and access control.'),
    tech: ['Python', 'Django', 'MySQL'], preview: ['/admin/', '/inventory/items/', '/reports/monthly/'] },
  { name: t('Dashboard de análisis de datos', 'Data analysis dashboard'), category: 'Data Science', placeholder: true, repo: null, demo: null,
    description: t('Exploración y visualización de un conjunto de datos público con métricas clave.', 'Exploration and visualization of a public dataset with key metrics.'),
    tech: ['Python', 'Pandas', 'NumPy'], preview: ['df.describe()', 'df.groupby("region").mean()', 'plot(trend)'] },
  { name: t('Modelo de clasificación', 'Classification model'), category: 'Machine Learning', placeholder: true, repo: null, demo: null,
    description: t('Flujo completo de preparación, entrenamiento y evaluación de un modelo de clasificación.', 'End-to-end workflow to prepare data, train and evaluate a classification model.'),
    tech: ['Python', 'Machine Learning'], preview: ['train_test_split(X, y)', 'model.fit(X_train, y_train)', 'evaluate(model)'] },
];

export const education = {
  institution: 'Universidad Peruana Unión',
  degree: t('Ingeniería de Sistemas', 'Systems Engineering'),
  status: t('En curso', 'In progress'),
  term: t('Décimo ciclo', 'Tenth semester'),
  focus: [t('Desarrollo de software', 'Software development'), t('Bases de datos', 'Databases'), t('Arquitectura de software', 'Software architecture')], // TODO: ajusta a tus cursos reales
};

// Autoevaluación editable (1–5).
export const softSkills = [
  { name: t('Trabajo en equipo', 'Teamwork'), score: 4 }, { name: t('Resolución de problemas', 'Problem solving'), score: 4 },
  { name: t('Adaptabilidad', 'Adaptability'), score: 4 }, { name: t('Aprendizaje continuo', 'Continuous learning'), score: 5 },
  { name: t('Comunicación', 'Communication'), score: 3 }, { name: t('Organización', 'Organization'), score: 4 },
  { name: t('Pensamiento crítico', 'Critical thinking'), score: 4 }, { name: t('Responsabilidad', 'Responsibility'), score: 4 },
  { name: t('Creatividad', 'Creativity'), score: 3 }, { name: t('Gestión del tiempo', 'Time management'), score: 3 },
];

export const interests = [
  'Backend Engineering', 'Software Architecture', 'API Development', 'Data Science',
  'Artificial Intelligence', 'Machine Learning', 'Automation', 'Cloud Computing',
];

export const languages = [
  { name: t('Español', 'Spanish'), level: t('Nativo', 'Native') },
  { name: t('Inglés', 'English'), level: t('Intermedio', 'Intermediate') },
];
