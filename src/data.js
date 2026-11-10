export const profile = {
  name: 'Felipe Costa Monteiro',
  github: 'https://github.com/ofelpys',
  linkedin: 'https://www.linkedin.com/in/felipe-monteiro-4ab5721a4/',
  email: 'felipecostamonteiro@gmail.com',
};

export const projects = [
  {
    id: 'forcamente', number: '01', name: 'ForçaMente', category: 'Full stack',
    label: 'PROJETO FINAL DE CURSO', visual: 'force',
    description: 'Plataforma em desenvolvimento para informação e capacitação de iniciantes na musculação. Meu PFC conecta a construção de interfaces em React ao desenvolvimento de uma API em Java.',
    tags: ['React', 'Spring Boot', 'PostgreSQL'],
    links: [
      { label: 'Front-end', href: 'https://github.com/ofelpys/PFC-FRONTEND' },
      { label: 'Back-end', href: 'https://github.com/ofelpys/PFC-BACKEND' },
    ],
  },
  {
    id: 'login', number: '02', name: 'Login Seguro', category: 'Back-end',
    label: 'APLICATIVOS WEB', visual: 'secure',
    description: 'Aplicação acadêmica com cadastro, autenticação, controle de acesso por perfil e gerenciamento de usuários. Integra Spring Security, Thymeleaf e MongoDB Atlas.',
    tags: ['Java', 'Spring Security', 'MongoDB'],
    links: [{ label: 'Ver código', href: 'https://github.com/ofelpys/login-seguro' }],
  },
  {
    id: 'brasilapi', number: '03', name: 'BrasilAPI', category: 'Front-end',
    label: 'PROGRAMAÇÃO PARA INTERNET', visual: 'api',
    description: 'Atividade de desenvolvimento web com JavaScript e consumo de dados da BrasilAPI. Prática de requisições HTTP, manipulação do DOM e apresentação de informações na interface.',
    tags: ['JavaScript', 'HTML & CSS', 'API REST'],
    links: [{ label: 'Ver código', href: 'https://github.com/ofelpys/atividade-brasilAPI' }],
  },
  {
    id: 'forcatotal', number: '04', name: 'Força Total', category: 'Full stack',
    label: 'PARADIGMAS DE ORIENTAÇÃO A OBJETOS', visual: 'total',
    description: 'MVP acadêmico de gestão de uma rede de academias. Reúne requisitos, prototipação e implementação de módulos com React, Java e banco de dados relacional.',
    tags: ['React', 'Java', 'PostgreSQL'],
    links: [{ label: 'Ver código', href: 'https://github.com/ofelpys/M1_software_IA' }],
  },
];

export const stacks = [
  { number: '01', title: 'Interfaces & experiências', description: 'Do HTML semântico aos componentes reutilizáveis.', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap'] },
  { number: '02', title: 'Lógica & aplicações', description: 'Regras de negócio, orientação a objetos e APIs.', items: ['Java', 'Spring Boot', 'Spring Security', 'Thymeleaf', 'API REST', 'Python'] },
  { number: '03', title: 'Dados & ferramentas', description: 'Persistência, versionamento e entrega de projetos.', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Git', 'GitHub', 'Vite', 'Vercel'] },
];
