import { IconType } from "react-icons";

export interface IService {
  Icon: IconType;
  title: string;
  about: string;
}
export interface ISkill {
  name: string;
  level: string;
  Icon: IconType;
}
export interface Iproject {
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export type Category = "react" | "node" | "express" | "django" | "mongo";
