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
      "Hello, I’m Wendy, a passionate web developer based in Pontianak, Indonesia. With a degree in Informatics Engineering from STMIK Pontianak, I’ve developed a strong foundation in building scalable web solutions and optimizing backend systems.",
      "In my professional journey, I’ve designed and developed efficient backend systems, focusing on performance and scalability. I've also collaborated with other people to deliver full-stack solutions, integrating innovative and modern technologies to solve complex problems.",
      "I’m always eager to explore new technologies and frameworks, which not only broadens my skill set but also fuels my drive for innovation. Let’s connect and build something impactful together!",
    ],
    avatar: "/img/avatar.jpg",
    email: "wendysuryawijaya@gmail.com",
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
          "I've worked as a freelance web developer for a year. I've handled some projects such as:",
        items: [
          {
            name: "Collaborated with clients to understand business goals, translating them into functional and visually compelling websites.",
          },
          {
            name: "Designed and developed custom static and dynamic web pages, tailoring each solution to meet unique client needs and {name:industry standards.",
          },
          {
            name: "Streamlined client operations by building efficient CRUD functionalities for their CRM systems.",
          },
          {
            name: "Leveraged modern web technologies to optimize performance and user experience, driving higher client satisfaction.",
          },
        ],
      },
      {
        title: "Backend Engineer",
        subtitle: "PT Populix Informasi Teknologi",
        date: "July 2022 - June 2024",
        description:
          "As a Junior Backend Engineer, I'm responsible for building the new features and maintaining the existing system under the supervision of the more experienced engineers.",
        items: [
          {
            name: "Played a key role in API design and documentation, enhancing scalability and cross-team collaboration.",
          },
          {
            name: "Achieved up to a 40% reduction in response times by optimizing database queries and caching strategies, enhancing system scalability and user experience.",
          },
          {
            name: "Migrated monolithic systems to scalable microservices architecture, enabling efficient cross-service communication and streamlining data synchronization using gRPC and RESTful APIs.",
          },
          {
            name: "Maintained high unit and integration test coverage, ensuring code reliability and reducing regression risks.",
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
          "During my time at STMIK Pontianak, I gained hands-on experience in designing and developing software using modern cloud services, including Google Cloud Platform (GCP) and Firebase. My studies also deepened my knowledge of database design and scalable system architectures, preparing me to deliver high-performance, user-centric web solutions.",
        date: "Sep 2020 - Sep 2024",
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
        items: ["Golang", "JavaScript", "TypeScript", "PHP", "Python", "Bash"],
      },
      {
        title: "Web Frameworks",
        items: ["Express", "NestJS", "Gin", "Laravel", "React", "Angular"],
      },
      {
        title: "Database",
        items: [
          "MySQL",
          "PostgreSQL",
          "SQLite",
          "MongoDB",
          "Redis",
          "Elasticsearch",
          "Firebase",
        ],
      },
      {
        title: "APIs",
        items: ["REST API", "gRPC"],
      },
      {
        title: "Networking",
        items: ["Nginx", "Caddy", "Cloudflare Tunnel", "Tailscale"],
      },
      {
        title: "Other tools",
        items: [
          "Git",
          "GitHub",
          "Github Actions",
          "Ansible",
          "Postman",
          "Docker",
          "Linux",
          "Figma",
        ],
      },
    ],
  },
};
