import { AppInterface } from "../interfaces/AppInterface";

export const APP: AppInterface = {
  name: "Wendy Surya Wijaya",
  description: "Wendy Surya Wijaya is a developer from Indonesia.",
  version: "1.0.0",
  src: "https://www.github.com/harmonify/harmonify",
  homepage: "https://harmonify.netlify.app",
  author: {
    name: "Wendy Surya Wijaya",
    roles: ["back-end developer"],
    nationality: "Indonesia",
    about: [
      "Hello, I'm Wendy. I'm a developer based in Pontianak, Indonesia. I'm currently majoring in Information Technology at STMIK Pontianak. I'm passionate about IT, especially web development and AI.",
      "I love to learn new technologies in my free time. It always gives me new ideas on developing things while also growing me further as a developer.",
    ],
    avatar: "/img/avatar.jpg",
    email: "me@harmonify.online",
    projects: [
      {
        title: "Web Portfolio",
        description: "created using React and TypeScript",
        image:
          "https://raw.githubusercontent.com/harmonify/harmonify/main/public/img/banner.png",
        src: "https://www.github.com/harmonify/harmonify",
        demo: "https://harmonify.netlify.app",
      },
      {
        title: "Harmonify Blog",
        description: "a blog created using Laravel 8",
        image:
          "https://raw.githubusercontent.com/harmonify/harmonify-blog/main/.github/img/preview.png",
        src: "https://www.github.com/harmonify/harmonify-blog",
      },
      {
        title: "Random Quote Machine",
        description: "created using React and Bootstrap",
        image:
          "https://raw.githubusercontent.com/harmonify/random-quote-machine/main/.github/img/preview.png",
        src: "https://www.github.com/harmonify/random-quote-machine/",
        demo: "https://harmonify-rqm.netlify.app/",
      },
      {
        title: "Python Scripts",
        description: "to automate my development workflow",
        image:
          "https://raw.githubusercontent.com/harmonify/scripts/main/.github/img/preview.png",
        src: "https://www.github.com/harmonify/scripts/",
      },
      {
        title: "Pomodoro Clock",
        description: "a 25 + 5 clock created using React",
        image:
          "https://raw.githubusercontent.com/harmonify/pomodoro-clock/main/.github/img/preview.png",
        src: "https://www.github.com/harmonify/pomodoro-clock/",
        demo: "https://harmonify-pc.netlify.app/",
      },
      {
        title: "Markdown Previewer",
        description: "styled with TailwindCSS",
        image:
          "https://raw.githubusercontent.com/harmonify/markdown-previewer/main/.github/img/screenshot.png",
        src: "https://www.github.com/harmonify/markdown-previewer/",
        demo: "https://harmonify-mp.netlify.app/",
      },
    ],
    workExperiences: [
      {
        title: "Freelance Web Developer",
        subtitle: "projects.co.id",
        date: "May 2021 - June 2022",
        description:
          "I've worked as a freelance web developer for a year. I've also handled some projects such as:",
        items: [
          {
            name: "Building static and dynamic web pages for client",
          },
          {
            name: "Handling CRUD operations for client's CRM",
          },
        ],
      },
      {
        title: "Junior Backend Engineer",
        subtitle: "PT Populix Informasi Teknologi",
        date: "July 2022 - June 2024",
        description:
          "As a Junior Backend Engineer, I'm responsible for building the new features and maintaining the existing system under the supervision of the more experienced engineers.",
        items: [
          {
            name: "Populix for Business",
            link: "https://enterprise.populix.co/",
          },
          {
            name: "Populix for Respondents",
            link: "https://info.populix.co/for-respondents/",
          },
        ],
      },
    ],
    studyExperiences: [
      {
        title: "Information Technology",
        titleLink: "https://www.stmikpontianak.ac.id/",
        subtitle: "STMIK Pontianak",
        description:
          "Introduction to basic algorithms, data structures, and how to manage information systems with web-based applications.",
        date: "Sep 2020 - Sep 2024 (expected)",
        items: [],
      },
      {
        title: "freeCodeCamp Certifications",
        titleLink: "https://www.freecodecamp.org/",
        subtitle: "freeCodeCamp",
        date: "May 2021 - June 2022",
        description:
          "Learn how to make a responsive web design with great accessibility by using some of the most popular libraries and frameworks in the industry.",
        items: [
          {
            name: "Responsive Web Design",
            link: "https://www.freecodecamp.org/certification/harmonify/responsive-web-design",
          },
          {
            name: "JavaScript Algorithms and Data Structures",
            link: "https://www.freecodecamp.org/certification/harmonify/javascript-algorithms-and-data-structures",
          },
          {
            name: "Front End Development Libraries",
            link: "https://www.freecodecamp.org/certification/harmonify/front-end-development-libraries",
          },
          {
            name: "Data Visualization",
            link: "https://www.freecodecamp.org/certification/harmonify/data-visualization",
          },
          {
            name: "Scientific Computing with Python",
            link: "https://www.freecodecamp.org/certification/harmonify/scientific-computing-with-python-v7",
          },
          {
            name: "Back End Development and APIs",
            link: "https://www.freecodecamp.org/certification/harmonify/back-end-development-and-apis",
          },
          {
            name: "Quality Assurance",
            link: "https://www.freecodecamp.org/certification/harmonify/quality-assurance-v7",
          },
        ],
      },
      {
        title: "IDCamp 2021",
        titleLink: "https://idcamp.indosatooredoo.com/",
        subtitle: "Indosat Ooredoo & Dicoding Indonesia",
        description:
          "Introduction to the cloud computing, develop back-end APIs using Node.js, and learn best practices along the way.",
        date: "July 2021",
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
        ],
      },
    ],
    socials: {
      github: "https://www.github.com/harmonify",
      linkedin: "https://www.linkedin.com/in/wendy-surya-wijaya",
    },
    skills: [
      {
        title: "HTML and CSS",
        items: ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "SASS"],
      },
      {
        title: "Programming Languages",
        items: ["JavaScript", "TypeScript", "PHP", "Python"],
      },
      {
        title: "Database",
        items: ["MySQL", "MongoDB", "PostgreSQL"],
      },
      {
        title: "Frameworks",
        items: ["Laravel", "Node.js", "React", "Angular", "Express", "NestJS"],
      },
      {
        title: "Tools",
        items: ["Git", "GitHub", "Postman", "Docker"],
      },
      {
        title: "Others",
        items: ["Figma", "Linux (basic command-line operations)"],
      },
    ],
  },
};
