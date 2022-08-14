import { IService, ISkill, Iproject } from "./types";
import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { CgGames } from "react-icons/cg";

import { BsCircleFill } from "react-icons/bs";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beatiful and scalable SPA using <b>HTML<b/>,<b>CSS<b/> and <b>React.js<b/>",
  },
  {
    Icon: FaServer,
    title: "Backend Development",
    about:
      "Handel database, server, api using <b>Expres </b> & other popluar frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "Api Development",
    about:
      "I can develop robust REST API using <b>django.rest-api</b> & <b>Node API</b>",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive coder",
    about: "A daily problem solver in <b>HackerRank</b> and <b>Leet code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b> and <b>Framer</b>",
  },
  {
    Icon: CgGames,
    title: "Canvas and javascript",
    about:
      "interface design and development of 2D, 3D video games using <b>Canvas</b>  and <b>SVG</b>",
  },
];

export const languages: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "TypeScript",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Django",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Google",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "GitHub",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Visual Studio Code",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: " ESLint",
    level: "25",
  },
];

export const project: Iproject[] = [
  {
    id: 1,
    name: "COVID Tracker",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/coming-soon.png",
    deployed_url: "#",
    github_url: "https://github.com/Ellisvelandia",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    id: 2,
    name: "Algorithm Visualizer",
    image_path: "/images/coming-soon.png",
    deployed_url: "#",
    github_url: "https://github.com/Ellisvelandia",
    category: ["react"],
    description:
      "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
    key_techs: ["React", "firebase", "Framer Motion"],
  },

  {
    id: 3,
    name: "Dev Talks",
    image_path: "/images/coming-soon.png",
    deployed_url: "#",
    github_url: "https://github.com/Ellisvelandia",
    category: ["node", "mongo", "react"],
    description:
      "Social Media app for developers who can share project,create posts,etc...",
    key_techs: [
      "React",
      "Redux",
      "Node",
      "Express",
      "Mongo",
      "REST API",
      "Bootstrap",
    ],
  },

  {
    id: 4,
    name: "Realtime Chat App",
    image_path: "/images/coming-soon.png",
    deployed_url: "#",
    github_url: "https://github.com/Ellisvelandia",
    category: ["node", "react"],
    description:
      "Basic Realtime Chat App where one can create a room can talk to each other",
    key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
  },

  {
    id: 5,
    name: "Tweeter Clone",
    image_path: "/images/coming-soon.png",
    deployed_url: "#",
    github_url: "https://github.com/Ellisvelandia",
    category: ["django", "react"],
    description:
      "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
    key_techs: ["React", "Django", "Django REST API"],
  },

  {
    id: 6,
    name: "Color Classification using tf.js",
    image_path: "/images/coming-soon.png",
    deployed_url: "!#",
    github_url: "https://github.com/Ellisvelandia",
    category: ["express"],
    description:
      "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
    key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
  },
  {
    id: 7,
    name: "YouTube using YouTube ",
    image_path: "/images/coming-soon.png",
    deployed_url: "https://github.com/Ellisvelandia",
    github_url: "https://github.com/Ellisvelandia",
    category: ["express"],
    description:
      'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
    key_techs: [
      "React",
      "Redux",
      "Firebase Auth",
      "YouTube API",
      "Sass",
      "Bootstrap",
    ],
  },
  {
    id: 8,
    name: "Football App",
    image_path: "/images/coming-soon.png",
    deployed_url: "#",
    github_url: "https://github.com/Ellisvelandia",
    category: ["react"],
    description:
      " my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
    key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
  },
];
