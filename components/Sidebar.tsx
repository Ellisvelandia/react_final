import React from "react";
import Image from "next/image";
import MeImg from "../public/Me.jpg";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <Image
        src={MeImg}
        alt="Me"
        className="mx-auto rounded-full border h-screen max-w-full"
        height="180px"
        width="180px"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-League max-w-full">
        <span className="font-black text-red-700">Ellis</span>
        Velandia
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-500 ">
        Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
        href=""
        download="name"
      >
        <GiTie className="w-6 h-6 animate-bounce" />
        Download Resume
      </a>
      <div className="flex justify-around w-9/12 mx-auto my-5 text-gray-500 md:w-full">
        <a href="">
          <AiFillYoutube className="w-8 h-8 cursor-pointer hover:bg-red-700 hover:text-white" />
        </a>
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer hover:bg-gray-900 hover:text-white" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer hover:bg-sky-500 hover:text-white" />
        </a>
      </div>
      <div
        className="py-4 my-5 bg-gray-200 hover:scale-105 dark:bg-dark-500"
        style={{ marginLeft: "1rem", marginRight: "1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation className="mr-2" />
          <span>Colombia,Carmen de Apicalá</span>
        </div>
        <p className="my-2 ">eyis619@gmail.com</p>
        <p className="my-2 ">+573125668800</p>
      </div>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-red-900 to-red-600 focus:outline-none hover:scale-105"
        onClick={() => window.open("mailto:eyis619@gmail.com")}
      >
        Email Me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-red-900 to-red-600 animate-pulse hover:scale-105"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
