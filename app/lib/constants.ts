export const leftMenu = [
  {
    name: 'CV',
    link: '/cv.pdf',
  },
];

export const projects = [
  {
    title: 'UInstruktor',
    description:
      'Graduation thesis building a web app for learning programing with the help of AI.',
    badges: [
      { text: 'NextJS', badgeVariant: 'nextjs' },
      { text: 'MySQL', badgeVariant: 'mysql' },
      { text: 'Express', badgeVariant: 'express' },
    ],
    links: ['https://uinstruktor.sers.si/'],
    coverImage: '/uinstuktor_showcase.png',
  },
  {
    title: 'Object storage',
    description: 'Object storage application with a web interface',
    badges: [
      { text: 'Express', badgeVariant: 'express' },
      { text: 'PostgreSQL', badgeVariant: 'mysql' },
    ],
    links: [],
    coverImage: '/objectstorage_showcase.png',
    detail: {
      description:
        'Object storage application with a web interface. The application is built with Express and PostgreSQL. The application allows users to upload files and store them on the server. Features access control to objects and user authentication.',
    },
  },
  {
    title: 'Imageboard',
    description:
      'Showcase of skill by building an app for photo sharing and commenting.',
    badges: [
      { text: 'React', badgeVariant: 'react' },
      { text: 'Express', badgeVariant: 'express' },
      { text: 'MongoDB', badgeVariant: 'mongodb' },
    ],
    links: [],
  },
];
