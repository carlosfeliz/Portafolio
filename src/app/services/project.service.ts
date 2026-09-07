import { Injectable } from '@angular/core';

export interface Localized {
  es: string;
  en: string;
}

export interface Project {
  name: Localized;
  description: Localized;
  github?: string;
  demo?: string;
  images: string[];
  technologies: string[];
  category: 'web' | 'mobile';
  isPrivate: boolean;
}

export interface TechDetail {
  title: string;
  experience: Localized;
  description: Localized;
  keySkills: string[];
  projects: string[];
}

@Injectable({ providedIn: 'root' })
export class ProjectService {
  getProjects(): Project[] {
    return [
      {
        name: { es: 'CFR POS - Punto de Venta & Facturación Fiscal (NCF)', en: 'CFR POS - Point of Sale & Tax Invoicing (NCF)' },
        description: {
          es: 'Sistema empresarial de Punto de Venta y Facturación Fiscal (NCF) para República Dominicana. Desarrollado con Laravel 10, Livewire y MySQL (`G:\\LaravelProyects\\laragon\\cfrpos`). Módulos de inventario, ventas rápidas, reportes de cierre de caja y comprobantes fiscales.',
          en: 'Enterprise POS system with Dominican Republic tax receipt (NCF) invoicing built with Laravel 10, Livewire, and MySQL. Features inventory modules, fast checkout, cash closing reports, and DGII tax receipts.',
        },
        github: 'https://github.com/carlosfeliz',
        images: ['images/cfrpos/cfrpos-landing.png', 'images/cfrpos/cfrpos-dashboard.png', 'images/cfrpos/cfrpos-ventas.png', 'images/cfrpos/cfrpos-facturas.png', 'images/cfrpos/cfrpos-login.png'],
        technologies: ['laravel', 'livewire', 'php', 'mysql', 'bootstrap'],
        category: 'web',
        isPrivate: true,
      },
      {
        name: { es: 'Sistema de Gestión de Condominios & Residenciales', en: 'Condominium & Property Management System' },
        description: {
          es: 'Plataforma full-stack para la administración de condominios. Arquitectura de desacoplada compuesta por Frontend en Angular 19 (`condoos-frontend`) y Backend de microservicios RESTful en Java Spring Boot (`condoos-backend`) con MySQL.',
          en: 'Full-stack platform for condominium management with decoupled architecture: Angular 19 frontend (`condoos-frontend`) paired with Java Spring Boot REST microservices backend (`condoos-backend`) and MySQL.',
        },
        github: 'https://github.com/carlosfeliz',
        images: ['images/condominios/condominios-app.png', 'images/condominios/condominios-login.png', 'images/condominios/condominios-full.png'],
        technologies: ['angular', 'spring-boot', 'java', 'typescript', 'mysql', 'bootstrap'],
        category: 'web',
        isPrivate: true,
      },
      {
        name: { es: 'SisElect - Sistema Electoral & Analítica Politica', en: 'SisElect - Electoral Roll & Voting Analytics' },
        description: {
          es: 'Plataforma de padrón electoral y gestión de votaciones. Sistema distribuido con Frontend interactivo en React.js (`voting-frontend`) y Backend API RESTful en Laravel PHP (`voting-system`) con MySQL.',
          en: 'Electoral voter roll and voting management platform. Built with an interactive React.js frontend (`voting-frontend`) paired with a Laravel PHP RESTful API backend (`voting-system`) and MySQL.',
        },
        github: 'https://github.com/carlosfeliz',
        images: ['images/siselect/siselect-home.png', 'images/siselect/siselect-full.png'],
        technologies: ['react', 'laravel', 'php', 'mysql', 'javascript', 'bootstrap'],
        category: 'web',
        isPrivate: true,
      },
      {
        name: { es: 'Web Corporativa & Reservas Vista Montaña', en: 'Vista Montaña Resort & Restaurant Web' },
        description: {
          es: 'Plataforma web para la gestión de reservas, membresías y servicio gastronómico del resort Vista Montaña (`vista-Restaurante`). Desarrollada con Laravel PHP, Blade templating y MySQL.',
          en: 'Web management platform for reservations, memberships, and restaurant dining at Vista Montaña resort (`vista-Restaurante`). Built with Laravel PHP, Blade templating, and MySQL.',
        },
        github: 'https://github.com/carlosfeliz',
        images: ['images/vista/vista-home.png', 'images/vista/vista-login.png', 'images/vista/vista-full.png'],
        technologies: ['laravel', 'php', 'mysql', 'bootstrap'],
        category: 'web',
        isPrivate: true,
      },
      {
        name: { es: 'Node.js Backend (MongoDB & TypeScript)', en: 'Node.js Backend (MongoDB & TypeScript)' },
        description: {
          es: 'API RESTful escalable construida con Node.js, Express y TypeScript. Gestiona operaciones CRUD de usuarios, autenticación segura con bcryptjs y persistencia en MongoDB Atlas. Sigue arquitectura MVC modular.',
          en: 'Scalable RESTful API built with Node.js, Express, and TypeScript. Manages user CRUD operations, secure authentication with bcryptjs, and MongoDB Atlas persistence. Follows modular MVC architecture.',
        },
        github: 'https://github.com/carlosfeliz/nodejs-backend-mongodb',
        images: ['images/nodejs-backend/main.png'],
        technologies: ['nodejs', 'express', 'mongodb', 'typescript', 'docker'],
        category: 'web',
        isPrivate: false,
      },
      {
        name: { es: 'Glass Onion: Knives Out App', en: 'Glass Onion: Knives Out App' },
        description: {
          es: 'Experiencia inmersiva para fans de "Glass Onion". Incluye música de fondo, clips de video, perfiles de personajes animados y una interfaz rica en multimedia. Arquitectura basada en Pantallas (Screen-Based) enfocada en presentación visual.',
          en: 'Immersive experience for "Glass Onion" fans. Features background music, video clips, animated character profiles, and a multimedia-rich interface. Screen-Based architecture focused on visual presentation.',
        },
        github: 'https://github.com/carlosfeliz/Glass_Onion_App',
        images: [
          'images/glass-onion/splash.png',
          'images/glass-onion/home.png',
          'images/glass-onion/characters.png',
          'images/glass-onion/moments.png',
          'images/glass-onion/about.png',
        ],
        technologies: ['flutter', 'audioplayers', 'youtube_player_flutter', 'url_launcher'],
        category: 'mobile',
        isPrivate: false,
      },
      {
        name: { es: 'PokeApi Clean Architecture', en: 'PokeApi Clean Architecture' },
        description: {
          es: 'Aplicación Flutter escalable que interactúa con la API de Pokémon. Implementa Arquitectura Limpia (Domain, Data, Presentation), gestión de estado con BLoC, persistencia con Hive e inyección de dependencias.',
          en: 'Scalable Flutter application interacting with the Pokémon API. Implements Clean Architecture (Domain, Data, Presentation), BLoC state management, Hive persistence, and dependency injection.',
        },
        github: 'https://github.com/carlosfeliz/pokeApi_CleanCode_Basic',
        images: ['images/pokeapi/list.png', 'images/pokeapi/detail.png', 'images/pokeapi/stats.png'],
        technologies: ['flutter', 'bloc', 'dio', 'hive', 'clean-arch'],
        category: 'mobile',
        isPrivate: false,
      },
      {
        name: { es: 'Ecommerce API Fake Store Demo', en: 'Ecommerce API Fake Store Demo' },
        description: {
          es: 'Aplicación moderna de comercio electrónico desarrollada con Flutter. Sigue los principios de Arquitectura Limpia, gestión de estado con BLoC, persistencia local con Hive e inyección de dependencias con GetIt.',
          en: 'Modern e-commerce application built with Flutter. Follows Clean Architecture principles, BLoC for state management, local persistence with Hive, and Dependency Injection with GetIt.',
        },
        github: 'https://github.com/carlosfeliz/Ecomerce-Api-Fake-Store-Demo',
        images: [
          'images/ecommerce/products.png',
          'images/ecommerce/home.png',
          'images/ecommerce/electronics.png',
          'images/ecommerce/jewelry.png',
          'images/ecommerce/favorites.png',
        ],
        technologies: ['flutter', 'bloc', 'dio', 'hive', 'get_it'],
        category: 'mobile',
        isPrivate: false,
      },
      {
        name: { es: 'Sistema de Gestión de Campaña Política', en: 'Political Campaign Management System' },
        description: {
          es: 'Sistema administrativo avanzado para campañas políticas construido con Laravel 10. Incluye estadísticas de votantes en tiempo real, herramientas de organización y analíticas regionales.',
          en: 'Advanced administrative system for political campaigns built with Laravel 10. Features real-time voter statistics, campaign organization tools, and regional analytics.',
        },
        github: 'https://github.com/carlosfeliz',
        images: ['images/politicalogin.png', 'images/politicadashboard.png'],
        technologies: ['laravel', 'mysql', 'bootstrap'],
        category: 'web',
        isPrivate: true,
      },
      {
        name: { es: 'Sistema POS y Contabilidad (NCF)', en: 'POS & Accounting System (NCF)' },
        description: {
          es: 'Sistema de Punto de Venta empresarial adaptado a las regulaciones fiscales de República Dominicana (NCF). Incluye módulos contables, gestión de inventario y reportes en tiempo real.',
          en: 'Enterprise-grade Point of Sale system tailored for Dominican Republic tax regulations (NCF). Includes full accounting modules, inventory management, and real-time reporting.',
        },
        github: 'https://github.com/carlosfeliz',
        images: ['images/pos1.png', 'images/pos2.png', 'images/pos3.png', 'images/pos4.png'],
        technologies: ['laravel', 'livewire', 'mysql', 'bootstrap'],
        category: 'web',
        isPrivate: true,
      },
      {
        name: { es: 'Gestor de Infraestructura VoIP', en: 'VoIP Infrastructure Manager' },
        description: {
          es: 'Herramienta de gestión de infraestructura digital para sistemas VoIP, optimizando el enrutamiento de red y las configuraciones de dispositivos.',
          en: 'Digital infrastructure management tool for VoIP systems, optimizing network routing and device configurations.',
        },
        github: 'https://github.com/carlosfeliz',
        images: ['images/void4.png', 'images/void2.png'],
        technologies: ['laravel', 'livewire', 'php'],
        category: 'web',
        isPrivate: true,
      },
      {
        name: { es: 'Web Corporativa FM Asesores', en: 'FM Asesores Corporate Web' },
        description: {
          es: 'Sitio web corporativo profesional para una firma de consultoría, con gestión de servicios y módulos de consulta para clientes.',
          en: 'Professional corporate website for a consulting firm, featuring services management and client inquiry modules.',
        },
        github: 'https://github.com/carlosfeliz/Tuseg-pagina-web',
        images: ['images/fmasesores1.png', 'images/fmasesores2.png'],
        technologies: ['wordpress', 'php'],
        category: 'web',
        isPrivate: false,
      },
      {
        name: { es: 'Sistema de Registro de Usuarios (API DDD)', en: 'User Registration System (DDD API)' },
        description: {
          es: 'Aplicación backend robusta desarrollada en PHP puro siguiendo los principios de Domain-Driven Design (DDD) y Arquitectura Limpia. Implementa registros validados, manejo seguro de contraseñas y eventos de dominio bajo prácticas de TDD.',
          en: 'Robust backend application developed in pure PHP following Domain-Driven Design (DDD) and Clean Architecture principles. Features validated registrations, secure password handling, and domain events using TDD practices.',
        },
        github: 'https://github.com/carlosfeliz/PHP_DDD_TEST',
        images: ['images/php-ddd.png'],
        technologies: ['php', 'ddd', 'docker', 'mysql', 'doctrine'],
        category: 'web',
        isPrivate: false,
      },
      {
        name: { es: 'PokeList - Pokédex App', en: 'PokeList - Pokédex App' },
        description: {
          es: 'Explora y gestiona tu lista personalizada de Pokémon. Aplicación Angular que consume PokeAPI, permite agregar favoritos con alias personalizados, editar y eliminar. Usa sessionStorage para persistencia y ngx-pagination para navegación eficiente.',
          en: 'Explore and manage your personalized Pokémon list. Angular application consuming PokeAPI, allows adding favorites with custom aliases, editing and deleting. Uses sessionStorage for persistence and ngx-pagination for efficient navigation.',
        },
        github: 'https://github.com/carlosfeliz/Pokemon_List',
        demo: 'https://carlosfeliz.github.io/Pokemon_List/',
        images: ['images/pokelist/main.png', 'images/pokelist/capture.png', 'images/pokelist/favorites.png', 'images/pokelist/release.png', 'images/pokelist/empty.png'],
        technologies: ['angular', 'typescript', 'rxjs', 'http-client', 'ngx-pagination'],
        category: 'web',
        isPrivate: false,
      },
    ];
  }

  techDetails(): Record<string, TechDetail> {
    return {
      csharp: {
        title: 'Backend & Enterprise Development with C# (.NET Core)',
        experience: { es: '4+ Años', en: '4+ Years' },
        description: {
          es: 'Desarrollo de aplicaciones robustas, APIs RESTful de alto rendimiento y arquitectura limpia orientada a objetos con C# y la plataforma .NET.',
          en: 'Development of robust applications, high-performance RESTful APIs, and clean object-oriented architecture using C# and the .NET platform.',
        },
        keySkills: ['ASP.NET Core Web API', 'LINQ', 'Dependency Injection', 'Async/Await', 'Clean Architecture', 'NuGet'],
        projects: ['Sistema ERP & REST API (.NET 8 & EF Core)', 'Empresarial Backend API'],
      },
      'entity-framework': {
        title: 'ORM & Data Access with Entity Framework Core',
        experience: { es: '4+ Años', en: '4+ Years' },
        description: {
          es: 'Diseño y gestión de modelos de datos relacionales, migraciones automáticas, optimización de consultas LINQ y patrones Repository / Unit of Work con Entity Framework Core.',
          en: 'Design and management of relational data models, automatic migrations, LINQ query optimization, and Repository / Unit of Work patterns with Entity Framework Core.',
        },
        keySkills: ['EF Core Migrations', 'Code-First / DbFirst', 'LINQ Queries', 'Repository Pattern', 'SQL Server Integration'],
        projects: ['Sistema ERP & REST API (.NET 8 & EF Core)', 'Sistema POS Contabilidad'],
      },
      flutter: {
        title: 'Mobile Development with Flutter',
        experience: { es: '5+ Años', en: '5+ Years' },
        description: {
          es: 'Experto en crear aplicaciones móviles multiplataforma de alto rendimiento para iOS y Android utilizando una única base de código.',
          en: 'Expertise in building high-performance, cross-platform mobile applications for iOS and Android using a single codebase.',
        },
        keySkills: ['Provider/Bloc', 'Firebase', 'Animations', 'API Rest'],
        projects: ['Glass_Onion_App', 'Tarea6-Super-App', 'PruebaMovil', 'Tuseg Web Mobile Sync'],
      },
      laravel: {
        title: 'Back-end with PHP & Laravel',
        experience: { es: '6+ Años', en: '6+ Years' },
        description: {
          es: 'Experiencia de nivel senior en el desarrollo de APIs RESTful y sistemas web complejos con altos estándares de seguridad.',
          en: 'Senior-level experience in developing robust RESTful APIs and complex web systems with high security standards.',
        },
        keySkills: ['Eloquent ORM', 'Middleware & Security', 'Job Queues', 'Pest/PHPUnit'],
        projects: ['soft-ui-dashboard-laravel', 'Voting System API', 'Facial Recognition Microservice'],
      },
      vuejs: {
        title: 'Frontend with Vue.js',
        experience: { es: '3+ Años', en: '3+ Years' },
        description: {
          es: 'Construyendo interfaces de usuario modernas y reactivas con los últimos estándares de Vue.',
          en: 'Building modern and reactive user interfaces with the latest Vue standards.',
        },
        keySkills: ['Composition API', 'Pinia', 'Vue Router', 'Vite'],
        projects: ['Admin Dashboard Systems', 'Dynamic Content Portfolios'],
      },
      livewire: {
        title: 'Full Stack with Laravel Livewire',
        experience: { es: '4+ Años', en: '4+ Years' },
        description: {
          es: 'Creando interfaces dinámicas y reactivas sin abandonar la comodidad de la lógica de backend de Laravel.',
          en: 'Creating dynamic, reactive interfaces without leaving the comfort of Laravel backend logic.',
        },
        keySkills: ['Reactive Components', 'Partial Reloads', 'Real-time Validation', 'Alpine.js'],
        projects: ['Real-time Search Tables', 'Interactive Dashboards'],
      },
      'spring-boot': {
        title: 'Enterprise Java with Spring Boot',
        experience: { es: '5+ Años', en: '5+ Years' },
        description: {
          es: 'Diseñando y desplegando microservicios escalables para aplicaciones de nivel empresarial.',
          en: 'Designing and deploying scalable microservices for enterprise-level applications.',
        },
        keySkills: ['Spring Cloud', 'Spring Security', 'Microservices', 'JPA / Hibernate'],
        projects: ['Enterprise Microservices', 'Enterprise Data Processing'],
      },
      angular: {
        title: 'Front-end with Angular',
        experience: { es: '5+ Años', en: '5+ Years' },
        description: {
          es: 'Construyendo aplicaciones empresariales a gran escala con arquitectura sólida y patrones reactivos.',
          en: 'Building large-scale enterprise applications with strong architecture and reactive patterns.',
        },
        keySkills: ['RxJS', 'Standalone Components', 'NGRX', 'SSR'],
        projects: ['Portafolio (Angular 19)', 'PokeList - Pokédex App', 'ProyectoFinal (Finanzas)', 'Modern Portfolio v2'],
      },
      php: {
        title: 'Backend with Pure PHP',
        experience: { es: '6+ Años', en: '6+ Years' },
        description: {
          es: 'Experto en el desarrollo de arquitecturas robustas y escalables utilizando PHP puro. Implementación de principios SOLID, Patrones de Diseño y Arquitectura Limpia basada en Domain-Driven Design (DDD).',
          en: 'Expert in developing robust and scalable architectures using Pure PHP. Implementation of SOLID principles, Design Patterns, and Clean Architecture based on Domain-Driven Design (DDD).',
        },
        keySkills: ['DDD', 'Clean Architecture', 'SOLID', 'Design Patterns', 'TDD (PHPUnit)'],
        projects: ['PHP_DDD_TEST', 'TeaMW-Programacion-3-Final', 'Final-Prog.-III- (Sistema Odontológico)'],
      },
      mysql: {
        title: 'Database Design with MySQL',
        experience: { es: '6+ Años', en: '6+ Years' },
        description: {
          es: 'Diseño y optimización de bases de datos relacionales complejas, asegurando la integridad de la información y consultoría avanzada.',
          en: 'Design and optimization of complex relational databases, ensuring information integrity and advanced consulting.',
        },
        keySkills: ['Relational Design', 'Index Optimization', 'Stored Procedures', 'Doctrine ORM'],
        projects: ['Voting System', 'POS Accounting System', 'Final-Prog.-III-'],
      },
      nodejs: {
        title: 'Backend with Node.js',
        experience: { es: '4+ Años', en: '4+ Years' },
        description: {
          es: 'Desarrollo de APIs RESTful y servicios backend escalables utilizando Node.js y Express con un enfoque en alto rendimiento y asincronía.',
          en: 'Development of RESTful APIs and scalable backend services using Node.js and Express with a focus on high performance and asynchrony.',
        },
        keySkills: ['Express', 'TypeScript', 'MongoDB / Mongoose', 'JWT Authentication', 'Event-Driven Architecture'],
        projects: ['nodejs-backend-mongodb', 'Node.js Backend (MongoDB & TypeScript)'],
      },
      express: {
        title: 'Web Framework with Express.js',
        experience: { es: '4+ Años', en: '4+ Years' },
        description: {
          es: 'Framework web minimalista y flexible para Node.js, utilizado para construir APIs robustas y aplicaciones web de una sola página.',
          en: 'Minimalist and flexible web framework for Node.js, used to build robust APIs and single-page web applications.',
        },
        keySkills: ['Routing', 'Middleware', 'RESTful API', 'Error Handling'],
        projects: ['nodejs-backend-mongodb'],
      },
      mongodb: {
        title: 'NoSQL Database with MongoDB',
        experience: { es: '4+ Años', en: '4+ Years' },
        description: {
          es: 'Base de datos NoSQL líder, ideal para manejar grandes volúmenes de datos no estructurados con alta escalabilidad.',
          en: 'Leading NoSQL database, ideal for handling large volumes of unstructured data with high scalability.',
        },
        keySkills: ['Mongoose ODM', 'Aggregation Framework', 'Indexing', 'NoSQL Modeling'],
        projects: ['nodejs-backend-mongodb'],
      },
      postgresql: {
        title: 'Relational Database with PostgreSQL',
        experience: { es: '3+ Años', en: '3+ Years' },
        description: {
          es: 'Base de datos relacional avanzada y de código abierto conocida por su fiabilidad y robustez.',
          en: 'Advanced, open-source relational database known for its reliability and robustness.',
        },
        keySkills: ['SQL', 'Joins', 'Transactions', 'Performance Tuning'],
        projects: ['Enterprise Data Systems'],
      },
      firebase: {
        title: 'Cloud Services with Firebase',
        experience: { es: '5+ Años', en: '5+ Years' },
        description: {
          es: 'Plataforma de desarrollo de Google que permite crear apps móviles y web de alta calidad en tiempo real.',
          en: 'Google development platform that enables the creation of high-quality mobile and web apps in real-time.',
        },
        keySkills: ['Firestore', 'Authentication', 'Cloud Functions', 'Hosting'],
        projects: ['Mobile Firebase Realtime App', 'Real-time Mobile Sync'],
      },
      ionic: {
        title: 'Hybrid Mobile with Ionic',
        experience: { es: '3+ Años', en: '3+ Years' },
        description: {
          es: 'Framework de código abierto para crear aplicaciones móviles híbridas utilizando tecnologías web estándar.',
          en: 'Open-source framework for building hybrid mobile applications using standard web technologies.',
        },
        keySkills: ['Capacitor', 'Angular Integration', 'Cross-platform', 'UI Components'],
        projects: ['Mobile Web Wrappers'],
      },
      docker: {
        title: 'Containerization with Docker',
        experience: { es: '3+ Años', en: '3+ Years' },
        description: {
          es: 'Plataforma para automatizar el despliegue de aplicaciones dentro de contenedores de software.',
          en: 'Platform for automating the deployment of applications within software containers.',
        },
        keySkills: ['Docker Compose', 'Containerization', 'Image Creation', 'CI/CD'],
        projects: ['nodejs-backend-mongodb (Dockerized)', 'Microservices Deployment'],
      },
      kubernetes: {
        title: 'Orchestration with Kubernetes',
        experience: { es: '2+ Años', en: '2+ Years' },
        description: {
          es: 'Sistema de orquestación de contenedores de código abierto para automatizar el despliegue y la gestión de aplicaciones.',
          en: 'Open-source container orchestration system for automating application deployment and management.',
        },
        keySkills: ['K8s Clusters', 'Pod Management', 'Scaling', 'Load Balancing'],
        projects: ['Cloud Infrastructure'],
      },
      'azure-devops': {
        title: 'CI/CD with Azure DevOps',
        experience: { es: '3+ Años', en: '3+ Years' },
        description: {
          es: 'Gestión del ciclo de vida de aplicaciones, pipelines de CI/CD y gestión de proyectos ágiles.',
          en: 'Application lifecycle management, CI/CD pipelines, and agile project management.',
        },
        keySkills: ['YAML Pipelines', 'Release Management', 'Artifacts', 'Azure Repos'],
        projects: ['Service-Configuration Management'],
      },
    };
  }

  techIconPath(tech: string): string {
    const map: Record<string, string> = {
      csharp: 'csharp/csharp-original.svg',
      'c#': 'csharp/csharp-original.svg',
      'entity-framework': 'dotnetcore/dotnetcore-original.svg',
      entityframework: 'dotnetcore/dotnetcore-original.svg',
      dotnet: 'dotnetcore/dotnetcore-original.svg',
      dotnetcore: 'dotnetcore/dotnetcore-original.svg',
      sqlserver: 'microsoftsqlserver/microsoftsqlserver-plain.svg',
      mssql: 'microsoftsqlserver/microsoftsqlserver-plain.svg',
      angular: 'angularjs/angularjs-original.svg',
      flutter: 'flutter/flutter-original.svg',
      laravel: 'laravel/laravel-original.svg',
      'spring-boot': 'spring/spring-original.svg',
      vuejs: 'vuejs/vuejs-original.svg',
      livewire: 'livewire/livewire-original.svg',
      mysql: 'mysql/mysql-original.svg',
      php: 'php/php-original.svg',
      java: 'java/java-original.svg',
      nodejs: 'nodejs/nodejs-original.svg',
      express: 'express/express-original.svg',
      mongodb: 'mongodb/mongodb-original.svg',
      postgresql: 'postgresql/postgresql-original.svg',
      firebase: 'firebase/firebase-plain.svg',
      ionic: 'ionic/ionic-original.svg',
      docker: 'docker/docker-original.svg',
      kubernetes: 'kubernetes/kubernetes-plain.svg',
      'azure-devops': 'azuredevops/azuredevops-original.svg',
      bootstrap: 'bootstrap/bootstrap-original.svg',
      css: 'css3/css3-original.svg',
      html: 'html5/html5-original.svg',
      typescript: 'typescript/typescript-original.svg',
      javascript: 'javascript/javascript-original.svg',
      react: 'react/react-original.svg',
      reactjs: 'react/react-original.svg',
      bloc: 'flutter/flutter-original.svg',
      hive: 'flutter/flutter-original.svg',
      dio: 'flutter/flutter-original.svg',
      doctrine: 'doctrine/doctrine-original.svg',
    };
    const icon = map[tech.toLowerCase()];
    return icon
      ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}`
      : 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg';
  }
}