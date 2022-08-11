import React from "react";
import Image from "next/image";
import MeImg from "../public/Me.jpg";

const Sidebar = () => {
  return (
    <div>
      <Image src={MeImg} alt="/" />
      <h3>
        <span>Ellis</span>
        Velandia
      </h3>
      <p>Developer</p>
      <p>Download Resume</p>
    </div>
  );
};

export default Sidebar;
