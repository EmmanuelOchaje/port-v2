import React from "react";
import { assets, services } from "../../../assets/assets";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const Services = ({ isDark }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      id="services"
      className="font-Ovo w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="text-center text-lg mb-2"
      >
        What We Offer
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="text-center text-5xl"
      >
        My Services
      </motion.h2>
      {/* <p className="text-center text-5xl max-w-2xl mx-auto mt-5 mb-12 "></p> */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="grid grid-cols-auto gap-6 my-10"
      >
        {services.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="aspect-square border border-gray-400 rounded-lg p-5 hover:bg-lightHover cursor-pointer hover:-translate-y-1 duration-500 dark:hover:bg-blue-950"
            key={index}
          >
            <Image src={icon} alt={title} className="w-6" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white">
              {description}
            </p>

            <Link href={"/"} className="flex items-center gap-2 text-sm mt-5">
              Read More{" "}
              <Image src={assets.right_arrow} alt="" className="w-4" />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
