import React from "react";

const LanguageTexts:any = {
  es: {
    navbar: {
      a1: 'Acerca de mi',
      a2: 'Proyectos',
      a3: 'Contacto',
    },
    main: {
      span1: ', mi nombre es ',
      span2: ' y soy un ...',
      span3: 'Desliza abajo para ver más contenido',
    },
    about: {
      h2: 'Estos son mis principales conocimientos.',
      title: 'Acerca de mi', 
      span1: 'Hola, mi nombre es Benjamin Cordoba, tengo 19 años. He estado estudiando desarrollo web durante 2 años. Y en el último año comencé a ser estudiante de ingeniería en informática.',
      span2: ' (Por ahora casi todo es lógica y matemáticas)',
      span3: 'He participado en conferencias/cursos/charlas y en general aprendiendo de diferentes profesionales aquí en Argentina.',
      span4: '(Detallaré esto más adelante.)',
    },
    learning_card: {
      title: '¿Dónde Aprendí?',
      span1: 'La mayor parte de mis conocimientos provienen de',
      span2: ' Cursos',
      span3: ' (CoderHouse, Devtalles o Codo a Codo),',
      span4: ' Mi carrera universitaria',
      span5: ', Formas de aprendizaje autodidactas',
      span6: '(Cursos web, Stack Overflow, MDN),',
      span7: ' Prácticas con compañeros,',
      span8: ' Proyectos',
      span9: ' y sobre todo',
      span10: ' Tiempo, mucho tiempo',
    },
    help_card: {
      title: '¿Cómo Puedo Ayudarte?',
      span1: 'Para mí, es importante conocer todos los aspectos del proceso de desarrollo web, ',
      span2: 'aprenderé cualquier tecnología necesaria que me ayude a cumplir mis objetivos. ',
      span3: ' Por ahora me estoy especializando únicamente en Front End.'
    },
    why_me_card: {
      title: '¿Por qué Elegirme?',
      span1: 'Una de mis',
      span2: 'Principales Cualidades',
      span3: 'es ser resolutivo.',
      span4: ' Una de las cosas que más me llama la atención en mi carrera universitaria es ',
      span5: 'cómo te preparan para resolver problemas usando la lógica.',
      span6: ' Es por esto que sé que, ',
      span7: 'podré resolver cualquier desafío que tenga por delante.'
    },
    login_project: {
      title1: 'Proyectos',
      title2: 'Principales',
      h2: 'Proyecto Inicio de Sesión',
      span1: 'Proyecto sobre una página de inicio de sesión, Desarrollada con',
      span2: 'Next.js y React Hook Form, ',
      span3: 'estilizada usando',
      span4: 'Tailwind CSS. ',
      span5: 'La aplicación también implementa encriptación',
      span6: ' AES (Estándar de Encriptación Avanzada),',
      span7: 'para asegurar los datos almacenados localmente. Esto es posible gracias a ',
      span8: 'CryptoJS.'
    },
    ecommerce_project: {
      ah2: 'Proyecto de Comercio Electrónico',
      aspan1: 'Aplicación de comercio electrónico',
      aspan2: ' Transpilada a TSX',
      aspan3: 'desde un antiguo proyecto basado en JavaScript',
      aspan4: 'para un código más estable',
      aspan5: 'y',
      aspan6: 'limpio',
      aspan7: 'El proyecto fue creado en ',
      aspan8: 'Next.js',
      aspan9: 'y está estilizado con ',
      aspan10: 'CSS Puro',
    },
    game_project: {
      bh2: 'Proyecto de Juego',
      bspan1: 'Proyecto de Ahorcado en TypeScript',
      bspan2: ' CSS Puro',
      bspan3: ' y',
      bspan4: 'Webpack',
      bspan5: ', aunque el proyecto no es extenso, fue un desafío trabajar en',
      bspan6: 'la lógica de las funciones',
      bspan7: 'en un juego que depende de tantos tipos de datos, en un lenguaje fuertemente tipado como es  ',
      bspan8: 'TypeScript.',
    },
    contact: {
      title: 'Contacto',
      span1: '¿Necesitas ponerte en contacto conmigo? Por favor, consulta mi información de contacto en las tarjetas a continuación.',
      span2: 'Contacto por Email',
      span3: 'Teléfono o Whatsapp',
      span4: 'Perfil de GitHub'
    },
    footer: {
      title1: 'PortFolio ',
      title2: ' creado por',
      title3: 'Benjamin Cordoba',
      span1: 'Hosting por Vercel y creado con Next.js',
      span2: 'para ver el repositorio del portfolio clickea aqui'
    },
  },
  en: {
    navbar: {
      a1: 'About Me',
      a2: 'Projects',
      a3: 'Contact',
    },
    main: {
      span1: ', my name is ',
      span2: ' and I am a ...',
      span3: 'Scroll down to see more content',
    },
    about: {
      h2: 'Here are my main skills.',
      title: 'About Me', 
      span1: 'Hello, my name is Benjamín Córdoba, I am 19 years old. I have been studying web development for 2 years. In the last year, I started studying computer engineering.',
      span2: ' (So far, it’s mostly logic and mathematics)',
      span3: 'I have attended conferences/courses/talks and generally learned from different professionals here in Argentina.',
      span4: ' (I will detail this later.)',
    },
    learning_card: {
      title: 'Where Did I Learn?',
      span1: 'Most of my knowledge comes from ',
      span2: 'Courses ',
      span3: 'such as CoderHouse, Devtalles, or Codo a Codo, my',
      span4: ' University Studies,',
      span5: ' Self-taught learning methods ',
      span6: 'like online courses, Stack Overflow, MDN, ',
      span7: 'Practice with Peers, ',
      span8: 'Projects',
      span9: ' and above all',
      span10: ' Time, a lot of time',
    },
    help_card: {
      title: 'How Can I Help You?',
      span1: 'For me, it is important to understand all aspects of the web development process, I’ll learn any necessary technology to achieve my goals.',
      span2: ' I’ll learn any necessary technology to achieve my goals.',
      span3: ' Currently, I am specializing in Front End.  '
    },
    why_me_card: {
      title: 'Why Choose Me?',
      span1: 'One of my',
      span2: 'Main Qualities',
      span3: 'is being solution-oriented.',
      span4: ' One of the things that strikes me the most in my university career is ',
      span5: 'how it prepares you to solve problems using logic.',
      span6: ' This is why I know, ',
      span7: 'I can tackle any challenge that comes my way.'
    },
    login_project: {
      title1: 'Projects',
      title2: 'Main',
      h2: 'Login Project',
      span1: 'Project about a login page, developed with',
      span2: 'Next.js and React Hook Form, ',
      span3: 'styled using',
      span4: 'Tailwind CSS. ',
      span5: 'The application also implements encryption',
      span6: ' AES (Advanced Encryption Standard),',
      span7: 'to secure data stored locally. This is possible thanks to ',
      span8: 'CryptoJS.'
    },
    ecommerce_project: {
      ah2: 'E-commerce Project',
      aspan1: 'E-commerce application',
      aspan2: ' Transpiled to TSX',
      aspan3: 'from an old project based on JavaScript',
      aspan4: 'for more stable',
      aspan5: 'and',
      aspan6: 'clean',
      aspan7: 'code. The project was created using ',
      aspan8: 'Next.js',
      aspan9: 'and is styled with ',
      aspan10: 'Pure CSS',
    },
    game_project: {
      bh2: 'Game Project',
      bspan1: 'Hangman project in TypeScript',
      bspan10: ', created with',
      bspan2: 'Pure CSS',
      bspan3: ' and',
      bspan4: 'Webpack',
      bspan5: ', although the project is not extensive, it was a challenge to work on',
      bspan6: 'the logic of the functions',
      bspan7: 'in a game that depends on so many types of data, in a strongly-typed language like ',
      bspan9: 'TypeScript.',
    },
    contact: {
      title: 'Contact',
      span1: 'Need to get in touch with me? Please check my contact information on the card below. ',
      span2: 'Contact by Email',
      span3: 'Phone or Whatsapp',
      span4: 'GitHub Profile'
    },
    footer: {
      title1: 'PortFolio ',
      title2: ' created by',
      title3: 'Benjamin Cordoba',
      span1: 'Hosting by Vercel and Created with Next.js',
      span2: 'For the repository of the proyect Click Here'
    },
  }
};

export default LanguageTexts;
