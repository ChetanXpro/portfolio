import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  pipesort,
  bot,

  code,
  threejs,
  start,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blockchan Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },


];

const experiences = [
  {
    title: "Started learning",
    company_name: "",
    icon: start,
    iconBg: "#383E56",
    date: "May 2022",
    points: [
     
      "In May i decided to learn web development",
    ],
  },

  {
    title: "Full stack Developer Internship",
    company_name: "Pipesort",
    icon: pipesort,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  
];

const projects = [
  {
    name: "Telegram AI Chatbot",
    description:
      "A telegram bot which can perform many tasks like , generate answer, text to audio , text to image , correct english grammer",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Telegraf.js",
        color: "pink-text-gradient",
      },
    ],
    image: bot,
    source_code_link: "https://github.com/ChetanXpro/chatgpt-telegram-bot",
  },

  {
    name: "Online code editor",
    description:
      "A online code editor , users can create rooms and join them , users can share link and by that other users can also join, code will be in sync for all users",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: code,
    source_code_link: "https://github.com/ChetanXpro/code-editor",
  },
];

export { services, technologies, experiences, testimonials, projects };