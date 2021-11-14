import { AppInterface } from '../interfaces/AppInterface';

export const APP : AppInterface = {
  name: "Web Portfolio",
  description: "Web Portfolio created using React and TypeScript",
  version: "1.0.0",
  src: "https://www.github.com/harmonify/harmonify.github.io",
  homepage: "https://harmonify.github.io",
  author: {
    name: "Wendy Surya Wijaya",
    roles: [
      "freelance web developer",
    ],
    nationality: "Indonesia",
    about: [
      "I'm Wendy, a web developer based in Pontianak, Indonesia. I've spent my time developing my skills and experiences by doing freelance projects .",
      "I'm passionate about IT especially in the field of web development and AI. I love to learn new technologies, what problems are they solving, and how I can utilize them to build better things.",
    ],
    avatar: "/img/avatar.jpg",
    email: "wendy18.sw@gmail.com",
    projects: [
      {
        title: "Web Portfolio",
        description: "A web portfolio created using React and TypeScript",
        image: "https://raw.githubusercontent.com/harmonify/harmonify.github.io/main/.github/img/preview.png",
        src: "https://www.github.com/harmonify/harmonify.github.io",
        demo: "https://harmonify.github.io",
      },
      {
        title: "Harmonify Blog",
        description: "A personal blog created using Laravel 8",
        image: "https://raw.githubusercontent.com/harmonify/harmonify-blog/main/.github/img/preview.png",
        src: "https://www.github.com/harmonify/harmonify-blog",
        demo: "https://harmonify-blog.herokuapp.com/",
      },
      {
        title: "Random Quote Machine",
        description: "A random quote machine created using React, styled with Bootstrap",
        image: "https://raw.githubusercontent.com/harmonify/random-quote-machine/main/.github/img/preview.png",
        src: "https://www.github.com/harmonify/random-quote-machine/",
        demo: "https://harmonify-rqm.netlify.app/",
      },
      {
        title: "Markdown Previewer",
        description: "Markdown Previewer styled with TailwindCSS",
        image: "https://raw.githubusercontent.com/harmonify/markdown-previewer/main/.github/img/screenshot.png",
        src: "https://www.github.com/harmonify/markdown-previewer/",
        demo: "https://harmonify-mp.netlify.app/",
      },
      {
        title: "Drum Machine",
        description: "A drum machine created using React",
        image: "https://raw.githubusercontent.com/harmonify/drum-machine/main/.github/img/preview.png",
        src: "https://www.github.com/harmonify/drum-machine/",
        demo: "https://harmonify-dm.netlify.app/",
      },
      {
        title: "Pomodoro Clock",
        description: "25 + 5 clock with React and TypeScript",
        image: "https://raw.githubusercontent.com/harmonify/pomodoro-clock/main/.github/img/preview.png",
        src: "https://www.github.com/harmonify/pomodoro-clock/",
        demo: "https://harmonify-pc.netlify.app/",
      },
      {
        title: "JavaScript Calculator",
        description: "Basic calculator with React and TypeScript",
        image: "https://raw.githubusercontent.com/harmonify/javascript-calculator/main/.github/img/preview.png",
        src: "https://www.github.com/harmonify/javascript-calculator/",
        demo: "https://harmonify-jc.netlify.app/",
      },
      {
        title: "Keyboard Shop",
        description: "A keyboard shop with native PHP",
        image: "https://raw.githubusercontent.com/harmonify/keyboard-shop/main/.github/img/index-page.png",
        src: "https://www.github.com/harmonify/keyboard-shop/",
      }
    ],
    workExperiences: [
      {
        title: "Freelance Web Developer",
        subtitle: "projects.co.id",
        date: "May 2021 - present",
        description: "I've been working as a freelance web developer for more than half a year. I've been working on projects such as:",
        items: [
          {
            name: "Building static and dynamic web pages for client",
          },
          {
            name: "Handling CRUD operations for client's CRM"
          },
        ]
      }
    ],
    studyExperiences: [
      {
        title: "freeCodeCamp Certifications",
        titleLink: "https://www.freecodecamp.org/",
        subtitle: "freeCodeCamp",
        date: "May 2021 - present",
        description: "Learn how to make a responsive web design with great accessibility by using some of the most popular front end libraries in the industry.",
        items: [
          {
            name: "Responsive Web Design",
            link: "https://www.freecodecamp.org/certification/harmonify/responsive-web-design"
          },
          {
            name: "JavaScript Algorithms and Data Structures",
            link: "https://www.freecodecamp.org/certification/harmonify/javascript-algorithms-and-data-structures",
          },
          {
            name: "Front End Development Libraries",
            link: "https://www.freecodecamp.org/certification/harmonify/front-end-development-libraries",
          },
        ],
      },
      {
        title: "IDCamp 2021",
        titleLink: "https://idcamp.indosatooredoo.com/",
        subtitle: "Indosat Ooredoo & Dicoding Indonesia",
        description: "Introduction to the cloud computing, develop back-end APIs using Node.js, and learn best practices along the way.",
        date: "July 2021 - present",
        items: [
          {
            name: "Cloud Practitioner Essentials",
            link: "https://www.dicoding.com/certificates/2VX32106JPYQ",
          },
          {
            name: "Belajar Membuat Aplikasi Back-End untuk Pemula",
            link: "https://www.dicoding.com/certificates/MEPJLV9WLZ3V",
          },
          {
            name: "Belajar Prinsip Pemrograman SOLID",
            link: "https://www.dicoding.com/certificates/0LZ0358YQZ65",
          },
        ]
      },
    ],
    socials: {
      github: "https://www.github.com/harmonify",
      linkedin: "https://www.linkedin.com/in/wendy-surya-wijaya",
    },
    skills: [
      {
        title: "HTML",
        icon: "fab fa-html5",
      },
      {
        title: "CSS",
        icon: "fab fa-css3-alt",
      },
      {
        title: "JavaScript",
        icon: "fab fa-js",
      },
      {
        title: "React",
        icon: "fab fa-react",
      },
      {
        title: "TypeScript",
        icon: "fab fa-typescript",
      },
      {
        title: "Node.js",
        icon: "fab fa-node",
      },
      {
        title: "Git",
        icon: "fab fa-git",
      },
      {
        title: "GitHub",
        icon: "fab fa-github",
      },
      {
        title: "GitHub Pages",
        icon: "fab fa-github-alt",
      },
    ]
  },
};
