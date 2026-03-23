"use client";
import { assets } from "../../../assets/assets";
import { workData } from "../../../assets/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Projects = ({ isDark }) => {
  return (
    <section
      id="projects"
      className="w-full font-Ovo px-6 md:px-16 lg:px-24 py-20"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <p
          className={`text-sm uppercase tracking-widest mb-2 ${isDark ? "text-gray-400" : "text-gray-500"}`}
        >
          My Work
        </p>
        <h2
          className={`text-5xl font-normal ${isDark ? "text-white" : "text-black"}`}
        >
          Featured Projects
        </h2>
      </motion.div>

      {/* Rows */}
      <div className="flex flex-col gap-16">
        {workData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-8 items-center`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden group relative">
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${project.bgImage.src})` }}
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <h3
                className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}
              >
                {project.title}
              </h3>
              <p
                className={`text-base leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}
              >
                {project.description}
              </p>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-2 mt-1">
                {project.stack?.map((tech, i) => (
                  <span
                    key={i}
                    className={`text-xs px-3 py-1 rounded-full border font-medium ${
                      isDark
                        ? "border-gray-600 text-gray-300"
                        : "border-gray-300 text-gray-600"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-2">
                <Link
                  href={project.href}
                  target="_blank"
                  className="flex items-center gap-2 bg-white hover:bg-gray-100 text-black text-sm font-medium px-5 py-2.5 rounded-full border transition-colors duration-200"
                >
                  Live Demo
                  <Image src={assets.send_icon} alt="" className="w-4" />
                </Link>
                <Link
                  href={project.github}
                  target="_blank"
                  className={`flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full border transition-colors duration-200 ${
                    isDark
                      ? "border-gray-600 text-gray-300 hover:bg-gray-800"
                      : "border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  GitHub
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
