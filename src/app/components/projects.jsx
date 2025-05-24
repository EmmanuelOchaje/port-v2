import React from "react";
import { assets, workData } from "../../../assets/assets";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const Projects = ({ isDark }) => {
  console.log(workData);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="projects"
      className="font-Ovo w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-lg mb-2"
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl"
      >
        My Recent Projects
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12"
      >
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in frontend development
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="grid grid-cols-auto my-10 gap-5 "
      >
        {workData.map((project, index) => (
          <motion.div
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `${project.bgImage}` }}
          >
            <div className="bg-blue-50 w-10/12 absolute bottom-5 left-1/2 -translate-x-1/2 py-3 flex items-center justify-between rounded-md px-5 duration-500 group-hover:bottom-7 dark:text-gray-700">
              <div>
                <h4 className="font-semibold">{project.title}</h4>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border w-7 rounded-full border-black aspect-square flex items-center justify-center group-hover:bg-blue-300 transition">
                <Image src={assets.send_icon} className="w-4 " alt="" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.Link
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.5 }}
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-10 hover:bg-lightHover duration-500 dark:border-white/80 dark:hover:bg-black/5 dark:text-white/80 dark:hover:bg-blue-950"
      >
        Show More{" "}
        <Image
          src={isDark ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
          alt=""
          className="w-4"
        />
      </motion.Link>
    </motion.div>
  );
};

export default Projects;
