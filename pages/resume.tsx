import React from "react";
import { languages, tools } from "../data";
import Bar from "../components/Bar";
import { motion } from "framer-motion";
import { fadeInUp } from "../animation";

const resume = () => {
  return (
    <div className="px-6 py-2 ">
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              electrical installation technician
            </h5>
            <p className="font-semibold">
              politecnico indrustrial new colombia
            </p>
            <p className="my-3">
              professional technician in special installations and based on
              electronic and electrical manipulation, software of electronic
              devices.
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">LarnU Bootcamp</h5>
            <p className="my-3">
              I am currently attending a Bootcamp and building projects to
              improve my skills.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages and Frameworks</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools and Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
