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
    name: "COVID Tracker",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/covid.jpg",
    deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
    github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
];
