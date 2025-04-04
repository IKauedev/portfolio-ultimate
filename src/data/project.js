export const projects = [
  {
    id: 1,
    title: 'Clone do Twitter Em Microsserviços',
    date: 'Set 2024 - Out 2024',
    description:
      'Projeto inspirado no Twitter, desenvolvido para aprofundar conhecimentos em microsserviços e escalabilidade. Utiliza Java com Spring Boot para o backend, Spring Security para autenticação e AWS para hospedagem e infraestrutura. Implementa padrões modernos de arquitetura distribuída.',
    image: 'https://i.postimg.cc/3xVNXjVv/3dcfd26a-e7c4-4147-af66-58eeee380e75.jpg',
    tags: ['Spring Security', 'Java', 'Spring Boot', 'AWS'],
    category: 'Full Stack',
    github: 'https://github.com/iKaueMatos/twitter-microservices',
    webapp: 'https://x-twitter-front-end.vercel.app/logout',
    fullstack: true,
  },
  {
    id: 2,
    title: 'Sistema de Delivery para Restaurantes',
    date: 'Jun 2023 - Ago 2023',
    description:
      'Sistema de delivery desenvolvido como desafio acadêmico, integrando um backend robusto em Java com Spring Boot e um frontend moderno com React.js e Tailwind CSS. A aplicação simula um sistema de pedidos online, com interface intuitiva e API REST para comunicação eficiente.',
    image: 'https://i.postimg.cc/wvcJBQvF/imagem.png',
    tags: ['React.js', 'Tailwind CSS', 'Java', 'Spring Boot'],
    category: 'Full Stack',
    github: 'https://github.com/Nova-Software-Organization/Nova-core-legacy',
    webapp: 'https://delivery-react-gp4llt9kh-ikauematos.vercel.app/',
    fullstack: true,
  },
  {
    id: 3,
    title: 'Nova-Mail: Sistema de Envio de E-mails',
    date: 'Jun 2023 - Jul 2023',
    description:
      'Módulo de envio de e-mails da plataforma Nova Software, utilizando RabbitMQ para mensageria e JMail para envio eficiente e seguro. Segue padrões de arquitetura orientada a serviços e boas práticas com Design Patterns e DDD.',
    image: 'https://i.postimg.cc/Bv8Wk2sw-/OIG4.jpg',
    tags: ['JMail', 'Java', 'Spring Boot', 'RabbitMQ', 'DDD'],
    category: 'Back-end',
    github: 'https://github.com/iKaueMatos/Nova-mail',
    webapp: false,
  },
  {
    id: 4,
    title: 'Nova-Auth: Autenticação e Autorização Segura',
    date: 'Jun 2023 - Jul 2023',
    description:
      'Sistema de autenticação e autorização para a Nova Software, implementado com Spring Security e JWT. Utiliza padrões de arquitetura como DDD para garantir escalabilidade e segurança na autenticação de usuários.',
    image: 'https://i.postimg.cc/1XRcfcW9/OIG3-1.jpg',
    tags: ['Spring Security', 'Java', 'Spring Boot', 'JWT', 'DDD'],
    category: 'Back-end',
    github: 'https://github.com/iKaueMatos/Nova-auth',
    webapp: false,
  },
];
