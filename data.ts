import { IService } from "./types";
import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { CgGames } from "react-icons/cg";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "frontend Dev",
    about:
      "I can build a beatiful and scalable SPA using <b>HTML<b/>,<b>CSS<b/> and <b>React.js<b/>",
  },
  {
    Icon: FaServer,
    title: "title",
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
    about: "A daily problem solver in <b>HackerRank</b> andf <b>leet code</b> ",
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
